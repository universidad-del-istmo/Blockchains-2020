$(document).ready(
    function() {

        const web3 = new Web3("http://127.0.0.1:8545");
        const votaciones = new web3.eth.Contract(votos.abi);
        votaciones.options.address = "0x6a983b982983193df12b6766e3b20557caed637f";
        votaciones.methods._conteo(1).call().then(
            function(conteo) {
                $("#votosCandidato1").append('<p>' + conteo + '</p>');
            }
        ).catch(function(e){ console.error(e); });
        $('#votarCandidato1').click(
            function() {

                votaciones.methods.votar(1).send({from: "0xBac3C42abDA32465E7199b9DD2EAFF7046189902"});
                alert('voto!');
            }
        );
    }
);

const votos = {
    "contractName": "Votaciones",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "candidatos",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "_candidatos",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "name": "_conteo",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "_votos",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "int256",
            "name": "candidato",
            "type": "int256"
          }
        ],
        "name": "votar",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"candidatos\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"constant\":true,\"inputs\":[],\"name\":\"_candidatos\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"_conteo\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"_votos\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"int256\",\"name\":\"candidato\",\"type\":\"int256\"}],\"name\":\"votar\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/neto/Blockchains-2020/clases/10-09/contracts/Votaciones.sol\":\"Votaciones\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/neto/Blockchains-2020/clases/10-09/contracts/Votaciones.sol\":{\"keccak256\":\"0x059046ac42e483464ee859ed74c4f18d398d1fccbc0086fcf60d668ee0ed58ad\",\"urls\":[\"bzz-raw://0ef525ff68280f6ec59669ccacaf37f504092319014e0f28e954b929fd01681a\",\"dweb:/ipfs/QmQ8mFJcdgW3AXoa3pa25qUkCjbXSa8SduXAwmpFgfrx8r\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b506040516104123803806104128339818101604052602081101561003357600080fd5b810190808051906020019092919050505080600281905550506103b78061005b6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806349c4a52e1461005157806359b82f5914610093578063692d08b6146100eb578063f903364f14610119575b600080fd5b61007d6004803603602081101561006757600080fd5b8101908080359060200190929190505050610137565b6040518082815260200191505060405180910390f35b6100d5600480360360208110156100a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061014f565b6040518082815260200191505060405180910390f35b6101176004803603602081101561010157600080fd5b8101908080359060200190929190505050610167565b005b61012161037c565b6040518082815260200191505060405180910390f35b60016020528060005260406000206000915090505481565b60006020528060005260406000206000915090505481565b600081136101dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43616e64696461746f206465626520736572207073697469766f00000000000081525060200191505060405180910390fd5b600254811315610255576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f43616e64696461746f206e6f206578697374650000000000000000000000000081525060200191505060405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610309576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f53656e64657220796120766f746f00000000000000000000000000000000000081525060200191505060405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060018060008381526020019081526020016000205401600160008381526020019081526020016000208190555050565b6002548156fea265627a7a72315820c2977e1669dde2fe2db4c9212c347178310a7de3bbdf2321f8178ec7c8af50b064736f6c63430005100032",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806349c4a52e1461005157806359b82f5914610093578063692d08b6146100eb578063f903364f14610119575b600080fd5b61007d6004803603602081101561006757600080fd5b8101908080359060200190929190505050610137565b6040518082815260200191505060405180910390f35b6100d5600480360360208110156100a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061014f565b6040518082815260200191505060405180910390f35b6101176004803603602081101561010157600080fd5b8101908080359060200190929190505050610167565b005b61012161037c565b6040518082815260200191505060405180910390f35b60016020528060005260406000206000915090505481565b60006020528060005260406000206000915090505481565b600081136101dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43616e64696461746f206465626520736572207073697469766f00000000000081525060200191505060405180910390fd5b600254811315610255576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f43616e64696461746f206e6f206578697374650000000000000000000000000081525060200191505060405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610309576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f53656e64657220796120766f746f00000000000000000000000000000000000081525060200191505060405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060018060008381526020019081526020016000205401600160008381526020019081526020016000208190555050565b6002548156fea265627a7a72315820c2977e1669dde2fe2db4c9212c347178310a7de3bbdf2321f8178ec7c8af50b064736f6c63430005100032",
    "sourceMap": "66:553:1:-;;;207:77;8:9:-1;5:2;;;30:1;27;20:12;5:2;207:77:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;207:77:1;;;;;;;;;;;;;;;;267:10;253:11;:24;;;;207:77;66:553;;;;;;",
    "deployedSourceMap": "66:553:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:553:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;137:34;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;137:34:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;93:37;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;93:37:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;290:327;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;290:327:1;;;;;;;;;;;;;;;;;:::i;:::-;;178:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;137:34;;;;;;;;;;;;;;;;;:::o;93:37::-;;;;;;;;;;;;;;;;;:::o;290:327::-;358:1;346:9;:13;338:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;421:11;;408:9;:24;;400:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;496:1;474:6;:18;481:10;474:18;;;;;;;;;;;;;;;;:23;466:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;548:9;527:6;:18;534:10;527:18;;;;;;;;;;;;;;;:30;;;;609:1;588:7;:18;596:9;588:18;;;;;;;;;;;;:22;567:7;:18;575:9;567:18;;;;;;;;;;;:43;;;;290:327;:::o;178:22::-;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.8.0;\n\ncontract Votaciones {\n\n    mapping(address => int) public _votos;\n\n    mapping(int => int) public _conteo;\n\n    int public _candidatos;\n\n    constructor(int candidatos) public {\n\n        _candidatos = candidatos;\n    }\n\n    function votar(int candidato) public {\n\n        require(candidato > 0, \"Candidato debe ser psitivo\");\n        require(candidato <= _candidatos, \"Candidato no existe\");\n        require(_votos[msg.sender] == 0, \"Sender ya voto\");\n\n        _votos[msg.sender] = candidato;\n        _conteo[candidato] = _conteo[candidato] + 1;\n    }\n}\n",
    "sourcePath": "/home/neto/Blockchains-2020/clases/10-09/contracts/Votaciones.sol",
    "ast": {
      "absolutePath": "/home/neto/Blockchains-2020/clases/10-09/contracts/Votaciones.sol",
      "exportedSymbols": {
        "Votaciones": [
          102
        ]
      },
      "id": 103,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 34,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:32:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 102,
          "linearizedBaseContracts": [
            102
          ],
          "name": "Votaciones",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 38,
              "name": "_votos",
              "nodeType": "VariableDeclaration",
              "scope": 102,
              "src": "93:37:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                "typeString": "mapping(address => int256)"
              },
              "typeName": {
                "id": 37,
                "keyType": {
                  "id": 35,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "101:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "93:23:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                  "typeString": "mapping(address => int256)"
                },
                "valueType": {
                  "id": 36,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "112:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 42,
              "name": "_conteo",
              "nodeType": "VariableDeclaration",
              "scope": 102,
              "src": "137:34:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                "typeString": "mapping(int256 => int256)"
              },
              "typeName": {
                "id": 41,
                "keyType": {
                  "id": 39,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "145:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "nodeType": "Mapping",
                "src": "137:19:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                  "typeString": "mapping(int256 => int256)"
                },
                "valueType": {
                  "id": 40,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "152:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 44,
              "name": "_candidatos",
              "nodeType": "VariableDeclaration",
              "scope": 102,
              "src": "178:22:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              },
              "typeName": {
                "id": 43,
                "name": "int",
                "nodeType": "ElementaryTypeName",
                "src": "178:3:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 53,
                "nodeType": "Block",
                "src": "242:42:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 49,
                        "name": "_candidatos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "253:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "candidatos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "267:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "253:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 52,
                    "nodeType": "ExpressionStatement",
                    "src": "253:24:1"
                  }
                ]
              },
              "documentation": null,
              "id": 54,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 47,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 46,
                    "name": "candidatos",
                    "nodeType": "VariableDeclaration",
                    "scope": 54,
                    "src": "219:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "typeName": {
                      "id": 45,
                      "name": "int",
                      "nodeType": "ElementaryTypeName",
                      "src": "219:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "218:16:1"
              },
              "returnParameters": {
                "id": 48,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "242:0:1"
              },
              "scope": 102,
              "src": "207:77:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 100,
                "nodeType": "Block",
                "src": "327:290:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 62,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 60,
                            "name": "candidato",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "346:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 61,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "358:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "346:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "43616e64696461746f206465626520736572207073697469766f",
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "361:28:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_5356329ca8d7f9296cb363d4d8537c187ee08130572b175291751f7b2cecb238",
                            "typeString": "literal_string \"Candidato debe ser psitivo\""
                          },
                          "value": "Candidato debe ser psitivo"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_5356329ca8d7f9296cb363d4d8537c187ee08130572b175291751f7b2cecb238",
                            "typeString": "literal_string \"Candidato debe ser psitivo\""
                          }
                        ],
                        "id": 59,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120,
                          121
                        ],
                        "referencedDeclaration": 121,
                        "src": "338:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 64,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "338:52:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 65,
                    "nodeType": "ExpressionStatement",
                    "src": "338:52:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "candidato",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "408:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 68,
                            "name": "_candidatos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44,
                            "src": "421:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "408:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "43616e64696461746f206e6f20657869737465",
                          "id": 70,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "434:21:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0d5f7e950bd598e965c1349165882c00410964824ef793f2d0f0a1b4bf1d2cee",
                            "typeString": "literal_string \"Candidato no existe\""
                          },
                          "value": "Candidato no existe"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_0d5f7e950bd598e965c1349165882c00410964824ef793f2d0f0a1b4bf1d2cee",
                            "typeString": "literal_string \"Candidato no existe\""
                          }
                        ],
                        "id": 66,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120,
                          121
                        ],
                        "referencedDeclaration": 121,
                        "src": "400:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 71,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "400:56:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 72,
                    "nodeType": "ExpressionStatement",
                    "src": "400:56:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 74,
                              "name": "_votos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "474:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                                "typeString": "mapping(address => int256)"
                              }
                            },
                            "id": 77,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 75,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 117,
                                "src": "481:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 76,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "481:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "474:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 78,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "496:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "474:23:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "53656e64657220796120766f746f",
                          "id": 80,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "499:16:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_02e1c264bd5f3ce19d1a7aacc98905e13dec4110cd1068dad243269817e0eb57",
                            "typeString": "literal_string \"Sender ya voto\""
                          },
                          "value": "Sender ya voto"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_02e1c264bd5f3ce19d1a7aacc98905e13dec4110cd1068dad243269817e0eb57",
                            "typeString": "literal_string \"Sender ya voto\""
                          }
                        ],
                        "id": 73,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120,
                          121
                        ],
                        "referencedDeclaration": 121,
                        "src": "466:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 81,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "466:50:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 82,
                    "nodeType": "ExpressionStatement",
                    "src": "466:50:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 83,
                          "name": "_votos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38,
                          "src": "527:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                            "typeString": "mapping(address => int256)"
                          }
                        },
                        "id": 86,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "534:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "534:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "527:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "candidato",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56,
                        "src": "548:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "527:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 89,
                    "nodeType": "ExpressionStatement",
                    "src": "527:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 98,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 90,
                          "name": "_conteo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "567:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                            "typeString": "mapping(int256 => int256)"
                          }
                        },
                        "id": 92,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "candidato",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "575:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "567:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "_conteo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "588:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                              "typeString": "mapping(int256 => int256)"
                            }
                          },
                          "id": 95,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 94,
                            "name": "candidato",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "596:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "588:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 96,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "609:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "588:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "567:43:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 99,
                    "nodeType": "ExpressionStatement",
                    "src": "567:43:1"
                  }
                ]
              },
              "documentation": null,
              "id": 101,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "votar",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 57,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 56,
                    "name": "candidato",
                    "nodeType": "VariableDeclaration",
                    "scope": 101,
                    "src": "305:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "typeName": {
                      "id": 55,
                      "name": "int",
                      "nodeType": "ElementaryTypeName",
                      "src": "305:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "304:15:1"
              },
              "returnParameters": {
                "id": 58,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "327:0:1"
              },
              "scope": 102,
              "src": "290:327:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 103,
          "src": "66:553:1"
        }
      ],
      "src": "32:588:1"
    },
    "legacyAST": {
      "absolutePath": "/home/neto/Blockchains-2020/clases/10-09/contracts/Votaciones.sol",
      "exportedSymbols": {
        "Votaciones": [
          102
        ]
      },
      "id": 103,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 34,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:32:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 102,
          "linearizedBaseContracts": [
            102
          ],
          "name": "Votaciones",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 38,
              "name": "_votos",
              "nodeType": "VariableDeclaration",
              "scope": 102,
              "src": "93:37:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                "typeString": "mapping(address => int256)"
              },
              "typeName": {
                "id": 37,
                "keyType": {
                  "id": 35,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "101:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "93:23:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                  "typeString": "mapping(address => int256)"
                },
                "valueType": {
                  "id": 36,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "112:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 42,
              "name": "_conteo",
              "nodeType": "VariableDeclaration",
              "scope": 102,
              "src": "137:34:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                "typeString": "mapping(int256 => int256)"
              },
              "typeName": {
                "id": 41,
                "keyType": {
                  "id": 39,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "145:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "nodeType": "Mapping",
                "src": "137:19:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                  "typeString": "mapping(int256 => int256)"
                },
                "valueType": {
                  "id": 40,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "152:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 44,
              "name": "_candidatos",
              "nodeType": "VariableDeclaration",
              "scope": 102,
              "src": "178:22:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              },
              "typeName": {
                "id": 43,
                "name": "int",
                "nodeType": "ElementaryTypeName",
                "src": "178:3:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 53,
                "nodeType": "Block",
                "src": "242:42:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 49,
                        "name": "_candidatos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "253:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "candidatos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "267:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "253:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 52,
                    "nodeType": "ExpressionStatement",
                    "src": "253:24:1"
                  }
                ]
              },
              "documentation": null,
              "id": 54,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 47,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 46,
                    "name": "candidatos",
                    "nodeType": "VariableDeclaration",
                    "scope": 54,
                    "src": "219:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "typeName": {
                      "id": 45,
                      "name": "int",
                      "nodeType": "ElementaryTypeName",
                      "src": "219:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "218:16:1"
              },
              "returnParameters": {
                "id": 48,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "242:0:1"
              },
              "scope": 102,
              "src": "207:77:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 100,
                "nodeType": "Block",
                "src": "327:290:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 62,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 60,
                            "name": "candidato",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "346:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 61,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "358:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "346:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "43616e64696461746f206465626520736572207073697469766f",
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "361:28:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_5356329ca8d7f9296cb363d4d8537c187ee08130572b175291751f7b2cecb238",
                            "typeString": "literal_string \"Candidato debe ser psitivo\""
                          },
                          "value": "Candidato debe ser psitivo"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_5356329ca8d7f9296cb363d4d8537c187ee08130572b175291751f7b2cecb238",
                            "typeString": "literal_string \"Candidato debe ser psitivo\""
                          }
                        ],
                        "id": 59,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120,
                          121
                        ],
                        "referencedDeclaration": 121,
                        "src": "338:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 64,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "338:52:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 65,
                    "nodeType": "ExpressionStatement",
                    "src": "338:52:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "candidato",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "408:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 68,
                            "name": "_candidatos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44,
                            "src": "421:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "408:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "43616e64696461746f206e6f20657869737465",
                          "id": 70,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "434:21:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0d5f7e950bd598e965c1349165882c00410964824ef793f2d0f0a1b4bf1d2cee",
                            "typeString": "literal_string \"Candidato no existe\""
                          },
                          "value": "Candidato no existe"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_0d5f7e950bd598e965c1349165882c00410964824ef793f2d0f0a1b4bf1d2cee",
                            "typeString": "literal_string \"Candidato no existe\""
                          }
                        ],
                        "id": 66,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120,
                          121
                        ],
                        "referencedDeclaration": 121,
                        "src": "400:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 71,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "400:56:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 72,
                    "nodeType": "ExpressionStatement",
                    "src": "400:56:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 74,
                              "name": "_votos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "474:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                                "typeString": "mapping(address => int256)"
                              }
                            },
                            "id": 77,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 75,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 117,
                                "src": "481:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 76,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "481:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "474:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 78,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "496:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "474:23:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "53656e64657220796120766f746f",
                          "id": 80,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "499:16:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_02e1c264bd5f3ce19d1a7aacc98905e13dec4110cd1068dad243269817e0eb57",
                            "typeString": "literal_string \"Sender ya voto\""
                          },
                          "value": "Sender ya voto"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_02e1c264bd5f3ce19d1a7aacc98905e13dec4110cd1068dad243269817e0eb57",
                            "typeString": "literal_string \"Sender ya voto\""
                          }
                        ],
                        "id": 73,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120,
                          121
                        ],
                        "referencedDeclaration": 121,
                        "src": "466:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 81,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "466:50:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 82,
                    "nodeType": "ExpressionStatement",
                    "src": "466:50:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 83,
                          "name": "_votos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38,
                          "src": "527:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                            "typeString": "mapping(address => int256)"
                          }
                        },
                        "id": 86,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "534:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "534:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "527:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "candidato",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56,
                        "src": "548:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "527:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 89,
                    "nodeType": "ExpressionStatement",
                    "src": "527:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 98,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 90,
                          "name": "_conteo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "567:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                            "typeString": "mapping(int256 => int256)"
                          }
                        },
                        "id": 92,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "candidato",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "575:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "567:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "_conteo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "588:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_int256_$_t_int256_$",
                              "typeString": "mapping(int256 => int256)"
                            }
                          },
                          "id": 95,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 94,
                            "name": "candidato",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "596:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "588:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 96,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "609:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "588:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "567:43:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 99,
                    "nodeType": "ExpressionStatement",
                    "src": "567:43:1"
                  }
                ]
              },
              "documentation": null,
              "id": 101,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "votar",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 57,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 56,
                    "name": "candidato",
                    "nodeType": "VariableDeclaration",
                    "scope": 101,
                    "src": "305:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "typeName": {
                      "id": 55,
                      "name": "int",
                      "nodeType": "ElementaryTypeName",
                      "src": "305:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "304:15:1"
              },
              "returnParameters": {
                "id": 58,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "327:0:1"
              },
              "scope": 102,
              "src": "290:327:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 103,
          "src": "66:553:1"
        }
      ],
      "src": "32:588:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
    },
    "networks": {
      "1599773099483": {
        "events": {},
        "links": {},
        "address": "0x7424D88b7B62781eeb3c93b5369D79B0e8B6f584",
        "transactionHash": "0xe589c1baa7679742502db0c6ca2ee865529cadb424e771191503e19fae1ea491"
      },
      "1599775779969": {
        "events": {},
        "links": {},
        "address": "0x6a983b982983193Df12b6766E3B20557CaED637F",
        "transactionHash": "0xa83b133e5d0e3c28f17cc6616e8e086475353ce0360157152d50e5e9c7e1af85"
      }
    },
    "schemaVersion": "3.2.4",
    "updatedAt": "2020-09-10T22:10:35.864Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }