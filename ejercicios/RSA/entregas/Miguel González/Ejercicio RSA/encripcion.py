import random
import sys
import os
import cryptomath
import rabinMiller as number
from hashlib import sha256

keysPrefix = "ejercicios\RSA\entregas\Miguel González\Ejercicio RSA\Ej_RSA"


def main():
    print("Creating keys...")
    # Al utilizar llaves muy grandes tarda bastante tiempo en encriptar
    createKeys(keysPrefix, 64)

    messageEnc = input("\nNumber to encrypt: ")
    print("Encrypting number...")
    encrypt(messageEnc)

    messageDec = input("\nNumber to decrypt: ")
    print("Decrypting number...")
    decrypt(messageDec)

    print("Signing...")
    signature, Hash = sign(
        "ejercicios\RSA\entregas\Miguel González\Ejercicio RSA\sign.txt")

    print("Verifying...")
    # Hay un problema con la verificacion, creo que se debe a la longitud de la llave
    verify(signature, Hash)


def encrypt(message):
    message = int(message)
    pubKey = open(keysPrefix + "_publicKey.txt").read()
    pubKey = pubKey.split(",")
    n = pubKey[1]
    n = int(n)
    e = pubKey[2]
    e = int(e)
    encrypted = (message ** e) % n
    print("Encrypted number: ", encrypted)
    return encrypted


def decrypt(encrypted):
    encrypted = int(encrypted)
    privKey = open(keysPrefix + "_privateKey.txt").read()
    privKey = privKey.split(",")
    n = privKey[1]
    n = int(n)
    d = privKey[2]
    d = int(d)
    decrypted = (encrypted ** d) % n
    print("Decrypted number: ", decrypted)
    return decrypted


def sign(fileDir):
    privKey = open(keysPrefix + "_privateKey.txt").read()
    privKey = privKey.split(",")
    message = open(fileDir).read()
    n = privKey[1]
    n = int(n)
    d = privKey[2]
    d = int(d)
    message = bytes(message, 'utf-8')
    hashed = sha256(message).digest()
    hashed = int.from_bytes(hashed, byteorder='big')
    print("Signing hash: ", hex(hashed))
    signature = (hashed**d) % n
    print("Signature:", hex(signature))
    return signature, hashed


def verify(signature, hashFromSignature):
    pubKey = open(keysPrefix + "_publicKey.txt").read()
    pubKey = pubKey.split(",")
    n = pubKey[1]
    n = int(n)
    e = pubKey[2]
    e = int(e)
    Hash = (signature**e) % n
    print("Hash:", hex(Hash))
    print("Signature valid:", Hash == hashFromSignature)
    return Hash

    # hash = int.from_bytes(sha512(messageEnc).digest(), byteorder='big')
    # signature = pow(hash, d, n)
    # print("Signature:", hex(signature))


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


def createKeys(name, keySize):
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


if __name__ == "__main__":
    main()
