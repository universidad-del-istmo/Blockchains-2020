// SPDX-License-Identifier: MG
pragma solidity >=0.5.16 <0.8.0;

contract Ofertas {
    address payable _postor;
    address payable _owner;
    string _ip;
    string _domainName;

    constructor(string memory ip, string memory domainName, address postor,address owner) payable{
        _postor = address(uint160(postor));
        _ip = ip;
        _domainName = domainName;
        _owner = address(uint160(owner));
    }
    function acceptOffer() public{
        require(msg.sender == _owner,"You're not the owner");
        _owner.transfer(address(this).balance);
    }
    function cancelOffer() public{
        require(msg.sender == _postor,"You're not the postor");
        _postor.transfer(address(this).balance);
    }

}
