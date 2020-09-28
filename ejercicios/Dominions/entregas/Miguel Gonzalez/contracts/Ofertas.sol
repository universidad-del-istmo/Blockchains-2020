// SPDX-License-Identifier: MG
pragma solidity >=0.6.0 < 0.8.0;

contract Ofertas {
    address payable _postor;
    address payable _owner;
    string _ip;
    string _domainName;
    address _originContract;
    // agregar address de registros

    constructor(string memory domainName, string memory ip, address postor,address owner, address originContract) payable{
        _postor = payable(postor);
        _ip = ip;
        _originContract = originContract;
        _domainName = domainName;
        _owner = payable(owner);
    }
    function acceptOffer() public{
        require(msg.sender == _owner,"You're not the owner");
        bytes memory payload = abi.encodeWithSignature("updateRegister(string,string,address,address)",_domainName,_ip,_owner,_postor);
        (bool success,) = _originContract.call(payload);
        require(success);
        selfdestruct(_owner);
        //_owner.transfer(address(this).balance);
    }
    function cancelOffer() public{
        require(msg.sender == _postor,"You're not the postor");
        selfdestruct(_postor);
        //_postor.transfer(address(this).balance);
    }
}