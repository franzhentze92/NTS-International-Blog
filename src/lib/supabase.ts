import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.warn(
    "Supabase env missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local (see .env.example)."
  );
}

export const supabase = createClient<Database>(
  url ?? "https://placeholder.supabase.co",
  anonKey ?? "placeholder-key"
);

export const hasSupabaseConfig = Boolean(url && anonKey);

const ARTICLE_IMAGES_BUCKET = "article-images";

/** Public URL for an image stored in article-images bucket. */
export function getArticleImagePublicUrl(path: string): string {
  const base = url ?? "https://placeholder.supabase.co";
  return `${base}/storage/v1/object/public/${ARTICLE_IMAGES_BUCKET}/${path}`;
}

const MAX_EMBED_SIZE = 800 * 1024;

/** Read a file as a data URL (base64). Use for "Embed" when Supabase upload fails. Max 800KB recommended. */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_EMBED_SIZE) {
      reject(new Error(`Image is ${(file.size / 1024).toFixed(0)} KB. For Embed, use under 800 KB or use Upload.`));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

/** Upload a file to article-images bucket. Returns the permanent public URL, or throws. */
export async function uploadArticleImage(file: File): Promise<string> {
  if (!url || !anonKey) throw new Error("Supabase not configured");
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${ext}`;
  const opts: { cacheControl: string; upsert: boolean; contentType?: string } = {
    cacheControl: "3600",
    upsert: false,
  };
  if (file.type && file.type.startsWith("image/")) {
    opts.contentType = file.type;
  }
  const { data, error } = await supabase.storage
    .from(ARTICLE_IMAGES_BUCKET)
    .upload(path, file, opts);
  if (error) {
    const err = error as { message?: string; error?: string; statusCode?: string; status?: string };
    const code = err.error || err.statusCode || err.status || "400";
    const msg = err.message || "Upload failed";
    let hint =
      " Create bucket 'article-images' (Public) in Supabase Dashboard > Storage, then run supabase/migrations/002_storage_article_images.sql.";
    if (msg.includes("MIME") || msg.includes("type") || String(code).includes("MIME")) {
      hint =
        " In Storage > article-images > Settings: set Allowed MIME types to empty (allow all) or add image/png, image/jpeg, image/gif, image/webp.";
    } else if (msg.includes("size") || msg.includes("Payload") || msg.includes("large")) {
      hint = " In Storage > article-images > Settings: set File size limit to 5242880 (5 MB) or higher.";
    } else if (msg.includes("Bucket") || msg.includes("bucket") || msg.includes("not found")) {
      hint = " Create the bucket: Dashboard > Storage > New bucket, name exactly: article-images, Public: ON.";
    }
    throw new Error(`[${code}] ${msg}.${hint}`);
  }
  return getArticleImagePublicUrl(data.path);
}
