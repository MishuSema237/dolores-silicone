import { ImageGallery } from "@/components/ui/image-gallery";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@/lib/utils/db-helpers";

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
      title: "Product Not Found - Reborn Babies",
    };
  }

  return {
    title: `${product.name} - Reborn Babies`,
    description: product.description,
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

  const fullStars = Math.floor(product.rating || 0);
  const hasHalfStar = (product.rating || 0) % 1 >= 0.5;

  return (
    <div className="w-full max-w-viewport mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6">
          <ImageGallery
            images={product.images || []}
            productName={product.name}
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="lg:col-span-5">
          <h1 className="mb-4">{product.name}</h1>
          <p className="text-3xl font-semibold mb-4">${product.price.toFixed(2)}</p>

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

          <AddToCartButton product={product} />

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
          {product.testimonial && (
            <div className="bg-pink-50 p-6 mt-8 rounded-xl shadow-sm">
              <p className="italic mb-4 text-gray-700">{product.testimonial.quote}</p>
              <p className="font-semibold text-black mb-0">
                - {product.testimonial.author}, {product.testimonial.title}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

