# robotron-2000-alura

<h3>Projeto criado no decorrer do curso de JavaScript da Alura</h3>

Foi um projeto bem simples, o seu HTML e CSS já estavam criados e pude aprender mais sobre manipulação de objetos com JavaScript. Também tive ajuda na melhoria do código pelo <a href="https://chat.openai.com/chat">ChatGPT</a>. Suas sugestões de melhoria foram:

"Eu sugiro simplificar a função de manipulação de dados para ficar mais claro e curto:"

```javascript
function manipulaDados(operacao, controle) { 
  const peca = controle.querySelector("[data-contador]"); 
  peca.value = parseInt(peca.value) + (operacao === '+' ? 1 : -1); 
}
```

"Além disso, você pode usar o método Number em vez de parseInt para garantir que o resultado seja um número, mesmo que o valor do textContent não seja um número válido:"

```javascript
function atualizaEstatisticas(peca) { 
  estatisticas.forEach((elemento) => { 
    elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]; 
  }); 
}
```

<hr>

Este código define uma variável "controle", que seleciona todos os elementos HTML que possuem o atributo "data-controle". Depois, uma variável "estatísticas" seleciona todos os elementos HTML que possuem o atributo "data-estatística".

Em seguida, é definido um objeto "peças", que contém informações sobre cinco tipos diferentes de peças (braços, blindagem, núcleos, pernas e foguetes). Cada tipo de peça tem informações sobre sua força, poder, energia e velocidade.

Depois, é feito um loop sobre cada elemento de "controle" e adicionado um evento "click" nele. Quando o elemento for clicado, 
a função "manipulaDados" será executada, passando como argumentos o texto do elemento clicado e seu elemento pai.

Em seguida, a função "atualizaEstatsticas" será executada, passando como argumento o valor do atributo "data-peça" do elemento clicado.

A função "manipulaDados" pega o elemento que tem o atributo "data-contador" dentro do elemento passado como argumento e, dependendo da operação passada como argumento, incrementa ou decrementa o valor desse elemento em 1.

A função "atualizaEstatsticas" faz um loop sobre cada elemento de "estatísticas" e, para cada elemento, adiciona a informação da estatística específica para a peça específica, que foi passada como argumento.
