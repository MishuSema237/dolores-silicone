"use client";

import { useState, useEffect, FormEvent } from "react";
import { FormInput, FormTextarea } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaPinterest, FaClock, FaWhatsapp, FaQuestionCircle } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/api/admin/faqs");
        if (res.ok) {
          const data = await res.json();
          const activeFaqs = Array.isArray(data) ? data.filter((f: any) => f.active !== false) : [];
          setFaqs(activeFaqs);

          // Inject FAQPage JSON-LD
          if (activeFaqs.length > 0) {
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.id = "faq-jsonld";
            script.text = JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: activeFaqs.map((faq: any) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            });
            const existing = document.getElementById("faq-jsonld");
            if (existing) existing.remove();
            document.head.appendChild(script);
          }
        }
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);


    try {
      // Send contact form via API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Thank you! Your message has been sent. We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(error.message || "There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [socials, setSocials] = useState<any[]>([]);

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const res = await fetch("/api/admin/socials");
        if (res.ok) {
          const data = await res.json();
          setSocials(data.filter((s: any) => s.active));
        }
      } catch (error) {
        console.error("Failed to fetch socials:", error);
      }
    };

    fetchSocials();
  }, []);

  const iconMap: any = {
    FaTiktok: <FaInstagram />, // Fallback
    FaFacebook: <FaFacebook />,
    FaInstagram: <FaInstagram />,
    FaTwitter: <FaPinterest />, // Fallback
    FaPinterest: <FaPinterest />,
    FaYoutube: <FaPinterest />, // Fallback
  };

  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/35 via-[#0c0517] to-purple-800/25" />
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[130px] -translate-y-1/4" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/8 rounded-full blur-[100px] translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute top-[15%] right-[18%] w-24 h-24 border border-purple-500/12 rounded-full" />
        <div className="absolute bottom-[18%] left-[10%] w-16 h-16 border-2 border-violet-400/10 rounded-xl -rotate-12" />
        <div className="absolute top-[42%] left-[22%] w-2 h-2 bg-purple-400/30 rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-violet-100 to-purple-200 bg-clip-text text-transparent">
              Get In
            </span>
            <br />
            <span className="text-purple-400/80">Touch</span>
          </h1>
          <p className="text-purple-200/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question about Dolores Silicone or your order? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start px-4 md:px-8">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-4 md:p-8 rounded-md md:rounded-2xl shadow-sm border border-purple-100">
          <h2 className="text-lg md:text-2xl font-serif mb-6 text-gray-800">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                id="name"
                name="name"
                label="Your Name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FormInput
                id="email"
                name="email"
                label="Your Email"
                type="email"
                placeholder="john.doe@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <FormInput
              id="subject"
              name="subject"
              label="Subject"
              type="text"
              placeholder="Inquiry about Reborn Baby"
              required
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />
            <FormTextarea
              id="message"
              name="message"
              label="Your Message"
              placeholder="Type your message here..."
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />



            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          <div className="bg-gradient-to-br from-purple-50 to-white p-4 md:p-8 rounded-md md:rounded-2xl border border-purple-100 shadow-sm">
            <h3 className="text-lg md:text-2xl font-serif mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-500 shadow-sm group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                  <a
                    href="mailto:support@doloressilicone.com"
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors break-all"
                  >
                    support@doloressilicone.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-500 shadow-sm group-hover:scale-110 transition-transform">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                  <a
                    href="tel:+447380608611"
                    className="text-gray-600 hover:text-purple-600 transition-colors no-underline"
                  >
                    +44 738 060 8611
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-500 shadow-sm group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Our Studio</p>
                  <p className="text-gray-600 mb-0">
                    Home-based Studio<br />
                    Available Worldwide
                  </p>
                  <p className="text-xs text-gray-400 mt-2 italic">
                    (Studio visits by appointment only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Quick Link */}
          <a
            href="https://wa.me/447380608611?text=Hello%20Dolores%20Silicone!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-50 p-4 md:p-8 rounded-md md:rounded-2xl border border-green-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp Us Directly</h3>
                <p className="text-sm text-gray-500">Fastest response for custom orders and quick questions.</p>
                <p className="text-sm text-green-600 font-semibold mt-1">+44 738 060 8611</p>
              </div>
            </div>
          </a>

          {/* Business Hours */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-4 md:p-8 rounded-md md:rounded-2xl border border-purple-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="text-purple-500" />
              <h3 className="text-lg md:text-xl font-serif text-gray-800">Business Hours</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Monday - Friday</span><span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Saturday</span><span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Sunday</span><span className="font-semibold text-gray-500">Closed</span></div>
              <p className="text-xs text-gray-400 pt-2 border-t border-gray-100">All times in GMT. WhatsApp messages answered within 24 hours.</p>
            </div>
          </div>

          {/* Social Media */}
          {socials.length > 0 && (
            <div className="bg-white p-4 md:p-8 rounded-md md:rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-lg md:text-xl font-serif mb-6 text-gray-800">Follow Our Journey</h3>
              <div className="flex justify-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social._id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all hover:-translate-y-1"
                  >
                    {social.imageUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={social.imageUrl}
                        alt={social.platform}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      iconMap[social.icon] || <FaFacebook />
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-3">
            <FaQuestionCircle />
            <span className="font-black uppercase tracking-widest text-sm">Frequently Asked</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Common Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.length > 0 ? faqs.map((faq, i) => (
            <div key={faq._id || i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className={`text-purple-500 text-lg transition-transform flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          )) : (
            <p className="text-center text-gray-400 py-8">FAQs coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}
