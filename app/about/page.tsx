import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the art, materials, and story behind Dolores Silicone's handcrafted silicone reborn dolls. Learn about our platinum silicone process and our mission.",
  keywords: [
    "about Dolores Silicone",
    "reborn doll artist",
    "platinum silicone reborn process",
    "hand-painted reborn dolls",
    "reborn doll materials",
    "how reborn dolls are made",
    "CE-certified dolls",
    "reborn doll art",
  ],
  openGraph: {
    title: "About Us | Dolores Silicone",
    description: "Discover the art, materials, and story behind our handcrafted silicone reborn dolls.",
    url: "https://doloressilicone.com/about",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "About Dolores Silicone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Dolores Silicone",
    description: "Discover the art, materials, and story behind Dolores Silicone.",
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
            <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-200">About Us</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              The art of
            </span>
            <br />
            <span className="text-purple-400/80">Dolores Silicone</span>
          </h1>
          <p className="text-purple-200/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Where artistic mastery meets medical-grade materials &mdash; creating
            silicone reborn dolls that blur the line between sculpture and soul.
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
                alt="Dolores Silicone artist hand-painting a reborn doll in the studio"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Born from a Passion for Perfection
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Dolores Silicone was founded in 2018 by Dolores, a UK-based artist whose lifelong fascination with sculptural realism led her into the world of reborning. What began as a single sculpture in a home studio soon became a calling &mdash; a way to combine her fine art training with a deep desire to create something that could genuinely touch people's lives.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                After years of studying infant anatomy, skin tone mapping, and the science of platinum-cured silicone, Dolores developed a signature technique that produces babies of extraordinary realism &mdash; from the translucent quality of a newborn's skin to the natural, weighted feel of a baby asleep in your arms.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, her creations are sought after by collectors, therapists, and families across the UK and around the world. Every baby that leaves the Dolores Silicone studio carries not only exceptional craftsmanship, but also a piece of the heart and soul that started this journey.
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Only the Best</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We never compromise on material quality. Every component is chosen for its safety, durability, and the most realistic result possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Platinum-Cured Silicone",
                highlight: "100% Platinum Grade",
                desc: "Unlike cheaper tin-cured alternatives, platinum-cured silicone is hypoallergenic, non-toxic, BPA-free, and phthalate-free. It won't yellow, crack, or degrade over the decades. It is the same grade used in medical implants and premium baby products, and it gives our babies that unmistakable feeling of soft, warm skin.",
              },
              {
                title: "Heat-Set Genesis Paints",
                highlight: "8–20+ Layer Technique",
                desc: "We use exclusively heat-set Genesis paints, the industry standard for professional reborn artists. These paints are oven-cured between layers, creating a permanent, fade-resistant bond with the silicone. Each skin tone is built through 8 to 20+ individual translucent layers.",
              },
              {
                title: "Premium Mohair and Human Hair",
                highlight: "Strand-by-Strand Rooting",
                desc: "Hair is sourced from the finest mohair or ethically obtained human hair. Each strand is individually rooted into the scalp with a fine-gauge needle, creating a soft, natural hairline that mimics a real baby's hair growth patterns.",
              },
              {
                title: "Glass Bead Weighting System",
                highlight: "Realistic Weight of 2.7–3.2 kg",
                desc: "Fine glass beads are hand-filled into the limbs, torso, and head to achieve a realistic weight distribution of 2.7–3.2 kg. Combined with premium polyester filling, this gives every baby the authentic, flexible feel of a real sleeping newborn.",
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">From Sculpture to Finished Baby</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Every Dolores Silicone baby requires 20–60+ hours of dedicated artistry. This is the meticulous journey from raw materials to a finished masterpiece.
            </p>
          </div>
          <div>
            {[
              {
                step: "01",
                title: "Sculpture Selection and Preparation",
                time: "2–4 hours",
                desc: "Each project begins with the careful selection of a sculpture that captures the essence of a newborn. The chosen silicone kit is thoroughly cleaned, sanded, and prepared to ensure perfect paint adhesion. Subtle skin textures, veins, wrinkles, and nail beds are refined at this stage.",
              },
              {
                step: "02",
                title: "Priming and First Layers",
                time: "3–6 hours",
                desc: "A thin layer of heat-set Genesis primer is applied to each limb and the head. The first translucent layers of skin tone are carefully built up, establishing the warm undertone that gives silicone babies their realistic depth. Each layer is heat-cured in a controlled oven before the next is applied.",
              },
              {
                step: "03",
                title: "Skin Detailing and Mottling",
                time: "6–15 hours",
                desc: "This is where the magic happens. Our artists apply 8–20+ individual layers of paint to build realistic skin detail: blue veins beneath translucent skin, rosy blush on cheeks and limbs, subtle mottling unique to each baby, and delicate freckles. Every brushstroke is intentional.",
              },
              {
                step: "04",
                title: "Hair and Lash Rooting",
                time: "8–20 hours",
                desc: "Premium mohair or human hair is rooted strand by strand into the scalp with a fine-gauge needle. This painstaking process creates a soft, natural hairline. Eyelashes and eyebrows are inserted individually for a delicate, realistic frame.",
              },
              {
                step: "05",
                title: "Eye Setting and Final Details",
                time: "2–4 hours",
                desc: "Premium glass or acrylic eyes are carefully set and sealed. Fingernails are painted with a subtle translucent pink and sealed for durability. Lips are painted in multiple layers for a natural, moist appearance. A final matte sealer is applied for an even, skin-like finish.",
              },
              {
                step: "06",
                title: "Weighting, Assembly, and Dressing",
                time: "3–5 hours",
                desc: "Fine glass beads and premium polyester filling are placed by hand to achieve a realistic weight of 2.7–3.2 kg with a natural, flexible balance. Limbs are securely attached, each baby is dressed in a handmade outfit, and a Certificate of Authenticity is issued before careful packaging for the journey home.",
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">What We Believe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Uncompromising Art",
                desc: "Every baby is a unique, one-of-a-kind creation. We never rush the process, never skip steps, and never take shortcuts. If a layer needs to be reapplied, it is reapplied. The result is museum-quality art that speaks for itself.",
              },
              {
                title: "Safety You Can Trust",
                desc: "All materials meet or exceed European CE and EN71 safety standards. Our platinum silicone is medical grade, food-safe, and completely non-toxic. Every baby comes with a Certificate of Authenticity and full material disclosure.",
              },
              {
                title: "Healing Through Art",
                desc: "We believe in the therapeutic power of realistic silicone babies. Our creations are used in grief counseling, dementia care, anxiety support, and recovery after pregnancy loss. Art that heals is art with purpose.",
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Therapeutic and Healing Uses</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Dolores Silicone babies serve a purpose far beyond collector shelves. They are trusted tools in healthcare and recovery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Grief Counseling", desc: "Used by therapists to help individuals process pregnancy loss, stillbirth, and infant bereavement." },
                { title: "Dementia and Memory Care", desc: "Residents in care homes respond to reborn babies with tenderness, memories, and calm." },
                { title: "Anxiety and Depression Support", desc: "The calming act of holding a weighted silicone baby can lower cortisol levels and ease anxiety." },
                { title: "Special Needs Therapy", desc: "Occupational therapists use reborn babies to teach caregiving skills and sensory engagement." },
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
            Explore our collection of handcrafted silicone reborn dolls or contact us to discuss a custom commission made just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-purple-700 px-8 py-4 rounded-xl hover:bg-purple-50 font-semibold inline-block transition-colors"
            >
              Explore the Shop
            </Link>
            <a
              href="https://wa.me/447380608611?text=Hello%20Dolores%20Silicone!%20I%27d%20like%20to%20discuss%20a%20custom%20baby."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700 font-semibold inline-block transition-colors"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}