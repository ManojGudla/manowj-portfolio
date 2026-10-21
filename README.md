# maNOWj Portfolio, Supabase edition

A responsive maNOWj portfolio and starter admin workspace using Next.js 14, TypeScript, Tailwind, Supabase Auth/Postgres/Realtime, Zod and Resend (optional).

## Included in this version

- Editorial portfolio pages and existing maNOWj brand content
- Supabase SQL schema for profiles, projects, contact messages, analytics events and activity logs
- Row Level Security policies for public published projects, admin project management, private messages and analytics
- Supabase email/password sign-in and account creation UI
- Admin workspace for create/edit/delete projects, view contact messages, analytics counters and CSV export
- Supabase Realtime subscriptions for project and message changes
- Public projects API with search, category filter and pagination
- Contact form API with Zod validation, honeypot, in-memory rate limit, optional Resend notifications
- Basic page-view event collection, light/dark theme toggle, favicon, metadata, RSS, sitemap, error page and 404
- `.env.example` and setup guide

## Important security boundary

The service-role key is not used in browser code. RLS policies are included in `supabase/schema.sql`. Admin CRUD relies on RLS and `public.is_admin()`. Before launch, run the SQL in Supabase and promote only your verified owner profile to ADMIN. Contact endpoint's rate limiter is in-memory and is not globally distributed; add a durable edge rate limiter before high-traffic production use. Basic analytics records page paths and event names, not full user identities.

## Setup

1. Create a project at https://supabase.com.
2. Open SQL Editor and run the complete `supabase/schema.sql`.
3. In Authentication settings, enable Email provider. Set site URL to your deployed URL and add local/deployed redirect URLs.
4. Copy `.env.example` to `.env.local`, then add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - Optional Resend settings
5. Install and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Promote the owner account to admin

1. Sign up through `/login`.
2. Confirm the email if Supabase requires confirmation.
3. In Supabase SQL Editor, run the query below using your own verified email:

```sql
update public.profiles set role = 'ADMIN' where email = 'YOUR_VERIFIED_EMAIL';
```

4. Sign out and sign in again, then open `/admin`.

Do not set the role from a public browser form. The role update is an owner-only setup operation in the SQL editor.

## Deploy to Vercel

1. Push the extracted project into a separate GitHub repository or update your existing portfolio repository after backing it up.
2. Import the repository in Vercel.
3. Add the environment variables listed above to Vercel Project Settings.
4. Run `supabase/schema.sql` in Supabase before testing database features.
5. Deploy and test `/`, `/login`, `/admin`, `/api/projects`, `/api/contact`, and `/api/analytics`.
6. Connect `portfolio.manowj.com` or another intended domain in Vercel. Avoid changing `www.manowj.com` if it currently serves GeoIntel unless you intentionally want to move that application.

## Features requiring configuration or further production hardening

- Supabase Realtime works only after the schema is applied and Realtime publication is enabled. The SQL attempts to add `projects` to the publication; confirm it in the Supabase dashboard.
- Resend email requires a valid API key and verified sender domain.
- OAuth providers are not included in this version; email/password auth is the configured path.
- Analytics are basic first-party page-view events, not a full attribution or cookie-consent analytics suite.
- In-memory contact rate limiting is not shared between serverless instances.
- Run typecheck/build and verify against your actual Supabase project before claiming production readiness.

## Commands

```bash
npm run typecheck
npm run build
```
