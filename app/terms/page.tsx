import Link from "next/link";

export const metadata = {
  title: "Términos de Servicio - Dolores Silicone",
  description: "Términos de Servicio de las muñecas reborn de silicona hechas a mano de Dolores Silicone.",
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
            <Link href="/" className="hover:text-purple-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-purple-200">Términos</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-violet-400/60" />
            <div className="w-1.5 h-1.5 bg-violet-400/60 rotate-45" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-violet-400/60" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-violet-100 to-purple-200 bg-clip-text text-transparent">
              Términos de
            </span>
            <br />
            <span className="text-violet-400/80">Servicio</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
            Las pautas que rigen tu uso de nuestro sitio web y nuestros servicios.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-purple-300/60 text-sm">
            <span className="w-1.5 h-1.5 bg-violet-400/60 rounded-full" />
            Última actualización: enero de 2025
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Resumen</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Este sitio web es operado por Dolores Silicone. A lo largo del sitio, los términos &quot;nosotros&quot; y &quot;nuestro&quot; se refieren a Dolores Silicone. Al visitar nuestro sitio y/o comprar algo de nosotros, te acoges a nuestro &quot;Servicio&quot; y aceptas estar sujeto a los siguientes términos y condiciones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Productos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Todos los productos vendidos en este sitio son muñecas reborn de silicona hechas a mano. Debido a la naturaleza artesanal de nuestros productos, las ligeras variaciones en apariencia, color y detalle son normales y añaden al carácter único de cada pieza. Las imágenes de los productos son ilustrativas; el producto real puede variar ligeramente.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nos reservamos el derecho de modificar o descontinuar cualquier producto en cualquier momento sin previo aviso. No seremos responsables ante ti ni ante terceros por cualquier modificación, cambio de precio, suspensión o discontinuación de un producto.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Pedidos y Pago</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Al realizar un pedido, estás haciendo una oferta para comprar un producto. Todos los pedidos están sujetos a disponibilidad y a la confirmación del precio del pedido. Nos reservamos el derecho de rechazar o cancelar cualquier pedido por cualquier motivo, incluyendo limitaciones de cantidades disponibles, inexactitudes en la información del producto o del precio, o errores identificados por nuestro sistema de detección de fraude.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Todos los precios se muestran en euros (EUR) e incluyen el IVA aplicable salvo que se indique lo contrario. El pago se procesa de forma segura a través de nuestros métodos de pago aprobados. No almacenamos los datos de tu tarjeta de pago en nuestros servidores.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Envío</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Consulta nuestra{" "}
            <Link href="/shipping-policy" className="text-purple-600 hover:text-purple-700 underline">
              Política de Envío
            </Link>{" "}
            para obtener información detallada sobre métodos de envío, costos y tiempos de entrega estimados.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Devoluciones y Reembolsos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Debido a la naturaleza artesanal y personalizada de nuestros productos, todas las ventas son definitivas salvo que el producto llegue dañado o defectuoso. Revisa nuestra{" "}
            <Link href="/returns" className="text-purple-600 hover:text-purple-700 underline">
              Política de Devoluciones
            </Link>{" "}
            para más información.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Propiedad Intelectual</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Todo el contenido incluido en este sitio, como textos, gráficos, logotipos, imágenes y software, es propiedad de Dolores Silicone o de sus proveedores de contenido y está protegido por las leyes de derechos de autor del Reino Unido e internacionales. No puedes reproducir, duplicar, copiar, vender o explotar ninguna parte del Servicio sin permiso escrito expreso.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Limitación de Responsabilidad</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            En ningún caso Dolores Silicone será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos resultantes de tu uso del servicio o de cualquier producto adquirido a través del servicio. Nuestra responsabilidad se limitará a la extensión máxima permitida por la ley.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Legislación Aplicable</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Estos Términos de Servicio se rigen e interpretan de acuerdo con las leyes del Reino Unido. Cualquier disputa derivada de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales del Reino Unido.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Contacto</h2>
          <p className="text-gray-600 leading-relaxed">
            Las preguntas sobre los Términos de Servicio deben enviarse a través de nuestra{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
              página de Contacto
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
