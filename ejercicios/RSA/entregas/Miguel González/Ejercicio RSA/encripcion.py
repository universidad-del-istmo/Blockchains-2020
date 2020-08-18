import random
import sys
import os
import cryptomath
import rabinMiller as number
from hashlib import sha256

# Directorio en donde se van a guardar las llaves
keysDir = "ejercicios\RSA\entregas\Miguel González\Ejercicio RSA\Ej_RSA"
keySize = 8


def main():
    print("Creating keys...")
    # Al utilizar llaves muy grandes tarda bastante tiempo en encriptar
    createKeyFiles(keysDir, keySize)

    # Encriptar
    messageEnc = input("\nNumber to encrypt: ")
    print("Encrypting number...")
    encrypt(messageEnc)

    # Decriptar
    messageDec = input("\nNumber to decrypt: ")
    print("Decrypting number...")
    decrypt(messageDec)

    # Firmar
    print("\nSigning...")
    signature, Hash = sign(
        "ejercicios\RSA\entregas\Miguel González\Ejercicio RSA\sign.txt")

    # Verificar firma
    print("\nVerifying...")
    # Hay un problema con la verificacion, creo que se debe a la longitud de la llave
    verify(signature, Hash)


def generateKeys(keySize):
    # Encontrar numero primos p y q
    p = number.generateLargePrime(keySize)
    q = number.generateLargePrime(keySize)
    # Computar q*p, el modulo
    n = p * q

    # Encontrar e relativamente primo a (p-1)*(q-1) utilizando MCD
    while True:
        e = random.randrange(2 ** (keySize - 1), 2 ** (keySize))
        if cryptomath.gcd(e, (p - 1) * (q - 1)) == 1:
            break

    # Encontrar d, el inverso de e
    d = cryptomath.findModInverse(e, (p - 1) * (q - 1))
    publicKey = (n, e)
    privateKey = (n, d)

    print("Public key:", publicKey)
    print("Private key:", privateKey)
    return (publicKey, privateKey)


def createKeyFiles(name, keySize):
    # Creacion de los archivos de la llave publica
    publicKey, privateKey = generateKeys(keySize)

    print("\nLlave publica guarada como %s_publicKey.txt..." % (name))
    fo = open("%s_publicKey.txt" % (name), "w")
    fo.write("%s,%s,%s" % (keySize, publicKey[0], publicKey[1]))
    fo.close()

    print("\nLlave privada guardada como %s_privateKey.txt..." % (name))
    fo = open("%s_privateKey.txt" % (name), "w")
    fo.write("%s,%s,%s" % (keySize, privateKey[0], privateKey[1]))
    fo.close()


def encrypt(message):
    message = int(message)
    pubKey = open(keysDir + "_publicKey.txt").read()
    pubKey = pubKey.split(",")
    n = int(pubKey[1])
    e = int(pubKey[2])
    encrypted = (message ** e) % n
    print("Encrypted number: ", encrypted)
    return encrypted


def decrypt(encrypted):
    encrypted = int(encrypted)
    privKey = open(keysDir + "_privateKey.txt").read()
    privKey = privKey.split(",")
    n = int(privKey[1])
    d = int(privKey[2])
    decrypted = (encrypted ** d) % n
    print("Decrypted number: ", decrypted)
    return decrypted


def sign(fileDir):
    privKey = open(keysDir + "_privateKey.txt").read()
    privKey = privKey.split(",")
    message = open(fileDir).read()
    n = int(privKey[1])
    d = int(privKey[2])
    message = bytes(message, 'utf-8')
    hashed = sha256(message).digest()
    hashed = int.from_bytes(hashed, byteorder='big')
    # Tomar una pequeña parte del hash para realizar la verificacion
    hashed = int(str(hashed)[:5])
    print("Signing hash: ", (hashed))
    signature = (hashed**d) % n
    print("Signature:", (signature))
    return signature, hashed


def verify(signature, hashFromSignature):
    pubKey = open(keysDir + "_publicKey.txt").read()
    pubKey = pubKey.split(",")
    n = int(pubKey[1])
    e = int(pubKey[2])
    Hash = (signature**e) % n
    print("Hash:", (Hash))
    print("Signature valid? ", Hash == hashFromSignature)
    return Hash


if __name__ == "__main__":
    main()
