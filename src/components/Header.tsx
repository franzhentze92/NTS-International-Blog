import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { PageType } from '@/components/AppLayout';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { items, totalItems, totalPrice, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { page: PageType; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'shop', label: 'Shop' },
    { page: 'about', label: 'About' },
    { page: 'ingredientes', label: 'Ingredientes' },
    { page: 'blog', label: 'Blog' },
    { page: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2deb65] to-[#ebcd07] flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">
                Nutri Life
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => {
                const isActive = currentPage === link.page || (link.page === 'blog' && currentPage === 'blog-detail');
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#2deb65] ${
                      isActive
                        ? 'text-[#2deb65] border-b-2 border-[#2deb65] pb-1'
                        : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-[#2deb65] transition-colors"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map(link => {
                const isActive = currentPage === link.page || (link.page === 'blog' && currentPage === 'blog-detail');
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`block w-full text-left py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#2deb65]/20 to-[#ebcd07]/20 text-[#2deb65]'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        onNavigate('shop');
                      }}
                      className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map(item => (
                      <div
                        key={item.product.id}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">{item.product.flavor}</p>
                          <p className="font-bold text-[#2deb65]">${item.product.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-colors ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {items.length > 0 && (
                <div className="border-t p-6 space-y-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-medium text-gray-700">Subtotal</span>
                    <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all">
                    Checkout
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    Free shipping on orders over $25
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
