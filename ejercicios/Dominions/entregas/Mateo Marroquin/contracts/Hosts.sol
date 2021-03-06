pragma solidity >=0.5.0 <0.8.0;
contract Hosts{
    
    mapping (address => uint) balances; 
    address payable public reguladora;
    event ipCanged(string domainName, string ip);
    event pujaRealizada(string domainName, uint amount, address comprador);
    constructor() public{
        reguladora = msg.sender;
        balances[msg.sender] = 10000000000000; 
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
        if(_vendedor != address(0)){
            c.comprador = _comprador;
            c.vendedor = _vendedor;
            c.dominio = _dominio;
            c.monto = _monto;    
        } else {
            c.comprador = _comprador;
            c.vendedor = reguladora;
            c.dominio = _dominio;
            c.monto = _monto;
        }
        balances[_comprador] -=_monto;
        pujaID.push(numPuj) -1;
        emit pujaRealizada(_dominio, _monto, _comprador);

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

    function getPuja(uint ins) view public returns (address, address, string memory, uint) {
        return (pujas[ins].comprador, pujas[ins].vendedor, pujas[ins].dominio, pujas[ins].monto);
    }
    
    function aceptarPuja(uint pujaAceptada) public returns (address, string memory, uint){
        require(pujas[pujaAceptada].vendedor == msg.sender, "El dominio no le pertenese, usted no puede aceptar la puja");
        setHost(pujas[pujaAceptada].comprador,"",pujas[pujaAceptada].dominio);
        sendCoin(pujas[pujaAceptada].comprador, pujas[pujaAceptada].vendedor, pujas[pujaAceptada].monto);
    }
    
    function rechazarPuja(uint pujaRechazada) public{
        require(pujas[pujaRechazada].vendedor == msg.sender, "El dominio no le pertenese, usted no puede aceptar la puja");
        balances[pujas[pujaRechazada].comprador] +=pujas[pujaRechazada].monto;
        delete pujas[pujaRechazada];
        
    }
    
    function cancelarPuja(uint pujaCancelada) public{
        require(pujas[pujaCancelada].comprador == msg.sender, "Usted no realizo la puja, por consiguiente no la puede rechazar");
        balances[pujas[pujaCancelada].comprador] +=pujas[pujaCancelada].monto;
        delete pujas[pujaCancelada];
    }
    
    function setIp(string memory _ip) public {
        boughtHost storage c = boughtHosts[msg.sender];
        require(msg.sender==c.dueno, "Usted no es el dueno del dominio");
        c.ip = _ip;
        emit ipCanged(c.dominio, _ip);
    }
    
    function addMoney(address payable recipient, uint monto) public{
        balances[recipient] +=monto;
    }
    
    function getBalance(address _addr) public view returns(uint) { 
        return balances[_addr];
    }
    
    function sendCoin(address _sender, address _receiver, uint _amount) public returns(bool sufficient) {
        if (balances[_sender] < _amount) return false;
        balances[_sender] -= _amount;
        balances[_receiver] += _amount;
        return true;
    }
}