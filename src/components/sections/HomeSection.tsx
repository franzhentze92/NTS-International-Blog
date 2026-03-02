import React, { useState } from 'react';
import { products, heroImage, lifestyleImage } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import { Product } from '@/data/products';
import { ArrowRight, Sparkles, Leaf, Heart, Zap, Star, ChevronLeft, ChevronRight, Globe, TreePine, Fish, Droplet } from 'lucide-react';
import { PageType } from '@/components/AppLayout';

interface HomeSectionProps {
  onNavigate: (page: PageType) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const testimonials = [
    {
      name: "Sofia Martinez",
      role: "Fitness Enthusiast",
      text: "Nutri Life has completely transformed my approach to nutrition. Their holistic products provide everything my body needs - probiotics, prebiotics, vitamins, and minerals - all in one place.",
      rating: 5
    },
    {
      name: "Jake Thompson",
      role: "Health Advocate",
      text: "I love that Nutri Life understands the connection between soil health and human health. Their products support the entire health chain, and I can feel the difference in my overall wellness.",
      rating: 5
    },
    {
      name: "Emma Chen",
      role: "Nutritionist",
      text: "As a nutritionist, I appreciate how Nutri Life creates products for all agents in the health equation. Their commitment to holistic health from soil to soul is truly inspiring.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Prebiotics",
      description: "Essential fibers that nourish beneficial gut bacteria",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Probiotics",
      description: "Live beneficial bacteria for optimal gut health",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Vitamins",
      description: "Essential nutrients for overall health and vitality",
      color: "from-[#ebcd07] to-[#2deb65]"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Minerals",
      description: "Key minerals for optimal body function and wellness",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Enzymes",
      description: "Natural enzymes for better digestion and nutrient absorption",
      color: "from-[#ebcd07] to-[#2deb65]"
    }
  ];

  const healthChain = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Planetary Health",
      description: "Sustainable practices that protect our planet",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    {
      icon: <TreePine className="w-10 h-10" />,
      title: "Soil Health",
      description: "Nurturing the foundation of all life",
      color: "from-[#ebcd07] to-[#2deb65]"
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Plant Health",
      description: "Healthy plants for nutritious food",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    {
      icon: <Fish className="w-10 h-10" />,
      title: "Animal Health",
      description: "Caring for all living beings in the chain",
      color: "from-[#ebcd07] to-[#2deb65]"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Human Health",
      description: "Ultimate wellness through connected health",
      color: "from-[#2deb65] to-[#ebcd07]"
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#ebcd07]/10 via-[#2deb65]/10 to-[#ebcd07]/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2deb65]/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ebcd07]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#2deb65]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#2deb65] mb-6">
                Health Through Connection
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#2deb65] via-[#ebcd07] to-[#2deb65] bg-clip-text text-transparent">
                  From Soil to Soul
                </span>
                <br />
                <span className="text-gray-900">Holistic Health for All</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                We believe in the fundamental connection: soil health → animal health → plant health → human health → planetary health. Our nutritional drinks and foods provide what's essential: probiotics, prebiotics, vitamins, minerals, and enzymes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-8 py-4 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#2deb65]/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full font-bold text-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  Our Story
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Nutri Life Products"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Product Badges */}
              <div className="absolute -top-4 -left-4 px-4 py-2 bg-white rounded-full shadow-lg">
                <span className="text-sm font-bold text-[#2deb65]">Drinks & Foods</span>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-full shadow-lg">
                <span className="text-sm font-bold text-[#ebcd07]">Holistic Health</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Health Chain Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Connected Chain</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the fundamental connection between all life. From healthy soil comes healthy plants, healthy animals, healthy humans, and a healthy planet. We create products that support every link in this chain.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {healthChain.map((link, index) => (
                <div key={index} className="relative">
                  <div
                    className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 h-full"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{link.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{link.description}</p>
                  </div>
                  {index < healthChain.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 items-center justify-center w-6 h-6 z-10">
                      <ArrowRight className="w-6 h-6 text-[#2deb65]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-[#2deb65]/10 to-[#ebcd07]/10 rounded-3xl">
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              "Recognizing our place in the interconnected health chain"
            </p>
          </div>
        </div>
      </section>

      {/* Essential Components Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-[#2deb65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              What's <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Essential</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our nutritional drinks and foods are packed with the essential components your body needs: probiotics, prebiotics, vitamins, minerals, and enzymes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Products</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Nutritional drinks and foods crafted with essential components for holistic health
              </p>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#2deb65]/25 transition-all flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={lifestyleImage}
                alt="Nutri Life Lifestyle"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#2deb65] to-[#ebcd07] rounded-3xl -z-10 hidden md:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#ebcd07] to-[#2deb65] rounded-3xl -z-10 hidden md:block" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Products for <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Every Agent</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                We understand that health is interconnected. That's why we create nutritional drinks and foods for humans with a deep understanding of our place in the health chain—from soil to animals to plants to people to the planet.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Our nutritional drinks and foods are designed to provide the essential building blocks: probiotics, prebiotics, vitamins, minerals, and enzymes that support human health while recognizing our connection to the broader health ecosystem.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">50K+</p>
                  <p className="text-gray-600 text-sm">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#ebcd07] to-[#2deb65] bg-clip-text text-transparent">4.9</p>
                  <p className="text-gray-600 text-sm">Star Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">100%</p>
                  <p className="text-gray-600 text-sm">Holistic</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[#2deb65]/25 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#2deb65] via-[#ebcd07] to-[#2deb65] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              What People Are <span className="text-white/90">Saying</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Real reviews from people who believe in holistic health
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-2xl text-center mb-6 italic">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial ? 'bg-white w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">
              Ready to Feel Amazing?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Explore our range of nutritional drinks and foods designed to support health at every level. Free shipping on orders over $25!
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#2deb65]/25 hover:scale-105 transition-all duration-300"
          >
            Shop Now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
};

export default HomeSection;
