import type { Locale } from "@/lib/locales";
import { transformSupabaseImgSrcInHtml } from "@/lib/supabase";

export interface PostTranslation {
  title: string;
  titleDisplay?: string;
  excerpt: string;
  content: string;
  image?: string;
  video?: string;
}

export interface BlogPost {
  id: number | string;
  slug: string;
  title: string;
  titleDisplay?: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  /** Optional video: YouTube or Vimeo URL (watch or embed). Shown on article page when set. */
  video?: string;
  content: string;
  /** Translations by locale. When present, used for display when locale is selected. */
  translations?: Partial<Record<Locale, PostTranslation>>;
}

export const SITE_TITLE = "Nutrition Matters";
export const SITE_DESCRIPTION = "Articles and Ideas from the Pioneers of Nutrition Farming®";

const placeholderImage = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop";
const calMagImage = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "why-your-calcium-to-magnesium-ratio-matters-profit-through-balance",
    title: "Why Your Calcium to Magnesium Ratio Matters - Profit through Balance",
    titleDisplay: "WHY YOUR CALCIUM TO MAGNESIUM RATIO MATTERS - PROFIT THROUGH BALANCE",
    excerpt: "By Graeme Sait Nutrition farming is about managing minerals, microbes and humus, and understanding their interplay. No mineral is an island, and no mineral is less singular than the all-important calcium. This mineral directly impacts the plant availability of seven other minerals. That's why we try to address calcium",
    author: "Graeme Sait",
    date: "27 Feb 2026",
    readTime: "12 min read",
    image: calMagImage,
    content: `
      <p>Nutrition farming is about managing minerals, microbes and humus, and understanding their interplay. No mineral is an island, and no mineral is less singular than the all-important calcium. This mineral directly impacts the plant availability of seven other minerals. That's why we try to address calcium before any other corrective, when developing productive nutrition programs.</p>
      <p>There is another reason, beyond enhanced mineral uptake, that further increases the supreme importance of calcium. Calcium determines your soil's capacity to breathe. The single most important element for high-production fertility is not N. It's not P, or K, or even calcium. The driver of plant productivity is oxygen.</p>
      <p>You are managing gas exchange above all else. How freely can oxygen diffuse into the soil and then, after the roots and microbes have breathed in oxygen, they breathe out CO2. That outbreath, now accumulates in the rootzone, diffuses out of the soil and into the waiting stomates (the entry point for this gas). There, in conjunction with water and sunlight, we have the basis of photosynthesis, the most important process on the planet.</p>
      <h2>Cal/mag dynamics</h2>
      <p>The calcium to magnesium ratio is the mineral link to creating a living, breathing soil. The fungi to bacteria ratio monitors the relevant microbial contribution, and humates highlight the humus link. This further demonstrates the importance of understanding the relationships between minerals, microbes and humus in the Nutrition Farming playbook.</p>
      <p>Wishing you all some autumn moisture and a breathing soil, to kick off a good winter.</p>
      <p>Warm regards, Graeme</p>
    `,
  },
  {
    id: 2,
    slug: "regenerative-cattle-management-doubling-capacity-reviving-the-soil-food-web-how-to-s4e14",
    title: "🌱 Regenerative Cattle Management: Doubling Capacity & Reviving the Soil Food Web - How to S4E14 🐄",
    excerpt: "Hi Everyone, Welcome to another inspiring episode of our video series. This week, we journey to a Landcare field day in Bolivia, New South Wales, for a fascinating sit-down with Jake Smith. Jake is a passionate young cattleman managing 8,500 acres around Tenterfield, determined to break free from the",
    author: "Graeme Sait",
    date: "20 Feb 2026",
    readTime: "4 min read",
    image: placeholderImage,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: `<p>Welcome to another inspiring episode of our video series. This week, we journey to a Landcare field day in Bolivia, New South Wales, for a fascinating sit-down with Jake Smith. Jake is a passionate young cattleman managing 8,500 acres around Tenterfield, determined to break free from conventional practices and build a regenerative future.</p><p>In this episode we explore how regenerative cattle management can double capacity while reviving the soil food web.</p>`,
  },
  {
    id: 3,
    slug: "fueling-longevity-the-liver-love-smoothie-liver-health-strategies-part-2-how-to-s4e13",
    title: "🌿Fueling Longevity: The Liver Love Smoothie - Liver Health Strategies – Part 2 - How to S4E13🧠",
    excerpt: "Welcome back to another episode of the How To Do It series 🌿🧠 \"If you want to live a longer, happier, healthier life, you need to look after your liver.\" That's the core message from Graeme Sait in the latest instalment of our How to Do It series.",
    author: "Graeme Sait",
    date: "06 Feb 2026",
    readTime: "3 min read",
    image: placeholderImage,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: `<p>"If you want to live a longer, happier, healthier life, you need to look after your liver." That's the core message from Graeme Sait in the latest instalment of our How to Do It series.</p><p>This episode covers the Liver Love Smoothie and practical liver health strategies.</p>`,
  },
  {
    id: 4,
    slug: "apple-cider-vinegar-and-your-health-proven-benefits-and-hidden-potential",
    title: "🌱Apple Cider Vinegar and Your Health - Proven Benefits and Hidden Potential 🍎",
    excerpt: "By Graeme Sait I received several emails after my recent ACV and livestock health article. These readers suggested I should take a more in-depth look at ACV for human well-being and vitality. Three of these mentioned an old book by Dr Jarvis, called \"Folk Remedies\". Dr Jarvis advocates the regular",
    author: "Graeme Sait",
    date: "30 Jan 2026",
    readTime: "12 min read",
    image: placeholderImage,
    content: `<p>I received several emails after my recent ACV and livestock health article. These readers suggested I should take a more in-depth look at ACV for human well-being and vitality.</p><p>Dr Jarvis advocates the regular use of apple cider vinegar for health. This article explores the proven benefits and hidden potential of ACV for human health.</p>`,
  },
  {
    id: 5,
    slug: "liver-health-strategies-part-1-how-to-s4e12",
    title: "🌿Liver Health Strategies – Part 1 - How to S4E12🧠",
    excerpt: "Welcome back to another episode of the How To Do It series 🌿🧠 Where Graeme explores one of the most essential — yet often overlooked — organs in the human body: the liver. While heart disease dominates many health conversations, this episode explains why the liver may be the primary organ of survival,",
    author: "Graeme Sait",
    date: "23 Jan 2026",
    readTime: "3 min read",
    image: placeholderImage,
    content: `<p>Where Graeme explores one of the most essential — yet often overlooked — organs in the human body: the liver. While heart disease dominates many health conversations, this episode explains why the liver may be the primary organ of survival.</p>`,
  },
  {
    id: 6,
    slug: "apple-cider-vinegar-acv-for-animal-health-science-or-hearsay",
    title: "🌱Apple Cider Vinegar (ACV) for Animal Health - Science or Hearsay 🍎",
    excerpt: "By Graeme Sait Apple Cider Vinegar (ACV) for Animal Health - Science or Hearsay One of the most highly regarded US livestock vets has been quoted as suggesting that apple cider vinegar offers the \"best bang for the buck of any livestock yield builder\". I thought we might start the",
    author: "Graeme Sait",
    date: "16 Jan 2026",
    readTime: "10 min read",
    image: placeholderImage,
    content: `<p>One of the most highly regarded US livestock vets has been quoted as suggesting that apple cider vinegar offers the "best bang for the buck of any livestock yield builder". This article explores the science behind ACV for animal health.</p>`,
  },
  {
    id: 7,
    slug: "cancer-strategies-how-to-build-a-body-that-protects-itself-how-to-s4e11",
    title: "♋Cancer Strategies: How to Build a Body That Protects Itself - How to S4E11🎗️",
    excerpt: "In this How To Do It episode, Graeme Sait explores Cancer Strategies, Immune Health and Metabolic Health — sharing biology-first insights into nutrition, minerals and lifestyle choices that help the body build real resilience 🌱🧬 Filmed high on the ridge at Nutrition Farms as the sun sets 🌄, this is a thoughtful, grounded",
    author: "Graeme Sait",
    date: "09 Jan 2026",
    readTime: "3 min read",
    image: placeholderImage,
    content: `<p>In this How To Do It episode, Graeme Sait explores Cancer Strategies, Immune Health and Metabolic Health — sharing biology-first insights into nutrition, minerals and lifestyle choices that help the body build real resilience.</p>`,
  },
  {
    id: 8,
    slug: "visual-soil-assessmentsimple-tests-every-farmer-needs-how-to-s4e10",
    title: "🌱Visual Soil Assessment🌿Simple Tests Every Farmer Needs - How to S4E10",
    excerpt: "In this episode of How To Do It, we return to one of the most powerful yet underutilised tools in regenerative agriculture — visual soil assessment. Led by Marco, Head Agronomist at Nutri-Tech Solutions, we step back onto the farm where his agronomy journey began, and use simple, practical field observations",
    author: "Graeme Sait",
    date: "26 Dec 2025",
    readTime: "3 min read",
    image: placeholderImage,
    content: `<p>We return to one of the most powerful yet underutilised tools in regenerative agriculture — visual soil assessment. Led by Marco, Head Agronomist at Nutri-Tech Solutions, we use simple, practical field observations every farmer needs.</p>`,
  },
  {
    id: 9,
    slug: "2025-christmas-message",
    title: "🎄2025 Christmas Message 🌟",
    excerpt: "Hi Everyone, Another year has flashed past, faster than my new BYD ute. At zero to 100 km/h in 5.2 seconds, that's quick! Time passes more quickly as you age, because your perception of time is based upon how much of it you have experienced. At 5",
    author: "Graeme Sait",
    date: "24 Dec 2025",
    readTime: "2 min read",
    image: placeholderImage,
    content: `<p>Another year has flashed past. Time passes more quickly as you age, because your perception of time is based upon how much of it you have experienced. Wishing you all a wonderful festive season and a prosperous new year.</p><p>Warm regards, Graeme</p>`,
  },
  {
    id: 10,
    slug: "immune-enhancing-biology-can-good-bugs-beat-the-chemicals",
    title: "🌱Immune-Enhancing Biology - Can Good Bugs Beat the Chemicals?🌿",
    excerpt: "By Graeme Sait Immune elicitation is a remarkably productive path because it is now understood that anything that boosts immunity also boosts yield. When adopting this strategy, you have a reduced need for increasingly expensive chemical interventions, while also increasing yield and profit. That's a serious win/win. Let'",
    author: "Graeme Sait",
    date: "19 Dec 2025",
    readTime: "11 min read",
    image: placeholderImage,
    content: `<p>Immune elicitation is a remarkably productive path because it is now understood that anything that boosts immunity also boosts yield. When adopting this strategy, you have a reduced need for increasingly expensive chemical interventions, while also increasing yield and profit. That's a serious win/win.</p>`,
  },
];

/** Format date for display: if YYYY-MM-DD, format as "3 Dec 2025"; otherwise return as-is. */
export function formatArticleDate(dateStr: string): string {
  if (!dateStr?.trim()) return dateStr ?? "";
  const iso = /^\d{4}-\d{2}-\d{2}$/.exec(dateStr.trim());
  if (!iso) return dateStr;
  const d = new Date(iso[0]);
  if (Number.isNaN(d.getTime())) return dateStr;
  const months = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/** Format read time for display: "12 min read" or "12" -> "12 min" (no "read" to avoid translation). */
export function formatReadTimeDisplay(readTime: string): string {
  if (!readTime?.trim()) return "";
  const s = readTime.trim();
  const out = s.replace(/\s*min\s*read\s*$/i, " min").trim();
  if (/^\d+$/.test(out)) return `${out} min`;
  return out || s;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostById(id: number | string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id || String(p.id) === String(id));
}

/** Returns title, titleDisplay, excerpt, content, image, and video for the given locale (fallback to default). */
export function getPostForLocale(
  post: BlogPost,
  locale: Locale
): { title: string; titleDisplay: string; excerpt: string; content: string; image?: string; video?: string } {
  const t = post.translations?.[locale];
  const title = t?.title ?? post.title;
  const titleDisplay = t?.titleDisplay ?? t?.title ?? post.titleDisplay ?? post.title;
  return {
    title,
    titleDisplay: titleDisplay || title,
    excerpt: t?.excerpt ?? post.excerpt,
    content: t?.content ?? post.content,
    image: t?.image ?? post.image,
    video: t?.video ?? post.video,
  };
}

/** Filter posts by search query (title + excerpt). */
export function filterPostsBySearch(
  posts: BlogPost[],
  query: string,
  locale: Locale
): BlogPost[] {
  if (!query.trim()) return posts;
  const q = query.trim().toLowerCase();
  return posts.filter((post) => {
    const { title, excerpt } = getPostForLocale(post, locale);
    return (
      title.toLowerCase().includes(q) || excerpt.toLowerCase().includes(q)
    );
  });
}

/** Markdown: **bold**, ## heading. Only on plain text. */
function markdownToHtml(text: string): string {
  let out = text;
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/__(.+?)__/g, "<strong>$1</strong>");
  out = out.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  out = out.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  out = out.replace(/^# (.+)$/gm, "<h1>$1</h1>");
  return out;
}

/** Turn plain text into HTML paragraphs (double newline = new paragraph). */
function textToParagraphs(text: string): string {
  const t = text.trim();
  if (!t) return "";
  const withMarkdown = markdownToHtml(t);
  const blocks = withMarkdown.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  return blocks
    .map((block) => {
      if (/^<h[1-6]>/.test(block)) return block;
      return "<p>" + block.replace(/\n/g, "<br />") + "</p>";
    })
    .join("");
}

/**
 * Prepares article content for display:
 * - Unescapes saved HTML entities (&lt; → <, &amp; first).
 * - If content has no <, treats as plain text: applies Markdown (## **) and paragraph breaks.
 * - If content has <, splits by block tags (figure, p, div, h1–h6, etc.), keeps blocks as-is, runs Markdown + paragraphs on text between blocks.
 */
export function ensureContentHtml(content: string): string {
  let trimmed = content.trim();
  if (!trimmed) return "";

  if (/&lt;|&gt;|&quot;|&amp;/.test(trimmed)) {
    trimmed = trimmed
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"');
  }

  if (!/</.test(trimmed)) {
    return textToParagraphs(trimmed);
  }

  // Strip stray "figure" + "class=article-inline-image" (double or single quotes) in all forms
  trimmed = trimmed.replace(
    /(<\/figure\s*>)\s*figure\s+class\s*=\s*["']article-inline-image["']\s*["']?/gi,
    "$1"
  );
  trimmed = trimmed.replace(
    /^\s*figure\s+class\s*=\s*["']article-inline-image["']\s*["']?\s*$/gi,
    ""
  );
  trimmed = trimmed.replace(
    /^\s*figure\s+class\s*=\s*["']article-inline-image["']\s*["']?\s*/gi,
    ""
  );

  const blockTagRegex = /<(figure|p|div|h[1-6]|ul|ol|li|blockquote)(\s[^>]*)?>[\s\S]*?<\/\1\s*>/gi;
  const blockMatches = [...trimmed.matchAll(blockTagRegex)];

  const result: string[] = [];
  const strayFigureOnly = /^\s*figure\s+class\s*=\s*["']article-inline-image["']\s*["']?\s*$/gi;
  const strayFigureAtStart = /^\s*figure\s+class\s*=\s*["']article-inline-image["']\s*["']?\s*/gi;

  let lastEnd = 0;
  for (const m of blockMatches) {
    const textBetween = trimmed.slice(lastEnd, m.index).trim();
    if (textBetween) {
      const part = textBetween
        .replace(strayFigureOnly, "")
        .replace(strayFigureAtStart, "")
        .trim();
      if (part) result.push(textToParagraphs(part));
    }
    const block = m[0];
    const isInlineFigure =
      block.trimStart().startsWith("<figure") &&
      /class\s*=\s*["']article-inline-image["']/.test(block);
    if (isInlineFigure) {
      result.push(`<div class="article-inline-image-wrap">${block}</div>`);
    } else {
      result.push(block);
    }
    lastEnd = m.index + block.length;
  }
  const textAfter = trimmed.slice(lastEnd).trim();
  if (textAfter) {
    const part = textAfter
      .replace(strayFigureOnly, "")
      .replace(strayFigureAtStart, "")
      .trim();
    if (part) result.push(textToParagraphs(part));
  }
  let html = result.join("").trim() || trimmed;
  // Final pass: remove stray <p>figure</p> and <p>class="article-inline-image"</p> (or single quotes) even if not adjacent
  html = html.replace(/<p>\s*figure\s*<\/p>/gi, "");
  html = html.replace(/<p>\s*class\s*=\s*["']article-inline-image["']\s*<\/p>/gi, "");
  html = transformSupabaseImgSrcInHtml(html);
  return html;
}
