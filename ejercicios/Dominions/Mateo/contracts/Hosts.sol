pragma solidity >=0.5.0 <0.8.0;
contract Hosts{

    address payable public reguladora;
    constructor() public{
        reguladora = msg.sender;
    }
    struct boughtHost{
        address payable dueno;
        string ip;
        string dominio;
    }

    struct puja{
        address payable comprador;
        address payable vendedor;
        string dominio;
        uint monto;
    }

    mapping(address => boughtHost) public boughtHosts;
    address[] public boughtHostAccts;

    mapping(uint => puja) public pujas;
    uint[] public pujaID;
    uint numPuj =0;
    
    function setHost(address payable _address, string memory _ip, string memory _dominio) public {
        boughtHost storage c = boughtHosts[_address];
        c.dueno = _address;
        c.ip = _ip;
        c.dominio = _dominio;
        boughtHostAccts.push(_address) -1;

    }

    function setPuja(address payable _comprador, address payable _vendedor, string memory _dominio, uint _monto) public {
        numPuj++;
        puja storage c = pujas[numPuj];
        c.comprador = _comprador;
        c.vendedor = _vendedor;
        c.dominio = _dominio;
        c.monto = _monto;
        pujaID.push(numPuj) -1;

    }
    
    function getBoughtHosts() view public returns (address[] memory) {
        return boughtHostAccts;
    }

    function getPujas() view public returns (uint[] memory) {
        return pujaID;
    }
    
    function getBoughtHost(address ins) view public returns (string memory, string memory) {
        return (boughtHosts[ins].ip, boughtHosts[ins].dominio);
    }

    function getPuja(uint ins) view public returns (address, string memory, uint) {
        return (pujas[ins].comprador, pujas[ins].dominio, pujas[ins].monto);
    }
    
    function aceptarPuja(uint pujaAceptada) public returns (address, string memory, uint){
        setHost(pujas[pujaAceptada].comprador,"",pujas[pujaAceptada].dominio);
    }
    function setIp(string memory _ip) public {
        boughtHost storage c = boughtHosts[msg.sender];
        require(msg.sender==c.dueno, "Usted no es el dueno del dominio");
        c.ip = _ip;
    }
}