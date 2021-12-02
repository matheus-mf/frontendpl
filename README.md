# Avaliação Pleno
Olá desenvolvedor!\
Tudo bem?! 😊\
\
Seja bem-vindo, o intuito do teste não é reprovar e sim conhecer seu melhor estilo de programar e resolver problemas.

[Link para o layout](https://xd.adobe.com/view/c715f110-fbd4-4323-be0c-0e453c1450db-9246)
[PokeAPI](https://pokeapi.co/)

## Para rodar o projeto
0. Ter o node com yarn no computador [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
1. Instalar dependencies do projeto `yarn`
2. Resolver eventuais erros de lint `yarn format`
3. Executar o projeto `yarn start`

## Etapas restantes / Como resolveria

### Criar ação do Drawer para formulário de cadastro
Para criação do Drawer, eu faria um componente te teria todo controle de estado (aberto ou fechado)
vinculado a ele, tendo a liberdade de passar qualquer conteúdo por Props.
Também varia uso do [Portals](https://pt-br.reactjs.org/docs/portals.html), para inserir o
componente no boby evitando herança de estilização.

exemplo:
```tsx
return ReactDOM.createPortal(
     <Drawer>
      ...
     </Drawer>
,document.body);
```

### Criação do serviço para lidar com a chama a API
Para fazer as chamas a API eu deixaria tudo organizado na pasta services utilizando o axios
para como serviço para fazer as chamas HTTP [Exemplo](https://github.com/matheus-mf/treinamento-vue3/tree/master/dashboard/src/services).
Deste modo, toda a lógica de chamadas HTTP ficaria fora dos componentes.

### Validação dos formularies
Eu criaria uma pasta com utils onde colocaria funções usando Regex e condicionais simples para 
lidar com as regras para submissão do formulário.

## Dicas
* Não foi definido limite de linhas e colunas, portanto fique à vontade para tal escolha.
* Gostamos de interfaces limpas e elegantes.

## Quais tecnologias usar
* Deixaremos a seu critério qual tecnologia utilizar no entanto você terá mais pontos conosco se utilizar React para criação da interface e também o uso de pré-processadores/styled-components para o CSS.

## Desafios se você se sentir confiante
* Colocar em algum lugar do site uma integração com o clima tempo. Deixaremos a seu critério de onde colocar e quais funcionalidades terá.
* Precisa ser criada uma conta free para o consumo da API clima tempo.
* [Link da API clima tempo](https://advisor.climatempo.com.br/)
