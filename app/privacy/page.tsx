import Link from "next/link";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Política de Privacidad - Dolores Silicone",
  description: "Política de Privacidad de las muñecas reborn de silicona hechas a mano de Dolores Silicone.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        {/* Layered gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0c0517] to-violet-900/30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        {/* Geometric decorative shapes */}
        <div className="absolute top-12 right-[15%] w-24 h-24 border border-purple-500/20 rounded-full" />
        <div className="absolute top-20 right-[18%] w-16 h-16 border border-violet-400/15 rounded-full" />
        <div className="absolute bottom-16 left-[10%] w-32 h-32 border border-purple-400/10 rounded-2xl rotate-45" />
        <div className="absolute top-1/2 left-[20%] w-2 h-2 bg-purple-400/40 rounded-full" />
        <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-violet-400/50 rounded-full" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-purple-300/60 text-sm mb-8">
            <Link href="/" className="hover:text-purple-200 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-purple-200">Privacidad</span>
          </div>

          {/* Decorative line */}
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
            <span className="text-purple-400/80">Privacidad</span>
          </h1>

          <p className="text-purple-200/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
            Cómo protegemos tu información y respetamos tu privacidad.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300/60 text-sm">
            <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full" />
            Última actualización: enero de 2025
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cuando visitas {BRAND.name}, recopilamos automáticamente cierta información sobre tu dispositivo, incluyendo tu navegador web, dirección IP, zona horaria y algunas cookies que se instalan en tu dispositivo. Además, mientras navegas por el sitio, recopilamos información sobre las páginas web individuales o los productos que visitas, qué sitios web o términos de búsqueda te remitieron al sitio y cómo interactúas con el sitio.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cuando realizas una compra o intentas realizar una compra a través del sitio, recopilamos tu nombre, dirección de facturación, dirección de envío, información de pago (incluidos los números de tarjeta de crédito), correo electrónico y número de teléfono. Esto se denomina &quot;Información del Pedido&quot;.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Cómo Usamos Tu Información</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Utilizamos la Información del Pedido que recopilamos generalmente para:</p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Procesar los pedidos realizados a través del sitio (incluyendo el procesamiento de tu pago, la organización del envío y el envío de facturas y/o confirmaciones de pedido)</li>
            <li>Comunicarnos contigo sobre tus pedidos</li>
            <li>Revisar nuestros pedidos para detectar riesgos o fraudes potenciales</li>
            <li>Cuando esté de acuerdo con las preferencias que has compartido con nosotros, proporcionarte información o publicidad relacionada con nuestros productos o servicios</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Compartir Tu Información Personal</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Compartimos tu Información Personal con terceros para ayudarnos a utilizar tu Información Personal, como se describe anteriormente. También utilizamos Google Analytics para ayudarnos a entender cómo usan el sitio nuestros clientes. También podemos compartir tu Información Personal para cumplir con las leyes y regulaciones aplicables, responder a una citación, orden de registro u otra solicitud legal de información que recibamos, o para proteger de otro modo nuestros derechos.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Tus Derechos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Si eres residente europeo, tienes derecho a acceder a la información personal que tenemos sobre ti y a solicitar que tu información personal sea corregida, actualizada o eliminada. Si deseas ejercer estos derechos, contáctanos a través de la información de contacto a continuación.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Retención de Datos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cuando realizas un pedido a través del sitio, mantendremos tu Información del Pedido en nuestros registros a menos que y hasta que nos pidas que eliminemos esta información.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Cambios</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Podemos actualizar esta política de privacidad de vez en cuando para reflejar, por ejemplo, cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Contáctanos</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Para obtener más información sobre nuestras prácticas de privacidad, si tienes preguntas o si deseas presentar una queja, contáctanos por correo electrónico en{" "}
            <a href="mailto:support@doloressilicone.com" className="text-purple-600 hover:text-purple-700 underline">
              support@doloressilicone.com
            </a>{" "}
            o por correo utilizando los datos proporcionados en nuestra{" "}
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
              página de Contacto
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
