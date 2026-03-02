import React, { useState, useMemo } from 'react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import { Search, SlidersHorizontal, X, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ShopSection: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Get all unique benefits
  const allBenefits = useMemo(() => {
    const benefits = new Set<string>();
    products.forEach(p => p.benefits.forEach(b => benefits.add(b)));
    return Array.from(benefits);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.flavor.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Benefit filter
    if (selectedBenefit) {
      result = result.filter(p => p.benefits.includes(selectedBenefit));
    }

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [searchQuery, sortBy, selectedBenefit]);

  const handleAddBundle = () => {
    products.forEach(product => {
      addToCart(product, 1);
    });
    toast.success('Variety Pack added to cart! All 6 flavors included.');
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-br from-[#ebcd07]/10 via-white to-[#2deb65]/10">
      {/* Hero Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#2deb65] to-[#ebcd07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4">
            Shop All Flavors
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover your perfect wellness companion. Each flavor is crafted with love and packed with benefits.
          </p>
        </div>
      </section>

      {/* Variety Pack Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2deb65] to-[#ebcd07] flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Variety Pack</h3>
              <p className="text-gray-600">Try all 6 flavors and save 15%</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500 line-through">$23.94</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">$19.99</p>
            </div>
            <button
              onClick={handleAddBundle}
              className="px-6 py-3 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#2deb65]/25 hover:scale-105 transition-all"
            >
              Add Bundle
            </button>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#2deb65] focus:ring-2 focus:ring-[#2deb65]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Benefit Filter */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-500" />
              <select
                value={selectedBenefit || ''}
                onChange={(e) => setSelectedBenefit(e.target.value || null)}
                className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[#2deb65] bg-white text-sm"
              >
                <option value="">All Benefits</option>
                {allBenefits.map(benefit => (
                  <option key={benefit} value={benefit}>{benefit}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[#2deb65] bg-white text-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(searchQuery || selectedBenefit) && (
          <div className="flex flex-wrap gap-2 mt-4">
            {searchQuery && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#2deb65]/20 text-[#2deb65] rounded-full text-sm">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-4 h-4" />
                </button>
              </span>
            )}
            {selectedBenefit && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#ebcd07]/20 text-[#ebcd07] rounded-full text-sm">
                {selectedBenefit}
                <button onClick={() => setSelectedBenefit(null)}>
                  <X className="w-4 h-4" />
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBenefit(null);
              }}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </button>
          </div>
        )}
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBenefit(null);
              }}
              className="px-6 py-2 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#2deb65]/25 transition-all"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
          </>
        )}
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

export default ShopSection;
