import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Dolores Silicone",
  description: "Terms of Service for Dolores Silicone handcrafted reborn baby dolls.",
};

export default function TermsPage() {
  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        {/* Layered gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-bl from-violet-900/40 via-[#0c0517] to-purple-900/30" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/8 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4" />

        {/* Decorative elements */}
        <div className="absolute top-16 left-[12%] w-20 h-20 border border-violet-500/20 rounded-2xl rotate-12" />
        <div className="absolute top-20 left-[14%] w-12 h-12 border border-purple-400/15 rounded-xl rotate-12" />
        <div className="absolute bottom-20 right-[15%] w-28 h-28 border border-purple-400/10 rounded-full" />
        <div className="absolute top-[40%] right-[12%] w-2 h-2 bg-violet-400/40 rounded-full" />
        <div className="absolute top-[25%] left-[30%] w-1.5 h-1.5 bg-purple-400/50 rounded-full" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300/60 text-sm mb-8">
            <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-200">Terms</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-violet-400/60" />
            <div className="w-1.5 h-1.5 bg-violet-400/60 rotate-45" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-violet-400/60" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-violet-100 to-purple-200 bg-clip-text text-transparent">
              Terms of
            </span>
            <br />
            <span className="text-violet-400/80">Service</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
            The guidelines that govern your use of our website and services.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-purple-300/60 text-sm">
            <span className="w-1.5 h-1.5 bg-violet-400/60 rounded-full" />
            Last updated: January 2025
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This website is operated by Dolores Silicone. Throughout the site, the terms &quot;we&quot;, &quot;us&quot;, and &quot;our&quot; refer to Dolores Silicone. By visiting our site and/or purchasing something from us, you engage in our &quot;Service&quot; and agree to be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Products</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            All products sold on this site are handcrafted silicone reborn baby dolls. Due to the handmade nature of our products, slight variations in appearance, colour, and detail are normal and add to the unique character of each piece. Product images are for illustration purposes; the actual product may vary slightly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We reserve the right to modify or discontinue any product at any time without prior notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of a product.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Orders &amp; Payment</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            By placing an order, you are making an offer to purchase a product. All orders are subject to availability and confirmation of the order price. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available, inaccuracies in product or pricing information, or errors identified by our fraud detection system.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            All prices are displayed in British Pounds Sterling (GBP) and include applicable VAT unless stated otherwise. Payment is processed securely through our approved payment methods. We do not store your payment card details on our servers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Shipping</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Please refer to our{" "}
            <Link href="/shipping-policy" className="text-purple-600 hover:text-purple-700 underline">
              Shipping Policy
            </Link>{" "}
            for detailed information about shipping methods, costs, and estimated delivery times.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Returns &amp; Refunds</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Due to the handcrafted and personalised nature of our products, all sales are final unless the product arrives damaged or defective. Please review our{" "}
            <Link href="/returns" className="text-purple-600 hover:text-purple-700 underline">
              Returns Policy
            </Link>{" "}
            for more information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            All content included on this site, such as text, graphics, logos, images, and software, is the property of Dolores Silicone or its content suppliers and is protected by UK and international copyright laws. You may not reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            In no event shall Dolores Silicone be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service or any products procured through the service. Our liability shall be limited to the maximum extent permitted by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            These Terms of Service are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Questions about the Terms of Service should be sent to us via our{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
              Contact page
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
