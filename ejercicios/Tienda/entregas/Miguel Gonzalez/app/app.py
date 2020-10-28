from flask.wrappers import Request
from web3 import Web3
from flask import Flask, render_template, request,redirect,url_for

app = Flask(__name__)
# Contract abi
abiRegistro = [
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
# w3 and contract variables
w3 = Web3(Web3.WebsocketProvider("ws://127.0.0.1:8545"))
w3.eth.defaultAccount = w3.eth.accounts[0]
addressRegistro = "0xba51fF67b9089a3Fef592d44ffD4E93Cd209309F"
registroContract = w3.eth.contract(address=addressRegistro, abi=abiRegistro)

@app.route("/home",methods=['GET','POST']) 
@app.route("/hosts",methods=['GET','POST']) 
def main():
    eventsFilter = registroContract.events.Registro.createFilter(fromBlock="0x0")
    events = eventsFilter.get_all_entries()
    ofertasFilter = registroContract.events.Oferta.createFilter(fromBlock="0x0")
    ofertas = ofertasFilter.get_all_entries()
    # Cargar el sitio con el listado de dominios
    if request.method == 'GET':
        data = events
        dataOfertas = ofertas
        return render_template("hosts.html", content=data,dataOf=dataOfertas, title="Hosts",action=False)
    # Realizar la busqueda del dominio
    if request.method == 'POST':
        data = []
        domain = request.form['domainName']
        if len(events) > 0:
            match = []
            # Busqueda en los eventos "Registro" existentes
            for event in events:
                if event['args']['domainName'] == domain:
                    match = [event,"O"]
                    break
            # Manejo en caso que exista o no el dominio
            if match:
                data.append(match)
            else:
                event = {'args':{'domainName':domain,'ip':'N/A'}}
                data.append([event,"A"])
        else:
            event = {'args':{'domainName':domain,'ip':'N/A'}}
            data.append([event,"A"])
        return render_template("hosts.html", content=data, title="Search Result",action=True)

@app.route("/dnCTRL",methods=['GET','POST'])
def purchase():
    if request.method == 'GET':
        if request.args.get('action') == 'o':
            data = [request.args.get('domainName')]
            return render_template("domainAction.html",title="Offer",data=data,action=True)
        if request.args.get('action') == 'p':
            data = [request.args.get('domainName')]
            return render_template("domainAction.html",title="Purchase",data=data,action=False)
        else:
            return render_template("search.html")
    if request.method == 'POST':
        # Common parammeters
        domainName = request.form['domainName']
        ip = request.form['ip']
        offer = request.form['offer']
        action = request.form['action']
        # Purchase
        if action == "p":
            try:
                registroContract.functions.agregarRegistro(domainName,ip).transact({'from': w3.eth.accounts[1],'value': offer})
                return redirect("/home?stat=1")
            except:
                return redirect("/home?stat=0")    
        # Offer
        if action == "o":
            try:
                registroContract.functions.ofertarDominio(domainName,ip).transact({'from': w3.eth.accounts[1],'value': offer})
                return redirect("/home?stat=1")
            except:
                return redirect("/home?stat=0")   
        else:
            return redirect("/home?stat=0")    
            #return render_template("test.html",data=action)
    else:
        return redirect("/home?stat=0")

@app.route("/test")
def test():
    return render_template("test.html",title='test')

@app.route("/")
def search():
    return render_template("search.html",title="Domain Search")    

if __name__ == "__main__":
    app.run(debug=True)