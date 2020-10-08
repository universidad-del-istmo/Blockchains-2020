# Ejercicio #2: Registro de Dominios con Ethereum

## Formalidades

- Fecha de Entrega: Jueves 24 de Septiembre, 11:59pm
- Valor: 5%
- Entrega: pull request al repositorio del curso [git@github.com:universidad-del-istmo/Blockchains-2020.git] colocando sus archivos en la carpeta "ejercicios/Dominios/entregas/[Su nombre]/"
- Modalidad de trabajo: Individual

## Descripción

El objetivo de este ejercicio es crear un *contrato inteligente* en el blockchain de Ethereum que facilite la registración de dominios de internet. Esto permitira las
siguientes funcionalidades:

+1. Registrar un dominio (si aun no existe) y asociar este dominio a una dirección IPv4 (el registro AAAA formalmente).
+-2. En caso que un dominio ya haya sido registrado, un usuario puede hacer una oferta
para cambiar el IP y propietario de dicho dominio.
+3. El propietario actual del dominio puede cambiar el IP en cualquier momento que lo desee sin necesidad de hacer una oferta.
+4. Media vez haya sucedido una oferta para modificar el IP y propietario asociado a un dominio, el propietario actual puede decidir si aceptar la oferta (y por lo tanto ser compensado por el monto de la oferta) o rechazar la oferta lo cual resultara en que el IP del dominio permanezca igual y los fonods se le regresen al usuairo que hizo la oferta.
+5. Si un usuairo hizo una oferta para un dominio, el pudede cancelar la oferta y recuperar sus fondos siempre y cuando no haya sido aceptada por el propietario a quien se le hizo la oferta.

Para facilitar la implementación, puede utilizar una moneda privada (un token) en vez de tener que utilizar Ether como la moneda (aunque si lo prefiere, tiene la libertad de utilizar Ether). Usted tiene la libertad de decidir como esta moneda se emite en el transcurso del tiempo, sin embargo, esa moneda sera uitilizada para para hacer ofertas de dominios y compensar a los usuarios del sistema.

Para facilitarle a otros clientes a utilizar este sistema, debe incluir un evento para notificar que el IP al que apunta un dominio ha cambiado.

Por ultimo, debe escribir un pequeño programa que opere con la linea de comandos en el lenguaje que usted guste que automatize el proceso de generar un archivo "hosts" con todos los registros acutales de dominios que existen en el smart contract actual. En esta carpeta puede encontrar un archivo "hosts" como ejemplo.

**Atención**: No es necesario construir una interfaz grafica para interactuar con este contrato inteligente. Puede utilizar cualquier billetera o ganache para producir los mensajes que son enviados a dicho contrato.
