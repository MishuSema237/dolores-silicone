import Link from "next/link";

export const metadata = {
  title: "About - Dolores Silicone",
  description: "Discover the artistry, materials, and story behind Dolores Silicone handcrafted reborn baby dolls.",
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
            <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-200">About</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              The Art of
            </span>
            <br />
            <span className="text-purple-400/80">Dolores Silicone</span>
          </h1>
          <p className="text-purple-200/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Where master artistry meets medical-grade materials &mdash; handcrafting
            silicone reborn babies that blur the line between sculpture and soul.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800"
                alt="Dolores Silicone artist hand-painting a reborn baby in studio"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Born From a Passion for Perfection
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Dolores Silicone was founded in 2018 by Dolores, a UK-based artist whose lifelong fascination with sculptural realism led her to the world of reborning. What began as a single sculpt in a home studio quickly became a calling &mdash; a way to merge her fine art training with a deep desire to create something that could genuinely touch people&apos;s lives.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                After years of studying infant anatomy, skin tone mapping, and the science of platinum-cured silicone, Dolores developed a signature technique that produces babies of extraordinary realism &mdash; from the translucent quality of newborn skin to the natural, weighted feel of a sleeping infant in your arms.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, her creations are sought after by collectors, therapists, and families across the UK and worldwide. Each baby that leaves the Dolores Silicone studio carries not just exceptional craftsmanship, but a piece of the heart and soul that started this journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Our Materials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Only the Finest</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We never compromise on materials. Every component is chosen for safety, longevity, and the most realistic result possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Platinum-Cured Silicone",
                highlight: "100% Platinum Grade",
                desc: "Unlike cheaper tin-cured alternatives, platinum-cured silicone is hypoallergenic, non-toxic, BPA-free, and phthalate-free. It will not yellow, crack, or degrade over decades. It is the same grade used in medical implants and premium baby products, giving our babies that unmistakable soft, warm skin feel.",
              },
              {
                title: "Genesis Heat-Set Paints",
                highlight: "8-20+ Layer Technique",
                desc: "We use exclusively Genesis heat-set paints, the industry standard for professional reborn artists. These paints are oven-cured between layers, creating a permanent, fade-resistant bond with the silicone. Each skin tone is built through 8 to 20+ individual translucent layers.",
              },
              {
                title: "Premium Mohair & Human Hair",
                highlight: "Strand-by-Strand Rooting",
                desc: "Hair is sourced from the finest mohair or ethically obtained human hair. Each strand is micro-rooted individually into the scalp using a fine gauge needle, creating a natural, soft hairline that mimics real infant hair growth patterns.",
              },
              {
                title: "Glass Bead Weighting System",
                highlight: "2.7-3.2 kg Realistic Weight",
                desc: "Fine glass beads are hand-packed into the limbs, torso, and head to achieve a realistic weight distribution of 2.7-3.2 kg. Combined with premium poly-fil, this gives each baby the authentic, floppy feel of a real sleeping newborn.",
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
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">The Creation Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">From Sculpt to Finished Baby</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Every Dolores Silicone baby takes 20-60+ hours of dedicated artistry. Here is the meticulous journey from raw materials to a finished masterpiece.
            </p>
          </div>
          <div>
            {[
              {
                step: "01",
                title: "Sculpt Selection & Preparation",
                time: "2-4 hours",
                desc: "Each project begins with carefully selecting a sculpt that captures the essence of a newborn. The chosen silicone kit is thoroughly cleaned, sanded, and prepped to ensure perfect paint adhesion. Subtle skin textures, veins, wrinkles, and nail beds are refined at this stage.",
              },
              {
                step: "02",
                title: "Priming & First Layers",
                time: "3-6 hours",
                desc: "A thin layer of Genesis heat-set primer is applied to each limb and the head. The first translucent skin tone layers are carefully built up, establishing the warm undertone that gives silicone babies their lifelike depth. Each layer is heat-cured in a controlled oven before the next is applied.",
              },
              {
                step: "03",
                title: "Skin Detailing & Mottling",
                time: "6-15 hours",
                desc: "This is where the magic happens. Our artists apply 8-20+ individual paint layers to build realistic skin detail: blue veins beneath translucent skin, rosy blushing on cheeks and extremities, subtle mottling unique to each baby, and delicate freckling. Every brushstroke is intentional.",
              },
              {
                step: "04",
                title: "Hair & Eyelash Rooting",
                time: "8-20 hours",
                desc: "Premium mohair or human hair is micro-rooted strand by strand into the scalp using a fine gauge rooting needle. This painstaking process creates a natural, soft hairline. Eyelashes and eyebrows are individually inserted for a delicate, realistic frame.",
              },
              {
                step: "05",
                title: "Eye Setting & Final Details",
                time: "2-4 hours",
                desc: "Glass or premium acrylic eyes are carefully set and sealed. Nails are painted with a subtle translucent pink and sealed for durability. Lips are painted with multiple layers to achieve a natural, moist appearance. A final matte sealant is applied for a uniform, skin-like finish.",
              },
              {
                step: "06",
                title: "Weighting, Assembly & Dressing",
                time: "3-5 hours",
                desc: "Fine glass beads and premium poly-fil are hand-packed to achieve a realistic 2.7-3.2 kg weight with natural, floppy balance. Limbs are securely attached, each baby is dressed in a handmade outfit, and a Certificate of Authenticity is issued before careful packaging for its journey home.",
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
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Artistry Without Compromise",
                desc: "Every baby is a unique, one-of-a-kind creation. We never rush the process, never skip steps, and never use shortcuts. If a layer needs to be reapplied, it is. The result is museum-quality artistry that speaks for itself.",
              },
              {
                title: "Safety You Can Trust",
                desc: "All materials meet or exceed CE and EN71 European safety standards. Our platinum silicone is medical-grade, food-safe, and completely non-toxic. Each baby comes with a Certificate of Authenticity and full material disclosure.",
              },
              {
                title: "Healing Through Art",
                desc: "We believe in the therapeutic power of lifelike silicone babies. Our creations are used in grief counselling, dementia care, anxiety support, and pregnancy loss recovery. Art that heals is art with purpose.",
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
              <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Beyond Collecting</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Therapeutic &amp; Healing Uses</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Dolores Silicone babies serve a purpose far beyond collection shelves. They are trusted tools in healthcare and recovery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Grief Counselling", desc: "Used by therapists to help individuals process pregnancy loss, stillbirth, and infant bereavement." },
                { title: "Dementia & Memory Care", desc: "Residents in care homes respond to reborn babies with tenderness, memory recall, and calm." },
                { title: "Anxiety & Depression Support", desc: "The calming act of holding a weighted silicone baby can reduce cortisol levels and ease anxiety." },
                { title: "Special Needs Therapy", desc: "Occupational therapists use reborn babies to teach nurturing skills and sensory engagement." },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Find Your Perfect Baby?</h2>
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
            Browse our collection of handcrafted silicone reborn babies or contact us to discuss a custom commission made just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-purple-700 px-8 py-4 rounded-xl hover:bg-purple-50 font-semibold inline-block transition-colors"
            >
              Browse the Shop
            </Link>
            <a
              href="https://wa.me/447380608611?text=Hello%20Dolores%20Silicone!%20I%27d%20like%20to%20discuss%20a%20custom%20baby."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700 font-semibold inline-block transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
