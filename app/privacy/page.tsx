import Link from "next/link";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy - Dolores Silicone",
  description: "Privacy Policy for Dolores Silicone handcrafted reborn baby dolls.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        {/* Layered gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0c0517] to-violet-900/30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        {/* Geometric decorative shapes */}
        <div className="absolute top-12 right-[15%] w-24 h-24 border border-purple-500/20 rounded-full" />
        <div className="absolute top-20 right-[18%] w-16 h-16 border border-violet-400/15 rounded-full" />
        <div className="absolute bottom-16 left-[10%] w-32 h-32 border border-purple-400/10 rounded-2xl rotate-45" />
        <div className="absolute top-1/2 left-[20%] w-2 h-2 bg-purple-400/40 rounded-full" />
        <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-violet-400/50 rounded-full" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-purple-300/60 text-sm mb-8">
            <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-200">Privacy</span>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              Privacy
            </span>
            <br />
            <span className="text-purple-400/80">Policy</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
            How we protect your information and respect your privacy.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300/60 text-sm">
            <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full" />
            Last updated: January 2025
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When you visit {BRAND.name}, we automatically collect certain information about your device, including your web browser, IP address, time zone, and some cookies that are installed on your device. Additionally, as you browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and how you interact with the site.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            When you make a purchase or attempt to make a purchase through the site, we collect your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. This is referred to as &quot;Order Information.&quot;
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">We use the Order Information that we collect generally to:</p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Fulfil any orders placed through the site (including processing your payment, arranging for shipping, and providing you with invoices and/or order confirmations)</li>
            <li>Communicate with you about your orders</li>
            <li>Screen our orders for potential risk or fraud</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Sharing Your Personal Information</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the site. We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise these rights, please contact us through the contact information below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When you place an order through the site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Changes</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at{" "}
            <a href="mailto:siliconedolores@gmail.com" className="text-purple-600 hover:text-purple-700 underline">
              siliconedolores@gmail.com
            </a>{" "}
            or by mail using the details provided on our{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
              Contact page
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
