import React from 'react';
import { teamImage, lifestyleImage } from '@/data/products';
import { Heart, Leaf, Sparkles, Target, Users, Globe, ArrowRight, CheckCircle, TreePine, Fish, Droplet, Zap } from 'lucide-react';
import { PageType } from '@/components/AppLayout';

interface AboutSectionProps {
  onNavigate: (page: PageType) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Holistic Health",
      description: "We believe in the connection: soil health → animal health → plant health → human health → planetary health.",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Interconnected Health",
      description: "We recognize and respect the connection between soil, animal, plant, human, and planetary health.",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Essential Components",
      description: "Our products provide what's essential: probiotics, prebiotics, vitamins, minerals, and enzymes.",
      color: "from-[#ebcd07] to-[#2deb65]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Planetary Wellness",
      description: "We're committed to practices that support the health of our planet and all its inhabitants.",
      color: "from-[#2deb65] to-[#ebcd07]"
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "The Vision",
      description: "Founded with a revolutionary idea: recognizing the fundamental connection between soil, animal, plant, human, and planetary health."
    },
    {
      year: "2023",
      title: "First Products",
      description: "Launched our first line of nutritional drinks and foods, focusing on essential components: probiotics, prebiotics, vitamins, minerals, and enzymes."
    },
    {
      year: "2024",
      title: "Expanding the Chain",
      description: "Expanded our product line to serve all agents in the health equation. Reached 50,000+ customers who believe in holistic health."
    },
    {
      year: "2025",
      title: "Global Impact",
      description: "Now available in 15 countries, creating products that support health at every level of the chain—from soil to soul."
    }
  ];

  const essentialComponents = [
    { 
      icon: <Leaf className="w-6 h-6" />,
      name: "Prebiotics", 
      benefit: "Natural plant fibers that nourish beneficial gut bacteria, supporting digestive and immune health.",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    { 
      icon: <Heart className="w-6 h-6" />,
      name: "Probiotics", 
      benefit: "Live beneficial bacteria that support gut health and overall wellness.",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    { 
      icon: <Sparkles className="w-6 h-6" />,
      name: "Vitamins", 
      benefit: "Essential vitamins that support immune function, energy production, and cellular health.",
      color: "from-[#ebcd07] to-[#2deb65]"
    },
    { 
      icon: <Zap className="w-6 h-6" />,
      name: "Minerals", 
      benefit: "Key minerals that support bone health, muscle function, and metabolic processes.",
      color: "from-[#2deb65] to-[#ebcd07]"
    },
    { 
      icon: <Droplet className="w-6 h-6" />,
      name: "Enzymes", 
      benefit: "Natural enzymes that enhance digestion and improve nutrient absorption.",
      color: "from-[#ebcd07] to-[#2deb65]"
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
              Our Story
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              From <span className="bg-gradient-to-r from-[#2deb65] via-[#ebcd07] to-[#2deb65] bg-clip-text text-transparent">
                Soil to Soul
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Nutri Life was born from a revolutionary understanding: the fundamental connection between soil health, animal health, plant health, human health, and planetary health.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              We create nutritional drinks and foods that provide what's essential—probiotics, prebiotics, vitamins, minerals, and enzymes—for human health, recognizing our place in this interconnected chain.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-[#2deb65]" />
                <span className="text-sm font-semibold text-[#2deb65] uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Recognizing the Interconnected Health Chain
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're on a mission to revolutionize how the world understands health. We recognize that human health is deeply connected to the health of soil, animals, plants, and the planet—and we create nutritional drinks and foods with this understanding in mind.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every product we create is packed with the essential components your body needs: probiotics, prebiotics, vitamins, minerals, and enzymes. Our vision recognizes that healthy soil leads to healthy plants, healthy animals, healthy humans, and ultimately, a healthy planet.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that true wellness can only be achieved when we recognize and respect the interconnected nature of all life.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">50K+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#ebcd07] to-[#2deb65] bg-clip-text text-transparent">15</p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">5</p>
                  <p className="text-sm text-gray-600">Essential Components</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={lifestyleImage}
                alt="Nutri Life Community"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#2deb65] to-[#ebcd07] rounded-3xl -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-[#2deb65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from understanding the health chain to creating products that support all agents in the equation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              From a vision of interconnected health to a global movement supporting the health chain
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2deb65] via-[#ebcd07] to-[#2deb65] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white p-6 rounded-2xl shadow-lg inline-block ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}>
                      <span className="text-3xl font-black bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2deb65] to-[#ebcd07] border-4 border-white shadow-lg z-10 hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Components Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#2deb65]/10 to-[#ebcd07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What's <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Essential</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our nutritional drinks and foods are built around five essential components. These are what your body truly needs—probiotics, prebiotics, vitamins, minerals, and enzymes. Every product we create is designed to provide these fundamentals for human health.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${component.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {component.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{component.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{component.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={teamImage}
                alt="Nutri Life Team"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#2deb65] to-[#ebcd07] rounded-3xl -z-10 hidden md:block" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-[#2deb65]" />
                <span className="text-sm font-semibold text-[#2deb65] uppercase tracking-wider">Our Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-[#2deb65] to-[#ebcd07] bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a diverse team of nutritionists, food scientists, agricultural experts, veterinarians, and wellness enthusiasts united by one vision: understanding and supporting the complete health chain from soil to soul.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team brings together expertise from across the globe—from soil health specialists to animal nutrition experts, from plant scientists to human nutritionists. We understand that to create truly effective products for humans, we must consider our place in the interconnected health chain.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Based in Los Angeles but serving the world, we're committed to creating nutritional drinks and foods that support human health while recognizing our connection to the broader health ecosystem.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[#2deb65]/25 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
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
              Ready to Join the Movement?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join us in supporting the complete health chain. Explore our range of nutritional drinks and foods that provide essential components for holistic health.
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
    </div>
  );
};

export default AboutSection;
