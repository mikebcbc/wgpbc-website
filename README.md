# Winter Garden Primitive Baptist Church — Website

Public site for **Winter Garden Primitive Baptist Church** (WGPBC), Winter Garden, Florida.

**Production:** [wintergardenpbc.com](https://www.wintergardenpbc.com)

The repository is a small monorepo: a **Gatsby** static frontend that pulls content from **Strapi** (headless CMS), plus local JSON and assets for navigation and branding.

---

## Architecture

| Part | Stack | Role |
|------|--------|------|
| `frontend/` | Gatsby 4, React 17, Theme UI, Emotion, Bootstrap 4, `gatsby-source-strapi` | Static site generation, images via `gatsby-plugin-image` / Sharp |
| `backend/` | Strapi **4.26.x** | Content API for sermons, posts, preachers, meetings, tags |

At build time, Gatsby fetches Strapi collections, runs GraphQL page queries, and emits HTML and optimized assets. There is no runtime Node server for the public site beyond whatever hosts the static files.

---

## Requirements

- **Node.js** — Use an LTS version compatible with Gatsby 4 (e.g. 18.x). Match whatever your deployment uses.
- **npm** (or yarn) for installs.

---

## Getting started

### 1. Strapi (`backend/`)

Strapi must be running (or reachable) so Gatsby can fetch content during develop/build.

```bash
cd backend
npm install
npm run develop   # admin + API, typical local URL http://localhost:1337
```

Without `DATABASE_URL`, the backend uses **SQLite** at `backend/.tmp/data.db` for local development. Production expects **Postgres** via `DATABASE_URL` (see `backend/README.md`).

See `backend/README.md` for environment variables, plugins, and deployment notes.

### 2. Gatsby (`frontend/`)

Create `frontend/.env` (not committed) with at least:

| Variable | Purpose |
|----------|---------|
| `STRAPI_API_URL` | Strapi API base URL (e.g. `http://localhost:1337/api`) |
| `STRAPI_TOKEN` | API token with permission to read published content |

Optional:

| Variable | Purpose |
|----------|---------|
| `GATSBY_IS_PREVIEW` | Set to `"true"` to use Strapi preview publication state for posts |
| `GATSBY_STRAPI_MEDIA_BEARER` | When `"true"`, sends `Authorization: Bearer …` for remote media |
| `MAILCHIMP_ENDPOINT` | Mailchimp form action URL for the Mailchimp plugin |

```bash
cd frontend
npm install
npm run develop    # http://localhost:8000 (GraphQL IDE if enabled in script)
npm run build      # production build → public/
npm run serve      # serve the production build locally
```

Other useful scripts:

| Script | Description |
|--------|-------------|
| `npm run lint` | ESLint on `src/` |
| `npm run lint:fix` | ESLint with `--fix` |
| `npm run clean` | Clear Gatsby cache (`.cache`, `public`) |

---

## Repository layout

```
backend/           Strapi project (content types, admin, API)
frontend/
  config/          Site title, URL, pathPrefix, manifest metadata
  src/
    components/    UI pieces (sermon cards, blog, menu, SEO, …)
    containers/    Page sections / composed blocks
    data/menu/     menu.json — main + mobile navigation
    layouts/       Header, footer wrappers
    pages/         Top-level routes (index, about, contact, 404)
    templates/     Data-driven pages (sermons, preacher, meeting, blog, …)
    assets/        Images, fonts, global CSS
  gatsby-config.js Strapi plugin + filesystem sources + site metadata
  gatsby-node.js   Programmatic pages (pagination, preacher/meeting routes)
```

---

## Content model (Strapi)

Configured in `frontend/gatsby-config.js` under `gatsby-source-strapi` — includes types such as:

- **sermon** — image, preacher, meeting, video/audio fields  
- **post** — blog / Pastor’s Notes style content with tags and featured image  
- **preacher**, **meeting**, **tag** — supporting entities  

Images are processed through **Sharp** for responsive sizes (e.g. sermon thumbnails at a fixed aspect ratio for cards).

---

## Configuration notes

- **Site metadata** — `frontend/gatsby-config.js` (`siteMetadata`) and `frontend/config/config.js` (theme/manifest-oriented settings).
- **Path prefix** — `config.pathPrefix` (usually `/` for root hosting).
- **Navigation edits** — Prefer `frontend/src/data/menu/menu.json`; rebuild the site so changes appear.

---

## Contributing / deployment

1. Run `npm run lint` and `npm run build` in `frontend/` before merging when possible.
2. Ensure Strapi is deployed and tokens/URLs in the hosting environment match production (never commit `.env`).
3. After CMS or navigation changes, trigger a new Gatsby build so static pages reflect new content.

For Strapi-specific deployment and upgrades, refer to the [Strapi documentation](https://docs.strapi.io/) and `backend/README.md`.
