import Link from "next/link";

export const metadata = {
  title: "Política de Envío - Dolores Silicone",
  description: "Información de envío de las muñecas reborn de silicona hechas a mano de Dolores Silicone.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        {/* Layered gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-[#0c0517] to-purple-800/20" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px] -translate-y-1/4" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[110px] translate-y-1/3" />

        {/* Decorative shapes */}
        <div className="absolute top-[15%] left-[25%] w-20 h-20 border border-purple-500/15 rounded-full" />
        <div className="absolute top-[18%] left-[27%] w-10 h-10 border border-violet-400/10 rounded-full" />
        <div className="absolute bottom-[20%] right-[18%] w-16 h-16 border-2 border-purple-400/10 rounded-xl rotate-45" />
        <div className="absolute top-[50%] right-[8%] w-2 h-2 bg-purple-400/30 rounded-full" />
        <div className="absolute top-[28%] left-[10%] w-1.5 h-1.5 bg-violet-400/40 rounded-full" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300/60 text-sm mb-8">
            <Link href="/" className="hover:text-purple-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-purple-200">Envío</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-violet-100 to-purple-200 bg-clip-text text-transparent">
              Política de
            </span>
            <br />
            <span className="text-purple-400/80">Envío</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
            Cómo entregamos tu preciado bebé hecho a mano de forma segura en tu puerta.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300/60 text-sm">
            <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full" />
            Última actualización: enero de 2025
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tiempos de Procesamiento</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Todos los pedidos se procesan dentro de <strong>1–3 días laborables</strong>. Los pedidos no se envían ni se entregan los fines de semana ni en los días festivos del Reino Unido. Si experimentamos un alto volumen de pedidos, los envíos pueden retrasarse unos días. Te contactaremos si hay un retraso significativo en el despacho de tu pedido.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Envío en el Reino Unido</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Ofrecemos las siguientes opciones de envío dentro del Reino Unido:</p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li><strong>Envío Estándar:</strong> 3–5 días laborables — Gratis en pedidos superiores a 117 €</li>
            <li><strong>Envío Exprés:</strong> 1–2 días laborables — Calculado al pagar</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Todos los envíos del Reino Unido se realizan a través de Royal Mail o un servicio de mensajería de confianza con seguimiento. Se proporcionará un número de seguimiento por correo electrónico una vez que tu pedido haya sido despachado.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Envío Internacional</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Enviamos a destinos internacionales seleccionados. Las tarifas de envío internacional y los tiempos de entrega varían según la ubicación. La entrega estimada es de <strong>7–21 días laborables</strong> según el destino. Ten en cuenta que los derechos de aduana, los impuestos de importación y las tarifas de corretaje son responsabilidad del destinatario y no están incluidos en los cargos de envío.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Embalaje</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cada bebé reborn de Dolores Silicone se empaqueta cuidadosamente en una caja segura y acolchada para garantizar que llegue sin daños. Nuestro embalaje está diseñado para proteger los delicados detalles de cada pieza hecha a mano durante el tránsito. Cada bebé se envuelve en papel de seda suave e incluye un certificado de autenticidad.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Seguimiento de Pedidos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con tu número de seguimiento. Puedes rastrear tu pedido en el sitio web del transportista o usando nuestra página de{" "}
            <Link href="/track-order" className="text-purple-600 hover:text-purple-700 underline">
              Rastrear Pedido
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Envíos Perdidos o Dañados</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Si tu paquete parece estar perdido o llega dañado, contáctanos inmediatamente. Trabajaremos con el transportista para investigar y resolver el problema. Para envíos dañados, conserva todos los materiales de embalaje y toma fotografías del daño.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contáctanos</h2>
          <p className="text-gray-600 leading-relaxed">
            Si tienes alguna pregunta sobre el envío, contáctanos a través de nuestra{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
              página de Contacto
            </Link>{" "}
            o por{" "}
            <a
              href="https://wa.me/447380608611"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 underline"
            >
              WhatsApp
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
