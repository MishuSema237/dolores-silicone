import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Descubre el arte, los materiales y la historia detrás de las muñecas reborn de silicona hechas a mano de Dolores Silicone. Conoce nuestro proceso con silicona de platino y nuestra misión.",
  keywords: [
    "sobre Dolores Silicone",
    "artista de muñecas reborn",
    "proceso de reborn de silicona de platino",
    "muñecas reborn pintadas a mano",
    "materiales de muñecas reborn",
    "cómo se hacen las muñecas reborn",
    "muñecas certificadas CE",
    "arte de muñecas reborn",
  ],
  openGraph: {
    title: "Nosotros | Dolores Silicone",
    description: "Descubre el arte, los materiales y la historia detrás de las muñecas reborn de silicona hechas a mano.",
    url: "https://doloressilicone.com/about",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Sobre Dolores Silicone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | Dolores Silicone",
    description: "Descubre el arte, los materiales y la historia detrás de Dolores Silicone.",
    images: ["/assets/og-logo.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/40 via-[#0c0517] to-violet-900/30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/12 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-purple-700/10 rounded-full blur-[100px]" />
        <div className="absolute top-10 left-[8%] w-24 h-24 border border-purple-500/15 rounded-full" />
        <div className="absolute bottom-12 right-[12%] w-20 h-20 border-2 border-purple-400/10 rounded-2xl rotate-45" />
        <div className="absolute top-[30%] right-[15%] w-2.5 h-2.5 bg-purple-400/30 rounded-full" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300/60 text-sm mb-8">
            <Link href="/" className="hover:text-purple-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-purple-200">Nosotros</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              El arte de
            </span>
            <br />
            <span className="text-purple-400/80">Dolores Silicone</span>
          </h1>
          <p className="text-purple-200/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Donde el dominio artístico se une a los materiales de grado médico &mdash; creando
            muñecas reborn de silicona que difuminan la línea entre la escultura y el alma.
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800"
                alt="Artista de Dolores Silicone pintando a mano una muñeca reborn en el estudio"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Nuestra Historia</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Nacida de una Pasión por la Perfección
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Dolores Silicone fue fundada en 2018 por Dolores, una artista basada en el Reino Unido cuya fascinación de toda la vida por el realismo escultórico la llevó al mundo del reborning. Lo que comenzó como una única escultura en un estudio casero pronto se convirtió en una vocación &mdash; una forma de combinar su formación en bellas artes con un profundo deseo de crear algo que pudiera tocar genuinamente la vida de las personas.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Tras años de estudiar la anatomía infantil, el mapeo de tonos de piel y la ciencia de la silicona curada con platino, Dolores desarrolló una técnica característica que produce bebés de extraordinario realismo &mdash; desde la cualidad translúcida de la piel de un recién nacido hasta la sensación natural y con peso de un bebé dormido en tus brazos.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hoy, sus creaciones son buscadas por coleccionistas, terapeutas y familias en el Reino Unido y en todo el mundo. Cada bebé que sale del estudio de Dolores Silicone lleva no solo una artesanía excepcional, sino también un pedazo del corazón y del alma que inició este viaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Nuestros Materiales</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Solo lo Mejor</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Nunca comprometemos la calidad de los materiales. Cada componente se elige por su seguridad, durabilidad y el resultado más realista posible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Silicona Curada con Platino",
                highlight: "100% Grado Platino",
                desc: "A diferencia de las alternativas más baratas curadas con estaño, la silicona curada con platino es hipoalergénica, no tóxica, libre de BPA y libre de ftalatos. No se amarillea, no se agrieta ni se degrada con las décadas. Es el mismo grado utilizado en implantes médicos y productos premium para bebés, y le da a nuestros bebés esa inconfundible sensación de piel suave y cálida.",
              },
              {
                title: "Pinturas Genesis de Fijado por Calor",
                highlight: "Técnica de 8-20+ Capas",
                desc: "Usamos exclusivamente pinturas Genesis de fijado por calor, el estándar de la industria para artistas reborn profesionales. Estas pinturas se curan en horno entre capas, creando una unión permanente y resistente a la decoloración con la silicona. Cada tono de piel se construye a través de 8 a 20+ capas translúcidas individuales.",
              },
              {
                title: "Mohair y Cabello Humano Premium",
                highlight: "Implante Hebra por Hebra",
                desc: "El cabello se obtiene del mejor mohair o de cabello humano obtenido éticamente. Cada hebra se implanta individualmente en el cuero cabelludo con una aguja de calibre fino, creando una línea de nacimiento del cabello natural y suave que imita los patrones reales de crecimiento del cabello de un bebé.",
              },
              {
                title: "Sistema de Peso con Cuentas de Vidrio",
                highlight: "Peso Realista de 2,7-3,2 kg",
                desc: "Finas cuentas de vidrio se rellenan a mano en las extremidades, el torso y la cabeza para lograr una distribución de peso realista de 2,7-3,2 kg. Combinado con relleno premium de poliéster, esto le da a cada bebé la sensación auténtica y flexible de un recién nacido dormido de verdad.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  {item.highlight}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creation Process */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">El Proceso de Creación</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">De la Escultura al Bebé Terminado</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Cada bebé de Dolores Silicone requiere 20-60+ horas de arte dedicado. Este es el meticuloso viaje desde las materias primas hasta una obra maestra terminada.
            </p>
          </div>
          <div>
            {[
              {
                step: "01",
                title: "Selección y Preparación de la Escultura",
                time: "2-4 horas",
                desc: "Cada proyecto comienza con la selección cuidadosa de una escultura que capture la esencia de un recién nacido. El kit de silicona elegido se limpia a fondo, se lija y se prepara para garantizar una adhesión perfecta de la pintura. En esta etapa se refinan las texturas sutiles de la piel, las venas, las arrugas y los lechos ungueales.",
              },
              {
                step: "02",
                title: "Imprimación y Primeras Capas",
                time: "3-6 horas",
                desc: "Se aplica una fina capa de imprimación Genesis de fijado por calor en cada extremidad y en la cabeza. Las primeras capas translúcidas de tono de piel se construyen cuidadosamente, estableciendo el subtono cálido que da a los bebés de silicona su profundidad realista. Cada capa se cura con calor en un horno controlado antes de aplicar la siguiente.",
              },
              {
                step: "03",
                title: "Detallado de la Piel y Moteado",
                time: "6-15 horas",
                desc: "Aquí es donde ocurre la magia. Nuestros artistas aplican 8-20+ capas individuales de pintura para construir un detalle realista de la piel: venas azules bajo una piel translúcida, rubor rosado en mejillas y extremidades, un moteado sutil único para cada bebé y pecas delicadas. Cada pincelada es intencionada.",
              },
              {
                step: "04",
                title: "Implantación del Cabello y las Pestañas",
                time: "8-20 horas",
                desc: "El mohair o cabello humano premium se implanta hebra por hebra en el cuero cabelludo con una aguja de calibre fino. Este laborioso proceso crea una línea de nacimiento del cabello natural y suave. Las pestañas y las cejas se insertan individualmente para lograr un marco delicado y realista.",
              },
              {
                step: "05",
                title: "Colocación de los Ojos y Detalles Finales",
                time: "2-4 horas",
                desc: "Los ojos de vidrio o acrílico premium se colocan y sellan cuidadosamente. Las uñas se pintan con un rosa translúcido sutil y se sellan para mayor durabilidad. Los labios se pintan con múltiples capas para lograr una apariencia natural y húmeda. Se aplica un sellador mate final para un acabado uniforme, similar a la piel.",
              },
              {
                step: "06",
                title: "Peso, Ensamblaje y Vestimenta",
                time: "3-5 horas",
                desc: "Las finas cuentas de vidrio y el relleno premium de poliéster se colocan a mano para lograr un peso realista de 2,7-3,2 kg con un equilibrio natural y flexible. Las extremidades se fijan de forma segura, cada bebé se viste con un atuendo hecho a mano y se emite un Certificado de Autenticidad antes del empaquetado cuidadoso para su viaje a casa.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10 items-start py-6 md:py-10 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-black text-lg md:text-xl">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs font-semibold text-purple-500 bg-purple-50 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Nuestros Valores</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">En lo que Creemos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Arte sin Compromisos",
                desc: "Cada bebé es una creación única e irrepetible. Nunca apresuramos el proceso, nunca omitimos pasos y nunca usamos atajos. Si una capa necesita reaplicarse, se reaplica. El resultado es un arte de calidad de museo que habla por sí mismo.",
              },
              {
                title: "Seguridad en la que Puedes Confiar",
                desc: "Todos los materiales cumplen o superan los estándares de seguridad europeos CE y EN71. Nuestra silicona de platino es de grado médico, apta para alimentos y completamente no tóxica. Cada bebé viene con un Certificado de Autenticidad y divulgación completa de materiales.",
              },
              {
                title: "Sanación a Través del Arte",
                desc: "Creemos en el poder terapéutico de los bebés de silicona realistas. Nuestras creaciones se utilizan en consejería de duelo, cuidados de demencia, apoyo contra la ansiedad y recuperación tras la pérdida de un embarazo. El arte que sana es arte con propósito.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 font-black text-xl">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Use */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 md:p-12 border border-purple-100">
            <div className="text-center mb-10">
              <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Más Allá del Coleccionismo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Usos Terapéuticos y de Sanación</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Los bebés de Dolores Silicone cumplen un propósito mucho más allá de las estanterías de colección. Son herramientas de confianza en la atención médica y la recuperación.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Consejería de Duelo", desc: "Utilizados por terapeutas para ayudar a las personas a procesar la pérdida de un embarazo, la muerte fetal y el duelo infantil." },
                { title: "Cuidado de la Demencia y la Memoria", desc: "Los residentes de residencias responden a los bebés reborn con ternura, recuerdos y calma." },
                { title: "Apoyo contra la Ansiedad y la Depresión", desc: "El acto calmante de sostener un bebé de silicona con peso puede reducir los niveles de cortisol y aliviar la ansiedad." },
                { title: "Terapia para Necesidades Especiales", desc: "Los terapeutas ocupacionales usan bebés reborn para enseñar habilidades de cuidado y compromiso sensorial." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para Encontrar a Tu Bebé Perfecto?</h2>
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
            Explora nuestra colección de muñecas reborn de silicona hechas a mano o contáctanos para hablar de una comisión personalizada hecha solo para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-purple-700 px-8 py-4 rounded-xl hover:bg-purple-50 font-semibold inline-block transition-colors"
            >
              Explorar la Tienda
            </Link>
            <a
              href="https://wa.me/447380608611?text=Hola%20Dolores%20Silicone!%20Me%20gustar%C3%ADa%20hablar%20de%20un%20beb%C3%A9%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700 font-semibold inline-block transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
