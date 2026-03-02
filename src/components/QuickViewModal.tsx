import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { X, Plus, Minus, ShoppingBag, Leaf, Sparkles, Heart } from 'lucide-react';
import { toast } from 'sonner';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity}x ${product.name} added to cart!`);
    setQuantity(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className={`bg-gradient-to-br ${product.bgGradient} p-8 flex items-center justify-center`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-sm object-contain animate-in slide-in-from-left duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 overflow-y-auto max-h-[90vh] md:max-h-none">
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white mb-2"
                style={{ backgroundColor: product.color }}
              >
                {product.flavor}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-2xl font-bold" style={{ color: product.color }}>
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600 mb-6">{product.longDescription}</p>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" style={{ color: product.color }} />
                Benefits
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutrition */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5" style={{ color: product.color }} />
                Nutrition Facts
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900">{product.nutrition.calories}</p>
                  <p className="text-xs text-gray-500">Calories</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900">{product.nutrition.sugar}</p>
                  <p className="text-xs text-gray-500">Sugar</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900">{product.nutrition.fiber}</p>
                  <p className="text-xs text-gray-500">Fiber</p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5" style={{ color: product.color }} />
                Key Ingredients
              </h3>
              <p className="text-sm text-gray-600">
                {product.ingredients.join(' • ')}
              </p>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 px-6 rounded-full font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                style={{ backgroundColor: product.color }}
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
