import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

interface Product {
  _id?: string;
  id?: string;
  name: string;
  price: number;
  imageUrl?: string;
  images?: string[];
  slug: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  showViewAll?: boolean;
}

export function ProductGrid({
  products,
  title = "Our Latest Creations",
  showViewAll = true,
}: ProductGridProps) {
  return (
    <section className="mb-12">
      <h2 className="text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product._id || product.id}
            id={product._id || product.id || ""}
            name={product.name}
            price={product.price}
            slug={product.slug}
            imageUrl={product.imageUrl || (product.images && product.images[0])}
          />
        ))}
      </div>
      {showViewAll && (
        <div className="text-center">
          <Button variant="outline" href="/shop">
            View All Babies
          </Button>
        </div>
      )}
    </section>
  );
}

