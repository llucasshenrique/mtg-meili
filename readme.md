# MTG Meili

Este projeto usa Deno para popular uma instância do MeiliSearch com dados do MTGJson.

## Pré-requisitos

- Deno
- MeiliSearch

## Configuração

1. Clone este repositório para o seu sistema local.
2. Navegue até o diretório do projeto.
3. Copie o `example.env` para `.env` e mude as variaveis apontando para sua instancia e configurando uma chave de api segura

Você pode utilizar o `docker compose up --detached` para subir uma instancia local para seus testes.

## Uso

1. Inicie sua instância do MeiliSearch.
2. Execute o script Deno para popular o MeiliSearch com os dados do MTGJson:

```bash
deno run --allow-read --allow-net --allow-write --allow-run --allow-env main.ts
```