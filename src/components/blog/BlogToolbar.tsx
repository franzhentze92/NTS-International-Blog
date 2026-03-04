import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBlog } from "@/contexts/BlogContext";
import { getBlogUI } from "@/lib/blog-i18n";
import { BLOG_LOCALES, type Locale } from "@/lib/locales";

export const BlogToolbar: React.FC = () => {
  const { locale, setLocale, searchQuery, setSearchQuery } = useBlog();
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
          <div className="flex flex-row items-center gap-2 sm:gap-4 py-2 sm:py-4">
            <Link
              to="/"
              className="shrink-0 text-[#15171A] font-semibold text-sm sm:text-lg hover:text-[#a4d037] transition-colors no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a4d037] focus-visible:ring-offset-2 rounded whitespace-nowrap"
              aria-label={`${t.siteTitle} – Home`}
            >
              {t.siteTitle}
            </Link>
            <form
              role="search"
              className="relative flex-1 min-w-0 max-w-[180px] sm:max-w-none"
              onSubmit={handleSubmit}
            >
              <Search
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#738a94] pointer-events-none"
                aria-hidden
              />
              <input
                type="search"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2.5 text-sm sm:text-base rounded-lg border border-[#e1e1e1] bg-[#f8f9fa] text-[#15171A] placeholder:text-[#738a94] focus:outline-none focus:ring-2 focus:ring-[#a4d037]/30 focus:border-[#a4d037] transition-colors"
                aria-label={t.searchLabel}
              />
            </form>
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <span className="text-[#738a94] text-xs sm:text-sm hidden sm:inline" aria-hidden>
                {t.languageLabel}
              </span>
              <Select value={locale} onValueChange={(v) => setLocale(v as Locale)}>
                <SelectTrigger className="h-8 sm:h-9 w-[90px] sm:w-[150px] border border-[#e1e1e1] bg-[#f8f9fa] text-[#15171A] text-sm hover:bg-[#eef0f2] focus:ring-[#a4d037]/30 focus:ring-2 focus:border-[#a4d037] px-2 sm:px-3">
                  <SelectValue placeholder={t.languageLabel} />
                </SelectTrigger>
                <SelectContent className="border-[#e1e1e1] bg-white focus:ring-[#a4d037]/30">
                  {BLOG_LOCALES.map(({ value, label }) => (
                    <SelectItem key={value} value={value} className="focus:bg-[#a4d037]/15 focus:text-[#15171A] data-[highlighted]:bg-[#a4d037]/15">
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
