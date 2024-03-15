# Atividade 02

Desenvolvimento de Software para WEB Projeto de Interface Web

Conteúdo: o uso de Context (createContext) e introdução a estados

Obs.: Faça os exercícios abaixo usando o CodeSandBox ou o ambiente de trabalho instalado em sua máquina (VSCode + Node, por exemplo).

**01 - Siga as instruções:**
```
● Modifique o exemplo (crie dentro da sua pasta de atividades uma cópia do exemplo) em (https://github.com/jeffersoncarvalho/ufc_2023_1/tree/main/0_PROF/00_introduction/src/components/01-introduction/06_context) para que o valor de “value”, em FunctionA, seja inicializado da seguinte forma:
  ○ const cores = {bkgA:”green”,bkgB:”white”,bkgC:”yellow”, bkgD:”blue”}
  ○ value = {cores}

Cada valor de “bkg” deve ser lido apenas pelo componente correspondente, por exemplo, bkgA deve ser lido pelo componente A.

● Dentro de cada componente, use o valor lido dentro do estilo de <h1> na propriedade backgroundColor.
● Use contextos (forma legada e forma atual) para prover e consumir os dados.
```
**02 ● Siga as instruções:**
```
● Dado o caminho para acessar a imagem de um Pokemon via Pokemon API:

[https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{NÚMER O}.png](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/%7BN%C3%9AMERO%7D.png)

● Onde NÚMERO deve ser substituído por um inteiro.
● Dentro da pastas atividades/atividade02/02Pokemon, cria os arquivos:
  ○ ComponenteAvo.jsx
  ○ ComponenteFilho.jsx
  ○ ComponenteNeto.jsx
● Cada arquivo deve implementar um componente correspondente e chamar o seus descendente (avô chama filho que chama neto).
● Em ComponenteAvo você deve compartilhar, via contexto, um inteiro inicializando por 1. Esse número deve ser lido por todos os seus descendentes (consumido).
● Em cada componente você deve exibir um <img> usando o caminho acima substituindo o {NÚMERO} pela valor compartilhado no Contexto, no entanto:
● Em ComponenteAvo, você deve exibir o pokemon com o valor de NÚMERO
● Em ComponentePai, você deve exibir o pokemon com o valor de NÚMERO + 1
● Em ComponenteFilho, você deve exibir o pokemon com o valor de NÚMERO + 2 
```
**03 - Siga as instruções:**
```
Modifique o exercício 02 criando uma variável de estado “contador” e um botão que ao clicar modifica a variável contador somando 1 em seu valor. Essa variável é então compartilhada via Context.
```