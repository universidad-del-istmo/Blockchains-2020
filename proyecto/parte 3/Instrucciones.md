# Proyecto Final: Entrega 3

El objetivo de este proyecto es extender la funcionalidad de la tiena online construida
sobre Ethereum. En esta parte se implementara la funcionalidad para que un vendedor
pueda promocionar articulos en el sistema. Se deben implementar los contratos
necesarios para el siguiente flujo:

1. El vendedor desea promcionar un producto. El debe crear una descripción del
    producto (en JSON possiblemente).
2. El vendedor notificara al blockchain sobre la existencia de dicho producto proporcionando el Hash de la descripcion (y possiblemente otros datos como el precio).
3. El vendedor enviara una copia de la descripción del producto al servicio para que pueda agregarlo a su catalogo y también autorizar la entrada en el Blockchain correspondiente a dicho producto.

Para esta entrega se calificara principalmente el codigo escrito en solidity que sera colocado en el Blockchain. De momento no es necesario crear una interfaz grafica.