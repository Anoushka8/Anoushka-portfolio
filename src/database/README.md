# Database Migrations

Alembic migrations for the Postgres + pgvector schema. Models live in `../backend/models/`; this directory only holds migration scaffolding and generated revisions.

Run all commands from `src/backend/` (so `.env` resolves and `core`/`models` are importable):

```bash
cd src/backend
alembic -c ../database/alembic.ini revision --autogenerate -m "describe change"
alembic -c ../database/alembic.ini upgrade head
```

`docker-compose` runs `alembic upgrade head` automatically before starting the `backend` service.
