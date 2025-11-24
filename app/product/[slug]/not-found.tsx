import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full max-w-viewport mx-auto text-center py-12">
      <h1 className="mb-4">Product Not Found</h1>
      <p className="mb-8 text-gray-500">
        The product you're looking for doesn't exist or has been removed.
      </p>
      <div className="flex gap-4 justify-center">
        <Button href="/shop">Browse All Products</Button>
        <Button variant="outline" href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}

