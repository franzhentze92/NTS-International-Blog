import React from 'react';
import { Leaf, Heart, Zap, Brain, Shield, Droplet, Sparkles, Flower2, Apple } from 'lucide-react';

const IngredientesSection: React.FC = () => {
  const nutrients = [
    {
      category: "Prebiotics",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-[#2deb65] to-[#ebcd07]",
      items: [
        {
          name: "Prebiotic Fiber",
          amount: "9g per can",
          description: "Natural plant fibers that nourish the beneficial bacteria in your gut, promoting digestive health and supporting your immune system."
        }
      ]
    },
    {
      category: "Adaptogens",
      icon: <Zap className="w-8 h-8" />,
      color: "from-[#ebcd07] to-[#2deb65]",
      items: [
        {
          name: "L-Theanine",
          description: "An amino acid found in tea that promotes relaxation without drowsiness, helping to reduce stress and improve focus."
        },
        {
          name: "Green Tea Extract",
          description: "Rich in antioxidants and natural caffeine, providing gentle energy and supporting metabolism and mental clarity."
        }
      ]
    },
    {
      category: "Vitamins & Minerals",
      icon: <Shield className="w-8 h-8" />,
      color: "from-[#2deb65] to-[#ebcd07]",
      items: [
        {
          name: "Vitamin C",
          description: "Essential for immune function, collagen production, and acts as a powerful antioxidant to protect cells from damage."
        },
        {
          name: "Vitamin A",
          description: "Supports vision, skin health, and immune function. Crucial for maintaining healthy tissues and cells."
        },
        {
          name: "Vitamin E",
          description: "A potent antioxidant that protects cells from oxidative stress and supports skin health and immune function."
        },
        {
          name: "Vitamin K",
          description: "Essential for blood clotting and bone health, helping your body maintain strong, healthy bones."
        },
        {
          name: "Potassium",
          description: "Regulates fluid balance, muscle contractions, and nerve signals. Helps maintain healthy blood pressure."
        },
        {
          name: "Iron",
          description: "Critical for oxygen transport in the blood and energy production. Prevents fatigue and supports cognitive function."
        },
        {
          name: "Magnesium",
          description: "Involved in over 300 biochemical reactions, including muscle and nerve function, energy production, and bone health."
        },
        {
          name: "Vitamin B6",
          description: "Supports brain function, helps create neurotransmitters, and plays a role in mood regulation and sleep."
        }
      ]
    },
    {
      category: "Plant Botanicals",
      icon: <Flower2 className="w-8 h-8" />,
      color: "from-[#ebcd07] to-[#2deb65]",
      items: [
        {
          name: "Lavender Extract",
          description: "Known for its calming properties, lavender helps reduce stress and anxiety while promoting relaxation and better sleep."
        },
        {
          name: "Ginger Root",
          description: "Natural anti-inflammatory that supports digestive health, reduces nausea, and provides warming, energizing properties."
        },
        {
          name: "Mint Extract",
          description: "Refreshing and cooling, mint aids digestion, helps with mental clarity, and provides natural freshness."
        },
        {
          name: "Elderberry",
          description: "Packed with antioxidants and vitamin C, elderberry supports immune function and helps fight inflammation."
        }
      ]
    },
    {
      category: "Antioxidants",
      icon: <Heart className="w-8 h-8" />,
      color: "from-[#2deb65] to-[#ebcd07]",
      items: [
        {
          name: "Resveratrol",
          description: "Found in grapes, this powerful antioxidant supports heart health, brain function, and may help protect against cellular damage."
        },
        {
          name: "Polyphenols",
          description: "Plant compounds with antioxidant properties found in fruits and teas, supporting overall health and reducing inflammation."
        }
      ]
    },
    {
      category: "Organic Fruits",
      icon: <Apple className="w-8 h-8" />,
      color: "from-[#ebcd07] to-[#2deb65]",
      items: [
        {
          name: "Organic Fruit Juices",
          description: "Real, organic fruit juices provide natural flavors, vitamins, and minerals without artificial additives or preservatives."
        },
        {
          name: "Natural Flavors",
          description: "Derived from real fruits and plants, ensuring authentic taste while maintaining purity and nutritional value."
        }
      ]
    },
    {
      category: "Functional Additions",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-[#2deb65] to-[#ebcd07]",
      items: [
        {
          name: "Apple Cider Vinegar",
          description: "Supports healthy digestion, helps balance blood sugar, and provides beneficial probiotics and enzymes."
        },
        {
          name: "Sparkling Water",
          description: "Pure, refreshing base that provides hydration without added calories, sugars, or artificial ingredients."
        }
      ]
    }
  ];

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
              Nuestros Ingredientes
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Transparencia en{' '}
              <span className="bg-gradient-to-r from-[#2deb65] via-[#ebcd07] to-[#2deb65] bg-clip-text text-transparent">
                Cada Sip
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              En Nutri Life, creemos que mereces saber exactamente qué estás bebiendo. Cada ingrediente es seleccionado cuidadosamente por sus beneficios para tu salud y bienestar.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Nos comprometemos a usar solo ingredientes naturales, orgánicos y funcionales que nutran tu cuerpo desde adentro hacia afuera.
            </p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Nuestra <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Filosofía</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                En Nutri Life, entendemos que la salud real viene de adentro. Por eso, cada uno de nuestros ingredientes es elegido con un propósito específico: apoyar tu bienestar holístico.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                No creemos en atajos ni en ingredientes artificiales. Todo lo que encuentras en nuestras bebidas está ahí porque es natural, beneficioso y respalda tu salud de manera integral.
              </p>
              <div className="space-y-3 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2deb65] to-[#ebcd07] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">100% ingredientes naturales y orgánicos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2deb65] to-[#ebcd07] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Sin azúcares refinados ni edulcorantes artificiales</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2deb65] to-[#ebcd07] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Sin conservantes ni colorantes artificiales</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2deb65] to-[#ebcd07] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Fuentes sostenibles y responsables</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2deb65]/20 to-[#ebcd07]/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Por Qué Elegir Nutri Life</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Droplet className="w-6 h-6 text-[#2deb65] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Hidratación Inteligente</h4>
                        <p className="text-sm text-gray-600">Más que agua, cada sorbo nutre tu cuerpo con ingredientes funcionales que realmente marcan la diferencia.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-[#2deb65] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Ciencia y Naturaleza</h4>
                        <p className="text-sm text-gray-600">Combinamos los últimos avances en nutrición con el poder de ingredientes naturales probados.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-[#2deb65] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Bienestar Integral</h4>
                        <p className="text-sm text-gray-600">Cada ingrediente está seleccionado para apoyar múltiples aspectos de tu salud.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrients Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-[#2deb65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Nuestros <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Ingredientes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Cada nutriente tiene un propósito. Descubre cómo cada ingrediente contribuye a tu bienestar.
            </p>
          </div>

          <div className="space-y-16">
            {nutrients.map((category, categoryIndex) => (
              <div key={categoryIndex} className="scroll-mt-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#2deb65] transition-colors">
                          {item.name}
                        </h4>
                        {item.amount && (
                          <span className="px-3 py-1 bg-gradient-to-r from-[#2deb65]/20 to-[#ebcd07]/20 text-[#2deb65] rounded-full text-xs font-semibold">
                            {item.amount}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">
              Prueba la Diferencia Nutri Life
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Descubre cómo estos ingredientes se combinan para crear bebidas deliciosas y funcionales que apoyan tu bienestar.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IngredientesSection;

