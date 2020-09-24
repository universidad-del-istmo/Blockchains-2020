// SPDX-License-Identifier: MG
pragma solidity >=0.5.16 <0.8.0;

contract Ofertas {
    address _postor;
    address _owner;
    string _ip;
    string _domainName;

    constructor(string memory ip, string memory domainName, address postor,address owner) payable{
        _postor = postor;
        _ip = ip;
        _domainName = domainName;
        _owner = owner;
    }
    function acceptOffer() public{
        require(msg.sender == _owner,"You're not the owner");

    }
    function cancelOffer() public{
        require(msg.sender == _postor,"You're not the postor");
    }

}
