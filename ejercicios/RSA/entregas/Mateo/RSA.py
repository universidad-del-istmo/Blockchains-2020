import random
import hashlib
import numpy
from collections import namedtuple
from PIL import Image


def primesfrom3to(start, n):
    #Generar lista de primos
    sieve = numpy.ones(n//2, dtype=numpy.bool)
    for i in range(start,int(n**0.5)+1,2):
        if sieve[i//2]:
            sieve[i*i//2::i] = False
    return 2*numpy.nonzero(sieve)[0][1::]+1

def are_relatively_prime(a, b):
    #Comprovar si son primos relativos
    for n in range(2, min(a, b) + 1):
        if a % n == b % n == 0:
            return False
    return True

def make_key_pair(length):
    #Crear las llaves
    if length < 4:
        raise ValueError('Deve ser mayor a 4 ')

    #obtener numero de bits minimo y maximo
    n_min = 1 << (length - 1)
    n_max = (1 << length) - 1

    #obtener el int minimo y maximo
    start = 1 << (length // 2 - 1)
    stop = 1 << (length // 2 + 1)
    #obtener primos y ponerlos en llista
    primes= primesfrom3to(start, stop).tolist()

    # Seleccionar 2 primos de la lista
    while primes:
        p = random.choice(primes)
        primes.remove(p)
        q_candidates = [q for q in primes
                        if n_min <= p * q <= n_max]
        if q_candidates:
            q = random.choice(q_candidates)
            break
    else:
        raise AssertionError('no se encontraron umeros primos del largo especificado de bits')

    # Seleccionar un e menor a (p-1) * (q-1) que no comparta factores con (p-1) * (q-1)
    # which shares no factors with ``(p - 1) * (q - 1)``.
    stop = (p - 1) * (q - 1)
    for e in range(3, stop, 2):
        if are_relatively_prime(e, stop):
            break
    else:
        raise AssertionError("No se encontro un e que cumpla con los requisitos deseados")

    # Seleccionar d de manera que (d*e-1) es divisible en (p-1)*(q-1)
    for d in range(3, stop, 2):
        if d * e % stop == 1:
            break
    else:
        raise AssertionError("no se pudo encontrar un numero d que cumpla con los requisitos deseados")

    # Crear las llaves como objetos de sus respectivas clases
    return PublicKey(p * q, e), PrivateKey(p * q, d)

def file_hash(ffile):
    #crear hash del documento
    BLOCK_SIZE = 65536
    hhash = hashlib.sha256()
    with open(ffile, 'rb') as f: 
        fb = f.read(BLOCK_SIZE) 
        while len(fb) > 0: 
            hhash.update(fb) 
            fb = f.read(BLOCK_SIZE) 

    print ('hash:' ,hhash.hexdigest())
    return hhash.hexdigest()


class PublicKey(namedtuple('PublicKey', 'n e')):
    #llave publica

    __slots__ = ()

    def encrypt(self, x):
        #metodo para encripcion
        return pow(x, self.e, self.n)

class PrivateKey(namedtuple('PrivateKey', 'n d')):
    #llave privada

    __slots__ = ()

    def decrypt(self, x):
        #metodo para desencripcion
        return pow(x, self.d, self.n)

if __name__ == '__main__':

    public, private = make_key_pair(16) #mas de 16 puede causar problemas
    #encryptar numero
    encrypted_number = public.encrypt(243)
    print('numero encryptado: ', encrypted_number)
    #desencriptar numero
    decrypted_number = private.decrypt(encrypted_number)
    print('numero desencryptado: ', decrypted_number)
    #Crear documentos para guardar las llaves
    pub= open("public.txt","w+")
    priv= open("priv.txt","w+")

    #Guardar llave publica
    pub.write(str(public.e))
    pub.write("\n")
    pub.write(str(public.n))
    pub.write("\n")
    pub.close()

    #Guardar llave privada
    priv.write(str(private.d))
    priv.write("\n")
    priv.write(str(private.n))
    priv.write("\n")
    priv.close()

    #Firmaar archivo y provar valides   NO FUNCIONA POR EL TAMANO DE LAS LLAVES
    ffile = 'textDoc.txt'
    hhash = file_hash(ffile)
    bhash = bin(int(hhash,16))
    b=bhash[-16:]
    print(b)
    b= int(b,2)
    signature = private.decrypt(b)
    print(signature)
    proof = public.encrypt(signature)
    print(proof)
    print(b)
    a=1
    # res = bin(signature)
    # print(res)
    # print('firma en int: ',signature)
    # print('Firma en Hex: ',hex(signature))
    # hash_signature = public.encrypt(signature)
    # print('Firma decriptada: ', hash_signature)
    # print('Firma decriptada hex: ', hex(hash_signature))

    #sig = sign_file(ffile, public.e, private.n)