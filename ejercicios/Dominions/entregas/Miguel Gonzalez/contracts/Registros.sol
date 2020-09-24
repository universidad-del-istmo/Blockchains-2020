// SPDX-License-Identifier: MG
pragma solidity >=0.5.16 <0.8.0;

import "ejercicios/Dominions/entregas/Miguel Gonzalez/contracts/Ofertas.sol";

contract Registros {
    mapping(address => bool) _propietarios;
    // ip => address propietario
    mapping(string => address) _registros;
    // ip => nombre del dominio
    mapping(string => string) _dominios;
    // ip => address postor
    mapping(string => address) _ofertas;

    address _admin;

    event Registro(string ip, string domainName);
    event Oferta(string ip,address contractAddress);

    constructor(address admin) {
        _admin = admin;
    }

    function agregarRegistro(string memory ip, string memory domainName)
        external payable {
        address postor = msg.sender;
        require(
            _registros[ip] == address(0),
            "Esta IP esta ocupada, puedes colocar una oferta"
        );
        _registros[ip] = postor;
        _dominios[ip] = domainName;
        _propietarios[postor] = true;
        emit Registro(ip, domainName);
    }

    function ofertarIp(string memory ip,string memory domainName) external payable {
        address postor = msg.sender;
        address owner = _registros[ip];
        address ofertaDir;
        address payable ofertaDirPayble;
        require(_registros[ip] != address(0), "Esta IP esta libre");
        Ofertas oferta = new Ofertas(ip, domainName, postor,owner);
        ofertaDir = address(oferta);
        ofertaDirPayble = address(uint160(ofertaDir));
        ofertaDirPayble.transfer(msg.value);
        emit Oferta(ip, address(oferta));
    }
}
