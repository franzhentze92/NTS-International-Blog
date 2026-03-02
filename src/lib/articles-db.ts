import type { Locale } from "@/lib/locales";
import type { PostTranslation } from "@/data/blog";
import type { ArticleRow, ArticleTranslations, ArticleTranslation } from "@/types/database";

/** Map DB row to BlogPost shape (id is string for DB rows). */
export function articleRowToBlogPost(row: ArticleRow): {
  id: string;
  slug: string;
  title: string;
  titleDisplay?: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  video?: string;
  content: string;
  translations?: Partial<Record<Locale, PostTranslation>>;
} {
  const en = row.translations?.en;
  const translations = row.translations
    ? (Object.fromEntries(
        Object.entries(row.translations).map(([loc, t]) => [
          loc,
          {
            title: t.title,
            titleDisplay: t.title_display,
            excerpt: t.excerpt,
            content: t.content,
            image: t.image,
            video: t.video,
          },
        ])
      ) as Partial<Record<Locale, PostTranslation>>)
    : undefined;

  const readTimeStr = row.read_time?.trim() ?? "";
  const readTime =
    /^\d+$/.test(readTimeStr) ? `${readTimeStr} min read` : readTimeStr || "";

  return {
    id: row.id,
    slug: row.slug,
    title: en?.title ?? "",
    titleDisplay: en?.title_display,
    excerpt: en?.excerpt ?? "",
    author: row.author,
    date: row.date,
    readTime,
    image: row.image ?? undefined,
    video: row.video ?? undefined,
    content: en?.content ?? "",
    translations,
  };
}

/** Map form translations (camelCase) to DB (snake_case). Returns a clean object for JSONB (no undefined). */
export function toDbTranslations(
  t: Partial<Record<Locale, { title: string; titleDisplay?: string; excerpt: string; content: string; image?: string; video?: string }>>
): ArticleTranslations {
  const out: ArticleTranslations = {};
  for (const [loc, v] of Object.entries(t)) {
    if (v && (v.title || v.excerpt || v.content || (v.video != null && v.video.trim() !== ""))) {
      const entry: ArticleTranslation = {
        title: v.title ?? "",
        excerpt: v.excerpt ?? "",
        content: v.content ?? "",
      };
      if (v.titleDisplay != null && v.titleDisplay !== "") {
        entry.title_display = v.titleDisplay;
      }
      if (v.image != null && v.image.trim() !== "") {
        entry.image = v.image.trim();
      }
      if (v.video != null && v.video.trim() !== "") {
        entry.video = v.video.trim();
      }
      out[loc as Locale] = entry;
    }
  }
  return out;
}
