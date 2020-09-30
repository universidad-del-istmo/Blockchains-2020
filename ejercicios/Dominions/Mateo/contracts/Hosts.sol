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
    mapping(address => boughtHost) public boughtHosts;
    address[] public boughtHostAccts;
    
    function setHost(address _address, string memory _ip, string memory _dominio) public {
        boughtHost storage c = boughtHosts[_address];

        c.ip = _ip;
        c.dominio = _dominio;       
        boughtHostAccts.push(_address) -1;

    }
    
    function getboughtHosts() view public returns (address[] memory) {
        return boughtHostAccts;
    }
    
    function getboughtHost(address ins) view public returns (string memory, string memory) {
        return (boughtHosts[ins].ip, boughtHosts[ins].dominio);
    }
}