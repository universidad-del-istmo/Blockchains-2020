import hashlib


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


if __name__ == '__main__':

    #Firmaar archivo y provar valides   NO FUNCIONA POR EL TAMANO DE LAS LLAVES
    ffile = 'textDoc.txt'
    hhash = file_hash(ffile)

    #obtener parametros de la llave
    with open('public.txt') as f:
        public = [line.rstrip() for line in f]
    with open('sign.txt') as f:
        sign = [line.rstrip() for line in f]

    bhash = bin(int(hhash,16))
    b=bhash[-16:]
    #b es el hash cotra el que se compara la firma
    #print(b)
    b= int(b,2)
    proof= pow(int(sign[0]), int(public[0]), int(public[1]))
    print("Signature valid:", b == proof)
    
