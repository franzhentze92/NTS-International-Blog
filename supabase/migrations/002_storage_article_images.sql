-- Storage bucket "article-images" for blog images (hero + inline).
-- 1) Create the bucket in Dashboard: Storage > New bucket > name: article-images, Public: ON.
--    Set "File size limit" to 5242880 (5 MB) or leave default. Leave "Allowed MIME types" EMPTY to allow all image types (recommended).
-- 2) Run this migration to allow uploads from the blog admin (anon).

-- RLS: allow public read and anon upload for article-images
drop policy if exists "Public read article-images" on storage.objects;
create policy "Public read article-images"
  on storage.objects for select
  using (bucket_id = 'article-images');

drop policy if exists "Allow upload article-images" on storage.objects;
create policy "Allow upload article-images"
  on storage.objects for insert
  with check (bucket_id = 'article-images');
