import Link from "next/link";

export const metadata = {
  title: "Política de Devoluciones - Dolores Silicone",
  description: "Política de devoluciones y reembolsos de las muñecas reborn de silicona hechas a mano de Dolores Silicone.",
};

export default function ReturnsPage() {
  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        {/* Layered gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 via-[#0c0517] to-violet-800/20" />
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-violet-600/8 rounded-full blur-[100px]" />

        {/* Decorative shapes */}
        <div className="absolute top-[18%] right-[20%] w-16 h-16 border-2 border-purple-500/15 rounded-lg -rotate-6" />
        <div className="absolute bottom-[22%] left-[18%] w-24 h-24 border border-violet-400/10 rounded-full" />
        <div className="absolute bottom-[18%] left-[20%] w-14 h-14 border border-purple-400/8 rounded-full" />
        <div className="absolute top-[45%] left-[8%] w-2 h-2 bg-purple-400/35 rounded-full" />
        <div className="absolute top-[35%] right-[10%] w-2.5 h-2.5 bg-violet-400/30 rounded-full" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300/60 text-sm mb-8">
            <Link href="/" className="hover:text-purple-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-purple-200">Devoluciones</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              Política de
            </span>
            <br />
            <span className="text-purple-400/80">Devoluciones</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
            Nuestro compromiso con tu satisfacción y el cuidado que ponemos en cada intercambio.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300/60 text-sm">
            <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full" />
            Última actualización: enero de 2025
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Compromiso</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            En Dolores Silicone, ponemos gran cuidado en elaborar cada muñeca reborn con el más alto estándar. Queremos que estés completamente satisfecho con tu compra. Debido a la naturaleza artesanal e íntima de nuestros productos, nuestra política de devoluciones es la siguiente:
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Artículos Dañados o Defectuosos</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Si tu artículo llega dañado o tiene un defecto de fabricación, contáctanos dentro de los <strong>7 días</strong> siguientes a la recepción de tu pedido. Para procesar tu reclamación, proporciona:
          </p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Tu número de referencia de pedido</li>
            <li>Una descripción del daño o defecto</li>
            <li>Fotografías que muestren el problema claramente</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Revisaremos tu reclamación y, si se aprueba, te ofreceremos un reemplazo o un reembolso completo a nuestra discreción. Podemos solicitar que el artículo nos sea devuelto para su inspección.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cambio de Opinión</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Como cada bebé reborn de Dolores Silicone es una creación única e hecha a mano, no podemos aceptar devoluciones por cambio de opinión, arrepentimiento del comprador o preferencia personal. Te animamos a revisar cuidadosamente todas las fotografías y descripciones del producto antes de realizar tu pedido.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cómo Iniciar una Devolución</h2>
          <ol className="list-decimal pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Contáctanos a través de{" "}
              <a
                href="https://wa.me/447380608611"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                WhatsApp
              </a>{" "}
              o por correo electrónico en{" "}
              <a href="mailto:support@doloressilicone.com" className="text-purple-600 hover:text-purple-700 underline">
                support@doloressilicone.com
              </a>
            </li>
            <li>Proporciona tu referencia de pedido y el motivo de la devolución</li>
            <li>Espera nuestra respuesta con instrucciones antes de enviar cualquier artículo de vuelta</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-6">
            No envíes artículos de vuelta sin antes contactarnos, ya que no podemos aceptar devoluciones no solicitadas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Reembolsos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Una vez recibida e inspeccionada tu devolución, te notificaremos la aprobación o el rechazo de tu reembolso. Los reembolsos aprobados se procesarán a tu método de pago original dentro de <strong>5–10 días laborables</strong>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Artículos No Devolubles</h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Artículos que hayan sido usados, lavados o alterados de cualquier manera</li>
            <li>Artículos sin su embalaje original (salvo daños)</li>
            <li>Piezas personalizadas o por encargo</li>
            <li>Tarjetas de regalo</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contáctanos</h2>
          <p className="text-gray-600 leading-relaxed">
            Si tienes alguna pregunta sobre nuestra política de devoluciones, contáctanos a través de nuestra{" "}
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
