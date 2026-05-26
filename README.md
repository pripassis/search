# Biblioteca Publica Indexada

Projeto Next.js App Router com login local, indice interno e worker de indexacao.

## Rotas

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/search?q=termo`
- `POST /api/admin/index-terms`
- `GET /api/admin/index-jobs`
- `POST /api/admin/reindex`

## Seguranca

- Nada executa arquivos.
- Preview de HTML/JS/sh/EXE/ZIP e similares fica bloqueado ou em download only.
- A busca do usuário consulta o banco local.
# search
