import React from "react";
import { Link, useParams } from "react-router-dom";
import { getPostForLocale, formatArticleDate, ensureContentHtml, formatReadTimeDisplay } from "@/data/blog";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { useBlog } from "@/contexts/BlogContext";
import { ArticleVideo } from "@/components/blog/ArticleVideo";
import { getVideoWatchUrl } from "@/lib/video";
import { ArrowLeft, User, Calendar, Clock, ExternalLink } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { getBlogUI } from "@/lib/blog-i18n";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useBlog();
  const { posts } = useBlogPosts();
  const post = slug ? posts.find((p) => p.slug === slug) : undefined;
  const t = getBlogUI(locale);

  if (!post) {
    return (
      <BlogLayout>
        <div className="outer bg-[#f8f9fa]">
          <div className="inner py-16 text-center">
            <h1 className="text-2xl font-bold text-[#15171A]">{t.postNotFound}</h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-4 text-[#a4d037] font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backToHome}
            </Link>
          </div>
        </div>
      </BlogLayout>
    );
  }

  const { title, content, image: localeImage, video: localeVideo } = getPostForLocale(post, locale);
  const heroImage = localeImage ?? post.image;
  const videoUrl = localeVideo ?? post.video;
  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <BlogLayout>
      <article className="outer bg-[#f8f9fa]">
        <div className="inner max-w-4xl mx-auto">
          {/* Back link */}
          <div className="pt-6 pb-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#738a94] hover:text-[#a4d037] font-medium text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.allArticles}
            </Link>
          </div>

          <header className="article-header pb-6">
            <h1 className="article-title font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#15171A] m-0">
              {title}
            </h1>
            <div className="article-meta flex flex-wrap items-center gap-4 mt-5 text-[#738a94] text-base">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden />
                {post.author}
              </span>
              <time dateTime={post.date} className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden />
                {formatArticleDate(post.date)}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden />
                {formatReadTimeDisplay(post.readTime)}
              </span>
            </div>
          </header>

          {/* Hero image */}
          {heroImage && (
            <div className="article-hero mb-8 overflow-hidden rounded-xl shadow-lg bg-[#f1f1f1] relative min-h-[200px] aspect-[21/9] md:aspect-[2/1]">
              <img
                src={heroImage}
                alt=""
                className="w-full h-auto object-cover aspect-[21/9] md:aspect-[2/1] min-h-[200px]"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.onerror = null;
                  el.style.display = "none";
                  const wrap = el.closest(".article-hero");
                  const fallback = wrap?.querySelector(".hero-image-fallback");
                  if (fallback) (fallback as HTMLElement).classList.remove("hidden");
                }}
              />
              <div className="hero-image-fallback hidden absolute inset-0 flex items-center justify-center text-[#738a94] text-sm p-6 text-center">
                Image unavailable. Use a public image URL (e.g. Imgur, Unsplash, or Supabase Storage) in the admin.
              </div>
            </div>
          )}

          {/* Article body */}
          <div
            className="article-content prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-[#15171A] prose-headings:mt-10 prose-headings:mb-4 prose-headings:text-2xl
              prose-p:text-[#15171A] prose-p:leading-relaxed prose-p:mb-5
              prose-ul:my-5 prose-ol:my-5
              prose-li:my-1
              prose-a:text-[#a4d037] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-[#a4d037] prose-blockquote:bg-[#f8f9fa] prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r"
            dangerouslySetInnerHTML={{ __html: ensureContentHtml(content) }}
          />

          {/* Video at bottom of article (when set in admin for this language) */}
          {videoUrl && (() => {
            const watchUrl = getVideoWatchUrl(videoUrl);
            const isVimeo = videoUrl.includes("vimeo");
            const watchLabel = isVimeo ? t.watchOnVimeo : t.watchOnYouTube;
            return (
              <div className="mt-10 pt-8 border-t border-[#e1e1e1]">
                <ArticleVideo url={videoUrl} title={title} />
                {watchUrl && (
                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#a4d037] text-white font-medium rounded-lg hover:opacity-90 transition-opacity no-underline"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    {watchLabel}
                  </a>
                )}
              </div>
            );
          })()}

          {/* Author card */}
          <div className="mt-12 pt-8 border-t border-[#e1e1e1]">
            <div className="flex flex-wrap items-start gap-4 p-5 rounded-xl bg-white border border-[#e1e1e1] shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#a4d037] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[#15171A] m-0">{post.author}</p>
                <p className="text-sm text-[#738a94] mt-1 m-0">
                  {t.authorByline}
                </p>
              </div>
            </div>
          </div>

          {/* Back to list */}
          <footer className="article-footer mt-10 pb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#a4d037] font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backToAllPosts}
            </Link>
          </footer>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <aside className="read-more border-t border-[#e1e1e1] pt-10 pb-16">
              <h3 className="text-xl font-bold text-[#15171A] mb-6">
                {t.moreArticles}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map((p) => {
                  const { titleDisplay, image: relatedImage } = getPostForLocale(p, locale);
                  const img = relatedImage ?? p.image;
                  return (
                    <Link
                      key={String(p.id)}
                      to={`/post/${p.slug}`}
                      className="block p-4 rounded-xl bg-white border border-[#e1e1e1] shadow-sm hover:shadow-md hover:border-[#a4d037]/30 transition-all no-underline text-[#15171A] group"
                    >
                      {img && (
                        <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-[#f1f1f1]">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      )}
                      <p className="font-semibold text-sm line-clamp-2 group-hover:text-[#a4d037] transition-colors">
                        {titleDisplay}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </aside>
          )}
        </div>
      </article>
    </BlogLayout>
  );
};

export default BlogPostPage;
