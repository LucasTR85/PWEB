function Retangulo(x, y){
    this.x = x;
    this.y = y;  
}

function calculaArea(objRet){
    return objRet.x * objRet.y;
}

var ret = new Retangulo(5, 3);

alert("Área do Retangulo: " + calculaArea(ret));

function Conta(){
    var nome;
    var banco;
    var numConta;
    var saldo;

    this.setNome = function (n){
        nome = n;
    };

    this.setBanco = function setBanco(b){
        banco = b;
    };

    this.setNumConta = function setNumConta(c){
        numConta = c;
    };

    this.setSaldo = function setSaldo(s){
        saldo = s;
    };

    this.getNome = function getNome(){
        return nome;
    };

    this.getBanco = function getBanco(){
        return banco;
    };

    this.getNumConta = function getNumConta(){
        return numConta;
    };

    this.getSaldo = function getSaldo(){
        return saldo;
    };

};

function ContaCorrente(){
    var saldoEspecial;

    this.setSaldoEspecial = function setSaldoEspecial(se){
        saldoEspecial = se;
    };

    this.getSaldoEspecial = function getSaldoEspecial(){
        return saldoEspecial;
    };
};

function Poupanca(){
    var juros;
    var dtVencimento;

    this.setJuros = function setJuros(j){
        juros = j;
    };

    this.setDtVencimento = function setDtVencimento(dt){
        dtVencimento = dt;
    };

    this.getJuros = function getJuros(){
        return juros;
    };

    this.getDtVencimento = function getDtVencimento(){
        return dtVencimento;
    };

};
//Criando o vínculo de Herança
ContaCorrente.prototype = new Conta();
Poupanca.prototype = new Conta;

//Criando objetos das sub-classes
nConta = new ContaCorrente();
nPoupanca = new Poupanca();


alert("Conta Corrente");
var nome = prompt("Digite o nome:");
nConta.setNome(nome);
nConta.setBanco(prompt("Digite o Banco:"));
nConta.setNumConta(prompt("Digite o número da conta:"));
nConta.setSaldo(prompt("Digite o saldo:"));
nConta.setSaldoEspecial(prompt("Digite o saldo especial:"));

alert("Poupança");
nPoupanca.setNome(prompt("Digite o nome:"));
nPoupanca.setBanco(prompt("Digite o Banco:"));
nPoupanca.setNumConta(prompt("Digite o número da conta:"));
nPoupanca.setSaldo(prompt("Digite o saldo:"));
nPoupanca.setJuros(prompt("Digite o juros:"));
nPoupanca.setDtVencimento(prompt("Digite a data de vencimento:"));

alert("Dados Conta Corrente\n\n" + "Nome: " + nConta.getNome() +
        "\nBanco: " + nConta.getBanco() + "\nNúmero da Conta: " + nConta.getNumConta() +
        "\nSaldo: " + nConta.getSaldo() + "\nSaldo Especial: " + nConta.getSaldoEspecial());

alert("Dados Poupança\n\n" + "Nome: " + nPoupanca.getNome() +
        "\nBanco: " + nPoupanca.getBanco() + "\nNúmero da Conta: " + nPoupanca.getNumConta() +
        "\nSaldo: " + nPoupanca.getSaldo() + "\nJuros: " + nPoupanca.getJuros() + " %" + "\nData de Vencimento: " + nPoupanca.getDtVencimento());