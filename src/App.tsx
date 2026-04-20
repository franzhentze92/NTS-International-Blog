
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { BlogProvider } from "@/contexts/BlogContext";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminArticlesPage from "./pages/admin/AdminArticlesPage";
import AdminArticleFormPage from "./pages/admin/AdminArticleFormPage";

const queryClient = new QueryClient();

const DOCUMENT_TITLE = "Nutrition Matters Translated";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = DOCUMENT_TITLE;
    // Article pages scroll to the article title in BlogPostPage — don't reset to top
    if (pathname.startsWith("/post/")) return;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <BlogProvider>
            <ScrollToTop />
            <Routes>
            <Route path="/" element={<BlogIndexPage />} />
            <Route path="/post/:slug" element={<BlogPostPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="articles" element={<AdminArticlesPage />} />
              <Route path="articles/new" element={<AdminArticleFormPage />} />
              <Route path="articles/:id" element={<AdminArticleFormPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            </Routes>
          </BlogProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
