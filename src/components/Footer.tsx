import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { PageType } from '@/components/AppLayout';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thanks for subscribing! Check your inbox for a special welcome offer.');
      setEmail('');
    }
  };

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#ebcd07]/10 via-[#2deb65]/10 to-[#ebcd07]/20 text-gray-900">
      {/* Newsletter Section */}
      <div className="border-b border-[#2deb65]/30 bg-gradient-to-r from-[#ebcd07]/10 to-[#2deb65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Join the Nutri Life Family</h3>
              <p className="text-gray-600">Get 15% off your first order + exclusive wellness tips</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-l-full bg-white border border-[#2deb65]/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#2deb65] focus:ring-2 focus:ring-[#2deb65]/20"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-r-full font-semibold hover:shadow-lg hover:shadow-[#2deb65]/25 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2deb65] to-[#ebcd07] flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold">Nutri Life</span>
            </button>
            <p className="text-gray-600 mb-4">
              Holistic wellness drinks crafted with love for the modern generation. Feel good, taste amazing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#2deb65]/30 flex items-center justify-center hover:bg-[#2deb65] hover:border-[#2deb65] transition-colors shadow-sm group">
                <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#2deb65]/30 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-colors shadow-sm group">
                <Twitter className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#2deb65]/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors shadow-sm group">
                <Facebook className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#2deb65]/30 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-colors shadow-sm group">
                <Youtube className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('shop')} className="text-gray-600 hover:text-[#2deb65] transition-colors">Shop All</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="text-gray-600 hover:text-[#2deb65] transition-colors">Our Story</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="text-gray-600 hover:text-[#2deb65] transition-colors">Contact Us</button>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2deb65] transition-colors">Store Locator</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2deb65] transition-colors">Wholesale</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2deb65] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2deb65] transition-colors">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2deb65] transition-colors">Returns & Refunds</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2deb65] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2deb65] transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-[#2deb65]" />
                <span>hello@nutrilife.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-[#2deb65]" />
                <span>1-800-NUTRI-LIFE</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-[#2deb65] flex-shrink-0" />
                <span>123 Wellness Ave, Los Angeles, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2deb65]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 Nutri Life. All rights reserved. Made with love for your wellness.
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968144.png" alt="Apple Pay" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="Google Pay" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
