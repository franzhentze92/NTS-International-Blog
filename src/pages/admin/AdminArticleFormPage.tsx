import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase, hasSupabaseConfig, uploadArticleImage, fileToDataUrl } from "@/lib/supabase";
import { toDbTranslations } from "@/lib/articles-db";
import { LOCALES, type Locale } from "@/lib/locales";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ImagePlus, Upload } from "lucide-react";

type TranslationForm = {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  video: string;
};

const emptyTranslation: TranslationForm = {
  title: "",
  excerpt: "",
  content: "",
  image: "",
  video: "",
};

function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "article";
}

function inlineImageHtml(url: string, alt: string): string {
  const safeUrl = url.trim().replace(/"/g, "&quot;");
  const safeAlt = (alt || "").trim().replace(/"/g, "&quot;");
  return `<figure class="article-inline-image"><img src="${safeUrl}" alt="${safeAlt}" loading="lazy" /></figure>`;
}

export const AdminArticleFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEdit = id && id !== "new";

  const [slug, setSlug] = useState("");
  const [author] = useState("Graeme Sait");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [readTime, setReadTime] = useState("");
  const [translations, setTranslations] = useState<Partial<Record<Locale, TranslationForm>>>(() =>
    Object.fromEntries(LOCALES.map((l) => [l.value, { ...emptyTranslation }]))
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeContentTab, setActiveContentTab] = useState<Locale>("en");
  const [insertImageUrl, setInsertImageUrl] = useState("");
  const [insertImageAlt, setInsertImageAlt] = useState("");
  const [uploading, setUploading] = useState<string | null>(null);
  const contentTextareaRefs = useRef<Partial<Record<Locale, HTMLTextAreaElement>>>({});
  const heroFileInputRefs = useRef<Partial<Record<Locale, HTMLInputElement>>>({});
  const heroEmbedInputRefs = useRef<Partial<Record<Locale, HTMLInputElement>>>({});
  const inlineFileInputRefs = useRef<Partial<Record<Locale, HTMLInputElement>>>({});
  const inlineEmbedInputRefs = useRef<Partial<Record<Locale, HTMLInputElement>>>({});

  // Auto-generate slug from English title when creating a new article (only when slug is still empty)
  useEffect(() => {
    if (isEdit) return;
    const enTitle = translations.en?.title?.trim();
    if (enTitle) setSlug((s) => (s ? s : slugify(enTitle)));
  }, [isEdit, translations.en?.title]);

  const { data: existing, isLoading: loadingExisting } = useQuery({
    queryKey: ["admin-article", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("articles").select("*").eq("id", id!).single();
      if (error) throw error;
      return data;
    },
    enabled: Boolean(hasSupabaseConfig && isEdit && id),
  });

  useEffect(() => {
    if (!existing) return;
    setSlug(existing.slug ?? "");
    setDate(
      existing.date && /^\d{4}-\d{2}-\d{2}$/.test(existing.date)
        ? existing.date
        : new Date().toISOString().slice(0, 10)
    );
    const rt = existing.read_time?.trim() ?? "";
    setReadTime(/^\d+$/.test(rt) ? rt : rt.replace(/\s*min read\s*/i, "").trim() || "");
    const t = (existing.translations as Record<string, { title?: string; title_display?: string; excerpt?: string; content?: string; image?: string; video?: string }>) ?? {};
    const trans: Partial<Record<Locale, TranslationForm>> = {};
    for (const loc of LOCALES.map((l) => l.value)) {
      const v = t[loc];
      if (v) {
        trans[loc] = {
          title: v.title ?? "",
          excerpt: v.excerpt ?? "",
          content: v.content ?? "",
          image: v.image ?? "",
          video: v.video ?? "",
        };
      } else {
        trans[loc] = { ...emptyTranslation };
      }
    }
    if (Object.keys(trans).length === 0) trans.en = { ...emptyTranslation };
    setTranslations(trans);
  }, [existing]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);
    const payload = {
      slug: slug.trim() || "draft",
      author: "Graeme Sait",
      date: date.trim() || new Date().toISOString().slice(0, 10),
      read_time: /^\d+$/.test(readTime.trim()) ? readTime.trim() : readTime.trim() || "0",
      image: null,
      video: null,
      translations: toDbTranslations(translations),
    };

    try {
      if (isEdit) {
        const { error: err } = await supabase.from("articles").update(payload).eq("id", id!);
        if (err) throw err;
        navigate("/admin/articles");
      } else {
        const { error: err } = await supabase.from("articles").insert(payload);
        if (err) throw err;
        navigate("/admin/articles");
      }
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "message" in err
          ? String((err as { message?: string }).message)
          : "Failed to save";
      const details =
        err && typeof err === "object" && "details" in err
          ? String((err as { details?: string }).details)
          : "";
      const hint =
        err && typeof err === "object" && "hint" in err
          ? String((err as { hint?: string }).hint)
          : "";
      setError([msg, details, hint].filter(Boolean).join(" — "));
    } finally {
      setSaving(false);
    }
  };

  const updateTranslation = (locale: Locale, field: keyof TranslationForm, value: string) => {
    setTranslations((prev) => ({
      ...prev,
      [locale]: {
        ...(prev[locale] ?? emptyTranslation),
        [field]: value,
      },
    }));
  };

  const handleUploadHeroImage = async (locale: Locale, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
      setError("Please choose a JPG, PNG, GIF or WebP image.");
      return;
    }
    e.target.value = "";
    setUploading(`hero-${locale}`);
    setError(null);
    try {
      const url = await uploadArticleImage(file);
      updateTranslation(locale, "image", url);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      setError(msg);
    } finally {
      setUploading(null);
    }
  };

  const handleUploadInlineImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
      setError("Please choose a JPG, PNG, GIF or WebP image.");
      return;
    }
    e.target.value = "";
    setUploading("inline");
    setError(null);
    try {
      const url = await uploadArticleImage(file);
      setInsertImageUrl(url);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      setError(msg);
    } finally {
      setUploading(null);
    }
  };

  const handleEmbedHeroImage = async (locale: Locale, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
      setError("Please choose a JPG, PNG, GIF or WebP image.");
      return;
    }
    e.target.value = "";
    setUploading(`embed-hero-${locale}`);
    setError(null);
    try {
      const dataUrl = await fileToDataUrl(file);
      updateTranslation(locale, "image", dataUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Embed failed");
    } finally {
      setUploading(null);
    }
  };

  const handleEmbedInlineImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
      setError("Please choose a JPG, PNG, GIF or WebP image.");
      return;
    }
    e.target.value = "";
    setUploading("embed-inline");
    setError(null);
    try {
      const dataUrl = await fileToDataUrl(file);
      setInsertImageUrl(dataUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Embed failed");
    } finally {
      setUploading(null);
    }
  };

  const insertImageIntoContent = (locale: Locale, atCursor: boolean) => {
    const url = insertImageUrl.trim();
    if (!url) return;
    if (url.toLowerCase().startsWith("blob:")) {
      setError("Don't use a blob or temporary link. Use Upload image to get a permanent URL.");
      return;
    }
    setError(null);
    const html = inlineImageHtml(url, insertImageAlt);
    const current = translations[locale]?.content ?? "";
    if (atCursor) {
      const ta = contentTextareaRefs.current[locale];
      if (ta) {
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const before = current.slice(0, start);
        const after = current.slice(end);
        updateTranslation(locale, "content", before + html + after);
        setInsertImageUrl("");
        setInsertImageAlt("");
        requestAnimationFrame(() => {
          ta.focus();
          ta.setSelectionRange(start + html.length, start + html.length);
        });
      } else {
        updateTranslation(locale, "content", current + html);
        setInsertImageUrl("");
        setInsertImageAlt("");
      }
    } else {
      updateTranslation(locale, "content", current + html);
      setInsertImageUrl("");
      setInsertImageAlt("");
    }
  };

  if (!hasSupabaseConfig) {
    return (
      <div>
        <p className="text-amber-600">Configure Supabase in .env.local.</p>
      </div>
    );
  }

  if (isEdit && loadingExisting) {
    return <p className="text-[#738a94]">Loading article…</p>;
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <Link
          to={isEdit ? "/admin/articles" : "/admin/articles"}
          className="inline-flex items-center gap-2 text-[#738a94] hover:text-[#15171A] text-sm mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>
        <h1 className="text-2xl font-bold text-[#15171A]">
          {isEdit ? "Edit article" : "New article"}
        </h1>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
          <p className="font-medium mb-2">Image upload not working? Use <strong>Embed</strong> (no setup) or fix Storage:</p>
          <ul className="list-disc list-inside space-y-1 text-xs mb-2">
            <li><strong>Embed</strong> — click &quot;Embed&quot;, choose your image (under 800 KB). Works immediately, no Supabase Storage needed.</li>
          </ul>
          <p className="font-medium mb-1 text-xs">To fix Upload (Supabase Storage):</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>Supabase Dashboard → <strong>Storage</strong></li>
            <li>If there’s no bucket named <strong>article-images</strong>, click <strong>New bucket</strong> → name: <code className="bg-slate-200 px-1 rounded">article-images</code>, toggle <strong>Public</strong> ON → Create</li>
            <li>Open <strong>article-images</strong> → ⚙️ Settings → set <strong>File size limit</strong> to <code className="bg-slate-200 px-1 rounded">5242880</code> (5 MB) → set <strong>Allowed MIME types</strong> to <em>empty</em> (allow all) → Save</li>
            <li>Dashboard → <strong>SQL Editor</strong> → run the SQL from <code className="bg-slate-200 px-1 rounded">supabase/migrations/002_storage_article_images.sql</code> (adds upload policy)</li>
          </ol>
        </div>
        {/* Common fields */}
        <div className="p-6 rounded-xl bg-white border border-[#e1e1e1] space-y-4">
          <h2 className="font-semibold text-[#15171A]">Common</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Auto from title, or type your own"
                className="mt-1"
              />
              <p className="text-xs text-[#738a94] mt-1">Generated from the English title when creating a new article. You can edit it.</p>
            </div>
            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={author}
                readOnly
                className="mt-1 bg-[#f5f5f5]"
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="readTime">Read time (minutes)</Label>
              <Input
                id="readTime"
                type="number"
                min={1}
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="12"
                className="mt-1"
              />
              <p className="text-xs text-[#738a94] mt-1">Number only — “min read” is added automatically.</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs text-[#738a94]">Video URL is set per language in the Content by language section below.</p>
            </div>
          </div>
        </div>

        {/* Per-language content */}
        <div className="p-6 rounded-xl bg-white border border-[#e1e1e1]">
          <h2 className="font-semibold text-[#15171A] mb-4">Content by language</h2>
          <Tabs value={activeContentTab} onValueChange={(v) => setActiveContentTab(v as Locale)} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1">
              {LOCALES.map(({ value, label }) => (
                <TabsTrigger key={value} value={value}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            {LOCALES.map(({ value }) => (
              <TabsContent key={value} value={value} className="mt-4 space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={translations[value]?.title ?? ""}
                    onChange={(e) => updateTranslation(value, "title", e.target.value)}
                    placeholder="Article title"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <div className="flex gap-2 mt-1 flex-wrap items-center">
                    <Input
                      value={translations[value]?.image ?? ""}
                      onChange={(e) => updateTranslation(value, "image", e.target.value)}
                      placeholder="https://... or Upload below"
                      className="flex-1 min-w-[200px]"
                    />
                    <input
                      ref={(el) => { if (el) heroFileInputRefs.current[value] = el; }}
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      className="hidden"
                      onChange={(e) => handleUploadHeroImage(value, e)}
                    />
                    <input
                      ref={(el) => { if (el) heroEmbedInputRefs.current[value] = el; }}
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      className="hidden"
                      onChange={(e) => handleEmbedHeroImage(value, e)}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="gap-1.5"
                      disabled={!!uploading}
                      onClick={() => heroFileInputRefs.current[value]?.click()}
                    >
                      <Upload className="h-4 w-4" />
                      {uploading === `hero-${value}` ? "Uploading…" : "Upload"}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="gap-1.5"
                      disabled={!!uploading}
                      onClick={() => heroEmbedInputRefs.current[value]?.click()}
                      title="Embed image (no server needed, works if Upload fails). Best under 800 KB."
                    >
                      {uploading === `embed-hero-${value}` ? "Embedding…" : "Embed"}
                    </Button>
                  </div>
                  <p className="text-xs text-[#738a94] mt-1">
                    Paste a URL, <strong>Upload</strong> (Supabase), or <strong>Embed</strong> (saves image in article, no setup, &lt;800 KB).
                  </p>
                  {(translations[value]?.image?.trim() ?? "").length > 0 && (
                    <div className="mt-2 rounded-lg overflow-hidden border border-[#e1e1e1] bg-[#f1f1f1] max-w-sm aspect-video">
                      <img
                        src={translations[value]!.image.trim()}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent && !parent.querySelector(".image-preview-fallback")) {
                            const fallback = document.createElement("div");
                            fallback.className = "image-preview-fallback flex items-center justify-center h-full text-[#738a94] text-sm p-2 text-center";
                            fallback.textContent = "Preview unavailable (image may be blocked or invalid)";
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  )}
                </div>
                <div>
                  <Label>Video URL (YouTube, Vimeo, or Google Drive)</Label>
                  <Input
                    value={translations[value]?.video ?? ""}
                    onChange={(e) => updateTranslation(value, "video", e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... or https://drive.google.com/file/d/.../view"
                    className="mt-1"
                  />
                  <p className="text-xs text-[#738a94] mt-1">One link per language. Shown at the bottom of the article for this locale.</p>
                </div>
                <div>
                  <Label>Excerpt</Label>
                  <Textarea
                    value={translations[value]?.excerpt ?? ""}
                    onChange={(e) => updateTranslation(value, "excerpt", e.target.value)}
                    placeholder="Short summary..."
                    rows={3}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Content (HTML)</Label>
                  <p className="text-xs text-[#738a94] mt-1 mb-2">
                    Use a blank line between paragraphs. For <strong>bold</strong> use <code>**text**</code>, for headings use <code>## Heading</code>.
                  </p>
                  <p className="text-xs font-medium text-[#15171A] mb-1">Images between paragraphs</p>
                  <p className="text-xs text-[#738a94] mb-2">
                    1) Click <strong>Embed</strong> (or Upload / paste URL) and choose your image. 2) Click in the content box below where you want the image. 3) Click <strong>Insert at cursor</strong>. Or use <strong>Insert at end</strong> and move the image HTML to the right place.
                  </p>
                  <div className="flex flex-wrap items-end gap-2 mb-2 p-3 rounded-lg bg-[#f8f9fa] border border-[#e1e1e1]">
                    <div className="flex-1 min-w-[180px]">
                      <Label className="text-xs">Image URL</Label>
                      <div className="flex gap-1 mt-1">
                        <Input
                          value={insertImageUrl}
                          onChange={(e) => setInsertImageUrl(e.target.value)}
                          placeholder="https://... or Upload"
                          className="h-9 text-sm flex-1"
                        />
                        <input
                          ref={(el) => { if (el) inlineFileInputRefs.current[value] = el; }}
                          type="file"
                          accept="image/jpeg,image/png,image/gif,image/webp"
                          className="hidden"
                          onChange={handleUploadInlineImage}
                        />
                        <input
                          ref={(el) => { if (el) inlineEmbedInputRefs.current[value] = el; }}
                          type="file"
                          accept="image/jpeg,image/png,image/gif,image/webp"
                          className="hidden"
                          onChange={handleEmbedInlineImage}
                        />
                        <Button type="button" variant="outline" size="sm" className="h-9 gap-1" disabled={!!uploading} onClick={() => inlineFileInputRefs.current[value]?.click()}>
                          <Upload className="h-3.5 w-3.5" /> Upload
                        </Button>
                        <Button type="button" variant="secondary" size="sm" className="h-9 gap-1" disabled={!!uploading} onClick={() => inlineEmbedInputRefs.current[value]?.click()} title="Embed (no server, &lt;800 KB)">
                          {uploading === "embed-inline" ? "…" : "Embed"}
                        </Button>
                      </div>
                    </div>
                    <div className="w-28">
                      <Label className="text-xs">Alt (optional)</Label>
                      <Input value={insertImageAlt} onChange={(e) => setInsertImageAlt(e.target.value)} placeholder="Describe" className="mt-1 h-9 text-sm" />
                    </div>
                    <Button type="button" variant="outline" size="sm" className="gap-1.5" onClick={() => insertImageIntoContent(value, true)} disabled={!insertImageUrl.trim()}>
                      <ImagePlus className="h-3.5 w-3.5" /> Insert at cursor
                    </Button>
                    <Button type="button" variant="outline" size="sm" onClick={() => insertImageIntoContent(value, false)} disabled={!insertImageUrl.trim()}>
                      Insert at end
                    </Button>
                  </div>
                  <Textarea
                    ref={(el) => { if (el) contentTextareaRefs.current[value] = el; }}
                    value={translations[value]?.content ?? ""}
                    onChange={(e) => updateTranslation(value, "content", e.target.value)}
                    placeholder="<p>Your content...</p>"
                    rows={12}
                    className="mt-1 font-mono text-sm"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving…" : isEdit ? "Update article" : "Create article"}
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link to="/admin/articles">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminArticleFormPage;
