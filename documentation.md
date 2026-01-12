# General documentation

### Commands

```
curl http://<ip> --insecure --verbose
```

```
curl https://<ip> --insecure --verbose --header 'Host: <domain>'
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
