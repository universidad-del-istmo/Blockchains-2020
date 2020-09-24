// SPDX-License-Identifier: MG
pragma solidity >=0.4.17 <0.8.0;

contract Registros {
    mapping(address => bool) _propietarios;
    // ip => address propietario
    mapping(string => address) _registros;
    // ip => nombre del dominio
    mapping(string=>string) _dominios;
    // ip => address postor
    mapping(string => address) _ofertas;
    
    address _admin;

    event Registro(string ip, string domainName);

    constructor(
        address admin) public {
        _admin = admin;
    }

    function agregarRegistro(string memory ip, address postor, string memory domainName) public{
        require(_registros[ip]==address(0),"Esta IP esta ocupada, puedes colocar una oferta");
        _registros[ip] = postor;
        _dominios[ip] = domainName;
        _propietarios[postor]= true;
        emit Registro(ip,domainName);
    }



}