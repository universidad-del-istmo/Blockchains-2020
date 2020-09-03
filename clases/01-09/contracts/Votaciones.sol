// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.5.10;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state).
// Once deployed, a contract resides at a specific address on the Ethereum blockchain.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract Votaciones {

    mapping(adress => int) _votos;

    mapping(int => int) _conteo;

    int _cantidad;

    address _admin;

    event Voto(int candidato, int conteo);

    mapping(address => bool) _votadores;

    // Similar to many class-based object-oriented languages, a constructor is
    // a special function that is only executed upon contract creation.
    // Constructors are used to initialize the contract's data.
    // Learn more: https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
    constructor(
        address admin,
        int cantidad) public {

        require(cantidad > 0, "La cantidad debe ser mayor a 0");
        _cantidad = cantidad;
        _admin = admin;
        _votadores[admin] = true;
    }

    function agregar(address votador) {

        require(
            msg.sender == _admin,
            "Solo admin puede agregar votadores"
        );

        _votadores[votador] = true;
    }

    function votar(int candidato) {

        require(
            candidato > 0 && candidato <= _cantidad,
            "El candidato no es valido");

        require(
            _votadores[msg.sender],
            "El usuario no es un votador");

        int prev = _votadores[msg.sender];
        if(prev > 0) {
            _conteo[prev] -= 1;
            emit Voto(
                prev,
                _conteo[prev]
            );
        }

        _votos[msg.sender] = candidato;
        _conteo[candidato] += 1;
        emit Voto(candidato, _conteo(candidato));
    }
}
