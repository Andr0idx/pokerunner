# Escopo inicial do MVP

## Objetivo

Definir a primeira versão útil do PokéRunner e separar o que entra nela do que ficará para etapas futuras.

Este escopo registra as decisões atuais. Ele poderá ser ajustado conforme validarmos os dados e as funções do projeto.

## Público inicial

Pessoas que querem consultar informações de Pokémon, montar um time e entender recomendações para uma batalha.

## Primeira experiência web

### Pokédex e montagem de time

- Consultar a Pokédex completa, com todos os Pokémon, formas e variantes.
- Criar um time com até seis Pokémon.
- Consultar a disponibilidade de golpes e locais de captura por jogo.
- Receber sugestões de golpes compatíveis com o jogo selecionado.
- Escolher quais golpes farão parte do time.
- Ver a cobertura ofensiva dos golpes escolhidos.
- Analisar as fraquezas defensivas do time por efetividade de tipos, incluindo quantos Pokémon são vulneráveis ou resistentes a cada tipo.
- Explicar os motivos das sugestões e análises.

### Batalha manual

- Escolher um Pokémon oponente.
- Receber recomendações para o time montado.
- Basear as recomendações nos golpes escolhidos pelo usuário.
- Explicar os fatores usados e indicar quando faltarem informações.

Uma sugestão de golpe não será tratada como parte do time até que o usuário a escolha.

### Conta e dados salvos

- Permitir consultar a Pokédex sem login.
- Não salvar dados de forma persistente para quem não estiver conectado a uma conta.
- Exigir login para salvar times e os golpes escolhidos.
- Planejar a mesma conta para uso no site e no futuro aplicativo desktop.
- Começar armazenando somente times e golpes escolhidos. Outros dados poderão ser acrescentados depois.

O acompanhamento de progresso dentro do jogo ou do PokéRunner permanece indefinido e fora do escopo inicial.

## Primeiro recorte de dados por jogo

A Pokédex geral deverá cobrir todos os Pokémon, formas e variantes. Os dados que dependem de um jogo específico começarão por **Pokémon Omega Ruby e Alpha Sapphire (ORAS)**, incluindo disponibilidade de golpes e locais de captura.

Não devemos apresentar um golpe ou local como disponível em todos os jogos quando ele só tiver sido conferido para ORAS. A compatibilidade com outros jogos poderá ser acrescentada depois, jogo por jogo.

## Fonte de dados

A PokéAPI é a fonte preferida para avaliação, mas ainda precisamos confirmar se ela cobre todos os Pokémon, formas, variantes e dados de ORAS necessários.

A PokéAPI é um projeto comunitário, não uma API oficial da Pokémon Company. Sua documentação recomenda armazenar localmente os dados consultados de acordo com a política de uso.

- [Documentação da PokéAPI](https://pokeapi.co/docs/v2)
- [Sobre o projeto PokéAPI](https://pokeapi.github.io/pokeapi.co/about/)

A seleção final da fonte depende da validação de cobertura e da estratégia de atualização dos dados.

## Fora da primeira versão

- Conexão Real Time com emuladores.
- Sincronização de saves ou do progresso interno dos jogos.
- Calculadora numérica exata de dano.
- Recursos especializados para formatos competitivos.
- Dados completos de golpes e captura para todos os jogos além de ORAS.
- Integrações com outros emuladores.

Esses itens poderão ser planejados depois que as funções básicas forem compreendidas e validadas.

## Limites das análises iniciais

A análise de equipe deverá considerar:

- a cobertura ofensiva dos golpes escolhidos;
- as fraquezas e resistências defensivas dos Pokémon do time por efetividade de tipos.

A primeira versão não deverá se apresentar como uma calculadora exata de dano. Um cálculo numérico exigiria outros dados e regras de batalha, que poderão ser planejados como recurso futuro.

As recomendações devem explicar seus motivos e sinalizar quando não houver dados suficientes.

## Critérios para considerar o MVP pronto para avaliação

- O usuário consegue consultar todos os Pokémon, formas e variantes incluídos na fonte validada.
- O usuário consegue montar um time e escolher golpes compatíveis com ORAS.
- A análise mostra a cobertura dos golpes escolhidos e as fraquezas defensivas do time.
- A batalha manual usa os golpes escolhidos pelo usuário.
- O usuário consegue criar uma conta, salvar um time e acessá-lo novamente.
- O PokéRunner deixa claras as limitações dos dados e das recomendações.

## Decisões ainda em aberto

- Confirmar que a PokéAPI cobre a Pokédex completa — incluindo formas e variantes — e os dados necessários para ORAS.
- Definir como os dados consultados serão armazenados e atualizados no projeto.
- Definir futuramente quais outros dados do usuário poderão ser salvos na conta.