import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase, hasSupabaseConfig } from "@/lib/supabase";
import { articleRowToBlogPost } from "@/lib/articles-db";
import type { BlogPost } from "@/data/blog";
import { blogPosts as staticPosts } from "@/data/blog";

const LOG_PREFIX = "[NTS Blog]";

async function fetchArticlesFromSupabase(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("date", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(articleRowToBlogPost);
}

export function useBlogPosts(): {
  posts: BlogPost[];
  isLoading: boolean;
  error: Error | null;
  isFromSupabase: boolean;
} {
  const {
    data: dbPosts,
    isLoading,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticlesFromSupabase,
    enabled: hasSupabaseConfig,
    staleTime: 60 * 1000,
  });

  const isFromSupabase = hasSupabaseConfig && isSuccess && Array.isArray(dbPosts);
  const rawPosts = isFromSupabase ? dbPosts! : staticPosts;
  const posts = [...rawPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  useEffect(() => {
    if (!hasSupabaseConfig) {
      console.warn(
        `${LOG_PREFIX} Supabase not configured. Using static posts. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel → Settings → Environment Variables, then redeploy.`
      );
      return;
    }
    if (isSuccess && Array.isArray(dbPosts)) {
      console.log(
        `${LOG_PREFIX} Supabase connected. Using ${dbPosts.length} article(s) from database.`
      );
    } else if (error) {
      console.warn(
        `${LOG_PREFIX} Supabase fetch failed. Using static posts.`,
        error
      );
    }
  }, [hasSupabaseConfig, isSuccess, dbPosts, error]);

  return {
    posts,
    isLoading: hasSupabaseConfig ? isLoading : false,
    error: error as Error | null,
    isFromSupabase: Boolean(isFromSupabase),
  };
}
