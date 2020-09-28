// SPDX-License-Identifier: MG
pragma solidity >=0.5.16 < 0.8.0;

import "ejercicios/Dominions/entregas/Miguel Gonzalez/contracts/Ofertas.sol";

contract Registros {
    // nombre del dominio => address propietario
    mapping(string => address) _registros;
    // nombre del dominio => ip
    mapping(string => string) _ips;

    address payable _admin;

    event Registro(string domainName, string ip);
    event Oferta(string domainName,address ofertaAddress);

    constructor(address payable admin) {
        _admin = admin;
    }

    function updateRegister(string memory domainName, string memory ip, address owner,address newOwner) external{
        require(_registros[domainName]==owner,"You are not the owner anymore");
        _registros[domainName] = newOwner;
        _ips[domainName] = ip;
    }

    function agregarRegistro(string memory domainName, string memory ip) external payable {
        address postor = msg.sender;

        require(
            _registros[domainName] == address(0),
            "Esta IP esta ocupada, puedes colocar una oferta"
        );
        _registros[domainName] = postor;
        _ips[domainName] = ip;
        _admin.transfer(msg.value);
        emit Registro(domainName, ip);
    }

    function ofertarIp(string memory ip,string memory domainName) external payable {
        address postor = msg.sender;
        address owner = _registros[domainName];
        address ofertaDir;
        address payable ofertaDirPayble;

        require(_registros[domainName] != address(0), "Esta IP esta libre");
        Ofertas oferta = new Ofertas(domainName, ip, postor,owner,address(this));
        ofertaDir = address(oferta);
        ofertaDirPayble = address(uint160(ofertaDir));
        ofertaDirPayble.transfer(msg.value);
        emit Oferta(domainName, ofertaDir);
    }
}
