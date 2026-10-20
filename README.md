# maNOWj

A branded, responsive portfolio platform built with Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma and PostgreSQL. The visual system uses jet black, hot pink and chartreuse with editorial typography and real starter content.

## Included

- Home, About, Portfolio, case-study pages, Services, Journal, Contact and Now pages
- Responsive navigation, original SVG wordmark, favicon, Open Graph artwork, sitemap, robots and RSS
- Zod + React Hook Form contact form, honeypot, in-memory rate limit and database persistence
- Optional Resend email notifications and acknowledgement
- Prisma schema for users, OAuth accounts/sessions, projects, posts, testimonials, contact messages, newsletter subscribers and rate-limit records
- Auth.js Google/GitHub sign-in when credentials are configured
- Published projects API, error boundary, 404, security headers and validation tests

## Requirements

- Node.js 20 or newer
- PostgreSQL database (Neon works well)
- npm

## Local setup

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Open http://localhost:3000. The contact form needs PostgreSQL. Email delivery requires Resend credentials and a verified sender address. OAuth requires Google and/or GitHub app credentials with the callback URL `http://localhost:3000/api/auth/callback/google` or `/api/auth/callback/github`.

## Deploy to Vercel + Neon

1. Create a PostgreSQL database at Neon and copy its pooled connection string to `DATABASE_URL`.
2. Push this repository to GitHub and import it at https://vercel.com/new.
3. Add environment variables from `.env.example` in Vercel Project Settings. Set `NEXT_PUBLIC_SITE_URL=https://www.manowj.com` and `AUTH_URL=https://www.manowj.com` when using that domain.
4. Configure `www.manowj.com` in Vercel's Domains settings. Add the DNS records Vercel provides at your DNS host. Do not change records for your existing GIS app unless you intend to move that app.
5. Apply schema changes using `npx prisma migrate deploy` from a trusted local terminal or CI job.
6. Configure OAuth callback URLs for your production domain, then redeploy.

## Configure services

- **Email:** set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`. Verify the sender domain in Resend before using a production address.
- **OAuth:** configure `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_GITHUB_ID`, and `AUTH_GITHUB_SECRET`. The admin page redirects to login. Set the intended account's `role` to `ADMIN` in PostgreSQL before allowing administrative work.
- **Cloudinary:** credentials are included as optional environment settings. Authenticated upload UI/endpoints are not exposed in this version.
- **Live feeds:** YouTube and GitHub environment settings are included, but API-backed YouTube/Instagram feeds and GitHub contribution visualizations are not active. The site avoids pretending these are live.
- **Newsletter:** the schema supports double opt-in, but subscription/confirmation routes are not active yet.

## Important implementation boundary

This is a runnable portfolio and contact foundation, not a claim that every item in the original wish list is implemented. Full admin CRUD, Cloudinary uploads, newsletter double opt-in, Instagram feed, GitHub contribution graph, booking integration, Cmd+K command palette, cookie consent, persistent cross-device portfolio editing and detailed analytics require additional provider-specific routes and testing. Do not expose write operations until admin authorization is implemented and verified.

## Commands

```bash
npm run dev
npm run typecheck
npm test
npm run build
```

## Before launch

- Review social URLs and email in `lib/site.ts`.
- Verify all public links and replace illustrative project descriptions with accurate outcomes and screenshots.
- Configure database backups and monitoring.
- Add a privacy policy and cookie notice appropriate to any analytics you enable.
