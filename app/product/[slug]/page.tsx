import { ImageGallery } from "@/components/ui/image-gallery";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getProductBySlug, getProducts } from "@/lib/utils/db-helpers";
import { ProductGrid } from "@/components/sections/product-grid";
import { WHATSAPP } from "@/lib/constants";

// ... (imports)

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  let product = null;

  try {
    if (process.env.MONGODB_URI) {
      product = await getProductBySlug(slug);
    }
  } catch (error) {
    console.error("Error fetching product metadata:", error);
  }

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.name} | Dolores Silicone`;
  const description = product.description || `Shop ${product.name} — a handcrafted silicone reborn baby by Dolores Silicone.`;
  const ogImage = product.images?.[0] || "/assets/og-logo.png";

  return {
    title,
    description,
    keywords: [
      product.name,
      "silicone reborn baby doll",
      "full body silicone baby",
      "handcrafted reborn doll UK",
      "lifelike baby doll",
      "platinum silicone reborn",
      "reborn baby for sale",
      product.category === "boys" ? "reborn baby boy" : product.category === "girls" ? "reborn baby girl" : "reborn doll accessories",
    ],
    openGraph: {
      title,
      description,
      url: `https://dolores-silicone.vercel.app/product/${slug}`,
      siteName: "Dolores Silicone",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  let product = null;

  try {
    if (process.env.MONGODB_URI) {
      product = await getProductBySlug(slug);
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  if (!product) {
    notFound();
  }

  // Fetch Related Products
  let relatedProducts = [];
  try {
    if (process.env.MONGODB_URI && product) {
      relatedProducts = await getProducts({
        category: product.category,
        excludeId: product._id,
        limit: 4,
        status: 'active'
      });
    }
  } catch (error) {
    console.error("Error fetching related products:", error);
  }

  const fullStars = Math.floor(product.rating || 0);
  const hasHalfStar = (product.rating || 0) % 1 >= 0.5;

  return (
    <div className="w-full max-w-viewport mx-auto lg:px-6 lg:pt-6">
      {/* ── JSON-LD Product Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description || product.detailedDescription || "",
            image: product.images || [],
            brand: {
              "@type": "Brand",
              name: "Dolores Silicone",
            },
            offers: {
              "@type": "Offer",
              url: `https://dolores-silicone.vercel.app/product/${slug}`,
              priceCurrency: "GBP",
              price: product.price?.toFixed(2),
              availability: product.stock > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
              itemCondition: "https://schema.org/NewCondition",
              seller: {
                "@type": "Organization",
                name: "Dolores Silicone",
              },
            },
            aggregateRating: product.rating
              ? {
                  "@type": "AggregateRating",
                  ratingValue: product.rating,
                  reviewCount: product.reviewCount || 1,
                  bestRating: 5,
                  worstRating: 1,
                }
              : undefined,
            category: product.category || "Reborn Baby Dolls",
            material: "Platinum-Cured Silicone",
            countryOfOrigin: "United Kingdom",
          }),
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6">
          <ImageGallery
            images={product.images || []}
            productName={product.name}
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="lg:col-span-6 px-6 lg:px-0">
          <h1 className="text-2xl md:text-4xl font-serif font-bold mb-4">{product.name}</h1>
          <p className="text-xl md:text-3xl font-semibold mb-4">£{product.price.toFixed(2)}</p>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <div className="flex gap-1 text-black">
                {[...Array(fullStars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {hasHalfStar && <FaStarHalfAlt />}
                {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                  (_, i) => (
                    <FaStar key={`empty-${i}`} className="text-gray-300" />
                  )
                )}
              </div>
              <span>
                {product.rating}/5 stars
              </span>
              {product.reviewCount && (
                <a
                  href="#reviews"
                  className="text-sm underline text-black"
                >
                  Read Reviews ({product.reviewCount})
                </a>
              )}
            </div>
          )}

          <p className="mb-6">{product.description}</p>

          <AddToCartButton product={{ ...product, id: product._id, category: product.category }} />

          <div className="mt-6 mb-6">
            <a
              href={`${WHATSAPP.link}?text=${encodeURIComponent(`Hi! I have a question about the ${product.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#25D366] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Have a question? Chat with us on WhatsApp
            </a>
          </div>

          {/* Accordion Sections */}
          <Accordion>
            {product.detailedDescription && (
              <AccordionItem title="Detailed Description">
                <p className="mb-2 whitespace-pre-line">{product.detailedDescription}</p>
              </AccordionItem>
            )}

            {product.materialsAndCare && (
              <AccordionItem title="Materials & Care">
                <p className="mb-2 whitespace-pre-line">{product.materialsAndCare}</p>
              </AccordionItem>
            )}

            {product.shippingInfo && (
              <AccordionItem title="Shipping Information">
                <p className="mb-2 whitespace-pre-line">{product.shippingInfo}</p>
              </AccordionItem>
            )}
          </Accordion>

          {/* Testimonial Card */}
          {product.testimonial?.quote && (
            <div className="bg-purple-50 p-6 mt-8 rounded-xl shadow-sm">
              <p className="italic mb-4 text-gray-700">{product.testimonial.quote}</p>
              <p className="font-semibold text-black mb-0">
                - {product.testimonial.author}, {product.testimonial.title}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-24 mb-6 px-6">
        <ProductGrid
          products={relatedProducts}
          title="You Might Also Like"
          layout="carousel"
          mobileLayout="carousel"
        />
      </div>
    </div >
  );
}

