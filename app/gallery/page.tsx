import { getGalleryItems } from "@/lib/utils/db-helpers";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata = {
  title: "Galería - Dolores Silicone",
  description:
    "Explora una colección de nuestras creaciones más queridas. Cada foto resalta la artesanía y el detalle realista de nuestros bebés de silicona.",
};

export default async function GalleryPage() {
  let galleryItems = [];
  try {
    if (process.env.MONGODB_URI) {
      galleryItems = await getGalleryItems({});
    }
  } catch (error) {
    console.error("Error fetching gallery items:", error);
  }

  if (galleryItems.length === 0) {
    galleryItems = Array.from({ length: 6 }, (_, i) => ({
      _id: `placeholder-${i}`,
      title: `Imagen de Galería ${i + 1}`,
      imageUrl: "",
      tags: [],
      featured: false,
      order: i,
    }));
  }

  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/35 via-[#0c0517] to-violet-900/25" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[110px] translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute top-[16%] left-[14%] w-24 h-24 border border-purple-500/12 rounded-full" />
        <div className="absolute top-[19%] left-[16%] w-12 h-12 border border-violet-400/8 rounded-full" />
        <div className="absolute bottom-[18%] right-[15%] w-18 h-18 border-2 border-purple-400/10 rounded-2xl rotate-45" />
        <div className="absolute top-[38%] right-[10%] w-2 h-2 bg-purple-400/30 rounded-full" />
        <div className="absolute top-[50%] left-[20%] w-1.5 h-1.5 bg-violet-400/35 rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              Nuestra
            </span>
            <br />
            <span className="text-purple-400/80">Galería</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explora una colección de nuestras creaciones más queridas. Cada foto
            resalta la artesanía y el detalle realista de nuestros bebés de silicona.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              Cada bebé de esta galería fue pintado a mano con 8-20+ capas de pinturas Genesis de fijado por calor,
              con peso de cuentas de vidrio para una sensación realista y cabello implantado hebra por hebra con mohair premium.
              Haz clic en cualquier imagen para verla en detalle completo.
            </p>
          </div>
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      {/* How It's Made Summary */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Cómo se Hace Cada Bebé</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { step: "01", title: "Escultura y Preparación", desc: "Escultura seleccionada, limpiada, lijada y preparada para pintar" },
              { step: "02", title: "Pintado a Mano", desc: "8-20+ capas translúcidas de pinturas Genesis de fijado por calor" },
              { step: "03", title: "Implante y Peinado", desc: "Mohair hebra por hebra y pestañas microimplantadas" },
              { step: "04", title: "Peso y Vestimenta", desc: "Peso con cuentas de vidrio y vestimenta con atuendos hechos a mano" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-black text-sm mx-auto mb-3">{item.step}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
