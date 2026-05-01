# WGPBC Strapi backend

Headless CMS for [Winter Garden Primitive Baptist Church](https://www.wintergardenpbc.com). Content is consumed by the Gatsby app in `../frontend` via `gatsby-source-strapi`.

## Requirements

- **Node.js** 18–22 (aligned with Strapi 4.26)
- **npm** 8+

## Scripts

| Command | Description |
|--------|-------------|
| `npm run develop` | Admin + API with auto-reload (default [http://localhost:1337](http://localhost:1337)) |
| `npm run build` | Build the admin panel |
| `npm run start` | Run production build (no auto-reload) |

## Environment variables

Create a `.env` in this folder (never commit it). Typical keys:

| Variable | Notes |
|----------|--------|
| `HOST`, `PORT` | Optional; defaults `0.0.0.0` / `1337` |
| `APP_KEYS` | Comma-separated keys for signed cookies |
| `ADMIN_JWT_SECRET` | Admin JWT signing |
| `API_TOKEN_SALT` | API token salt |
| `JWT_SECRET` | Users & permissions plugin (if used) |
| `DATABASE_URL` | Postgres connection string in deployed environments |
| `DATABASE_FILENAME` | SQLite path when **not** using `DATABASE_URL` (default `.tmp/data.db`) |
| `APP_URL` | Public URL (used under `NODE_ENV=production` in `config/env/production/server.js`) |
| **DigitalOcean Spaces / S3** | `DO_SPACE_ACCESS_KEY`, `DO_SPACE_SECRET_KEY`, `DO_SPACE_ENDPOINT`, `DO_SPACE_REGION`, `DO_SPACE_BUCKET` |
| **Sermon Vimeo thumbnails** | `API_URL` — Strapi public URL (e.g. `https://api.example.com`) so lifecycles can call `/api/upload`; `STRAPI_TOKEN` — API token with upload permission |

Strapi’s built-in upload plugin is configured for an S3-compatible provider in `config/plugins.js`.

## Plugins

- **Users & permissions** — API auth for the Gatsby build token.
- **i18n** — Available if you localize content later.
- **Upload** — AWS S3 provider (DigitalOcean Spaces).
- **[strapi-plugin-import-export-entries](https://market.strapi.io/plugins/strapi-plugin-import-export-entries)** — CSV/JSON import/export for collection types.

## Content types

Defined under `src/api/` — e.g. **sermon**, **post**, **preacher**, **meeting**, **tag**. Sermon `lifecycles.js` can pull Vimeo thumbnails and populate `AudioURL` when media is attached.

## Upgrading Strapi

Stay on **Strapi 4.x** until the frontend is migrated for **Strapi 5** (different REST patterns and plugins). Within v4, keep these packages on the **same version**:

`@strapi/strapi`, `@strapi/plugin-i18n`, `@strapi/plugin-users-permissions`, `@strapi/provider-upload-aws-s3`.

See the official [Strapi v4 upgrade guide](https://docs-v4.strapi.io/dev-docs/update-version).

## Learn more

- [Strapi documentation](https://docs.strapi.io/)
- [Deployment](https://docs.strapi.io/dev-docs/deployment)
