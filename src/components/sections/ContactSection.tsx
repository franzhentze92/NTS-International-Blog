import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ChevronDown, ChevronUp, Instagram, Twitter, Facebook } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const faqs = [
    {
      question: "Where can I buy Nutri Life?",
      answer: "Nutri Life is available on our website, Amazon, and at select retailers including Whole Foods, Target, and Sprouts. Use our store locator to find a location near you."
    },
    {
      question: "Are your products vegan?",
      answer: "Yes! All Nutri Life products are 100% vegan, gluten-free, and made with plant-based ingredients. We never use any animal-derived ingredients."
    },
    {
      question: "How much sugar is in each can?",
      answer: "Each can contains only 4-6g of natural sugar from real fruit. We never add refined sugars or artificial sweeteners."
    },
    {
      question: "What are prebiotics?",
      answer: "Prebiotics are plant fibers that feed the good bacteria in your gut. Each can of Nutri Life contains 9g of prebiotic fiber to support digestive health."
    },
    {
      question: "Do you offer subscriptions?",
      answer: "Yes! Subscribe and save 20% on every order. You can customize your delivery frequency and flavors, and cancel anytime."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact us for a full refund."
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "hello@nutrilife.com",
      subInfo: "We respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "1-800-NUTRI-LIFE",
      subInfo: "Mon-Fri 9am-6pm PST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "123 Wellness Ave",
      subInfo: "Los Angeles, CA 90210"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      info: "Mon-Fri: 9am-6pm",
      subInfo: "Sat-Sun: 10am-4pm"
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#ebcd07]/10 via-[#2deb65]/10 to-[#ebcd07]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#2deb65] mb-6">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-4">
            We'd Love to{' '}
            <span className="bg-gradient-to-r from-[#2deb65] via-[#ebcd07] to-[#2deb65] bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Questions, feedback, or just want to say hi? We're here for you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2deb65] to-[#ebcd07] flex items-center justify-center text-white mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-900">{item.info}</p>
              <p className="text-sm text-gray-500">{item.subInfo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-[#2deb65]" />
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2deb65] focus:ring-2 focus:ring-[#2deb65]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2deb65] focus:ring-2 focus:ring-[#2deb65]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2deb65] focus:ring-2 focus:ring-[#2deb65]/20 transition-all bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="press">Press & Media</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Product Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2deb65] focus:ring-2 focus:ring-[#2deb65]/20 transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#2deb65]/25 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#2deb65]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Follow Our Journey</h2>
          <p className="text-gray-600 mb-8">
            Join our community for wellness tips, behind-the-scenes content, and exclusive offers.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-[#2deb65]/30 flex items-center justify-center hover:bg-[#2deb65] hover:border-[#2deb65] transition-all group shadow-sm"
            >
              <Instagram className="w-6 h-6 text-gray-700 group-hover:text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-[#2deb65]/30 flex items-center justify-center hover:bg-blue-400 hover:border-transparent transition-all group shadow-sm"
            >
              <Twitter className="w-6 h-6 text-gray-700 group-hover:text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-[#2deb65]/30 flex items-center justify-center hover:bg-blue-500 hover:border-transparent transition-all group shadow-sm"
            >
              <Facebook className="w-6 h-6 text-gray-700 group-hover:text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#2deb65]/30 rounded-full text-sm text-gray-700 shadow-sm">@nutrilife</span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#2deb65]/30 rounded-full text-sm text-gray-700 shadow-sm">#NutriLifeWellness</span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#2deb65]/30 rounded-full text-sm text-gray-700 shadow-sm">#FeelGoodTasteAmazing</span>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://maps.google.com/maps?q=hotel+hilton+km+9.5+carretera+al+salvador+ciudad+de+guatemala+guatemala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Nutri Life Location Map"
              ></iframe>
            </div>
            <div className="mt-6 bg-white rounded-2xl shadow-xl p-6 text-center max-w-sm">
              <MapPin className="w-8 h-8 text-[#2deb65] mx-auto mb-2" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Visit Our HQ</h3>
              <p className="text-sm text-gray-600 mb-3">Hotel Hilton, Km 9.5 Carretera al Salvador<br />Ciudad de Guatemala, Guatemala</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=hotel+hilton+km+9.5+carretera+al+salvador+ciudad+de+guatemala+guatemala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#2deb65]/25 transition-all text-sm"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
