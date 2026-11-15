# PokéRunner

PokéRunner é um projeto em planejamento para criar um guia e assistente de batalha Pokémon, com uma experiência web e um aplicativo desktop.

A proposta combina consulta à Pokédex, montagem de times e análise de batalhas. A versão desktop poderá acrescentar um modo Real Time conectado a um emulador compatível.

> O projeto está na fase de planejamento e reconstrução. Ainda não há uma versão pronta para uso.

## O que queremos construir

- **Pokédex e guia:** consultar informações de Pokémon, tipos e locais de captura.
- **Montagem de times:** salvar equipes, receber sugestões de golpes e analisar cobertura e fraquezas.
- **Batalha manual:** escolher um oponente e receber recomendações baseadas nos golpes selecionados pelo usuário.
- **Aplicativo desktop:** oferecer as funções do site e investigar o modo Real Time para Windows, começando por Azahar e Pokémon Omega Ruby/Alpha Sapphire.
- **Conta e sincronização:** permitir que o usuário acesse seus dados do PokéRunner no site e no aplicativo.

As sugestões de golpes serão apresentadas durante a montagem do time. Nas batalhas, as recomendações deverão considerar os golpes escolhidos pelo usuário; no modo Real Time, golpes atuais só serão usados quando puderem ser confirmados.

## Documentação

- [Visão do produto](docs/product-vision.md)
- [Análise dos projetos anteriores](docs/legacy-review.md)
- [Arquitetura inicial](docs/architecture.md)
- [Roadmap inicial](docs/roadmap.md)

## Estado atual

O PokéRunner está começando com uma estrutura limpa. `Projeto-PokeGuide` e `Runner-Pok-Guide` são referências para entender ideias e funções anteriores; o novo código será desenvolvido separadamente e de forma organizada.

A stack inicial planejada é JavaScript, sem TypeScript nesta etapa, com React para as interfaces, Vite para a aplicação web e Electron para o aplicativo desktop. Essa base poderá ser revisada durante o desenvolvimento. O serviço de contas, o banco de dados e a tecnologia da API ainda serão escolhidos.

## Desenvolvimento

O projeto será construído em etapas. As decisões de produto, arquitetura, instalação e uso serão documentadas à medida que forem validadas.

## Aviso

PokéRunner é um projeto independente, sem vínculo oficial com a Nintendo, The Pokémon Company ou Game Freak. Nomes e marcas Pokémon pertencem aos respectivos titulares.