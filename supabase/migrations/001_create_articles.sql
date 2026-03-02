-- Run this entire script in Supabase Dashboard > SQL Editor.
-- After running: Supabase may need to reload the schema cache (Dashboard > Settings > API > "Reload schema" or wait ~1 min).

-- Remove existing table and dependencies so we get a clean structure
drop table if exists public.articles cascade;

-- Create articles with all columns the app expects (exact names: slug, author, date, read_time, image, video, translations, created_at, updated_at)
create table public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  author text not null default '',
  date text not null default '',
  read_time text not null default '',
  image text,
  video text,
  translations jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint articles_slug_unique unique (slug)
);

-- Index for listing by created_at
create index articles_created_at_idx on public.articles (created_at desc);

-- Keep updated_at in sync on update
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger articles_updated_at
  before update on public.articles
  for each row execute function public.set_updated_at();

-- RLS
alter table public.articles enable row level security;

drop policy if exists "Allow public read" on public.articles;
drop policy if exists "Allow public insert" on public.articles;
drop policy if exists "Allow public update" on public.articles;
drop policy if exists "Allow public delete" on public.articles;

create policy "Allow public read" on public.articles
  for select using (true);

create policy "Allow public insert" on public.articles
  for insert with check (true);

create policy "Allow public update" on public.articles
  for update using (true);

create policy "Allow public delete" on public.articles
  for delete using (true);

-- Notify PostgREST to reload schema (reduces "schema cache" errors)
notify pgrst, 'reload schema';
