# Ejercicio #1: RSA

## Formalidades

- Fecha de Entrega: Martes 18 de Agosto, 11:59pm
- Valor: 5%
- Entrega: pull request al repositorio del curso [git@github.com:universidad-del-istmo/Blockchains-2020.git] colocando sus archivos en la carpeta "ejercicios/RSA/entregas/[Su nombre]/"
- Modalidad de trabajo: Individual

## Instrucciones

El objetivo de este ejercicio es crear una implementación basica del criptosistema asimetrico RSA. Su implementación debe permitir el intercambio seguro de numeros en un canal publico del cual se desconfia, asumiendo que llaves publicas de 64bits son seguras (en la vida real, esta llave no seria segura). Su implementacion debe ofrecer las siguientes funcionalidades como funciones en una libreria:

1. Generar una pareja de llaves privadas y publicas
2. Encriptar un numero utilizando una llave publica
3. Decriptar un numero utilizando una llave privada
4. Firmar un archivo (un arreglo de bytes) criptograficamente utilizando una llave privada y una funcion de hashing escogida por el estudiante.
5. Verificar que una firma cirptografica es valida y corresponde a un archivo y llave publica
6. Describa como su implementación se puede utilizar para establecer una comunicacion segura utilizando RSA para intercambiar una llave criptografica de un algoritmo simetrico de cifrado (AES, Twofish, Serpent, etc.)
7. Manual breve de usuario