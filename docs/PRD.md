# PRD — Anoushka Dandawate Portfolio v2

**Status:** Draft for review
**Source of truth for design/content:** `HTML_Site/` (static reference implementation — do not delete; keep as visual/content spec until parity is verified)
**Owner:** Anoushka Dandawate (product), Yogesh Dandawate (engineering)

---

## 1. Problem & Goal

The current portfolio (`HTML_Site/index.html`, `about.html`, `work.html`) is a static, hand-built site with all content hardcoded inline (HTML strings + a JS array in `<script>` tags). It works, but:

- Content changes (new project, new book, updated experience) require editing raw HTML/JS.
- There's no way for a visitor to ask a question and get an answer grounded in Anoushka's actual work — they have to read everything themselves.
- There's no persistence layer, so nothing can be queried, searched, or managed over time.

**Goal:** Rebuild as a Next.js frontend + FastAPI backend + Postgres (pgvector) system that:
1. Replicates the existing site pixel-for-pixel in look, motion, and interaction (this is a rebuild of the presentation layer, not a redesign).
2. Moves all content (projects, experience, reading library, about copy) into Postgres, managed via an authenticated admin UI.
3. Adds a RAG-based chatbot, scoped strictly to answering visitor questions about Anoushka's portfolio content — no general-purpose chat.

## 2. Non-Goals

- No visual redesign. Every layout, animation, and interaction listed in §4 must be preserved as-is.
- No production hosting decision in this phase (local dev via docker-compose only; hosting is a separate later PRD).
- No multi-tenant / multi-user support — this is a single-owner portfolio with one admin (Anoushka).
- No general-purpose AI chat, no chit-chat, no answering questions unrelated to the portfolio.
- No payment, auth-for-visitors, comments, or social features.

## 3. Users

| User | Need |
|---|---|
| Visitor (recruiter, collaborator, curious stranger) | Browse the portfolio; optionally ask the chatbot a question instead of reading everything |
| Anoushka (owner/admin) | Add/edit/remove projects, experience entries, reading-library items, about copy — without touching code |

## 4. Functional Scope — Site Parity (from `HTML_Site/`)

Every item below exists in the current static site and must be replicated exactly in the rebuild.

### 4.1 Pages
- **Home** (`index.html`): hero identity card (flip to portfolio ID), scrolling ribbon, featured work grid (4 projects), interactive "process board" (draggable sticker tiles + Systemize toggle), scrolling tool dock, about summary + traits + experience accordion list, Emrys Craft side-quest section, "more explorations" small-card grid + ribbon, reading library (draggable bookshelf), footer with draggable letters.
- **About** (`about.html`): jack/joker playing-card flip, profile/traits repeat, draggable pannable "memory wall" gallery (10 cards).
- **Work** (`work.html`): archive grid of 6 project/experience cards.

### 4.2 Interactive behaviors (must port as React components/hooks)
- Hero identity card flip (click/keyboard, custom cursor follow) — `swapHeroCard`
- Project case-study modal (`<dialog>`) populated from project data — `projects` array + click handlers
- Process board: draggable sticker tiles (pointer + arrow-key), "Systemize" order toggle
- Toolkit dock: infinite CSS marquee, pauses on hover
- Experience list: expand/collapse accordion per row
- Reading library: horizontal drag-scroll bookshelf, click-to-select detail panel, deterministic interleave ordering of mine/recommended/books
- Footer: draggable individual letters + monogram parts, hover "MOVE" selection box, double-click reset
- About page: jack/joker card stack flip; pannable/draggable "memory canvas" with arrow-key support and recenter button
- Scroll-spy nav (IntersectionObserver → `aria-current`)
- Reveal-on-scroll animations (respect `prefers-reduced-motion`)
- Mobile nav toggle (hamburger)

### 4.3 Content → becomes DB-backed (see §6 schema)
- 4 featured projects (Glow, Ayojak, Perplexity, Reloom) — each with question/subtitle/description/role/tags/categories/challenge/steps/learning
- Experience entries (Accenture, Emrys Craft, Harshdeep Foundation, MIT ADT) — org, logo, dates, title, summary, expandable detail
- Reading library items (own Medium posts, recommended-article placeholders, book placeholders) — 22 items across 3 kinds
- About/hero copy (bio blurb, traits, "currently curious about" tags, quote)
- Social links (email, LinkedIn, Behance, Medium)

Everything in §4.3 is currently a literal JS array or inline HTML string. In the rebuild, this becomes rows in Postgres, fetched by the Next.js frontend via the FastAPI backend, editable through the admin UI.

## 5. Chatbot Scope (RAG, strictly grounded)

**What it is:** A chat widget (likely footer/corner-launched) where a visitor asks questions like "What did she build at Accenture?" or "What's her design process?" and gets answers grounded in the portfolio content.

**What it is not:** general-purpose chat, personal-life Q&A beyond what's in "About," career advice, or anything not traceable to a content chunk.

**Behavior contract:**
- Every answer must be generated only from retrieved chunks (RAG over pgvector embeddings of: project descriptions/challenge/steps/learning, experience summaries/details, about copy, reading-library notes).
- If retrieval finds nothing relevant above a similarity threshold, the bot must say it doesn't have that information and suggest browsing the site — never hallucinate an answer.
- No conversation memory beyond the current session (no cross-visitor persistence of chat history tied to identity).
- Log anonymized query text + retrieved chunk ids for later relevance tuning (no PII capture beyond what the visitor types).

## 6. Data Model (Postgres + pgvector)

```
projects
  id            uuid pk
  slug          text unique        -- 'glow', 'ayojak', ...
  name          text
  question      text
  subtitle      text
  description   text
  role          text
  challenge     text
  learning      text
  read_minutes  int
  sort_order    int
  created_at / updated_at

project_tags        (project_id fk, tag text)
project_categories   (project_id fk, category text)
project_steps        (project_id fk, step_order int, step text)

experience_entries
  id, org_name, org_logo_url, title, date_range,
  summary, detail, sort_order, created_at/updated_at

reading_items
  id, kind (mine|recommended|books), title, label, note,
  color, link (nullable), sort_order, created_at/updated_at

about_content
  id, section_key (unique, e.g. 'hero_blurb', 'quote', 'traits'),
  body (text or jsonb depending on section), updated_at

social_links
  id, platform, url, sort_order

admin_users
  id, email, password_hash, created_at

-- RAG layer
content_chunks
  id, source_table, source_id, chunk_text,
  embedding vector(1536),           -- pgvector column
  created_at

chat_queries   (for logging/tuning, no auth required to write)
  id, query_text, retrieved_chunk_ids (jsonb), created_at
```

`content_chunks` is populated by a re-embedding step every time a source row (project, experience, about, reading item) is created/updated via the admin API — not a separate manual process.

## 7. Architecture

```
┌─────────────────────┐      ┌──────────────────────┐      ┌─────────────────────┐
│  Next.js (App Router)│ ---> │   FastAPI backend     │ ---> │  Postgres + pgvector │
│  - public site pages │ REST │  - /api/content/*     │ SQL  │  - content tables    │
│  - admin UI (auth'd) │      │  - /api/admin/*  (JWT)│      │  - content_chunks    │
│  - chat widget        │ ---> │  - /api/chat  (RAG)   │      │  - admin_users       │
└─────────────────────┘      └──────────────────────┘      └─────────────────────┘
                                       │
                                       ▼
                             Embeddings + LLM provider
                             (Anthropic/OpenAI — decide in Phase 3)
```

- **Frontend:** Next.js 14+ (App Router), React. `styles.css` is ported verbatim (same selectors, same hex values — `--blue: #0040ff`, `--ink: #253247`, etc. — same spacing/typography scale), not re-expressed in Tailwind or re-tokenized. The four `FTCalhern-*.otf` font files and the Plus Jakarta Sans Google Fonts import are carried over unchanged via the same `@font-face` declarations. No color, spacing, or font substitution of any kind — this is a hard constraint, not an implementation detail. All interactive behaviors from §4.2 become client components/hooks.
- **Backend:** FastAPI, SQLAlchemy + Alembic migrations, Pydantic schemas, JWT auth for admin routes only (public content routes are unauthenticated reads).
- **DB:** Postgres 16 + `pgvector` extension, run via docker-compose for local dev.
- **Chatbot:** retrieval via pgvector cosine similarity search on `content_chunks`, then an LLM call constrained by a system prompt that forbids answering outside retrieved context.

## 8. Security Baseline (per org policy)

- Admin routes require JWT auth (`Depends(get_current_admin)`); no admin action reachable without a valid token.
- Passwords hashed (bcrypt/argon2) in `admin_users`, never logged.
- All admin-write Pydantic schemas validate type/length/format (whitelist-based).
- No secrets (DB URL, JWT secret, LLM API key) in code — `.env`, gitignored.
- Public chat endpoint rate-limited to prevent abuse of the LLM API key.
- Parameterized queries only (SQLAlchemy ORM — no raw string-interpolated SQL).
- `.gitignore` covers `.env`, `*.pem`, `credentials.json`.

## 9. Directory Contract (new top-level dirs — justified below)

```
/HTML_Site/              existing static reference site — kept as design/content source of truth
/src/
  /frontend/             Next.js app (App Router, --src-dir layout: src/frontend/src/app/...)
    /src/app/            routes: /, /about, /work, /admin/*
    /src/components/     hero, project-grid, process-board, bookshelf, footer-letters, chat-widget, etc.
    /src/lib/            API client, hooks
    /styles/             ported CSS (verbatim — see §7) + fonts
    Dockerfile
  /backend/              FastAPI app — app code lives directly under backend/, no extra nesting
    /api/                routers: content.py, admin.py, chat.py, auth.py
    /models/              SQLAlchemy models
    /schemas/             Pydantic schemas
    /services/            embedding service, RAG retrieval service
    /core/                config, security (JWT), db session
    main.py               FastAPI app entrypoint
    requirements.txt / requirements-dev.txt
    .env.example
    Dockerfile
    /tests/
  /database/             Alembic migrations only — models stay in backend/models/
    alembic.ini           script_location=%(here)s/alembic (cwd-independent); prepend_sys_path=. (resolves core/models from backend cwd)
    /alembic/env.py
    /alembic/versions/
    README.md             how to run migrations locally vs. in docker-compose
/docker-compose.yml       postgres (pgvector image) + backend + frontend for local dev
/docs/                    all project documentation (PRD.md, this document, plus future ADRs under /docs/adr/)
```

Justification for `/src` as a new top-level dir: consolidates all source (frontend, backend, database/migrations) under one root per explicit direction, keeping `HTML_Site/` (reference-only) and `docs/` (documentation-only) clearly separated from buildable code. `/frontend`, `/backend`, `/database` as children of `/src` is a greenfield split — no existing app code to nest under, and this three-way separation (UI / API / migrations) is the standard, discoverable layout for this stack.

**Operational note:** Alembic migrations run from `src/backend/` (`alembic -c ../database/alembic.ini upgrade head`) so `.env` and `core`/`models` imports resolve correctly; `docker-compose` runs this automatically before starting the backend service. See `src/database/README.md`.

## 10. Implementation Plan — Phased (sized to actual scope: solo/small-team, not Loop 0)

This is scoped as a normal feature build, not an org-wide epic-planning exercise — no Jira project, no epic DAG, no fictional team roster. Each phase below is independently shippable and testable.

### Phase 0 — Foundation ✅ Complete
- Scaffolded `src/frontend` (Next.js, TypeScript, App Router, `--src-dir`) and `src/backend` (FastAPI, SQLAlchemy, JWT auth helpers) directories.
- `docker-compose.yml`: Postgres 16 + pgvector extension (`pgvector/pgvector:pg16` image), backend, frontend, with healthcheck-gated startup ordering.
- `src/database/` holds Alembic scaffolding (`alembic.ini`, `env.py`, `script.py.mako`) — no table migrations generated yet (models are still empty; real migrations start in Phase 1).
- **Exit criteria — verified:** `docker-compose up` brings up all three containers; `GET /api/health` on the backend returns `{"status":"ok"}` (200) after actually querying Postgres; the Next.js default page responds 200 on the frontend. Confirmed via live `curl` against a running stack, not just static review.

### Phase 1 — Content API + Static Parity (no chat yet)
- SQLAlchemy models + Pydantic schemas for `projects`, `experience_entries`, `reading_items`, `about_content`, `social_links`.
- Seed script: extract current hardcoded content from `HTML_Site/index.html`, `about.html`, `work.html` into the DB (one-time, per user's answer — no separate CMS import tooling).
- Public read-only endpoints: `GET /api/content/projects`, `/experience`, `/reading-items`, `/about`, `/social-links`.
- Next.js pages (`/`, `/about`, `/work`) fetch from these endpoints and render — pixel parity with `HTML_Site/` (same CSS, same markup structure, same interactions).
- Port all §4.2 interactive behaviors as React components (hero flip, process board drag, bookshelf drag, footer letter drag, memory-wall pan, experience accordion, nav scroll-spy, reveal animations).
- **Exit criteria:** Side-by-side visual/interaction diff against `HTML_Site/` shows no regressions. Frontend test coverage ≥60% on critical interactive components.

### Phase 2 — Admin UI
- `admin_users` table + JWT auth endpoints (`POST /api/auth/login`).
- Protected CRUD endpoints: `/api/admin/projects`, `/admin/experience`, `/admin/reading-items`, `/admin/about`, `/admin/social-links` (all behind `Depends(get_current_admin)`).
- Next.js `/admin` routes: login page + forms for each content type (create/edit/delete/reorder).
- **Exit criteria:** Anoushka can log in, add a new project, and see it appear on the public site without a code change. Auth/RBAC tests: unauthenticated request to any `/admin/*` route → 401.

### Phase 3 — RAG Chatbot
- Choose embedding + LLM provider (decision point, not pre-decided here).
- `content_chunks` table + chunking strategy (per-field or per-record chunks from projects/experience/about/reading-items).
- Embedding pipeline: triggered on content create/update (Phase 2 admin writes) so `content_chunks` stays in sync — no manual re-embed step.
- `POST /api/chat`: embed query → pgvector cosine similarity search → constrained LLM call (system prompt enforces "answer only from context, else decline") → return answer + cited source(s).
- Chat widget component in Next.js (footer or floating launcher, per existing footer's "Have a question worth exploring?" copy — natural placement).
- Logging: `chat_queries` table (query text + retrieved chunk ids, no visitor PII).
- **Exit criteria:** Asking "What did she do at Accenture?" returns an answer citing the Glow/Accenture experience content. Asking an out-of-scope question ("What's the capital of France?") returns a decline, not a hallucinated answer. Rate limiting verified.

### Phase 4 — Hardening & Verification
- Security pass: secret audit, RBAC test suite, input validation review on all admin endpoints.
- Test coverage check against baseline (§ backend ≥70%, frontend ≥60%).
- Accessibility pass (the existing site has strong ARIA/keyboard support — must not regress).
- Manual verification: full click-through of every interaction in §4.2 on the rebuilt site.

## 11. Open Decisions (deferred, not blocking Phase 0–1 start)

- Embedding + LLM provider for Phase 3 (Anthropic vs OpenAI vs local) — revisit before starting Phase 3.
- ~~CSS approach~~ — resolved: verbatim port required, no re-tokenization (see §7).
- Whether `HTML_Site/` stays in the repo permanently as a reference or is archived once parity is verified.

## 12. Definition of Done (whole project)

- [ ] Every interaction in §4.2 works identically to `HTML_Site/`
- [ ] All content in §4.3 is DB-backed and editable via admin UI
- [ ] Chatbot answers only from portfolio content, declines gracefully otherwise
- [ ] Backend ≥70% test coverage, frontend ≥60%, auth/RBAC tests on every protected endpoint
- [ ] No secrets in code/logs; `.env` gitignored
- [ ] `docker-compose up` reproduces the full stack locally from a clean checkout
