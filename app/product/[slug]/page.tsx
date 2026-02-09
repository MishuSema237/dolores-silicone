import { ImageGallery } from "@/components/ui/image-gallery";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { notFound } from "next/navigation";

import { getProductBySlug, getProducts } from "@/lib/utils/db-helpers";
import { ProductGrid } from "@/components/sections/product-grid";

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

          <AddToCartButton product={{ ...product, id: product._id, category: product.category }} />

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
        />
      </div>
    </div >
  );
}

