# Curso de Programação Avançada Front End

### Aula 1
**Data:** 09/12/2022

#### Introdução

Semântica x Sintaxe.

Tag `canvas`: permite parte gráfica de HTML com API.

As partes do site são definidas pelas seguintes tags:

- section;
- article;
- nav;
- aside;
- header;
- footer.

Tag `embed`: uso de plugins.

Tag `progress`: representa dados em progresso. Exemplo: download de um arquivo.

Conteúdo que envolve hora, semanticamente é correto colocar a tag `<time> </time>`.

Hoje em dia já é possível fazer validação de dados "inputados" pelo usuário, eliminando a necessidade de validação em scripts externos.

Criação do atributo `required` que exige e indica a obrigatoriedade do preenchimento de um campo dentro de um formulário.

A tag `<i>` que antes era itálico agora representa informações em outras línguas ou um novo tom de voz para leitores de tela.

#### Boas práticas em JavaScript

1. Não utilizar `document.write()`;
2. Para efeito de performance, colocar o caminho para o arquivo externo no fim da tag `body` em vez de usar o `defer`;
3. Todas as variáveis booleanas devem começar com `is`. Exemplo: `usernameIsNull()`, `usernameIsShort()`;
4. Nomeie variáveis e funções de forma lógica. Por exemplo: `popUpWindowForAd` ao invés de `myWindow`;
5. Não faça reduções ao nomear variáveis com exceção de `i` (interador). Dentro dos laços `for` os nomes devem ser longos o suficiente para entender o que aquele pedaço de código fará;
6. Documentação deve seguir o padrão Natural Docs (tipo javadoc);
7. Constantes ou variáveis de configuração (duração de animações por exemplo) devem ficar no começo do arquivo;
8. Reduza variáveis globais - quantos menos as criar, melhor;
9. Esforce-se para criar funções que possam ser generalizadas, ter parâmetros e valores de retorno;
10. Todas as variáveis Javascript devem ser escritas apenas com minúsculas ou cammelCase. A única exceção para este caso é se estiver criando Constructor Functions, quais começam com maiúsculas por tradição.

#### Conceito Mobile-First

Criar a aplicação partindo de um dispositivo móvel.

**Media query:** consiste de um *media type* e pelo menos uma expressão que limita o escopo das folhas de estilo usando *media features*, tal como lagura, altura e cor. **Isso não é mobile-first**.

Ler a página da MDN Docs Usndo Media Queries. 

> Não utilizar em ou px e sim .rem.

olhar `fr`.

### Aula 2
**Data:** 12/12/22

https://www.freecodecamp.org/portuguese/news/elementos-semanticos-do-html5-explicados/

https://stackoverflow.com/questions/65547552/right-implementation-of-nav-for-burger-menu-html5-semantic

https://cursos.alura.com.br/forum/topico-footer-sempre-ao-final-da-pagina-22772

Os arquivos referentes ao Challenge01 foram movidos para a pasta challenge01.

A pasta `docs` diz respeito à aula do dia 12/12/2022, iniciando com o bootstrap.

~Java 8 Prático Lambdas, Streams e os novos recursos da linguagem~

TODO : trocar o @media para @media (min-width: 480px); @media (min-width: 768px)

#### Bootstrap

### Aula 3
**Data:** 13/12/2022

#### Bootstrap

O grid do bootstrap é dividido em doze colunas e é utilizado: `. col-(prefixo)-(tamanho)`

Os prefixos existentes sao `xs` para telas abaixo de 768px, `sm` para telas de 768px até 992px, `md` para telas de 992px até 1200px e `lg` para telas acima de 1200px.

// utilizando mobile-first so especificamos os prefixos para tablet e desktop
`col-12` => 1 coluna para mobile

`col-sm-6` => 2 colunas para tablet. O tamanho é 6, pois é 12 (tamanho total) dividido pela **qtd** de colunas desejada.

`col-md-3` => 4 colunas para desktop.

svgrepo.com => repositório de svg
freepik => repositório de svg tambem

É possível editar svgs, basta abrir com o vscode. Ele vai abrir o XML correspondente ao vetor.

Se nao der certo o parallax.js usando apenas as linhas

```javascript
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></script>
```

baixar em https://pixelcog.github.io/parallax.js/