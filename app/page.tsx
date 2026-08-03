
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/sections/product-grid";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaPaintBrush, FaWeight, FaCertificate, FaHandHoldingHeart, FaBaby, FaStar, FaChevronDown } from "react-icons/fa";

function useMouseParallax(strength = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [strength]);
  return offset;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      setProgress(Math.min(scrollY / vh, 1));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}

export default function Home() {
  const [babyProducts, setBabyProducts] = useState<any[]>([]);
  const [heroVisible, setHeroVisible] = useState(false);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const mouse = useMouseParallax(30);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, reviewsRes, blogRes] = await Promise.all([
          fetch("/api/admin/products"),
          fetch("/api/reviews"),
          fetch("/api/blog"),
        ]);

        if (productsRes.ok) {
          const data = await productsRes.json();
          setBabyProducts(data.filter((p: any) => p.status === 'active' && (p.category === 'girls' || p.category === 'boys' || p.category === 'accessories' || p.category === 'baby' || p.category === 'accessory')));
        }

        if (reviewsRes.ok) {
          const data = await reviewsRes.json();
          const published = Array.isArray(data) ? data.filter((r: any) => r.status === "Published").slice(0, 3) : [];
          setTestimonials(published);
        }

        if (blogRes.ok) {
          const data = await blogRes.json();
          setBlogPosts(Array.isArray(data) ? data.slice(0, 3) : []);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-white select-none">
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dolores Silicone",
            url: "https://doloressilicone.com",
            logo: "https://doloressilicone.com/assets/owners-logo/Dolores Silicone Logo.png",
            description:
              "Muñecas reborn de silicona de platino hechas a mano. Cada bebé es una obra maestra única creada con amor y cuidado.",
            sameAs: [
              "https://instagram.com/doloressilicone",
              "https://facebook.com/doloressilicone",
              "https://tiktok.com/@doloressilicone",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+447380608611",
              contactType: "customer service",
              availableLanguage: "Spanish",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Dolores Silicone",
            url: "https://doloressilicone.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://doloressilicone.com/shop?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {/* ═══════════════════════════════════════════
          CINEMATIC HERO — Mouse parallax + scroll fade
         ═══════════════════════════════════════════ */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden bg-[#030014]">
        {/* ── Animated background layers ── */}
        <div className="absolute inset-0 z-0" style={{ opacity: 1 - scrollProgress * 0.6 }}>
          {/* Large blurred orbs that follow mouse */}
          <div
            className="absolute w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[140px] transition-transform duration-[2000ms] ease-out"
            style={{
              background: "radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 70%)",
              top: "5%",
              right: "5%",
              transform: `translate(${mouse.x * 0.6}px, ${mouse.y * 0.6}px)`,
            }}
          />
          <div
            className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[120px] transition-transform duration-[2000ms] ease-out"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
              bottom: "0%",
              left: "0%",
              transform: `translate(${mouse.x * -0.4}px, ${mouse.y * -0.4}px)`,
            }}
          />
          <div
            className="absolute w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] rounded-full blur-[100px] transition-transform duration-[2000ms] ease-out"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
              top: "45%",
              left: "40%",
              transform: `translate(${mouse.x * 0.3}px, ${mouse.y * 0.3}px)`,
            }}
          />

          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: `translate(${mouse.x * -0.1}px, ${mouse.y * -0.1}px)`,
            transition: "transform 1500ms ease-out",
          }} />

          {/* Floating geometric particles */}
          {[
            { top: "12%", left: "8%", size: 80, border: true, delay: "0ms" },
            { top: "18%", left: "12%", size: 40, border: true, delay: "200ms" },
            { bottom: "15%", right: "10%", size: 60, border: true, delay: "400ms" },
            { top: "60%", right: "18%", size: 6, solid: true, delay: "100ms" },
            { top: "35%", left: "20%", size: 4, solid: true, delay: "300ms" },
            { bottom: "30%", left: "6%", size: 5, solid: true, delay: "500ms" },
            { top: "25%", right: "30%", size: 70, border: true, delay: "150ms" },
            { bottom: "40%", right: "5%", size: 3, solid: true, delay: "350ms" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute transition-all duration-[1800ms] ease-out"
              style={{
                top: p.top,
                bottom: p.bottom,
                left: p.left,
                right: p.right,
                width: p.size,
                height: p.size,
                borderRadius: p.border ? "20%" : "50%",
                border: p.border ? "1.5px solid rgba(167,139,250,0.12)" : "none",
                background: p.solid ? "rgba(167,139,250,0.25)" : "transparent",
                transform: `translate(${mouse.x * (0.2 + i * 0.05)}px, ${mouse.y * (0.2 + i * 0.05)}px) rotate(${mouse.x * 0.5}deg)`,
                transitionDelay: p.delay,
              }}
            />
          ))}
        </div>

        {/* ── Hero content ── */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20 md:pt-32 pb-20 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Main heading — word-by-word reveal */}
              <h1 className="text-white mb-6 md:mb-8 leading-[0.92] tracking-tight">
                <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
                  {"Reborn de".split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={`inline-block mr-[0.3em] transition-all duration-700 ease-out ${
                        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${300 + i * 120}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-1">
                  {"Silicona".split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={`inline-block mr-[0.3em] transition-all duration-700 ease-out ${
                        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${540 + i * 120}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
                <span
                  className={`block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-1 transition-all duration-700 ease-out ${
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "660ms" }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-200 to-indigo-300">
                    Hechas con Alma
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-sm md:text-lg text-gray-400/90 mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-700 ease-out ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                Cada bebé Dolores Silicone es una obra maestra única &mdash; pintada a mano con
                8&ndash;20+ capas de pinturas Genesis termofijadas, con peso de microesferas de vidrio
                para una sensación realista y "suave", y cabello implantado hebra a hebra con mohair premium.
                Silicona de platino de grado médico. Certificado CE.
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-700 ease-out ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "950ms" }}
              >
                <Button
                  href="/shop"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 h-12 px-8 rounded-full text-sm md:text-base font-bold shadow-2xl shadow-white/10 group"
                >
                  Explorar la colección
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/about"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent text-white border-white/20 hover:bg-white/5 h-12 px-8 rounded-full text-sm md:text-base font-semibold backdrop-blur-sm"
                >
                  Cómo creamos
                </Button>
              </div>

            </div>

            {/* Right: Hero image with parallax float */}
            <div className="flex-1 relative w-full hidden lg:flex justify-center items-center h-[700px] xl:h-[800px]">
              {/* Glow behind image */}
              <div
                className="absolute w-[110%] h-[110%] rounded-full blur-[100px] transition-transform duration-[2500ms] ease-out"
                style={{
                  background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 60%)",
                  top: "50%",
                  left: "50%",
                  transform: `translate(calc(-50% + ${mouse.x * 0.5}px), calc(-50% + ${mouse.y * 0.5}px))`,
                }}
              />

              <div
                className={`relative z-10 transition-all duration-[1200ms] ease-out ${
                  heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{
                  transitionDelay: "400ms",
                  transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)`,
                }}
              >
                <div className="relative w-[340px] h-[340px] xl:w-[420px] xl:h-[420px]">
                  <Image
                    src="/assets/owners-logo/Dolores Silicone Logo.png"
                    alt="Dolores Silicone — logo de muñecas reborn hechas a mano"
                    fill
                    className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-full"
                    style={{
                      maskImage: "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0.7) 70%, transparent 85%)",
                      WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0.7) 70%, transparent 85%)",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-700 ease-out ${
            heroVisible && scrollProgress < 0.1 ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <span className="text-[10px] text-gray-500 tracking-[0.25em] uppercase font-medium">Desplázate</span>
          <div className="w-5 h-8 rounded-full border border-gray-600/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </div>

        {/* ── Bottom gradient fade into next section ── */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/50 to-transparent z-[5] pointer-events-none" />
      </section>

      {/* ─── Featured Babies ─── */}
      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <ProductGrid
            products={babyProducts}
            layout="carousel"
            title="Conoce a nuestros bebés"
            showViewAll={true}
          />
        </div>
      </section>

      {/* ─── Why Dolores Silicone ─── */}
      <section className="py-16 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-100 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Excelencia en cada detalle</span>
            <h2 className="mb-6 text-3xl md:text-5xl font-bold text-gray-900">Por qué los coleccionistas eligen Dolores Silicone</h2>
            <p className="text-gray-500 font-light text-base md:text-xl leading-relaxed">
              Combinamos tradición artesanal con materiales de grado clínico para crear bebés reborn tan reales como el arte puede lograr.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <FaShieldAlt className="text-2xl md:text-3xl" />,
                title: "Silicona de platino de grado médico",
                desc: "Nuestra silicona es 100% curada con platino, hipoalergénica, libre de BPA y libre de ftalatos. Cumple con los estándares de seguridad EN71 y CE, lo que la hace segura para todas las edades. A diferencia de las alternativas curadas con estaño, la silicona de platino no se amarillea, agrieta ni degrada con el tiempo.",
              },
              {
                icon: <FaPaintBrush className="text-2xl md:text-3xl" />,
                title: "Pintada a mano en 8\u201320+ capas",
                desc: "Cada tono de piel, rubor, veteado y lecho de uñas se construye en 8 a 20+ capas individuales de pinturas Genesis termofijadas. Este minucioso proceso crea la profundidad translúcida y realista que ves en un recién nacido real.",
              },
              {
                icon: <FaWeight className="text-2xl md:text-3xl" />,
                title: "Con peso para un tacto realista",
                desc: "Microesferas de vidrio finas y relleno premium de poliéster se empaquetan a mano en cada bebé, dándoles un \u201Cpeso muerto\u201D natural de 2,7\u20133,2 kg. Se acomodan en tus brazos con el mismo peso suave que un recién nacido real dormido.",
              },
              {
                icon: <FaBaby className="text-2xl md:text-3xl" />,
                title: "Cabello y pestañas implantados a mano",
                desc: "Hebra a hebra, el mohair o cabello humano premium se implanta en el cuero cabelludo para una línea de cabello natural y suave. Las pestañas se insertan individualmente para un marco delicado y realista alrededor de los ojos pintados de cada bebé.",
              },
              {
                icon: <FaCertificate className="text-2xl md:text-3xl" />,
                title: "Certificado CE y conforme a EN71",
                desc: "Cada bebé Dolores Silicone incluye un Certificado de Autenticidad y supera rigurosas pruebas de seguridad europeas. Nuestros materiales y acabados cumplen o superan los estándares de seguridad de juguetes, brindándote total tranquilidad.",
              },
              {
                icon: <FaHandHoldingHeart className="text-2xl md:text-3xl" />,
                title: "Hechas para sanar y consolar",
                desc: "Nuestros bebés se utilizan en terapia de duelo, terapia de demencia, apoyo para la ansiedad y consuelo en la pérdida gestacional. Coleccionistas y profesionales de la salud confían en Dolores Silicone por la genuina conexión emocional que cada bebé crea.",
              },
            ].map((item, i) => (
              <div key={i} className="group relative bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-purple-50/50 transition-all duration-500 border border-gray-100 hover:border-purple-100">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Art of Reborning — Process Section ─── */}
      <section className="py-16 md:py-28 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 relative w-full">
              <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Artista de Dolores Silicone pintando a mano una muñeca reborn"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-purple-950/20 mix-blend-multiply" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:-left-10 lg:bottom-1/4 lg:-left-16 glass-dark backdrop-blur-3xl p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-white/10 shadow-2xl md:max-w-sm">
                <div className="text-purple-400 text-2xl md:text-4xl mb-2 md:mb-4 font-serif italic font-bold">&ldquo;</div>
                <p className="text-sm md:text-lg text-gray-200 italic leading-relaxed mb-4">
                  &ldquo;La sensación más gratificante es ver a un coleccionista sostener a su bebé por primera vez &mdash; ese jadeo, esa lágrima. Por eso hago esto.&rdquo;
                </p>
                <p className="font-bold text-white tracking-widest text-xs md:text-sm uppercase">Dolores S. &mdash; Fundadora</p>
              </div>
            </div>

            <div className="flex-1">
              <span className="text-purple-400 font-black uppercase tracking-widest text-sm mb-4 block">El viaje</span>
              <h2 className="text-white mb-8 text-3xl md:text-5xl font-bold">De la escultura de arcilla al arte vivo</h2>
              <div className="space-y-5 text-gray-400 font-light leading-relaxed text-sm md:text-lg">
                <p>
                  Cada bebé Dolores Silicone comienza su viaje como una escultura maestra &mdash; seleccionada cuidadosamente por su precisión anatómica y la expresión emocional que hace que un reborn cobre vida. Solo se utiliza silicona de grado médico curada con platino para el moldeado, asegurando que cada pieza sea hipoalergénica, increíblemente duradera y maravillosamente suave al tacto.
                </p>
                <p>
                  Nuestros artistas dedican entonces 20&ndash;60+ horas a pintar a mano cada bebé. Las pinturas Genesis termofijadas se aplican en 8&ndash;20+ capas translúcidas, construyendo la calidez sutil de la piel de un recién nacido &mdash; desde las venas azuladas más tenues bajo la piel translúcida, hasta el calor rosado de las mejillas sonrojadas, pasando por el delicado veteado único de cada cuerpecito.
                </p>
                <p>
                  El cabello se implanta hebra a hebra, y las microesferas de vidrio finas se empaquetan a mano para dar a cada bebé la sensación de peso y suavidad de un bebé real. El resultado es un bebé de silicona tan realista que difumina la línea entre el arte y la realidad.
                </p>
              </div>
              <Link href="/about" className="mt-8 inline-flex items-center gap-3 text-purple-400 font-bold hover:text-purple-300 group uppercase tracking-widest text-sm">
                Proceso de creación completo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20\u201360+", label: "Horas por bebé" },
              { number: "8\u201320+", label: "Capas de pintura" },
              { number: "100%", label: "Silicona de platino" },
              { number: "CE y EN71", label: "Certificado de seguridad" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-16 md:py-28 bg-gray-50/80 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-purple-100/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">De nuestros coleccionistas</span>
            <h2 className="mb-6 text-3xl md:text-5xl font-bold text-gray-900">Palabras que calientan nuestro corazón</h2>
            <p className="text-gray-500 font-light text-base md:text-xl">
              Historias reales de las familias y coleccionistas que han dado la bienvenida a un bebé Dolores Silicone en sus vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.length > 0 ? testimonials.map((t, i) => (
              <div key={t._id || i} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-500">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(t.rating || 5)].map((_, j) => (
                    <FaStar key={j} className="text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed text-sm md:text-base mb-6 min-h-[100px]">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center font-bold text-purple-600 text-sm">
                    {t.customer?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.customer}</p>
                  </div>
                </div>
              </div>
            )) : (
              <p className="col-span-full text-center text-gray-400 py-8">Próximamente más reseñas.</p>
            )}
          </div>

          <div className="text-center mt-10 md:mt-16">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 text-sm uppercase tracking-widest group">
              Leer más reseñas
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Blog Preview ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4">
            <div>
              <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-3 block">Del blog</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Ideas e historias</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 text-sm uppercase tracking-widest group">
              Ver todos los artículos
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.length > 0 ? blogPosts.map((post, i) => (
              <Link key={post._id || i} href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-4">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100" />
                  )}
                </div>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  {post.category || "Artículo"}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            )) : (
              <p className="col-span-full text-center text-gray-400 py-8">Próximamente más artículos.</p>
            )}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-12 md:py-20 bg-white flex justify-center px-0 lg:px-6">
        <div className="container max-w-6xl relative lg:rounded-[4rem] overflow-hidden bg-purple-600 p-6 md:p-12 lg:p-24 text-center">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-purple-400/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-indigo-800/20 rounded-full blur-[60px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl mb-8 leading-tight">¿Lista para dar la bienvenida <br /> a tu nuevo bebé?</h2>
            <p className="text-purple-100 text-sm md:text-xl mb-12 font-light max-w-xl mx-auto">
              Cada bebé Dolores Silicone es una creación única e irrepetible. Explora nuestros bebés disponibles o contáctanos para una comisión personalizada.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center">
              <Button href="/shop" size="lg" className="bg-white text-purple-600 hover:bg-purple-50 h-10 px-6 rounded-md md:h-16 md:px-12 md:rounded-2xl text-sm md:text-lg font-bold shadow-xl">
                Explorar la colección
              </Button>
              <a
                href="https://wa.me/447380608611?text=Hello%20Dolores%20Silicone!%20I%27d%20like%20to%20discuss%20a%20custom%20baby."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 h-10 px-6 rounded-md md:h-16 md:px-12 md:rounded-2xl text-sm md:text-lg font-semibold inline-flex items-center justify-center transition-colors"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
