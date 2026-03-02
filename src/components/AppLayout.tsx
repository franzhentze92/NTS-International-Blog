import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeSection from '@/components/sections/HomeSection';
import ShopSection from '@/components/sections/ShopSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import IngredientesSection from '@/components/sections/IngredientesSection';
import BlogSection from '@/components/sections/BlogSection';
import BlogDetailSection from '@/components/sections/BlogDetailSection';

export type PageType = 'home' | 'shop' | 'about' | 'contact' | 'ingredientes' | 'blog' | 'blog-detail';

const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [blogPostId, setBlogPostId] = useState<number>(1);

  const handleNavigate = (page: PageType, postId?: number) => {
    setCurrentPage(page);
    if (postId) {
      setBlogPostId(postId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection onNavigate={setCurrentPage} />;
      case 'shop':
        return <ShopSection />;
      case 'about':
        return <AboutSection onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactSection />;
      case 'ingredientes':
        return <IngredientesSection />;
      case 'blog':
        return <BlogSection onNavigate={handleNavigate} />;
      case 'blog-detail':
        return <BlogDetailSection postId={blogPostId} onNavigate={setCurrentPage} />;
      default:
        return <HomeSection onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default AppLayout;
