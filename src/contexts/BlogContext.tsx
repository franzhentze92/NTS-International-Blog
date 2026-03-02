import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { Locale } from "@/lib/locales";

const BLOG_LOCALE_KEY = "nts-blog-locale";

function getStoredLocale(): Locale | null {
  try {
    const v = localStorage.getItem(BLOG_LOCALE_KEY);
    if (v && ["en", "es", "fr", "pt", "de", "ar", "hi", "vi", "zh"].includes(v)) return v as Locale;
  } catch (_) {}
  return null;
}

const DEFAULT_BLOG_LOCALE: Locale = "es";

interface BlogContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const BlogContext = createContext<BlogContextValue | null>(null);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getStoredLocale() ?? DEFAULT_BLOG_LOCALE);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(BLOG_LOCALE_KEY, locale);
    } catch (_) {}
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value: BlogContextValue = {
    locale,
    setLocale,
    searchQuery,
    setSearchQuery,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const ctx = useContext(BlogContext);
  if (!ctx) {
    throw new Error("useBlog must be used within BlogProvider");
  }
  return ctx;
}
