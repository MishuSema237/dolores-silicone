import Link from "next/link";

export const metadata = {
  title: "Shipping Policy - Dolores Silicone",
  description: "Shipping information for Dolores Silicone handcrafted reborn baby dolls.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        {/* Layered gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-[#0c0517] to-purple-800/20" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px] -translate-y-1/4" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[110px] translate-y-1/3" />

        {/* Decorative shapes */}
        <div className="absolute top-[15%] left-[25%] w-20 h-20 border border-purple-500/15 rounded-full" />
        <div className="absolute top-[18%] left-[27%] w-10 h-10 border border-violet-400/10 rounded-full" />
        <div className="absolute bottom-[20%] right-[18%] w-16 h-16 border-2 border-purple-400/10 rounded-xl rotate-45" />
        <div className="absolute top-[50%] right-[8%] w-2 h-2 bg-purple-400/30 rounded-full" />
        <div className="absolute top-[28%] left-[10%] w-1.5 h-1.5 bg-violet-400/40 rounded-full" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300/60 text-sm mb-8">
            <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-200">Shipping</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-violet-100 to-purple-200 bg-clip-text text-transparent">
              Shipping
            </span>
            <br />
            <span className="text-purple-400/80">Policy</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
            How we deliver your precious handcrafted baby safely to your door.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300/60 text-sm">
            <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full" />
            Last updated: January 2025
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Times</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            All orders are processed within <strong>1–3 business days</strong>. Orders are not shipped or delivered on weekends or UK bank holidays. If we experience a high volume of orders, shipments may be delayed by a few days. We will contact you if there is a significant delay in the dispatch of your order.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">UK Shipping</h2>
          <p className="text-gray-600 leading-relaxed mb-4">We offer the following shipping options within the United Kingdom:</p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li><strong>Standard Shipping:</strong> 3–5 business days — Free on orders over £100</li>
            <li><strong>Express Shipping:</strong> 1–2 business days — Calculated at checkout</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            All UK shipments are sent via Royal Mail or a trusted courier service with tracking. A tracking number will be provided via email once your order has been dispatched.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">International Shipping</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We ship to select international destinations. International shipping rates and delivery times vary by location. Estimated delivery is <strong>7–21 business days</strong> depending on destination. Please note that customs duties, import taxes, and brokerage fees are the responsibility of the recipient and are not included in the shipping charges.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Packaging</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every Dolores Silicone reborn baby is carefully packaged in a secure, padded box to ensure it arrives safely. Our packaging is designed to protect the delicate details of each handcrafted piece during transit. Each baby is wrapped in soft tissue paper and includes a certificate of authenticity.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Order Tracking</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Once your order has shipped, you will receive an email with your tracking number. You can track your order on the carrier&apos;s website or by using our{" "}
            <Link href="/track-order" className="text-purple-600 hover:text-purple-700 underline">
              Track Order
            </Link>{" "}
            page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Lost or Damaged Shipments</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If your package appears to be lost or arrives damaged, please contact us immediately. We will work with the shipping carrier to investigate and resolve the issue. For damaged shipments, please retain all packaging materials and take photographs of the damage.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about shipping, please reach out via our{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
              Contact page
            </Link>{" "}
            or{" "}
            <a
              href="https://wa.me/447380608611"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 underline"
            >
              WhatsApp
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
