// SPDX-License-Identifier: MG
pragma solidity >=0.6.0 < 0.8.0;

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
        require(msg.value==1,"Thats not the price to register a domain");
        _registros[domainName] = postor;
        _ips[domainName] = ip;
        _admin.transfer(msg.value);
        emit Registro(domainName, ip);
    }

    function ofertarDominio(string calldata domainName,string calldata ip) external payable returns (Ofertas){
        address postor = msg.sender;
        address owner = _registros[domainName];
        address payable ofertaDir;

        require(_registros[domainName] != address(0), "Esta IP esta libre");
        Ofertas oferta = new Ofertas(domainName, ip, postor,owner,this);
        ofertaDir = payable(address(oferta));
        ofertaDir.transfer(msg.value);
        emit Oferta(domainName, address(oferta));
        return oferta;
    }
}

contract Ofertas {
    address payable _postor;
    address payable _owner;
    string _ip;
    string _domainName;
    Registros _originContract;
    
    fallback() external payable { 
    }
    receive() external payable{
    }

    constructor(string memory domainName, string memory ip, address postor,address owner, Registros originContract) payable{
        _postor = payable(postor);
        _owner = payable(owner);
        _ip = ip;
        _originContract = originContract;
        _domainName = domainName;
    }
    function acceptOffer() public{
        require(msg.sender == _owner,"You're not the owner");
        _originContract.updateRegister(_domainName,_ip,_owner,_postor);
        selfdestruct(_owner);
    }
    function cancelOffer() public{
        require(msg.sender == _postor,"You're not the postor");
        selfdestruct(_postor);
    }
}