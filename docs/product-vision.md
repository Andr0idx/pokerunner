# PokéRunner — visão do produto

## Objetivo

Criar um guia e assistente de batalha para a comunidade Pokémon, com uma experiência web pública e um aplicativo desktop para acompanhar batalhas em tempo real.

## Público

Pessoas que jogam Pokémon e querem consultar informações, organizar seus times e receber ajuda antes e durante as batalhas.

## Experiência web

A versão web será pública e reunirá funções que não dependem de conexão com um emulador:

- consultar a Pokédex;
- montar e gerenciar um time;
- receber sugestões de golpes disponíveis no jogo selecionado;
- analisar cobertura de tipos e fraquezas compartilhadas pelo time;
- consultar tipos e efetividades;
- descobrir locais de captura;
- receber recomendações de batalha quando o jogador escolhe manualmente o oponente.

As análises do time deverão explicar os motivos das sugestões e deixar o jogador no controle das escolhas.

## Aplicativo desktop

O aplicativo para Windows oferecerá as funções da versão web e incluirá o modo Real Time. Ele se conectará localmente ao emulador, detectará o oponente durante a batalha e atualizará as recomendações para o time do jogador.

## Primeiro alvo

A primeira combinação planejada para o modo Real Time é:

- Windows;
- emulador Azahar;
- Pokémon Omega Ruby ou Alpha Sapphire.

O projeto deve permitir investigar outras combinações de emulador e jogo. Cada integração será adicionada e documentada depois de ser validada.

### Montagem do time

Durante a montagem do time, o PokéRunner poderá sugerir golpes para cada Pokémon e explicar por que são opções interessantes. O usuário escolhe quais golpes quer incluir no seu time.

A ferramenta também poderá analisar equilíbrio, cobertura de tipos e fraquezas do time, apresentando os motivos das recomendações.

### Batalha manual e Real Time

As recomendações de batalha devem considerar os golpes que o usuário selecionou para cada Pokémon. Sugestões de golpes só serão consideradas disponíveis depois que o usuário as escolher.

No modo Real Time, o PokéRunner poderá considerar os golpes disponíveis no momento da batalha quando conseguir obter essa informação. Se não conseguir confirmá-los, deverá deixar essa limitação clara e usar os golpes configurados pelo usuário.

### Conta e sincronização

O site e o aplicativo desktop deverão usar a mesma conta para permitir que o usuário acesse seus dados nos dois ambientes.

A conta poderá guardar dados do PokéRunner, como times, Pokémon marcados e preferências. Acompanhar ou sincronizar o progresso do jogo não faz parte desta definição inicial.

A navegação e as funções que não precisam de dados salvos poderão ser avaliadas para uso sem login. Cadastro, autenticação, armazenamento e sincronização serão planejados antes da implementação.

## Objetivos de qualidade

- Manter a interface, as regras de batalha e as integrações com emuladores em módulos organizados.
- Compartilhar entre as versões web e desktop as funções que servem às duas.
- Considerar o jogo e a versão selecionados ao sugerir golpes e analisar equipes.
- Explicar as sugestões de equipe, em vez de apresentar uma avaliação sem justificativa.
- Exibir claramente o estado da conexão e orientar a recuperação quando ocorrer uma falha.
- Documentar desenvolvimento, instalação, uso e solução de problemas.
- Construir o projeto em etapas, explicando e revisando as decisões com quem está aprendendo.

## Projetos anteriores

`Projeto-PokeGuide` e `Runner-Pok-Guide` serão mantidos como referências. O novo código do PokéRunner começará em uma estrutura limpa, recuperando as ideias e funções úteis depois de entendermos como funcionam.

## Planos futuros

- Adicionar uma calculadora de dano para comparar golpes e cenários de batalha.
- Explorar ferramentas para formatos competitivos específicos, como análise de equipes e regras de formato.
- Ampliar a compatibilidade com outros emuladores e jogos por meio de integrações separadas.
- Avaliar distribuição comercial somente depois de revisar permissões, licenças e materiais usados pelo projeto.

O PokéRunner será um projeto independente e não deverá sugerir vínculo oficial com Pokémon, Nintendo ou fabricantes de emuladores.