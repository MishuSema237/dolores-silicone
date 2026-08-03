import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-serif text-purple-200 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Página no encontrada
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
                ¡Ups! La página que buscas parece haber sido movida o no existe.
            </p>
            <div className="flex gap-4">
                <Button href="/" variant="outline">
                    Volver al inicio
                </Button>
                <Button href="/shop">
                    Ver la tienda
                </Button>
            </div>
        </div>
    );
}
