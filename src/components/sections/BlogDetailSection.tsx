import React from 'react';
import { PageType } from '@/components/AppLayout';
import { Calendar, Clock, ArrowLeft, User, Tag } from 'lucide-react';

interface BlogDetailSectionProps {
  postId: number;
  onNavigate: (page: PageType) => void;
}

const BlogDetailSection: React.FC<BlogDetailSectionProps> = ({ postId, onNavigate }) => {
  // This would typically fetch from an API, but for now we'll use static content
  const blogPosts: Record<number, any> = {
    1: {
      id: 1,
      title: "Los Beneficios de los Prebióticos para tu Salud Digestiva",
      author: "Dra. María González",
      date: "15 Marzo 2024",
      readTime: "5 min",
      category: "Salud Digestiva",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
      content: `
        <h2>¿Qué son los Prebióticos?</h2>
        <p>Los prebióticos son un tipo de fibra dietética que actúa como alimento para las bacterias beneficiosas en tu intestino. A diferencia de los probióticos, que son las bacterias mismas, los prebióticos son los compuestos que estas bacterias necesitan para prosperar.</p>
        
        <h2>Beneficios para tu Salud Digestiva</h2>
        <p>Los prebióticos ofrecen una serie de beneficios impresionantes para tu salud digestiva:</p>
        <ul>
          <li><strong>Mejoran la digestión:</strong> Ayudan a mantener un equilibrio saludable de bacterias en el intestino, lo que puede mejorar la digestión y reducir problemas como el estreñimiento.</li>
          <li><strong>Refuerzan el sistema inmunológico:</strong> Un intestino sano está directamente relacionado con un sistema inmunológico fuerte. Los prebióticos ayudan a mantener este equilibrio.</li>
          <li><strong>Absorción de nutrientes:</strong> Mejoran la absorción de minerales importantes como el calcio y el magnesio.</li>
          <li><strong>Reducen la inflamación:</strong> Pueden ayudar a reducir la inflamación en el tracto digestivo.</li>
        </ul>
        
        <h2>Fuentes Naturales de Prebióticos</h2>
        <p>Puedes encontrar prebióticos en varios alimentos naturales:</p>
        <ul>
          <li>Ajo y cebolla</li>
          <li>Plátanos</li>
          <li>Avena</li>
          <li>Espárragos</li>
          <li>Raíz de achicoria</li>
          <li>Manzanas</li>
        </ul>
        
        <h2>Prebióticos en Nutri Life</h2>
        <p>En Nutri Life, nos aseguramos de que cada lata contenga 9 gramos de prebióticos de alta calidad. Esta cantidad está científicamente respaldada para proporcionar beneficios digestivos reales sin causar molestias gastrointestinales.</p>
        
        <h2>Conclusión</h2>
        <p>Incorporar prebióticos en tu dieta diaria es una excelente manera de apoyar tu salud digestiva y general. Con Nutri Life, puedes obtener estos beneficios mientras disfrutas de una bebida deliciosa y refrescante.</p>
      `
    },
    2: {
      id: 2,
      title: "Adaptógenos: Tu Aliado Natural contra el Estrés",
      author: "Lic. Carlos Ramírez",
      date: "12 Marzo 2024",
      readTime: "7 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1200&h=600&fit=crop",
      content: `
        <h2>Introducción a los Adaptógenos</h2>
        <p>Los adaptógenos son plantas y hierbas únicas que ayudan a tu cuerpo a adaptarse y responder mejor al estrés físico, químico y biológico. Estas sustancias naturales han sido utilizadas durante siglos en la medicina tradicional.</p>
        
        <h2>¿Cómo Funcionan los Adaptógenos?</h2>
        <p>Los adaptógenos actúan de manera bidireccional: pueden ayudar tanto a reducir el estrés como a aumentar la energía cuando es necesario. Este efecto de "normalización" es lo que los hace tan especiales.</p>
        
        <h2>Adaptógenos en Nutri Life</h2>
        <p>En nuestros productos utilizamos adaptógenos cuidadosamente seleccionados:</p>
        <ul>
          <li><strong>L-Theanine:</strong> Este aminoácido, encontrado naturalmente en el té verde, promueve la relajación sin causar somnolencia. Mejora el enfoque y reduce la ansiedad.</li>
          <li><strong>Extracto de Té Verde:</strong> Rico en antioxidantes y cafeína natural, proporciona energía suave y apoya el metabolismo y la claridad mental.</li>
        </ul>
        
        <h2>Beneficios para tu Bienestar</h2>
        <ul>
          <li>Reducción del estrés y la ansiedad</li>
          <li>Mejora del estado de ánimo</li>
          <li>Mayor energía y resistencia</li>
          <li>Mejor calidad del sueño</li>
          <li>Apoyo al sistema inmunológico</li>
        </ul>
        
        <h2>Integración en tu Rutina</h2>
        <p>Los adaptógenos funcionan mejor cuando se consumen de manera consistente. Incorporar una lata de Nutri Life en tu rutina diaria puede ser una forma fácil y deliciosa de obtener estos beneficios.</p>
      `
    },
    3: {
      id: 3,
      title: "Guía Completa de Vitaminas Esenciales para tu Cuerpo",
      author: "Nutr. Ana Martínez",
      date: "10 Marzo 2024",
      readTime: "8 min",
      category: "Nutrición",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
      content: `
        <h2>Las Vitaminas: Fundamentales para la Vida</h2>
        <p>Las vitaminas son compuestos orgánicos esenciales que tu cuerpo necesita en pequeñas cantidades para funcionar correctamente. Cada vitamina tiene funciones específicas y cruciales para mantenerte saludable.</p>
        
        <h2>Vitaminas Hidrosolubles</h2>
        <ul>
          <li><strong>Vitamina C:</strong> Esencial para el sistema inmunológico, la producción de colágeno y como antioxidante poderoso.</li>
          <li><strong>Vitaminas del Complejo B:</strong> Incluyendo B6, que apoya la función cerebral y la producción de neurotransmisores.</li>
        </ul>
        
        <h2>Vitaminas Liposolubles</h2>
        <ul>
          <li><strong>Vitamina A:</strong> Crucial para la visión, la salud de la piel y el sistema inmunológico.</li>
          <li><strong>Vitamina E:</strong> Un potente antioxidante que protege las células del daño oxidativo.</li>
          <li><strong>Vitamina K:</strong> Esencial para la coagulación sanguínea y la salud ósea.</li>
        </ul>
        
        <h2>Minerales Esenciales</h2>
        <ul>
          <li><strong>Potasio:</strong> Regula el equilibrio de fluidos, las contracciones musculares y las señales nerviosas.</li>
          <li><strong>Hierro:</strong> Crítico para el transporte de oxígeno en la sangre y la producción de energía.</li>
          <li><strong>Magnesio:</strong> Participa en más de 300 reacciones bioquímicas en el cuerpo.</li>
        </ul>
        
        <h2>Obtener Vitaminas de Forma Natural</h2>
        <p>En Nutri Life, creemos en obtener vitaminas y minerales de fuentes naturales. Nuestras bebidas incluyen una variedad de vitaminas y minerales derivados de ingredientes orgánicos reales.</p>
      `
    },
    4: {
      id: 4,
      title: "Hidratación Inteligente: Más Allá del Agua",
      author: "Dra. Laura Sánchez",
      date: "8 Marzo 2024",
      readTime: "6 min",
      category: "Hidratación",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=1200&h=600&fit=crop",
      content: `
        <h2>La Importancia de la Hidratación</h2>
        <p>El agua es esencial para la vida, pero la hidratación inteligente va más allá de simplemente beber agua. Se trata de proporcionar a tu cuerpo los fluidos que necesita mientras también obtienes nutrientes beneficiosos.</p>
        
        <h2>¿Qué es la Hidratación Funcional?</h2>
        <p>La hidratación funcional combina la hidratación básica con ingredientes que ofrecen beneficios adicionales para tu salud y bienestar. Esto incluye electrolitos, vitaminas, minerales y otros compuestos que apoyan las funciones corporales.</p>
        
        <h2>Beneficios de las Bebidas Funcionales</h2>
        <ul>
          <li><strong>Hidratación mejorada:</strong> Los electrolitos ayudan a tu cuerpo a absorber y retener el agua de manera más efectiva.</li>
          <li><strong>Nutrición adicional:</strong> Puedes obtener vitaminas y minerales mientras te hidratas.</li>
          <li><strong>Sabor y variedad:</strong> Mantenerte hidratado puede ser más placentero con opciones sabrosas.</li>
        </ul>
        
        <h2>Hidratación Inteligente con Nutri Life</h2>
        <p>Nuestras bebidas están diseñadas para proporcionar hidratación efectiva junto con beneficios nutricionales. Cada lata contiene ingredientes cuidadosamente seleccionados que no solo hidratan, sino que también nutren tu cuerpo.</p>
        
        <h2>Cuándo Elegir Bebidas Funcionales</h2>
        <p>Las bebidas funcionales son ideales para:</p>
        <ul>
          <li>Después del ejercicio</li>
          <li>Durante días calurosos</li>
          <li>Cuando necesitas un impulso de energía y nutrición</li>
          <li>Como parte de una rutina diaria de bienestar</li>
        </ul>
      `
    },
    5: {
      id: 5,
      title: "Plantas Botánicas: El Poder Curativo de la Naturaleza",
      author: "Dr. Roberto Fernández",
      date: "5 Marzo 2024",
      readTime: "9 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1200&h=600&fit=crop",
      content: `
        <h2>El Poder de las Plantas</h2>
        <p>Desde tiempos ancestrales, las plantas han sido utilizadas por sus propiedades curativas y beneficiosas. Hoy en día, la ciencia moderna está validando lo que las culturas tradicionales han sabido durante siglos: las plantas botánicas tienen un poder extraordinario.</p>
        
        <h2>Plantas Botánicas en Nutri Life</h2>
        <p>Utilizamos una variedad de plantas botánicas cuidadosamente seleccionadas:</p>
        
        <h3>Lavanda</h3>
        <p>Conocida por sus propiedades calmantes, la lavanda ayuda a reducir el estrés y la ansiedad. Sus efectos relajantes pueden mejorar la calidad del sueño y promover una sensación de bienestar general.</p>
        
        <h3>Jengibre</h3>
        <p>El jengibre es un antiinflamatorio natural poderoso que apoya la salud digestiva. También puede ayudar a reducir las náuseas y proporcionar un efecto energizante y cálido.</p>
        
        <h3>Menta</h3>
        <p>Refrescante y revitalizante, la menta ayuda con la digestión y puede mejorar la claridad mental. Su sabor fresco es perfecto para momentos que necesitan un impulso refrescante.</p>
        
        <h3>Elderberry (Sauco)</h3>
        <p>Rica en antioxidantes y vitamina C, la elderberry es conocida por sus propiedades que apoyan el sistema inmunológico. Puede ayudar a combatir la inflamación y apoyar la salud general.</p>
        
        <h2>Beneficios Sinérgicos</h2>
        <p>Cuando estas plantas botánicas se combinan, crean un efecto sinérgico que potencia sus beneficios individuales. En Nutri Life, seleccionamos combinaciones que trabajan juntas para maximizar el bienestar.</p>
      `
    },
    6: {
      id: 6,
      title: "Antioxidantes: Tu Escudo contra el Envejecimiento",
      author: "Dra. Patricia López",
      date: "3 Marzo 2024",
      readTime: "7 min",
      category: "Nutrición",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
      content: `
        <h2>¿Qué son los Antioxidantes?</h2>
        <p>Los antioxidantes son compuestos que protegen a tus células del daño causado por moléculas inestables llamadas radicales libres. Este daño, conocido como estrés oxidativo, está relacionado con el envejecimiento y diversas enfermedades.</p>
        
        <h2>El Poder del Resveratrol</h2>
        <p>El resveratrol es un antioxidante potente que se encuentra en las uvas y el vino tinto. Este compuesto ha sido ampliamente estudiado por sus beneficios potenciales:</p>
        <ul>
          <li><strong>Salud cardiovascular:</strong> Puede ayudar a proteger el corazón y mejorar la circulación.</li>
          <li><strong>Función cerebral:</strong> Puede apoyar la salud del cerebro y la función cognitiva.</li>
          <li><strong>Protección celular:</strong> Ayuda a proteger las células del daño oxidativo.</li>
        </ul>
        
        <h2>Polifenoles: Antioxidantes Versátiles</h2>
        <p>Los polifenoles son un grupo de antioxidantes encontrados en frutas, verduras, té y otras plantas. Estos compuestos ofrecen múltiples beneficios:</p>
        <ul>
          <li>Reducción de la inflamación</li>
          <li>Apoyo al sistema inmunológico</li>
          <li>Mejora de la salud digestiva</li>
          <li>Protección contra enfermedades crónicas</li>
        </ul>
        
        <h2>Antioxidantes en Nutri Life</h2>
        <p>Nuestras bebidas están enriquecidas con antioxidantes naturales derivados de ingredientes reales. Al elegir Nutri Life, estás dando a tu cuerpo las herramientas que necesita para combatir el estrés oxidativo de manera natural y efectiva.</p>
        
        <h2>Incorporar Antioxidantes en tu Dieta</h2>
        <p>Además de nuestras bebidas, puedes obtener antioxidantes de:</p>
        <ul>
          <li>Frutas y verduras de colores vibrantes</li>
          <li>Té verde y té negro</li>
          <li>Nueces y semillas</li>
          <li>Granos integrales</li>
        </ul>
      `
    }
  };

  const post = blogPosts[postId] || blogPosts[1];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Back Button */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center gap-2 text-gray-700 hover:text-[#2deb65] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al Blog</span>
          </button>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category and Meta */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} de lectura
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-gray-900
              prose-headings:mt-8 prose-headings:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-700 prose-ul:mb-4
              prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Box */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2deb65] to-[#ebcd07] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{post.author}</h3>
                <p className="text-gray-600 text-sm">
                  Especialista en nutrición y bienestar con años de experiencia ayudando a las personas a alcanzar sus objetivos de salud.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#2deb65]/10 to-[#ebcd07]/10 rounded-3xl text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              ¿Quieres leer más artículos?
            </h3>
            <p className="text-gray-600 mb-6">
              Explora más contenido sobre nutrición, bienestar y salud en nuestro blog.
            </p>
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2deb65] to-[#ebcd07] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[#2deb65]/25 transition-all"
            >
              Ver Todos los Artículos
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailSection;

