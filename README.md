# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Nutrition Matters International Blog

### Supabase setup (for admin and storing articles)

1. **Create a Supabase project** at [supabase.com](https://supabase.com) and get your project URL and anon key.

2. **Copy env and add credentials:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and set:
   - `VITE_SUPABASE_URL` = your project URL (e.g. `https://xxxx.supabase.co`)
   - `VITE_SUPABASE_ANON_KEY` = your project anon/public key

3. **Create the `articles` table** in Supabase:
   - Open your project → **SQL Editor**
   - Run the SQL in `supabase/migrations/001_create_articles.sql`

4. **Admin:** Open `/admin` to create and edit articles (with images, videos, and content in all 9 languages). The public blog loads articles from Supabase when configured; otherwise it uses the static list in `src/data/blog.ts`.
