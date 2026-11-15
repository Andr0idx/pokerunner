# Análise dos projetos anteriores

## Escopo desta análise

Esta análise foi feita lendo os arquivos disponíveis nas branches `main` dos repositórios antigos. Ela descreve o que o código contém; não confirma que todas as funções executam corretamente.

Os repositórios originais continuarão preservados como referência durante a reconstrução do PokéRunner.

## Projeto-PokeGuide

O [Projeto-PokeGuide](https://github.com/Andr0idx/Projeto-PokeGuide) é a versão anterior do guia. Sua aplicação principal está concentrada no arquivo [`index.html`](https://github.com/Andr0idx/Projeto-PokeGuide/blob/main/index.html).

O projeto inclui:

- montagem de time;
- consulta à Pokédex;
- busca de locais de captura;
- consulta de tipos e efetividade;
- recomendação de batalha após escolher um oponente;
- dados carregados da PokéAPI e armazenados em cache local.

O [README](https://github.com/Andr0idx/Projeto-PokeGuide/blob/main/README.md) também descreve o uso pelo GitHub Pages.

## Runner-Pok-Guide

O [Runner-Pok-Guide](https://github.com/Andr0idx/Runner-Pok-Guide) mantém as funções principais do PokéGuide e acrescenta a tela Real Time.

A tela Real Time recebe eventos de uma ponte local e usa o Pokémon detectado como oponente para atualizar a recomendação do time salvo no app. O código dessa tela está no [`index.html`](https://github.com/Andr0idx/Runner-Pok-Guide/blob/main/index.html); a comunicação com o emulador está em [`realtime_bridge.py`](https://github.com/Andr0idx/Runner-Pok-Guide/blob/main/realtime_bridge.py).

A ponte atual:

- consulta a RPC do Citra/Azahar por UDP;
- procura endereços candidatos na memória do emulador;
- verifica se os valores lidos permanecem estáveis;
- envia os Pokémon detectados para a tela por eventos SSE;
- oferece modos de identificação automática, selvagem ou treinador.

O arquivo [`web/electron/main.cjs`](https://github.com/Andr0idx/Runner-Pok-Guide/blob/main/web/electron/main.cjs) cria a janela desktop e inicia a ponte Python. A configuração de empacotamento inclui o script Python; o aplicativo tenta iniciá-lo por `python` ou `py`. Isso pode exigir Python instalado no computador que executar a versão empacotada e será um ponto a rever.

## Limites da recomendação de batalha existente

A função atual [`computeBattleAnalysis`](https://github.com/Andr0idx/Runner-Pok-Guide/blob/main/index.html#L1193) analisa os golpes já escolhidos para cada Pokémon e calcula relações de efetividade por tipo contra o oponente.

Ela também verifica se os golpes cadastrados são aprendíveis no grupo de jogos selecionado. A pontuação usada para ordenar o time é uma heurística baseada em efetividade e fraquezas.

Não encontramos nesse cálculo uma previsão exata de dano baseada em poder do golpe, atributos completos, itens, habilidades e outras condições de batalha. Também não encontramos um recurso que escolha automaticamente um conjunto de golpes para o usuário.

## Pontos que queremos preservar como ideias

- A Pokédex, os dados de captura e o contexto de cada jogo.
- A montagem do time com até seis Pokémon.
- A recomendação contra um oponente escolhido manualmente.
- A identificação automática do oponente no modo Real Time.
- A possibilidade de indicar para qual jogo ou versão o usuário está montando o time.

## Direção para a reconstrução

O novo PokéRunner começará em uma estrutura limpa. As versões antigas servirão como referência funcional, sem obrigar a nova arquitetura a repetir a organização atual.

A reconstrução deve separar:

- a experiência web e a interface desktop;
- os dados e as regras de batalha;
- as recomendações do time;
- a comunicação com cada emulador e jogo.

A primeira integração de Real Time planejada é Windows, Azahar e Pokémon Omega Ruby/Alpha Sapphire. Outras combinações serão tratadas como integrações futuras e documentadas após validação.

## Próximas verificações

- Executar localmente as duas versões antigas e observar o comportamento de cada tela.
- Confirmar quais funções são úteis e quais apresentam problemas no uso real.
- Investigar a dependência de Python na versão desktop empacotada.
- Definir os critérios para as novas sugestões de golpes e análises de equilíbrio do time.