import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { getPostForLocale, filterPostsBySearch, formatArticleDate, formatReadTimeDisplay } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { useBlog } from "@/contexts/BlogContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { getBlogUI } from "@/lib/blog-i18n";
import { blogImagePresets, supabaseRenderImageUrl } from "@/lib/supabase";

function PostCard({
  post,
  isFeatured,
  displayTitle,
  displayExcerpt,
  displayDate,
  displayImage,
}: {
  post: BlogPost;
  isFeatured: boolean;
  displayTitle: string;
  displayExcerpt: string;
  displayDate: string;
  displayImage?: string;
}) {
  const cardImageSrc = displayImage
    ? supabaseRenderImageUrl(displayImage, blogImagePresets.card)
    : undefined;

  return (
    <article
      className={`post-card flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
        isFeatured ? "" : "h-full min-h-0"
      }`}
    >
      <Link
        to={`/post/${post.slug}`}
        className={`post-card-content-link flex flex-col flex-1 min-h-0 text-[#15171A] no-underline hover:no-underline group ${
          isFeatured ? "p-0" : "p-5 md:p-6"
        }`}
      >
        {isFeatured ? (
          <>
            <h2 className="post-card-title font-sans text-xl md:text-2xl lg:text-3xl font-bold leading-snug px-6 pt-6 pb-2 text-black uppercase tracking-wide">
              {displayTitle}
            </h2>
            {cardImageSrc && (
              <div className="post-card-image-link block px-6 overflow-hidden flex-shrink-0">
                <div className="rounded-lg overflow-hidden aspect-[21/9] bg-[#f1f1f1]">
                  <img
                    src={cardImageSrc}
                    alt=""
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <p className="post-card-excerpt mt-4 px-6 text-[#15171A]/90 text-base md:text-lg leading-relaxed line-clamp-3">
              {displayExcerpt}
            </p>
            <div className="post-card-meta flex items-center gap-2 mt-4 px-6 pb-6 pt-2 text-[#738a94] text-sm border-t border-[#e1e1e1]">
              <time dateTime={post.date}>{displayDate}</time>
              <span aria-hidden>·</span>
              <span>{formatReadTimeDisplay(post.readTime)}</span>
            </div>
          </>
        ) : (
          <>
            <h2 className="post-card-title font-sans text-lg md:text-xl font-bold leading-snug m-0 text-black group-hover:text-[#0d0e0f] line-clamp-4 min-h-[6.5rem]">
              {displayTitle}
            </h2>
            {cardImageSrc && (
              <div className="post-card-image-link block mt-4 w-full overflow-hidden rounded-lg bg-[#f1f1f1] flex-shrink-0">
                <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg">
                  <img
                    src={cardImageSrc}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <p className="post-card-excerpt mt-4 text-[#15171A]/90 text-sm md:text-base leading-relaxed line-clamp-3">
              {displayExcerpt}
            </p>
            <div className="post-card-meta flex items-center gap-2 mt-4 pt-2 mt-auto text-[#738a94] text-sm border-t border-[#e1e1e1]">
              <time dateTime={post.date}>{displayDate}</time>
              <span aria-hidden>·</span>
              <span>{formatReadTimeDisplay(post.readTime)}</span>
            </div>
          </>
        )}
      </Link>
    </article>
  );
}

const BlogIndexPage: React.FC = () => {
  const { locale, searchQuery } = useBlog();
  const { posts, isLoading } = useBlogPosts();
  const t = getBlogUI(locale);

  const filteredPosts = useMemo(
    () => filterPostsBySearch(posts, searchQuery, locale),
    [posts, searchQuery, locale]
  );

  const [featuredPost, ...restPosts] = filteredPosts;

  if (isLoading) {
    return (
      <BlogLayout>
        <div className="outer bg-[#f8f9fa]">
          <div className="inner py-16 text-center">
            <p className="text-[#738a94]">{t.loadingArticles}</p>
          </div>
        </div>
      </BlogLayout>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <BlogLayout>
        <div className="outer bg-[#f8f9fa]">
          <div className="inner py-16 text-center">
            <p className="text-[#738a94] text-lg">
              {t.noResults}
            </p>
          </div>
        </div>
      </BlogLayout>
    );
  }

  const featuredDisplay = featuredPost
    ? getPostForLocale(featuredPost, locale)
    : null;

  return (
    <BlogLayout>
      <div className="outer bg-[#f8f9fa]">
        <div className="inner">
          {featuredPost && featuredDisplay && (
            <section className="pt-8 md:pt-10 pb-6 md:pb-8">
              <PostCard
                post={featuredPost}
                isFeatured
                displayTitle={featuredDisplay.titleDisplay}
                displayExcerpt={featuredDisplay.excerpt}
                displayDate={formatArticleDate(featuredPost.date)}
                displayImage={featuredDisplay.image ?? featuredPost.image}
              />
            </section>
          )}

          <div className="post-feed grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-16 items-stretch">
            {restPosts.map((post) => {
              const loc = getPostForLocale(post, locale);
              return (
                <PostCard
                  key={String(post.id)}
                  post={post}
                  isFeatured={false}
                  displayTitle={loc.titleDisplay}
                  displayExcerpt={loc.excerpt}
                  displayDate={formatArticleDate(post.date)}
                  displayImage={loc.image ?? post.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogIndexPage;
