import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { useBlog } from "@/contexts/BlogContext";
import { getBlogUI } from "@/lib/blog-i18n";

export const BlogToolbar: React.FC = () => {
  const { locale, searchQuery, setSearchQuery } = useBlog();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const t = getBlogUI(locale);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div className="blog-toolbar bg-white border-b border-[#e1e1e1] sticky top-0 z-30 shadow-sm">
      <div className="outer">
        <div className="inner">
          <div className="flex flex-col sm:flex-row gap-4 py-4">
            <form
              role="search"
              className="relative flex-1 min-w-0"
              onSubmit={handleSubmit}
            >
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#738a94] pointer-events-none"
                aria-hidden
              />
              <input
                type="search"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e1e1e1] bg-[#f8f9fa] text-[#15171A] placeholder:text-[#738a94] focus:outline-none focus:ring-2 focus:ring-[#a4d037]/30 focus:border-[#a4d037] transition-colors"
                aria-label={t.searchLabel}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
