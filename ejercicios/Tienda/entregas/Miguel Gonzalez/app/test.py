from web3 import Web3
w3 = Web3(Web3.WebsocketProvider("ws://127.0.0.1:8545"))
w3.eth.defaultAccount = w3.eth.accounts[0]
contract_address = "0xba51fF67b9089a3Fef592d44ffD4E93Cd209309F"
contract_abi = [
    {
        "inputs": [
            {"internalType": "string", "name": "domainName", "type": "string",},
            {"internalType": "string", "name": "ip", "type": "string",},
        ],
        "name": "agregarRegistro",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "admin",
                "type": "address",
            },
        ],
        "stateMutability": "payable",
        "type": "constructor",
    },
    {
        "anonymous": False,
        "inputs": [
            {
                "indexed": False,
                "internalType": "string",
                "name": "domainName",
                "type": "string",
            },
            {
                "indexed": False,
                "internalType": "address",
                "name": "ofertaAddress",
                "type": "address",
            },
        ],
        "name": "Oferta",
        "type": "event",
    },
    {
        "inputs": [
            {"internalType": "string", "name": "domainName", "type": "string",},
            {"internalType": "string", "name": "ip", "type": "string",},
        ],
        "name": "ofertarDominio",
        "outputs": [
            {"internalType": "contract Ofertas", "name": "", "type": "address",},
        ],
        "stateMutability": "payable",
        "type": "function",
    },
    {
        "anonymous": False,
        "inputs": [
            {
                "indexed": False,
                "internalType": "string",
                "name": "domainName",
                "type": "string",
            },
            {
                "indexed": False,
                "internalType": "string",
                "name": "ip",
                "type": "string",
            },
        ],
        "name": "Registro",
        "type": "event",
    },
    {
        "inputs": [
            {"internalType": "string", "name": "domainName", "type": "string",},
            {"internalType": "string", "name": "ip", "type": "string",},
            {"internalType": "address", "name": "owner", "type": "address",},
            {"internalType": "address", "name": "newOwner", "type": "address",},
        ],
        "name": "updateRegister",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
    },
]
myContract = w3.eth.contract(address=contract_address, abi=contract_abi)
transfer_filter = myContract.events.Registro.createFilter(fromBlock="0x0")
events = transfer_filter.get_all_entries()
data = []
domain = "hola.com"
legth = len(events)
for event in events:
    if event['args']['domainName'] == domain:
        data.append([event,"Puja"])
    else:
        data.append([event,"Disponible"])
#var = myContract.functions.ofertarDominio("hola","122.222.2").transact({'from': w3.eth.accounts[3],'value': 200})
#receipt = w3.eth.getTransactionReceipt(var)
#events = myContract.events.Oferta().processReceipt(receipt)
eventsFilter = myContract.events.Oferta.createFilter(fromBlock="0x0")
events = eventsFilter.get_all_entries()
var = events