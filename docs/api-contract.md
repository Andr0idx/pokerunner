# Contrato inicial da API

## Objetivo

Definir como o site e o aplicativo desktop conversarão com os serviços do PokéRunner.

A API receberá pedidos, validará os dados e devolverá respostas em JSON. Ela também protegerá os dados da conta e fará a comunicação com o banco. O site e o aplicativo não se conectarão diretamente ao banco de dados.

Este contrato é inicial. Os caminhos e formatos poderão mudar antes da implementação.

## Dois tipos de dados

### Catálogo de Pokémon

Os dados públicos de Pokémon virão de uma cópia organizada e armazenada em cache a partir da PokéAPI, compartilhada entre o site e o aplicativo desktop.

A consulta à Pokédex não exigirá login. A aplicação não deverá consultar a PokéAPI repetidamente a cada clique ou visita.

O formato final e o processo para gerar e atualizar essa cópia ainda serão definidos.

### Dados da conta

A API do PokéRunner cuidará dos dados pessoais salvos pelo usuário. Inicialmente, isso inclui times e golpes escolhidos.

As rotas de conta exigirão login. O provedor de autenticação ainda será escolhido.

## Fluxo de uma solicitação

1. O site ou aplicativo envia uma solicitação HTTP à API.
2. A API identifica a rota e a ação solicitada.
3. Para dados privados, verifica se o usuário está autenticado e se é dono do time.
4. Valida os dados recebidos.
5. Consulta ou atualiza o banco de dados.
6. Devolve o resultado em JSON e um código HTTP apropriado.

## Rotas iniciais propostas

A versão inicial da API poderá oferecer:

| Método | Rota | Ação | Login |
|---|---|---|---|
| `GET` | `/api/v1/account` | Consultar a conta atual | Obrigatório |
| `GET` | `/api/v1/teams` | Listar os times da conta atual | Obrigatório |
| `POST` | `/api/v1/teams` | Criar um time | Obrigatório |
| `GET` | `/api/v1/teams/{teamId}` | Consultar um time da conta atual | Obrigatório |
| `PUT` | `/api/v1/teams/{teamId}` | Atualizar um time da conta atual | Obrigatório |
| `DELETE` | `/api/v1/teams/{teamId}` | Excluir um time da conta atual | Obrigatório |

A Pokédex não precisa dessas rotas se o catálogo for fornecido como dados públicos empacotados ou publicados junto com a aplicação. Uma API de consulta ao catálogo poderá ser criada mais tarde caso a arquitetura precise dela.

## Exemplo de criação de time

O aplicativo envia os dados que o usuário escolheu:

```json
{
  "name": "Time ORAS",
  "game": "omega-ruby-alpha-sapphire",
  "members": [
    {
      "pokemon": "pikachu",
      "form": null,
      "moves": ["thunderbolt", "quick-attack"]
    }
  ]
}
```

A API valida as referências e salva o time associado à conta autenticada. O identificador do dono da conta deverá vir da sessão verificada pelo servidor, não de um campo enviado pelo aplicativo.

Uma resposta bem-sucedida poderá devolver o time criado, incluindo seu identificador. Os campos finais serão definidos quando o modelo de dados for detalhado.

## Respostas e erros

A API deverá usar códigos HTTP de acordo com o resultado, por exemplo:

- `200`: consulta ou atualização bem-sucedida;
- `201`: recurso criado;
- `204`: ação concluída sem conteúdo de resposta;
- `401`: usuário não autenticado;
- `404`: time inexistente ou não pertencente à conta;
- `422`: dados recebidos inválidos.

As respostas de erro deverão explicar o problema sem revelar credenciais ou detalhes internos do servidor.

## Regras de segurança

- O banco de dados só será acessado pelo servidor da API.
- A porta do banco não deverá ser exposta diretamente à internet.
- O servidor identificará a conta a partir da autenticação verificada.
- Toda rota privada verificará a propriedade dos dados antes de consultar ou alterar um time.
- Senhas e chaves secretas não serão colocadas no código do site ou do aplicativo.
- O serviço de autenticação, hospedagem, banco e formato final das sessões serão escolhidos antes de implementar contas reais.

## Decisões ainda em aberto

- Provedor de autenticação.
- Hospedagem do servidor e do banco.
- MariaDB ou outro banco para os times.
- Campos finais de times, integrantes e golpes.
- Formato e processo de atualização do catálogo em cache.
- Se o catálogo será importado como arquivos de dados ou servido por rotas públicas.