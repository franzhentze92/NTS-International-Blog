import React from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBlog } from "@/contexts/BlogContext";
import { BLOG_LOCALES, type Locale } from "@/lib/locales";
import { getBlogUI } from "@/lib/blog-i18n";

/** Language dropdown at the very top of the blog so the whole page translates when changed. */
export const BlogTopBar: React.FC = () => {
  const { locale, setLocale } = useBlog();
  const t = getBlogUI(locale);

  return (
    <div className="blog-top-bar bg-[#a4d037] text-white border-b border-[#8fb82e]">
      <div className="outer">
        <div className="inner flex items-center justify-between gap-4 py-2 sm:py-2.5">
          <Link
            to="/"
            className="text-white/95 hover:text-white font-medium text-sm no-underline transition-colors"
          >
            {t.siteTitle}
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-white/90 text-xs sm:text-sm hidden sm:inline" aria-hidden>
              {t.languageLabel}
            </span>
            <Select value={locale} onValueChange={(v) => setLocale(v as Locale)}>
              <SelectTrigger className="w-[140px] sm:w-[160px] border-white/30 bg-white/15 text-white hover:bg-white/25 focus:ring-[#6b8f1f] focus:ring-2 focus:border-white/40 [&>span]:text-white placeholder:text-white/80">
                <SelectValue placeholder={t.languageLabel} />
              </SelectTrigger>
              <SelectContent className="border-[#a4d037]/30 bg-white focus:ring-[#a4d037]/30">
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
  );
};
