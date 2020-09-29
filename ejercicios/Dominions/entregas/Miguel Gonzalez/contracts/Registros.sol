// SPDX-License-Identifier: MG
pragma solidity >=0.6.0 < 0.8.0;

import "./Ofertas.sol";

contract Registros {
    // nombre del dominio => address propietario
    mapping(string => address) _registros;
    // nombre del dominio => ip
    mapping(string => string) _ips;

    address payable _admin;

    event Registro(string domainName, string ip);
    event Oferta(string domainName,address ofertaAddress);

    constructor(address payable admin) payable {
        _admin = admin;
    }

    function updateRegister(string calldata domainName, string calldata ip, address owner,address newOwner) external {
        require(_registros[domainName]==owner,"You are not the owner anymore");
        _registros[domainName] = newOwner;
        _ips[domainName] = ip;
        emit Registro(domainName, ip);
    }

    function agregarRegistro(string calldata domainName, string calldata ip) external payable {
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

    function ofertarDominio(string calldata domainName,string calldata ip) external payable {
        address postor = msg.sender;
        address owner = _registros[domainName];
        address payable ofertaDir;

        require(_registros[domainName] != address(0), "Esta IP esta libre");
        Ofertas oferta = new Ofertas(domainName, ip, postor,owner,address(this));
        ofertaDir = payable(address(oferta));
        ofertaDir.transfer(msg.value);
        emit Oferta(domainName, address(oferta));
    }
}