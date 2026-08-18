# GitHub Setup for FACE Trash Hauling Services

This repository contains the complete FACE Trash Hauling Services and Recycling LLC website source code.

## Project

- **Live website:** https://facetraash-bfhgt67h.manus.space/
- **Stack:** React, TypeScript, Vite, Express, tRPC, Drizzle ORM, MySQL/TiDB, Stripe, Manus OAuth
- **Package manager:** pnpm
- **Node:** Use the current LTS release or the version specified by your hosting provider.

## Upload the Code to GitHub

Create an empty repository on GitHub, then run these commands from the extracted project directory:

```bash
git init
git add .
git commit -m "Initial FACE Trash Hauling Services website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If the project is already connected to a GitHub repository, replace the remote URL with the correct repository URL and push normally.

## Install and Run Locally

```bash
pnpm install
pnpm check
pnpm test
pnpm dev
```

The development server uses the port supplied by the environment. Do not hardcode a production port.

## Production Build

```bash
pnpm build
pnpm start
```

## Environment Variables

Do not commit real secrets to GitHub. Configure the following values in your hosting provider's secret manager or local `.env` file:

```text
DATABASE_URL=
JWT_SECRET=
VITE_APP_ID=
OAUTH_SERVER_URL=
VITE_OAUTH_PORTAL_URL=
OWNER_OPEN_ID=
OWNER_NAME=
BUILT_IN_FORGE_API_URL=
BUILT_IN_FORGE_API_KEY=
VITE_FRONTEND_FORGE_API_URL=
VITE_FRONTEND_FORGE_API_KEY=
STRIPE_SECRET_KEY=
VITE_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
VITE_APP_TITLE=FACE Trash Hauling Services
VITE_APP_LOGO=
```

The exact names and availability of environment variables depend on the hosting environment. Never paste production credentials into source files, README files, commits, screenshots, or issue threads.

## Database

The database schema is in `drizzle/schema.ts`, with migration files in `drizzle/`. Configure `DATABASE_URL` before running database commands. Review migration SQL carefully before applying it to a production database.

## Important Application Routes

| Route | Purpose |
|---|---|
| `/` | Public homepage |
| `/about` | Company information and leadership bios |
| `/services` | Service offerings and quote CTAs |
| `/faq` | Frequently asked questions |
| `/contact` | Contact form and business contact information |
| `/gallery` | Truck and operations gallery |
| `/careers` | Careers page |
| `/booking` | Request-a-quote form |
| `/portal` | Customer portal |
| `/admin` | Owner/admin dashboard |

## GitHub and Deployment Notes

The source code can be stored in GitHub, but hosting still requires the application environment, database, storage, authentication, and secret configuration. If you keep the site hosted by Manus, use the Manus project version/checkpoint as the deployment source. If moving to another host, verify compatibility with the server runtime, database, OAuth callback URLs, file storage, email service, and Stripe webhook URL before switching traffic.

## Content Action Still Pending

The project TODO includes replacing placeholder testimonials with verified customer quotes. Do not publish invented testimonials. Add only real customer feedback supplied and approved by FACE Trash Hauling Services.

## Included Documentation

The repository also includes existing operating documents such as `ADMIN_GUIDE.md`, `TRAINING_GUIDE.md`, `TROUBLESHOOTING.md`, `SUPPORT_CONTRACT.md`, and the project handoff materials. Review them before transferring administration to another person.

## Security Checklist

Before making the repository public, confirm that no `.env` files, API keys, database credentials, private customer data, session tokens, or exported production records are included. Rotate any credential that may have been committed accidentally.

## Basic Verification

After cloning the repository on another machine:

```bash
pnpm install
pnpm check
pnpm test
pnpm build
```

All tests should pass before making a production deployment.

**Prepared for FACE Trash Hauling Services and Recycling LLC.**
