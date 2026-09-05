from fastapi import FastAPI
from sqlalchemy import text

from core.db import SessionLocal

app = FastAPI(title="Anoushka Portfolio API")


@app.get("/api/health")
def health_check() -> dict:
    with SessionLocal() as db:
        db.execute(text("SELECT 1"))
    return {"status": "ok"}
