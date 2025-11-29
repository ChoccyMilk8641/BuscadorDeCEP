const inputCep = document.getElementById('cep');
const buscarBtn = document.getElementById('buscarBtn');
const loading = document.getElementById('loading');
const erro = document.getElementById('erro');
const resultado = document.getElementById('resultado');
const mensagemErro = document.getElementById('mensagemErro');

function formatarCep (valor) {
    valor = valor.replace(/\D/g, '');
    if (valor.length > 5) {
        valor = valor.replace(/\^)
    }
}