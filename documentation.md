# General documentation

### Commands with Curl

```
curl http://<ip> --insecure --verbose
```

```
curl https://<ip> --insecure --verbose --header 'Host: <domain>'
```

```
curl -s -X GET https://url.com/api/v1/status | python3 -m json.tool
```

```
watch -n 1 'curl -s https://defilab.com.br
/api/v1/status | jq'
```

## Docker

Subir container

```

docker compose up

```

Para rodar em background (detach)

```

docker compose up -d

```

Quando o arquivo não esta na raiz e precisa especifica-lo

```

docker compose -f infra/compose.yaml up

```

Parar o container

```

docker compose -f infra/compose.yaml down

```

Listar container

```

docker ps -a

```

Recriar Container

```

docker compose up -d --force-recreate

```

## Linux

Atualizar pacotes

```

sudo apt update

```

## Postgres

```

sudo apt install postgresql-client

```

```

psql --host=localhost --username=postgres --port=5432

```

# Banco de dados

- **DBMS**: `Postgres`
- **Query**: `pg` (Usado para se conectar e fazer as queries)
- **Migrations**: `node-pg-migrate` (Gerenciar as migrations)

## Migrations

### node-pg-migrations

[node-pg-migrate documentation](https://salsita.github.io/node-pg-migrate/api)

Criar migrations (--migrations-dir)

```

node-pg-migrate -m infra/migrations create <migration-name>

```

## ESLint and Prettier

[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)

[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

## Conventional Commits

[Site do Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Link para a documentação do commitlint

[commitlint.js.org](https://commitlint.js.org/)

### Links para as páginas no NPM dos módulos instalados

[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)

[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

### Link para a documentação do Husky

[Husky](https://typicode.github.io/husky/)

### Link para a página no NPM do commitizen

[Commitizen](https://www.npmjs.com/package/commitizen)

### Peer Dependencies

Checar dependencias deprecated

```
npm outdated
```
