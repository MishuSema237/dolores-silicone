/**
 * Traducciones al español para los productos de la base de datos.
 * Claves = slug del producto. Solo se aplican los campos presentes.
 */

export interface ProductTranslation {
  name?: string;
  description?: string;
  detailedDescription?: string;
  materialsAndCare?: string;
  shippingInfo?: string;
  attributes?: {
    hairColor?: string;
    eyeColor?: string;
    size?: string;
    gender?: string;
  };
}

export const productTranslations: Record<string, ProductTranslation> = {
  // ── Categoría "baby" (se normaliza a girls/boys) ──────────────────
  dumpling: {
    description:
      "Un bebé de silicona de cuerpo completo, tranquilo, creado para traer consuelo y amor a casa.",
    detailedDescription:
      "Conoce a Dumpling, un bebé reborn de silicona de cuerpo completo creado para capturar la belleza serena de un recién nacido dormido. Su expresión suave y su presencia realista están diseñadas para evocar calidez, conexión y una tranquilidad dulce, convirtiéndolo en un complemento significativo para cualquier hogar.\n\nDumpling es ideal para familias que buscan consuelo, recuerdos preciosos, decoración de la habitación del bebé y regalos llenos de cariño. También atrae a coleccionistas exigentes que valoran el realismo, la artesanía y la autenticidad emocional. Cada detalle está creado para ofrecer una experiencia relajante y realista que se siente personal y especial.\n\nYa sea bienvenido como un recuerdo familiar o añadido a una colección reborn curada, Dumpling ofrece más que una apariencia: ofrece una sensación de paz, conexión y el encanto atemporal de un recién nacido.",
    materialsAndCare:
      "Dumpling está creado con silicona premium de cuerpo completo para un realismo excepcional, flexibilidad suave y una sensación de recién nacido verdadero. Viste un jersey y un gorro tejidos a mano, con pantalones de tela a juego, manoplas y escarpines, e incluye una manta de presentación de felpa.\n\nPara mantener su calidad y apariencia, manéjalo con las manos limpias y secas y limpia suavemente las manchas con un paño suave y ligeramente húmedo. No lo sumerjas en agua. Evita la luz solar directa, el calor y los productos químicos agresivos para evitar decoloración o alteración del material. Guárdalo en un lugar fresco y seco y viste y desviste con cuidado para proteger tanto la silicona como las prendas de punto. Diseñado para un manejo delicado, confort familiar, fotografía, exhibición y cuidados de colección.",
    shippingInfo:
      "Ofrecemos con gusto envío estándar gratuito a todo el mundo en todos los pedidos. Cada bebé se prepara y fabrica bajo pedido, con un tiempo de procesamiento típico de 2 a 3 días laborables. Una vez enviado, la entrega se estima en 7 a 14 días laborables a través de mensajeros exprés de confianza según tu ubicación.\n\nCada pedido se empaqueta de forma segura en una lujosa caja de regalo magnética reutilizable para garantizar una llegada segura y una experiencia de desempaquetado hermosa.\n\nSe aceptan devoluciones dentro de los 14 días posteriores a la entrega, siempre que el bebé se devuelva en su estado original, sin usar y sin daños. Como cada bebé es una creación artística personalizada, puede aplicarse una tarifa de reposición del 15%. Las tarifas de envío no son reembolsables.",
  },
  alie: {
    description:
      "Silicona de cuerpo completo ultra realista. Creada para una vida de conexión.",
    detailedDescription:
      "Experimenta la presencia conmovedora de Alie, una obra maestra impresionante del estudio Dolores Silicone. Capturando la inocencia frágil de un recién nacido en un reposo perfecto e inalterado, Alie viste un delicado conjunto de punto color melocotón, tejido a mano, con su característico gorrito en punta.\n\nCada microtrayecto de piel, vena sutil y suave mechón de cabello oscuro implantado a mano ha sido meticulosamente reproducido por nuestros maestros artesanos para evocar la emoción visceral de un bebé real. La construcción de silicona de cuerpo completo de Alie proporciona un peso y una flexibilidad realistas que imitan la sensación de «derretirse en los brazos» de un recién nacido, invitándote a un mundo de confort y compañía de calidad heredada. Para garantizar su procedencia, Alie llega con un Certificado de Autenticidad que la verifica como una creación genuina y única de Dolores Silicone: una pieza de legado para tu familia y colección.",
    materialsAndCare:
      "Forjada con nuestra silicona médica de grado platino y curado con platino, Alie ofrece un tacto aterciopelado e hipoalergénico tan duradero como realista. Ten en cuenta: Alie es una muñeca de arte coleccionable hecha a mano, no un juguete. Está pensada para coleccionistas adultos y familias que buscan una pieza heredada de alta gama para exhibir, manejar con delicadeza y confort emocional.\n\nAunque su presencia es profundamente calmante, se requiere supervisión de un adulto si la manipulan niños. Para preservar su acabado artesanal, trata a Alie con la misma ternura que a un bebé real, evitando tejidos abrasivos y manteniendo su superficie mate pristina con polvo de seda de alta calidad y apto para silicona.",
    shippingInfo:
      "Ofrecemos envío exprés mundial gratuito para Alie. Se somete a una preparación final rigurosa y a una inspección artesanal antes de colocarse de forma segura en nuestro lujoso empaque magnético de regalo, diseñado para una experiencia de desempaquetado realmente impresionante.\n\nProcesamiento: permite una ventana de procesamiento artesanal dedicada mientras nuestros artistas finalizan los intrincados detalles de Alie.\nEntrega: las estimaciones de entrega exprés se proporcionan al despachar, garantizando un viaje rápido y seguro hasta tu puerta.\nDevoluciones: debido a la naturaleza hecha a medida de nuestros productos de arte de alta gama, ofrecemos condiciones de devolución justas. Ten en cuenta que puede aplicarse una tarifa de reposición para mantener la integridad de nuestra colección exclusiva.",
  },
  ronnie: {
    description:
      "Silicona de cuerpo completo hiperrealista. Un sereno latido de paz para tu hogar.",
    detailedDescription:
      "Conocer a Ronnie por primera vez es un momento de emoción pura y silenciosa. Capturado en un estiramiento somnoliento y contento, Ronnie encarna la magia fugaz de las primeras horas de un recién nacido. Vestido con algodón blanco impecable de grado hospitalario y su característico gorro celestial «Hello World», esta obra maestra de silicona de cuerpo completo es un testimonio del realismo inigualable del estudio Dolores Silicone.\n\nCada arruga delicada de la frente y el sutil e realista pucherito de los labios ha sido esculpida con precisión para evocar una profunda sensación de protección y calma. La presencia con peso de Ronnie está equilibrada para sentirse instintivamente «correcta» en tus brazos, creando un vínculo inmediato que trasciende el coleccionismo tradicional. Ya sea como un querido recuerdo familiar o como la joya de la corona de una colección seria, Ronnie ofrece una conexión atemporal con la belleza de la vida nueva. Para asegurar tu inversión, Ronnie llega con un Certificado de Autenticidad que verifica su estatus como una creación original de Dolores Silicone, elaborada artesanalmente.",
    materialsAndCare:
      "Ronnie está fundido con nuestra silicona exclusiva de curado con platino, ofreciendo una sensación realista de «piel con piel» que es hipoalergénica y notablemente flexible. Ten en cuenta: Ronnie es una muñeca de arte coleccionable hecha a mano, no un juguete. Pensada para exhibición, compañía emocional y manejo delicado, Ronnie requiere supervisión de un adulto para los niños. Para mantener la intrincada pintura artesanal y la textura mate característica, recomendamos un manejo consciente y la aplicación regular de nuestro polvo de seda artesanal premium.",
    shippingInfo:
      "Ofrecemos envío exprés mundial gratuito para garantizar que Ronnie llegue a ti con el máximo cuidado. Cada bebé se presenta en nuestro característico lujoso empaque magnético de regalo, reflejando la naturaleza premium de tu adquisición.\n\nProcesamiento: nuestros artesanos dedican tiempo a una inspección de calidad final y rigurosa para asegurar que Ronnie salga sin defectos.\nEntrega: el envío exprés totalmente asegurado garantiza que Ronnie llegue de forma segura y rápida a tu puerta.\nDevoluciones: como cada creación es una obra de arte única, ofrecemos condiciones de devolución justas, que pueden incluir una tarifa de reposición para preservar la exclusividad de nuestra colección hecha a mano.",
  },
  "maeve-the-twins": {
    name: "Maeve las Gemelas",
    description:
      "Un sereno par de bebés reborn de silicona de cuerpo completo, esculpidos en suaves tonos ruborizados y vestidos con delicados tejidos de punto pastel, creados para ser sostenidos, queridos y conservados para siempre.",
    detailedDescription:
      "Este exquisito set de gemelas de Dolores Silicone captura un momento de calma pura: dos recién nacidas realistas descansando lado a lado, con expresiones suavizadas en dulces sonrisas, piel besada con calidez natural y extremidades relajadas con realismo de recién nacido. Cada contorno, desde los sutiles pliegues de las manos hasta el tierno rizo de los dedos de los pies, ha sido esculpido y terminado individualmente para evocar la íntima quietud de los primeros días de vida.\n\nHechas a mano como bebés reborn de silicona de cuerpo completo, cada pieza ofrece una notable sensación de presencia y conexión emocional. Sus cuerpos de silicona suaves y con peso responden de forma natural al ser acunados, creando una experiencia que va más allá de la exhibición: una que invita al vínculo, el consuelo y la reflexión. Vestidas con chaquetas de punto rosa empolvado, mallas color crema y capotas de marfil, las gemelas encarnan una estética refinada y heredada, diseñada para armonizar con elegantes habitaciones infantiles y colecciones curadas.\n\nCada bebé llega con un Certificado de Autenticidad que lo verifica como una creación genuina de Dolores Silicone. Este certificado confirma la artesanía, los materiales y la naturaleza limitada de la pieza, garantizando un valor duradero para coleccionistas exigentes y familias que buscan un recuerdo significativo.\n\nCreado no para las tendencias, sino para la atemporalidad, este set de gemelas es una celebración de la conexión: entre el arte y la emoción, la memoria y la artesanía.",
    materialsAndCare:
      "Creadas con silicona premium de grado platino de cuerpo completo, pintadas delicadamente a mano con pigmentos en capas y terminadas con detalles finos para el realismo de la piel. El cabello y los rasgos se refinan individualmente para preservar una apariencia suave de recién nacido.\n\nEsta pieza es una muñeca de arte coleccionable hecha a mano, no un juguete. Pensada para un manejo delicado, exhibición, confort terapéutico y conexión emocional. Debido a la naturaleza artesanal y la construcción realista, se requiere supervisión de un adulto para los niños. Evita el estiramiento excesivo, los objetos afilados, la transferencia de tinta de tejidos oscuros y la luz solar directa prolongada. Limpia solo con un paño suave y ligeramente húmedo y deja secar al aire de forma natural.",
    shippingInfo:
      "• Envío mundial gratuito en todos los pedidos\n• Tiempo de procesamiento artesanal: aproximadamente 2 a 4 semanas, ya que cada pieza se prepara cuidadosamente\n• Entrega exprés: estimada en 3 a 7 días laborables después del despacho\n• Presentadas en un lujoso empaque magnético de regalo, ideal para regalar o almacenar en archivo\n\nDebido a la naturaleza personalizada y artesanal de las muñecas de arte coleccionables, las devoluciones solo se aceptan en su estado original. Puede aplicarse una tarifa de reposición para creaciones personalizadas o limitadas. Los detalles completos de la devolución se proporcionan en la compra para garantizar transparencia y confianza.",
  },

  // ── Categoría "accessory" (se normaliza a accessories) ─────────────
  "dolores-silicone-baby-essentials-starter-kit-blue": {
    name: "Dolores Silicone – Kit de Inicio de Accesorios Esenciales (Azul)",
    description:
      "Un kit de esenciales cuidadosamente seleccionados con accesorios sencillos y cotidianos diseñados para complementar tu bebé reborn de silicona con suavidad, confort y estilo atemporal.",
    detailedDescription:
      "Qué incluye\n\nConjunto Suave de Dos Piezas (Azul)\nUn conjunto ligero de estilo recién nacido con parte de arriba y pantalones con pies, diseñado para vestir fácilmente y un contacto suave con la silicona.\n\nCalcetines de Recién Nacido (Par)\nCalcetines suaves de punto elástico que añaden calidez y realismo sin presión.\n\nGorro Tejido de Punto\nUn sencillo gorro acanalado en un tono azul a juego, ideal para el estilo de recién nacido.\n\nChupetes Magnéticos (Set de 2)\nChupetes solo para exhibición, diseñados para poses y fotografía realistas.\n\nCestita Tejida Mini\nUna cesta ligera adecuada para descansar, exhibir o preparar sesiones de fotos cuando se forra con un paño o una manta.\n\nManta Suave de Envolver\nUna manta básica y transpirable para envolver, exhibir o sostener suavemente.\n\nTodos los artículos de este kit están pensados únicamente para muñecas de arte reborn coleccionables de silicona.\nEste kit no contiene productos funcionales para bebés y no es adecuado para bebés reales. Se requiere supervisión de un adulto cuando se usa cerca de niños.",
  },

  // ── Categoría "girls" ─────────────────────────────────────────────
  "elena-rose": {
    description:
      "Un hermoso y realista bebé de silicona recién nacida, con rasgos suaves y cuerpo con peso para una sensación auténtica.",
    detailedDescription:
      "Esta impresionante bebé recién nacida está meticulosamente hecha a mano con silicona premium de platino. Cada detalle, desde las delicadas arrugas de las manos hasta las diminutas uñas, ha sido cuidadosamente esculpido por nuestro maestro artesano. La bebé viene con extremidades reposicionables y ojos de cristal realistas que añaden a su apariencia realista.",
    materialsAndCare:
      "Hecha con silicona premium de platino. Limpia con jabón suave y agua. Evita la luz solar directa. Guárdala en un lugar fresco y seco.",
    shippingInfo: "Se envía en 3 a 5 días laborables. Empaquetada cuidadosamente en una caja acolchada.",
  },
  "isla-may": {
    description:
      "Una bebé preciosa con rasgos delicados y construcción premium de silicona para una calidad duradera.",
    detailedDescription:
      "Isla tiene el cabello implantado a mano con hermosos mechones, detalles realistas de lanugo y relleno de cuentas de cristal con peso para esa sensación perfecta de bebé. Su expresión dulce y sus mejillas sonrosadas la hacen irresistible.",
    materialsAndCare: "Construcción premium de silicona de platino. Lavar solo a mano. Guardar en su posición original.",
    shippingInfo: "Enviamos a todo el mundo, con seguimiento.",
  },
  "sophie-nicole": {
    description: "Una niña pequeña adorable con los detalles y la expresión más realistas.",
    detailedDescription:
      "Sophie es una de nuestras niñas pequeñas más detalladas, con tonos de piel realistas, vetas sutiles y hermosos rasgos pintados a mano. Su cuerpo con peso la hace perfecta para abrazarla.",
    materialsAndCare: "Silicona premium. Limpiar con un paño húmedo. Evitar sumergir en agua.",
    shippingInfo: "Entrega asegurada.",
  },
  "layla-grace": {
    description: "Un bebé dormido y tranquilo con ojos cerrados realistas y una expresión dulce.",
    detailedDescription:
      "Layla está bellamente elaborada con ojos cerrados realistas que muestran pestañas delicadas. Su cuerpo con peso y su posición natural de dormir la hacen perfecta para exhibir o abrazar.",
    materialsAndCare: "Construcción de silicona. Limpiar suavemente con jabón suave.",
    shippingInfo: "Empaquetada con cuidado y enviada de forma segura, con número de seguimiento al confirmarse el pedido.",
  },
  "isabella-grace": {
    description: "Nuestra bebé de colección premium con excepcional detalle y realismo.",
    detailedDescription:
      "Isabella representa la cúspide de nuestro oficio. Cada detalle ha sido cuidadosamente considerado, desde los cabellos individuales hasta los sutiles tonos de piel. Es una verdadera obra maestra.",
    materialsAndCare: "Silicona de grado de colección. Se recomienda limpieza profesional.",
    shippingInfo: "Envío premium con seguro incluido.",
  },
  "harper-lynn": {
    description: "Nuestra bebé artesana premium con detalle de calidad de museo.",
    detailedDescription:
      "Harper es una pieza única que presenta nuestra mejor artesanía. Desde la veta sutil hasta el tono de piel perfecto, representa meses de cuidadosa elaboración.",
    materialsAndCare: "Calidad de museo. Se recomienda cuidado profesional.",
    shippingInfo: "Entrega con guantes blancos disponible.",
  },
  "lily-rose-and-ruby-anne": {
    name: "Lily Rose y Ruby Anne",
    description:
      "Una bebé preciosa con rasgos delicados y construcción premium de silicona.",
    detailedDescription:
      "Muñecas dormidas y realistas con tonos de piel suaves.\nEstas gemelas siempre deben estar juntas.",
    materialsAndCare: "MATERIAL: mezcla de silicona y vinilo, cuerpo de tela.\nCUIDADO: guardar en posición tumbada para mantener la forma.",
  },
  "emma-grace": {
    description: "Un hermoso recién nacido con expresión realista de sueño y rasgos suaves.",
    detailedDescription: "Muñeca de expresión suave con postura natural de recién nacido.",
    materialsAndCare: "MATERIAL: extremidades de silicona, cuerpo de tela, ojos acrílicos.\n\nCUIDADO: limpiar solo las manchas.",
  },
  "sofia-joy": {
    description: "Un bebé alegre con ojos expresivos y hermosos detalles pintados a mano.",
    detailedDescription: "Estilo realista de recién nacido, cabello implantado, piel de silicona de tacto suave.",
    materialsAndCare: "MATERIAL: silicona completa, capas de pintura selladas, cabello implantado.\nCUIDADO: mantener alejada del polvo, usar talco para bebés ligeramente.",
  },
  "chloe-anne": {
    description: "Una pequeña preciosa con colorido delicado y auténtico cuerpo con peso.",
    detailedDescription: "Adorable muñeca bebé con mejillas sonrosadas y orejitas diminutas.",
    materialsAndCare: "MATERIAL: silicona ecológica, pintura a mano detallada.\n\nCUIDADO: lavar suavemente y secar completamente al aire.",
  },
  "nora-faith": {
    description: "Un bebé sereno con rasgos tranquilos y piel premium de silicona.",
    detailedDescription: "Muñeca bebé realista con manos curvadas y expresión serena.",
    materialsAndCare: "MATERIALES: silicona de grado médico, cejas pintadas, mohair implantado.\n\nCUIDADO: lavar con cuidado, evitar cepillar el cabello con brusquedad.",
  },
  "mia-faith": {
    description: "Un bebé compacto con el cuerpo más suave y abrazable y una presencia amorosa.",
    detailedDescription: "Lindo muñeco bebé de silicona completa con diseño de abrazo.",
    materialsAndCare: "MATERIALES: cuerpo de silicona completa, textura de piel realista.\n\nCUIDADO: guardar plano o apoyado para mantener la forma.",
  },
  "olivia-hope": {
    description: "Un bebé precioso con rasgos detallados y posición natural.",
    detailedDescription: "Muñeca pequeña de estilo recién nacido con deditos diminutos y pliegues realistas.",
    materialsAndCare: "MATERIALES: cuerpo de silicona, interior con peso, acabado suave.\nCUIDADO: mantener alejada de la tinta y los tejidos oscuros para evitar manchas.",
  },
  "sandra-lois": {
    description: "Tan suave y blandita.",
    detailedDescription: "Es una muñeca bebé especial y realista con ojos y rasgos maravillosos. Tan suave y adorable.",
    materialsAndCare: "MATERIAL: hecha de silicona de alta calidad, sensación de piel suave y realista.\nCUIDADO: limpiar con jabón suave y agua tibia.",
    shippingInfo: "Entrega lo más rápido posible.",
  },
  "samanta-grace": {
    description: "Muñeca bebé de silicona realista y suave con detalles realistas, hecha para abrazos, coleccionar y regalar.",
    detailedDescription:
      "Nuestras muñecas bebé de silicona son suaves, realistas y cuidadosamente elaboradas con detalles realistas para verse y sentirse como un bebé de verdad. Perfectas para coleccionistas, regalos y amantes de las muñecas reborn.",
    materialsAndCare: "MATERIAL: detalles pintados a mano para una apariencia realista.\nCUIDADO: mantener alejada del calor directo y la luz solar. Vestir con ropa de colores claros para evitar manchas.",
    shippingInfo: "Entrega rápida, sin problemas.",
  },
  "ella-joy": {
    description: "Muñeca bebé de silicona linda y realista con sensación de peso para mayor realismo.",
    detailedDescription:
      "Esta muñeca bebé de silicona está hecha a mano con suave piel de silicona de platino realista, lo que le da un tacto y una apariencia realistas. Cuenta con delicados detalles faciales, suaves tonos de piel y un cuerpo abrazable perfecto para coleccionistas y niños bajo supervisión.",
    materialsAndCare:
      "MATERIAL: se usa silicona de alta calidad porque se siente suave, flexible y realista como la piel humana.\nCUIDADO: los limpiadores fuertes, el alcohol o la lejía pueden dañar o decolorar la silicona.",
    shippingInfo: "Sin problemas ni maltratos.",
  },
  "stella-queen": {
    description: "Un bebé adorable con la sonrisa más dulce y una expresión suave.",
    detailedDescription:
      "Hecha de silicona de platino duradera, esta muñeca bebé es suave, apretable y realista, diseñada para dar una experiencia de recién nacido realista para el juego o la colección.",
    materialsAndCare: "Material: cabello suave insertado hebra por hebra para imitar el cabello real de un bebé.\nCuidado: algunos bebés de silicona son pesados, así que un soporte adecuado previene el estrés en las articulaciones.",
    shippingInfo: "Entrega rápida.",
  },
  "marie-clare": {
    description: "Una creación maravillosa con expresiones realistas y calidad premium.",
    detailedDescription:
      "Esta adorable muñeca bebé de silicona tiene un cuerpo flexible, tonos de piel naturales y un detalle fino como diminutas venas, arrugas y cabello suave para un efecto realista.",
    materialsAndCare:
      "Material: un tipo especial de silicona que se usa comúnmente para hacer muñecas reborn suaves y de cuerpo completo por su durabilidad.\nCuidado: aplicar polvo apto para silicona después de la limpieza para reducir la adherencia y mantener la piel suave.",
    shippingInfo: "Buenas tarifas.",
  },
  "rose-marie": {
    description: "Una bebé preciosa con rasgos delicados y construcción premium de silicona.",
    detailedDescription:
      "Esta muñeca bebé de silicona premium viene con rasgos terminados a mano, piel suave tipo vinilo y una sensación abrazable, lo que la hace perfecta para exhibir, regalar o para confort emocional.",
    materialsAndCare:
      "Material: colocada dentro de algunas muñecas para chupetes magnéticos o accesorios.\nCuidado: quitar la ropa ajustada lentamente porque estirar puede dañar los dedos o las extremidades.",
    shippingInfo: "Envío con seguimiento.",
  },
  "prisca-grace": {
    description: "Hermosa muñeca bebé niña creada con detalles realistas y encanto.",
    detailedDescription:
      "Una muñeca reborn de recién nacida realista con cuerpo con peso, expresión facial dulce y detalles cuidadosamente elaborados que la hacen sentir y verse como un bebé de verdad.",
    materialsAndCare:
      "Material: añadido internamente para ayudar a dar forma al cuerpo y reducir el peso.\nCuidado: usar solo productos hechos para muñecas de silicona para mantener la calidad y la apariencia.",
    shippingInfo: "Entrega en la puerta de tu casa.",
  },
  "sophia-peace": {
    description: "Muñeca niña pequeña juguetona.",
    detailedDescription: "Sophia está estilizada en una pose juguetona y ligeramente despierta.",
    materialsAndCare: "Material: silicona + armadura.\nCuidado: manejar las articulaciones con suavidad.",
    shippingInfo: "Entrega segura.",
  },
  "emma-cleo": {
    description: "Es perfecta para coleccionistas, fotografía, exhibición o como una compañera querida.",
    detailedDescription:
      "Esta hermosa bebé de silicona hecha a mano está diseñada con un realismo increíble, con delicados tonos de piel pintados a mano, cabello implantado suave, deditos y deditos de los pies detallados, y una expresión pacífica de sueño. Pesa 8 libras y mide 20 pulgadas.",
    materialsAndCare: "Material: 100% silicona de curado con platino, pintada a mano con pinturas premium de silicona.\nCuidado: lavar solo con agua tibia y jabón suave si es necesario.",
    shippingInfo: "Envío mundial con seguimiento disponible.",
  },
  "lily-ray": {
    description: "Una muñeca bebé de silicona premium con rasgos realistas y un color de piel increíble.",
    detailedDescription:
      "* Longitud: aproximadamente 20 pulgadas\n* Peso: aproximadamente 6.2 libras\n* Talla de ropa: le queda ropa de recién nacido hasta bebé de 2 meses\n* Chupete: magnético\n* Incluye: conjunto tejido, gorro a juego, chupete magnético, juguete de conejo de ganchillo y empaque protector",
    materialsAndCare: "Material: silicona de cuerpo completo, mohair premium implantado a mano.\nCuidado: limpiar solo con agua tibia y jabón suave para bebés.",
    shippingInfo: "Los pedidos se empaquetan de forma segura con envoltura protectora para garantizar una entrega segura.",
  },
  "blessing-mariam": {
    description:
      "Enamórate de esta muñeca reborn bellamente hecha a mano, con delicados rasgos dormidos, suave cabello rizado implantado y detalles increíblemente realistas. Incluye conjuntos, una manta, chupete, biberón, instrucciones de cuidado y regalos extra en el paquete.",
    detailedDescription:
      "Conoce a esta impresionante bebé reborn, hecha con amor a mano para capturar la belleza y la inocencia de un recién nacido dormido pacíficamente. Cada detalle, desde el cabello rizado oscuro delicadamente implantado hasta la tez suave pintada a mano y los diminutos rasgos realistas, ha sido cuidadosamente creado para brindar una experiencia increíblemente realista. Mide 21 pulgadas y pesa 8 libras, ropa de recién nacido de 3 meses.",
    materialsAndCare:
      "Material: pintada a mano con tonos de piel realistas, vetas sutiles, rubor y detalles diminutos.\nCuidado: manéjala con delicadeza y apoya la cabeza como con un recién nacido real.",
    shippingInfo: "Incluye envío seguro con seguimiento.",
  },
  "anna-clovette": {
    description:
      "Una muñeca reborn realista bellamente hecha a mano con cabello castaño implantado, detalles realistas de recién nacido, cuerpo suave con peso y chupete magnético. Perfecta para coleccionistas, regalos, fotografía y entusiastas del reborn.",
    detailedDescription:
      "Conoce a esta impresionante muñeca reborn realista, cuidadosamente hecha a mano para capturar la delicada belleza de un recién nacido real. Con un hermoso cabello castaño implantado, piel suavemente ruborizada, diminutos detalles pintados a mano y una pacífica expresión de sueño, esta bebé está diseñada para sentirse increíblemente realista. Pesa 6 libras, usa ropa de recién nacido y mide 20 pulgadas.",
    materialsAndCare:
      "Material: cuerpo suave de tela relleno con algodón PP premium y finas cuentas de cristal para un peso realista.\nCuidado: limpiar suavemente con un paño suave y húmedo; no remojar ni sumergir en agua.",
    shippingInfo: "Empaquetada de forma segura para ayudar a prevenir daños durante el transporte.",
  },
  "seraphina-elowen": {
    description:
      "Seraphina Elowen es una impresionante muñeca reborn hecha a mano con mohair oscuro delicadamente implantado, rasgos pacíficos de sueño y piel bellamente pintada a mano. Diseñada con un realismo increíble, es un recuerdo preciado para coleccionistas y entusiastas del reborn.",
    detailedDescription:
      "Conoce a Seraphina Elowen, una muñeca reborn hecha a mano con amor para capturar la dulce belleza de un recién nacido dormido. Su tez suavemente ruborizada, sus diminutas uñas de manos y pies pintadas a mano, sus tonos de piel realistas y su mohair oscuro premium implantado la hacen increíblemente realista.",
    materialsAndCare:
      "Material: cabeza, brazos y piernas de vinilo suave premium.\nCuidado: no sumergir en agua a menos que la muñeca sea de silicona de cuerpo completo.",
    shippingInfo: "Envío mundial disponible.",
  },
  "feola-mae": {
    description:
      "Longitud: 19 pulgadas. Peso: 6.4 libras. Talla de ropa: recién nacido. Talla de pañal: recién nacido.",
    detailedDescription:
      "Conoce a Feola Mae, una hermosa bebé de silicona realista hecha a mano con dulce cabello rizado oscuro y rasgos pacíficos de sueño. Cada detalle ha sido cuidadosamente diseñado para parecerse a un recién nacido real, desde su textura de piel suave y sus deditos hasta sus delicadas expresiones faciales. Feola Mae es perfecta para coleccionistas, fotografía, exhibición, confort terapéutico o cualquier persona que busque un bebé de silicona increíblemente realista. Llega lista para ser amada y atesorada.",
    materialsAndCare:
      "Material: 100% silicona de curado con platino de cuerpo completo.\nCuidado: espolvorear ligeramente con talco para bebés apto para silicona para mantener la sensación sedosa.",
    shippingInfo: "Empaquetada cuidadosamente en una caja protectora segura.",
  },
  "elodie-claire": {
    description:
      "Esta pequeña encanto tiene una pacífica expresión de sueño, rasgos delicadamente pintados y una apariencia abrazable de recién nacido que la hace parecer que está soñando pacíficamente. Es perfecta para coleccionistas o cualquier persona que busque una compañera realista.",
    detailedDescription:
      "Nombre: Elodie Claire\nGénero: Niña\nTamaño: 20 pulgadas\nPeso: 7 libras\nEdad: recién nacida de 3 meses\nCabello: mohair suave premium implantado a mano, suavemente estilizado para un look natural de recién nacido\nOjos: cerrados",
    materialsAndCare: "Material: silicona de cuerpo completo suave, flexible y realista.\nCuidado: guardar en un lugar fresco y seco cuando no esté en exhibición.",
    shippingInfo: "Envío mundial disponible.",
  },
  "grace-elise": {
    description:
      "Conoce a Grace Elise, una bebé de silicona de cuerpo completo bellamente hecha a mano, diseñada para capturar la preciosa apariencia y sensación de un recién nacido dormido en paz. Con sus rasgos suaves, mejillas regordetas y tonos de piel realistas, Grace Elise es una compañera conmovedora para coleccionistas, entusiastas del reborn y cualquier persona que busque un bebé de silicona increíblemente realista.",
    detailedDescription:
      "* Nombre: Grace Elise\n* Género: Niña\n* Longitud: aproximadamente 20 pulgadas\n* Peso: aproximadamente 8.2 libras\n* Material: 100% silicona Ecoflex de curado con platino\n* Tipo de cuerpo: silicona de cuerpo completo con detalles anatómicamente correctos\n* Tono de piel: tez suave de recién nacida con rubor realista y vetas sutiles\n* Cabello: mohair premium implantado a mano\n* Cejas: pintadas a mano para una apariencia natural\n* Pestañas: mohair suave implantado a mano\n* Ojos: cerrados, expresión pacífica de sueño\n* Boca: ligeramente abierta y adecuada para un chupete magnético\n* Posabilidad: brazos, piernas, cabeza y cuerpo flexibles para posar suavemente",
    materialsAndCare: "Material: 100% silicona Ecoflex de curado con platino.\nCuidado: evitar telas de colores oscuros que puedan manchar la silicona.",
    shippingInfo: "Envío y entrega a todo el mundo.",
  },
  "lily-grace": {
    description:
      "Conoce a Lily Grace, una muñeca reborn de silicona de cuerpo completo bellamente hecha a mano con detalles increíblemente realistas. Tiene piel suave y realista, rasgos delicadamente pintados a mano, fino cabello implantado y una adorable pose de sueño acurrucada que la hace parecer un recién nacido pacífico.",
    detailedDescription:
      "* Género: Niña\n* Longitud: 19 pulgadas\n* Peso: 6 libras\n* Material: silicona premium de cuerpo completo de platino\n* Cabello: mohair premium implantado a mano\n* Ojos: cerrados\n* Incluye: conjunto, chupete magnético, biberón, manta, certificado de nacimiento e instrucciones de cuidado.",
    materialsAndCare:
      "Material: creada con silicona premium de platino de cuerpo completo, lo que le da a la muñeca una sensación increíblemente suave, flexible y realista.\nCuidado: espolvorear ligeramente con talco para bebés apto para silicona para mantener una sensación sedosa.",
    shippingInfo: "Servicio rápido y fácil.",
  },
  "ella-realistic-newborn": {
    name: "Ella – Recién Nacida Realista",
    description:
      "Conoce a Ella, una bebé reborn de silicona bellamente elaborada con detalles intrincados que imitan a un recién nacido real.",
    detailedDescription:
      "Ella es una bebé de silicona de cuerpo completo, meticulosamente esculpida y pintada a mano. Tiene mohair implantado, tonos de piel realistas, vetas sutiles y uñas delicadas.",
    materialsAndCare:
      "Creada con silicona de curado con platino, conocida por su durabilidad y sensación realista.",
    shippingInfo:
      "Todos los bebés reborn se envían de forma segura en empaques personalizados para garantizar su llegada en perfecto estado.",
    attributes: {
      hairColor: "Rubio",
      eyeColor: "Azules",
      size: "19 pulgadas",
      gender: "Niña",
    },
  },
  "liam-peaceful-sleeper": {
    name: "Liam – Duerme Plácidamente",
    description: "Un bebé dormido y tranquilo con rasgos realistas.",
    attributes: {
      hairColor: "Castaño",
      eyeColor: "Verdes",
      size: "20 pulgadas",
      gender: "Niño",
    },
  },
  "lea-rei": {
    description:
      "Conoce a **Lea Rei**, una muñeca bebé de silicona completa bellamente elaborada con una atención increíble al detalle. Desde su piel suave y realista hasta sus delicados rasgos faciales, Lea Rei captura el encanto y la inocencia de un recién nacido real.",
    detailedDescription:
      "Hecha con silicona premium de alta calidad, tiene un tacto suave y realista y es perfecta para coleccionistas, artistas, fotografía, exhibición o juegos de rol suaves. Cada detalle, desde sus diminutos dedos de manos y pies hasta su dulce expresión, ha sido cuidadosamente diseñado para crear una experiencia verdaderamente realista.",
  },

  // ── Categoría "boys" ──────────────────────────────────────────────
  "lucas-daniel": {
    description: "Un bebé compacto y adorable con la expresión más dulce y una artesanía de calidad.",
    detailedDescription:
      "Lucas es un bebé encantador con mejillas sonrosadas, dedos detallados y una dulce sonrisa. A pesar de su tamaño más pequeño, tiene todo el detalle de nuestros bebés más grandes.",
    materialsAndCare: "Silicona de calidad. Fácil de limpiar y mantener.",
    shippingInfo: "Envío estándar disponible.",
  },
  "liam-brooks": {
    description: "Perfectamente equilibrado para abrazar, con la sensación de silicona más suave.",
    detailedDescription:
      "Liam está diseñado para abrazar con una distribución óptima del peso y silicona increíblemente suave. Su dulce expresión invita a un cariño infinito.",
    materialsAndCare: "Silicona ultra suave. Se recomienda un manejo suave.",
    shippingInfo: "Se envía en cuestión de minutos.",
  },
  "kyro-james": {
    description: "Un bebé alegre con rasgos expresivos y un colorido hermoso.",
    detailedDescription:
      "Kyro tiene los ojos pintados más expresivos y una piel sonrosada y natural. Cada rasgo está pintado a mano por nuestros talentosos artistas.",
    materialsAndCare: "Detalles pintados a mano. Limpiar con cuidado.",
    shippingInfo: "Envío con seguimiento disponible.",
  },
  "toby-mason": {
    description: "Una belleza dormida con los ojos cerrados más realistas.",
    detailedDescription:
      "Toby tiene ojos cerrados notablemente detallados con pestañas pintadas. Su expresión pacífica y su cuerpo con peso lo hacen ideal para abrazar.",
    materialsAndCare: "MATERIAL: silicona premium. Limpiar suavemente.\n\nCUIDADO: mantener seco, evitar el exceso de agua o la exposición.",
    shippingInfo: "Enviamos a todo el mundo.",
  },
  "ethan-cole": {
    description: "Un bebé adorable con la sonrisa más dulce y una expresión suave.",
    detailedDescription: "Muñeco bebé niño pequeño con uñas y labios detallados.",
    materialsAndCare: "MATERIALES: silicona de cuerpo completo, tonos de piel pintados a mano.\n\nCUIDADO: manejar con suavidad, evitar estirar las extremidades.",
  },
  "milo-blue": {
    description: "Una creación impresionante con venas realistas y hermoso cabello implantado a mano.",
    detailedDescription: "Muñeco bebé regordete con sensación de piel de tacto suave.",
    materialsAndCare: "MATERIALES: cuerpo suave de silicona, venas realistas, diseño con peso.\n\nCUIDADO: usar talco para bebés ocasionalmente y mantener libre de polvo.",
  },
  "leo-nathan": {
    description: "Una creación maravillosa con expresiones realistas y calidad premium.",
    detailedDescription: "Muñeco bebé de estilo recién nacido con ojos soñolientos y mejillas regordetas.",
    materialsAndCare: "MATERIAL: cuerpo de silicona completa, detalles pintados a mano, suave cabello implantado.\nCUIDADO: limpiar con jabón suave y agua, secar suavemente, evitar objetos afilados.",
  },
  "zaylen-noah": {
    description: "Una creación impresionante con venas realistas y hermoso cabello implantado a mano.",
    detailedDescription: "Un bebé de silicona de estilo raro con ojos expresivos y suave implantación de cabello.",
    materialsAndCare: "MATERIAL: silicona de platino, cabello de mohair, pintura sellada.\nCUIDADO: evitar el cepillado brusco; usar solo un cepillo suave.",
    shippingInfo: "Entrega hecha lo antes posible.",
  },
  "bryan-alex": {
    description:
      "Un bebé niño de silicona de cuerpo completo realista, con piel suave, detalles realistas y una sensación abrazable.",
    detailedDescription:
      "Este adorable bebé niño de silicona de cuerpo completo está hecho a mano con detalles realistas, textura de piel suave y rasgos realistas. Diseñado para abrazos, coleccionar y exhibir.",
    materialsAndCare:
      "Material: polvo especial usado en la piel de silicona para reducir la adherencia y mantener la suavidad.\nCuidado: los limpiadores fuertes, el alcohol o la lejía pueden dañar o decolorar la silicona.",
    shippingInfo: "Entrega mundial.",
  },
  "liam-carter": {
    description: "Un muñeco recién nacido lindo y realista con expresiones suaves.",
    detailedDescription:
      "Liam Carter tiene una cara finamente esculpida, piel suave de mezcla vinilo-silicona y proporciones realistas de recién nacido. Está diseñado para el confort emocional, la fotografía y el coleccionismo de alta gama.",
    materialsAndCare: "Material: cuentas de cristal o gránulos de silicona.\nCuidado: no usar productos químicos agresivos ni alcohol.",
    shippingInfo: "Empaque seguro para protección completa durante el transporte.",
  },
  "logan-james": {
    description: "Bebé niño recién nacido suave.",
    detailedDescription: "Logan tiene pliegues de piel de recién nacido realistas y una sensación de tacto suave.",
    materialsAndCare: "Materiales: silicona, relleno de algodón.\nCuidado: evitar remojar en agua.",
    shippingInfo: "A todo el mundo, empacado de forma segura con espuma protectora.",
  },
  "loyd-gabriel": {
    description: "Muñecos bebé de silicona completa con características especiales y accesorios.",
    detailedDescription:
      "Muñecos bebé suaves y blanditos; es un bebé niño de silicona completa que viene con un conjunto, una manta, chupete, biberón, instrucciones de cuidado y a veces regalos extra en el paquete.",
    materialsAndCare:
      "Material: silicona de curado con platino, pigmentos y pinturas de silicona.\nCuidado: manejar con suavidad y apoyar la cabeza y las extremidades. Limpiar solo con agua tibia y jabón suave.",
    shippingInfo: "Entrega mundial a través de mi agencia de envíos.",
  },
  "micheal-gold": {
    description:
      "Un bebé niño completo con rasgos realistas de bebé, suave y con ojos cerrados.",
    detailedDescription:
      "Un dulce recién nacido duerme pacíficamente sobre una suave manta color crema. El bebé tiene cabello oscuro, rasgos delicados y viste un pijama a rayas gris y blanco con acentos coloridos y pies a juego. Un clip de chupete con un juguete de felpa está sujeto al conjunto, añadiendo un toque adorable. El bebé descansa cómodamente con un brazo levantado, creando una escena tranquila y conmovedora.",
    materialsAndCare:
      "Materiales: hecho con silicona premium de platino o vinilo reborn premium, con detalles pintados a mano, cabello implantado o pintado, ojos realistas de cristal o acrílico (si están abiertos), cuerpo de relleno suave (para muñecas reborn) y rasgos cuidadosamente elaborados diseñados para parecerse a un recién nacido real.\nCuidado: no usar productos químicos agresivos, productos a base de alcohol ni limpiadores abrasivos.",
    shippingInfo: "Envío mundial.",
  },
  "milo-asher": {
    description:
      "Una muñeca reborn dormida bellamente hecha a mano con cabello implantado, rasgos realistas de recién nacido, cuerpo suave con peso y chupete magnético. Perfecta para coleccionistas, regalos, fotografía y amantes de los bebés reborn.",
    detailedDescription:
      "Conoce a Asher, mi muñeca reborn dormida, hecha a mano con amor para capturar la belleza pacífica de un recién nacido en reposo. Con cabello castaño claro delicadamente implantado, piel suavemente ruborizada, diminutos detalles pintados a mano y una dulce expresión de sueño, este bebé realista está diseñado para traer calidez y realismo a cualquier colección. Completo con chupete magnético, este reborn es perfecto para abrazar, exhibir, fotografiar, jugar o como un regalo considerado.",
    materialsAndCare:
      "Material: cabeza, brazos y piernas de vinilo premium de tacto suave.\nCuidado: recomendado para coleccionistas y niños de 3 años o más con supervisión de un adulto.",
    shippingInfo: "Empaquetado cuidadosamente con envoltura protectora para una entrega segura.",
  },
  "carlos-logan": {
    description:
      "Longitud: 22 pulgadas. Peso: 7 libras. Talla de ropa de bebé: recién nacido, aunque algo de ropa de 3 meses también le queda según la marca. Talla de pañal: recién nacido.",
    detailedDescription:
      "Conoce a Carlos, una muñeca reborn dormida bellamente hecha a mano para capturar el encanto pacífico de un recién nacido. Con rasgos delicadamente pintados, suave cabello rubio, mejillas sonrosadas, diminutos dedos realistas y una serena expresión de sueño, este bebé está hecho para verse y sentirse increíblemente realista. Vestido con un acogedor conjunto Disney y abrazando un juguete de peluche colorido, este pequeño es perfecto para coleccionistas, regalos, fotografía o cualquier persona que ame las muñecas reborn realistas. El cuerpo con peso proporciona una sensación reconfortante y realista al ser sostenido.",
    materialsAndCare:
      "Material: cuerpo suave de tela con peso y relleno premium.\nCuidado: mantener alejado de la luz solar directa y del calor excesivo.",
    shippingInfo: "Enviado en una caja segura para proteger la muñeca durante el transporte.",
  },
  "josh-marshal": {
    description:
      "Josh Marshal es una muñeca reborn dormida realista con suave cabello castaño, detalles pintados a mano y un adorable conjunto a rayas azul marino. Un encantador compañero perfecto para coleccionistas, regalos o exhibiciones de guardería.",
    detailedDescription:
      "Conoce a Josh Marshal, un bebé dormido irresistiblemente realista con una expresión pacífica y suave cabello castaño. Sus rasgos delicadamente pintados, sus ojos suavemente cerrados, sus mejillas sonrosadas y sus diminutos labios fruncidos crean la apariencia de un recién nacido soñando pacíficamente. Vestido con un clásico top de punto azul marino con pantalones a rayas y abrazando a sus ositos favoritos, Josh trae calidez y confort a cualquier guardería o colección. Cada detalle está cuidadosamente elaborado para capturar la belleza de un recién nacido real, convirtiéndolo en un maravilloso compañero para coleccionistas, exhibición, fotografía o regalos sinceros.",
    materialsAndCare:
      "Material: pintura acrílica de alta calidad con acabado protector.\nCuidado: cepillar el cabello suavemente con un cepillo suave para bebés si es necesario.",
    shippingInfo: "La información de seguimiento se proporciona una vez que tu pedido ha sido enviado.",
  },
  "logan-vans": {
    description:
      "Conoce a Logan Vans, un bebé reborn de silicona de cuerpo completo increíblemente realista, hecho a mano con una atención notable al detalle. Desde sus delicados rasgos faciales y sus diminutos dedos hasta su suave cabello rizado y su pacífica expresión de sueño, está diseñado para capturar la belleza de un recién nacido real. Las muñecas reborn se hacen a mano para parecerse a bebés reales con pintura, peso y detalles altamente realistas, y brazos y piernas flexibles para posar de forma natural.",
    detailedDescription:
      "* Nombre: Logan Vans\n* Género: Niño\n* Longitud: 18 pulgadas\n* Peso: 5.7 libras\n* Material: silicona ecológica premium de platino\n* Cuerpo: silicona de cuerpo completo\n* Cabello: mohair premium implantado a mano\n* Ojos: cerrados\n* Tono de piel: pintado a mano con moteado realista de recién nacido, venas y rubor",
    materialsAndCare:
      "Material: pintado profesionalmente a mano con pigmentos de silicona no tóxicos y permanentes.\nCuidado: evitar objetos afilados y ropa de colores oscuros que puedan manchar la silicona.",
    shippingInfo: "Envío mundial disponible.",
  },

  // ── Categoría "accessories" ───────────────────────────────────────
  "hand-knit-newborn-blanket": {
    name: "Manta de Recién Nacido Tejida a Mano",
    description:
      "Una manta suave tejida a mano en delicados tonos pastel, perfecta para tu bebé reborn.",
    detailedDescription:
      "Creada con hilo premium de algodón, esta manta presenta un clásico patrón de punto de cable en suaves tonos pastel. Ideal para sesiones de fotos y exhibición.",
  },
  "reborn-baby-bottle-set": {
    name: "Set de Biberones para Muñeca Reborn",
    description:
      "Un set de biberones en miniatura realistas para exhibir con tu muñeca reborn.",
    detailedDescription:
      "Tres biberones en miniatura finamente detallados en transparente, rosa y azul. Rellenos con resina no tóxica para una sensación de peso realista.",
  },
};
