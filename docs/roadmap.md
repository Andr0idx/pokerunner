# Roadmap inicial

## Objetivo

Construir o PokéRunner em etapas, validando cada parte antes de depender dela nas seguintes. Este roadmap descreve uma ordem inicial de trabalho, não datas ou promessas de entrega. A sequência poderá ser ajustada conforme aprendermos mais.

## Etapa 0 — Base do projeto

**Estado: concluída**

- Criar um repositório novo para o PokéRunner.
- Registrar a visão do produto.
- Analisar os dois projetos anteriores.
- Documentar a arquitetura inicial e a stack prevista.

## Etapa 1 — Regras e dados do produto

Antes de criar as funções principais, definir:

- quais jogos e versões a primeira experiência web deverá cobrir;
- quais dados serão necessários para a Pokédex, os golpes e os locais de captura;
- como indicar se um golpe é sugerido, escolhido pelo usuário ou confirmado durante uma batalha;
- quais regras a análise de tipos e de equilíbrio do time deverá considerar;
- quais dados de perfil, times e preferências serão salvos na conta;
- quais dados poderão ser consultados sem login.

**Critério para avançar:** as regras e os dados mínimos da primeira versão estarão documentados e serão suficientes para planejar o núcleo compartilhado.

## Etapa 2 — Primeira experiência web

Construir uma versão web inicial com:

- consulta à Pokédex;
- seleção do jogo ou versão relevante;
- montagem de times;
- sugestões de golpes com explicação e disponibilidade por jogo;
- análise de cobertura e fraquezas;
- batalha manual contra um oponente escolhido pelo usuário;
- recomendações baseadas nos golpes selecionados para o time.

O cadastro, o login e o armazenamento dos dados deverão ser incluídos antes de oferecer salvamento e sincronização entre dispositivos. A mesma conta deverá ser compatível com a futura aplicação desktop.

**Critério para avançar:** o usuário consegue criar uma conta, montar e salvar um time, voltar a ele e entender por que o PokéRunner recomenda determinado golpe ou Pokémon.

## Etapa 3 — Aplicativo desktop

Criar o aplicativo para Windows reutilizando a experiência web e o núcleo compartilhado.

Nesta etapa, o aplicativo deverá permitir que o usuário entre na mesma conta e acesse os dados sincronizados. O Real Time poderá continuar em desenvolvimento separado.

**Critério para avançar:** as funções web planejadas para a primeira versão funcionam no aplicativo desktop sem duplicar as regras de negócio.

## Etapa 4 — Real Time para Azahar e ORAS

Investigar e implementar a primeira integração com Windows, Azahar e Pokémon Omega Ruby/Alpha Sapphire.

A integração deverá:

- comunicar claramente se está conectada;
- identificar o oponente apenas quando houver dados confiáveis;
- atualizar as recomendações com o time configurado pelo usuário;
- usar golpes atuais somente quando puder confirmá-los;
- orientar o usuário quando não houver dados suficientes ou a conexão falhar.

**Critério para avançar:** o fluxo foi validado no ambiente-alvo e deixa claras as limitações de detecção.

## Etapa 5 — Recursos futuros

Depois da primeira experiência estar bem definida, avaliar:

- calculadora de dano com cenários configuráveis;
- recursos para formatos competitivos específicos;
- compatibilidade com outros jogos e emuladores;
- distribuição pública e formas de contribuição.

Cada recurso deverá ter seu escopo e suas fontes de dados documentados antes da implementação.

## Princípios de desenvolvimento

- Priorizar uma experiência web útil antes de expandir as integrações com emuladores.
- Manter as regras compartilhadas entre web e desktop.
- Projetar o armazenamento pensando na conta comum às duas plataformas.
- Mostrar a origem e as limitações das sugestões.
- Não afirmar que um golpe está disponível no momento da batalha sem confirmação.
- Validar cada integração com o jogo e o emulador indicados.