import { useQuery } from "@tanstack/react-query";
import { supabase, hasSupabaseConfig } from "@/lib/supabase";
import { articleRowToBlogPost } from "@/lib/articles-db";
import type { BlogPost } from "@/data/blog";
import { blogPosts as staticPosts } from "@/data/blog";

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

  const isFromSupabase = hasSupabaseConfig && isSuccess && Array.isArray(dbPosts) && dbPosts.length > 0;
  const rawPosts = isFromSupabase ? dbPosts! : staticPosts;
  const posts = [...rawPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    posts,
    isLoading: hasSupabaseConfig ? isLoading : false,
    error: error as Error | null,
    isFromSupabase: Boolean(isFromSupabase),
  };
}
