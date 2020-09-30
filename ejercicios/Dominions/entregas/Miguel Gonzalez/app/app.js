$(document).ready(function () {
  const web3 = new Web3("http://localhost:8545");
  const registros = new web3.eth.Contract(registrosABI);
  registros.options.address = "0x87D98eDedA9DA254c99db7737dA62eb0ad4c5385";
  var registroEvent = registros.events.Registro({ fromBlock: 0 });
  //$('#hello').append('<p> Registros:' + registroEvent.event + ', ' + registroEvent.address +', ' + registroEvent.returnValues["domainName"] +', ' + registroEvent.returnValues["ip"]+'</p>');
  $('#hello').append('<p> Registros:' + registroEvent.event + ', ' + registroEvent.address +', ' + registroEvent.returnValues+'</p>');
  
});
const registrosABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "domainName",
        type: "string",
      },
      {
        internalType: "string",
        name: "ip",
        type: "string",
      },
    ],
    name: "agregarRegistro",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "domainName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "ofertaAddress",
        type: "address",
      },
    ],
    name: "Oferta",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "domainName",
        type: "string",
      },
      {
        internalType: "string",
        name: "ip",
        type: "string",
      },
    ],
    name: "ofertarDominio",
    outputs: [
      {
        internalType: "contract Ofertas",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "domainName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ip",
        type: "string",
      },
    ],
    name: "Registro",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "domainName",
        type: "string",
      },
      {
        internalType: "string",
        name: "ip",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "updateRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
