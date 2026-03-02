import React from "react";
import { Link } from "react-router-dom";
import { BlogToolbar } from "@/components/blog/BlogToolbar";
import { BlogTopBar } from "@/components/blog/BlogTopBar";
import { useBlog } from "@/contexts/BlogContext";
import { getBlogUI } from "@/lib/blog-i18n";

interface BlogLayoutProps {
  children: React.ReactNode;
}

/** Single banner for all languages; title and subtitle are overlaid. */
const BLOG_BANNER_IMAGE = "/banners/blog-cover.png";

export const BlogSiteHeader: React.FC = () => {
  const { locale } = useBlog();
  const t = getBlogUI(locale);
  return (
    <header className="site-header relative w-full overflow-hidden">
      <Link
        to="/"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a4d037] focus-visible:ring-offset-2"
        aria-label={`${t.siteTitle} – Home`}
      >
        <div className="relative w-full aspect-[21/9] bg-[#15171A]">
          <img
            src={BLOG_BANNER_IMAGE}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/30 text-white text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg m-0">
              {t.siteTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 drop-shadow-md m-0 max-w-2xl">
              {t.siteDescription}
            </p>
          </div>
        </div>
      </Link>
    </header>
  );
};

export const BlogSiteFooter: React.FC = () => {
  const { locale } = useBlog();
  const t = getBlogUI(locale);
  return (
    <footer className="site-footer mt-auto bg-[#a4d037] text-white">
      <div className="outer">
        <div className="inner py-8 text-center">
          <p className="text-white/95 text-base m-0">
            {t.siteTitle} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => (
  <div className="viewport min-h-screen flex flex-col bg-white text-[#15171A]">
    <BlogTopBar />
    <BlogSiteHeader />
    <BlogToolbar />
    <main className="site-content flex-grow">{children}</main>
    <BlogSiteFooter />
  </div>
);
