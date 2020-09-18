// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Votaciones {

    mapping(address => int) public _votos;

    mapping(int => int) public _conteo;

    int public _candidatos;

    constructor(int candidatos) public {

        _candidatos = candidatos;
    }

    function votar(int candidato) public {

        require(candidato > 0, "Candidato debe ser psitivo");
        require(candidato <= _candidatos, "Candidato no existe");
        require(_votos[msg.sender] == 0, "Sender ya voto");

        _votos[msg.sender] = candidato;
        _conteo[candidato] = _conteo[candidato] + 1;
    }

    function pagar(address payable dest) public payable {
        dest.transfer(50 ether);
    }
}
