import React from 'react';
import { PageType } from '@/components/AppLayout';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

interface BlogSectionProps {
  onNavigate: (page: PageType, postId?: number) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Los Beneficios de los Prebióticos para tu Salud Digestiva",
      excerpt: "Descubre cómo los prebióticos pueden transformar tu salud intestinal y mejorar tu bienestar general. Aprende sobre los alimentos ricos en prebióticos y cómo incorporarlos en tu dieta diaria.",
      author: "Dra. María González",
      date: "15 Marzo 2024",
      readTime: "5 min",
      category: "Salud Digestiva",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Adaptógenos: Tu Aliado Natural contra el Estrés",
      excerpt: "Los adaptógenos son plantas poderosas que ayudan a tu cuerpo a manejar el estrés de manera natural. Conoce cuáles son los mejores adaptógenos y cómo pueden beneficiarte.",
      author: "Lic. Carlos Ramírez",
      date: "12 Marzo 2024",
      readTime: "7 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Guía Completa de Vitaminas Esenciales para tu Cuerpo",
      excerpt: "Una guía detallada sobre las vitaminas que tu cuerpo necesita, dónde encontrarlas y cómo asegurarte de obtener las cantidades adecuadas a través de una alimentación balanceada.",
      author: "Nutr. Ana Martínez",
      date: "10 Marzo 2024",
      readTime: "8 min",
      category: "Nutrición",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Hidratación Inteligente: Más Allá del Agua",
      excerpt: "La hidratación no se trata solo de beber agua. Descubre cómo las bebidas funcionales pueden mejorar tu hidratación mientras nutres tu cuerpo con ingredientes beneficiosos.",
      author: "Dra. Laura Sánchez",
      date: "8 Marzo 2024",
      readTime: "6 min",
      category: "Hidratación",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Plantas Botánicas: El Poder Curativo de la Naturaleza",
      excerpt: "Explora el mundo de las plantas botánicas y cómo ingredientes como la lavanda, el jengibre y la menta pueden mejorar tu salud de formas sorprendentes.",
      author: "Dr. Roberto Fernández",
      date: "5 Marzo 2024",
      readTime: "9 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Antioxidantes: Tu Escudo contra el Envejecimiento",
      excerpt: "Los antioxidantes son fundamentales para proteger tus células del daño oxidativo. Aprende sobre el resveratrol, los polifenoles y otros antioxidantes poderosos.",
      author: "Dra. Patricia López",
      date: "3 Marzo 2024",
      readTime: "7 min",
      category: "Nutrición",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogPosts.forEach(post => cats.add(post.category));
    return Array.from(cats);
  }, []);

  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handlePostClick = (postId: number) => {
    onNavigate('blog-detail', postId);
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#ebcd07]/10 via-[#2deb65]/10 to-[#ebcd07]/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#2deb65]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ebcd07]/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#2deb65] mb-6">
              Blog Nutri Life
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Bienestar y{' '}
              <span className="bg-gradient-to-r from-[#2deb65] via-[#ebcd07] to-[#2deb65] bg-clip-text text-transparent">
                Nutrición
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Descubre consejos, guías y artículos sobre salud, nutrición y bienestar holístico
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#2deb65] focus:ring-2 focus:ring-[#2deb65]/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !selectedCategory && !searchQuery && (
        <section className="py-12 bg-gradient-to-br from-gray-50 to-[#2deb65]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-sm font-semibold text-[#2deb65] uppercase tracking-wider">Artículo Destacado</span>
            </div>
            <div
              onClick={() => handlePostClick(featuredPost.id)}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-[#2deb65] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Por {featuredPost.author}</span>
                    <button className="flex items-center gap-2 text-[#2deb65] font-semibold group-hover:gap-4 transition-all">
                      Leer más
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron artículos</h3>
              <p className="text-gray-600">Intenta ajustar tu búsqueda o filtros</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  {selectedCategory || searchQuery ? 'Resultados' : 'Todos los Artículos'}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map(post => (
                  <article
                    key={post.id}
                    onClick={() => handlePostClick(post.id)}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2deb65] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-gray-700 font-medium">Por {post.author}</span>
                        <ArrowRight className="w-5 h-5 text-[#2deb65] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;

