import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase, hasSupabaseConfig } from "@/lib/supabase";
import { formatArticleDate } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, ExternalLink } from "lucide-react";

export const AdminArticlesPage: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: articles, isLoading } = useQuery({
    queryKey: ["admin-articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("id, slug, author, date, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    enabled: hasSupabaseConfig,
  });

  if (!hasSupabaseConfig) {
    return (
      <div>
        <p className="text-amber-600">Configure Supabase in .env.local (see .env.example).</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#15171A]">Articles</h1>
        <Button asChild>
          <Link to="/admin/articles/new">New Article</Link>
        </Button>
      </div>

      {isLoading ? (
        <p className="text-[#738a94]">Loading…</p>
      ) : !articles?.length ? (
        <div className="p-6 rounded-xl bg-white border border-[#e1e1e1] text-center text-[#738a94]">
          No articles yet.{" "}
          <Link to="/admin/articles/new" className="text-[#a4d037] hover:underline">
            Create one
          </Link>
          .
        </div>
      ) : (
        <div className="space-y-2">
          {articles.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white border border-[#e1e1e1]"
            >
              <div className="min-w-0">
                <p className="font-medium text-[#15171A] truncate">{a.slug}</p>
                <p className="text-sm text-[#738a94]">
                  {a.author} · {formatArticleDate(a.date)}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="ghost" size="icon" asChild>
                  <a href={`/post/${a.slug}`} target="_blank" rel="noopener noreferrer" aria-label="View">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/admin/articles/${a.id}`} aria-label="Edit">
                    <Pencil className="h-4 w-4" />
                  </Link>
                </Button>
                <DeleteArticleButton id={a.id} queryClient={queryClient} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminArticlesPage;

function DeleteArticleButton({
  id,
  queryClient,
}: {
  id: string;
  queryClient: ReturnType<typeof useQueryClient>;
}) {
  const [confirming, setConfirming] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    const { error } = await supabase.from("articles").delete().eq("id", id);
    setDeleting(false);
    if (error) {
      alert(error.message);
      return;
    }
    setConfirming(false);
    queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
    queryClient.invalidateQueries({ queryKey: ["articles"] });
  };

  if (confirming) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-amber-600">Delete?</span>
        <Button size="sm" variant="destructive" onClick={handleDelete} disabled={deleting}>
          {deleting ? "…" : "Yes"}
        </Button>
        <Button size="sm" variant="outline" onClick={() => setConfirming(false)} disabled={deleting}>
          No
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setConfirming(true)}
      aria-label="Delete"
      className="text-red-600 hover:text-red-700 hover:bg-red-50"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
