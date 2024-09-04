let operacaoAtual = '';
let operador = '';
let resultado = 0;

function AddNum(numero) {
    operacaoAtual += numero;
    AtualizarTela(operacaoAtual);
}

function AddOp(operacao) {
    if (operacaoAtual !== '') {
        operador = operacao;
        operacaoAtual += operacao;
        AtualizarTela(operacaoAtual);
    }
}

function Calcular() {
    try {
        resultado = eval(operacaoAtual);
        AtualizarTela(resultado);
        operacaoAtual = resultado.toString();
    } catch (e) {
        AtualizarTela('erro');
        operacaoAtual = '';
    }
}

function Limpar() {
    operacaoAtual = '';
    operador = '';
    resultado = 0;
    AtualizarTela(0);
}

function AtualizarTela(valor) {
    document.getElementById('resultado').innerHTML = valor;
}