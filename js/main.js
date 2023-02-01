/**
*

Este código define uma variável "controle", que seleciona todos 
os elementos HTML que possuem o atributo "data-controle". 
Depois, uma variável "estatisticas" seleciona todos os 
elementos HTML que possuem o atributo "data-estatistica".

Em seguida, é definido uma variável "pecas" que é um objeto que contém 
informações sobre cinco tipos diferentes de peças 
(braços, blindagem, núcleos, pernas e foguetes). 
Cada tipo de peça tem informações sobre sua força, 
poder, energia e velocidade.

Depois, é feito um loop sobre cada elemento de "controle" e 
adicionado um evento "click" nele. Quando o elemento for clicado, 
a função "manipulaDados" será executada, passando como argumentos o texto do 
elemento clicado e seu elemento pai.

Em seguida, função "atualizaEstatísticas" é chamada para 
atualizar as estatísticas na página com base na peça que foi clicada.

A função "manipulaDados" atualiza o valor do contador na página, aumentando-o 
em 1 se a operação for "mais" ou diminuindo-o em 1 se a operação for "menos".

A função "atualizaEstatisticas" atualiza as estatísticas na página, 
adicionando os valores das propriedades da peça selecionada às estatísticas existentes.

**
*/

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach(elemento => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    peca.value = parseInt(peca.value) + (operacao === '+' ? 1 : -1);
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}

