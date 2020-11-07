$(document).ready(function () {
  var regList = {};
  const web3 = new Web3("ws://127.0.0.1:8545");
  const registros = new web3.eth.Contract(registrosABI);
  registros.options.address = "0xC7807349318e008ce288a5fab7D0fc1B06b6bB7c";
  var registroEvent = registros.events.Registro({ fromBlock: 0 }, function (
    error,
    event
  ) {
    console.log(error, event);
    regList[event.returnValues.domainName] = event.returnValues.ip;
    console.log(regList);
    var allRegistros = "";
    for (var registro in regList) {
      allRegistros =
        allRegistros + "<p>" + regList[registro] + "\t\t" + registro + "\n</p>";
    }
    document.getElementById("registros").innerHTML = allRegistros;
  });
});
function save() {
  var userInput = document.getElementById("registros").innerHTML;
  var ret = "data-123".replace(/data-/g,'');
  userInput = userInput.replace(/<p>/g,'');
  userInput = userInput.replace(/<\/p>/g,'');
  var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "hosts.txt");
}
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
