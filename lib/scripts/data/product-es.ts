/**
 * English translations for database products.
 * Keys = product slug. Only present fields are applied.
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
  // ── "baby" category (normalized to girls/boys) ────────────────────
  dumpling: {
    description:
      "A peaceful full-body silicone baby, created to bring comfort and love home.",
    detailedDescription:
      "Meet Dumpling, a full-body silicone reborn baby created to capture the serene beauty of a sleeping newborn. Their soft expression and realistic presence are designed to evoke warmth, connection and sweet tranquility, making them a meaningful addition to any home.\n\nDumpling is ideal for families seeking comfort, precious keepsakes, nursery décor and gifts full of affection. It also appeals to discerning collectors who value realism, craftsmanship and emotional authenticity. Every detail is crafted to deliver a calming, realistic experience that feels personal and special.\n\nWhether welcomed as a family keepsake or added to a curated reborn collection, Dumpling offers more than a look: it offers a sense of peace, connection and the timeless charm of a newborn.",
    materialsAndCare:
      "Dumpling is crafted from premium full-body silicone for exceptional realism, soft flexibility and a true newborn feel. It wears a hand-knitted jersey and bonnet, with matching fabric pants, mittens and booties, and includes a plush presentation blanket.\n\nTo maintain its quality and appearance, handle it with clean, dry hands and gently wipe away marks with a soft, slightly damp cloth. Do not submerge it in water. Avoid direct sunlight, heat and harsh chemicals to prevent discoloration or material alteration. Store it in a cool, dry place and dress and undress it carefully to protect both the silicone and the knitwear. Designed for gentle handling, family comfort, photography, display and collection care.",
    shippingInfo:
      "We are happy to offer free standard worldwide shipping on all orders. Each baby is prepared and made to order, with a typical processing time of 2 to 3 business days. Once shipped, delivery is estimated at 7 to 14 business days via trusted express couriers depending on your location.\n\nEvery order is securely packaged in a luxurious reusable magnetic gift box to guarantee a safe arrival and a beautiful unboxing experience.\n\nReturns are accepted within 14 days of delivery, provided the baby is returned in its original, unused and undamaged condition. As each baby is a bespoke artistic creation, a 15% restocking fee may apply. Shipping fees are non-refundable.",
  },
  alie: {
    description:
      "Ultra-realistic full-body silicone. Crafted for a lifetime of connection.",
    detailedDescription:
      "Experience the touching presence of Alie, a breathtaking masterpiece from the Dolores Silicone studio. Capturing the fragile innocence of a newborn in perfect, undisturbed repose, Alie wears a delicate hand-knitted peach-toned set with her signature pointed bonnet.\n\nEvery micro-detail of skin, subtle vein and soft strand of hand-implanted dark hair has been meticulously reproduced by our master artisans to evoke the visceral emotion of a real baby. Alie's full-body silicone construction provides realistic weight and flexibility that mimic the 'melting in your arms' feel of a newborn, inviting you into a world of comfort and heirloom-quality companionship. To guarantee provenance, Alie arrives with a Certificate of Authenticity verifying her as a genuine, one-of-a-kind Dolores Silicone creation: a legacy piece for your family and collection.",
    materialsAndCare:
      "Forged from our medical-grade platinum-cured silicone, Alie offers a velvety, hypoallergenic touch that is as durable as it is realistic. Please note: Alie is a handmade collectible art doll, not a toy. She is intended for adult collectors and families seeking a high-end heirloom piece for display, gentle handling and emotional comfort.\n\nAlthough her presence is deeply calming, adult supervision is required if handled by children. To preserve her handcrafted finish, treat Alie with the same tenderness as a real baby, avoiding abrasive fabrics and keeping her pristine matte surface dusted with high-quality, silicone-safe silk powder.",
    shippingInfo:
      "We offer free worldwide express shipping for Alie. She undergoes a rigorous final preparation and artisan inspection before being placed securely in our luxurious magnetic gift packaging, designed for a truly stunning unboxing experience.\n\nProcessing: allow a dedicated artisan processing window while our artists finalize Alie's intricate details.\nDelivery: express delivery estimates are provided upon dispatch, ensuring a fast and safe journey to your door.\nReturns: due to the made-to-order nature of our high-end art pieces, we offer fair return conditions. Please note a restocking fee may apply to maintain the integrity of our exclusive collection.",
  },
  ronnie: {
    description:
      "Hyper-realistic full-body silicone. A serene heartbeat of peace for your home.",
    detailedDescription:
      "Meeting Ronnie for the first time is a moment of pure, quiet emotion. Caught in a drowsy, contented stretch, Ronnie embodies the fleeting magic of a newborn's first hours. Dressed in pristine hospital-grade white cotton and his signature 'Hello World' celestial bonnet, this full-body silicone masterpiece is a testament to the Dolores Silicone studio's unrivaled realism.\n\nEvery delicate forehead crinkle and the subtle, realistic pout of the lips has been sculpted with precision to evoke a deep sense of protection and calm. Ronnie's weighted presence is balanced to feel instinctively 'right' in your arms, creating an immediate bond that transcends traditional collecting. Whether as a treasured family keepsake or the crown jewel of a serious collection, Ronnie offers a timeless connection to the beauty of new life. To secure your investment, Ronnie arrives with a Certificate of Authenticity verifying his status as an original, artfully crafted Dolores Silicone creation.",
    materialsAndCare:
      "Ronnie is cast in our exclusive platinum-cured silicone, offering a realistic 'skin-to-skin' feel that is hypoallergenic and remarkably flexible. Please note: Ronnie is a handmade collectible art doll, not a toy. Intended for display, emotional companionship and gentle handling, Ronnie requires adult supervision for children. To maintain the intricate hand-painted artistry and signature matte texture, we recommend mindful handling and the regular application of our premium artisan silk powder.",
    shippingInfo:
      "We offer free worldwide express shipping to ensure Ronnie reaches you with the utmost care. Each baby is presented in our signature luxury magnetic gift packaging, reflecting the premium nature of your acquisition.\n\nProcessing: our artisans dedicate time to a rigorous final quality inspection to ensure Ronnie leaves without a single flaw.\nDelivery: fully insured express shipping guarantees Ronnie arrives safely and quickly at your door.\nReturns: as each creation is a unique work of art, we offer fair return conditions, which may include a restocking fee to preserve the exclusivity of our handmade collection.",
  },
  "maeve-the-twins": {
    name: "Maeve the Twins",
    description:
      "A serene pair of full-body silicone reborn babies, sculpted in soft blushed tones and dressed in delicate pastel knits, created to be held, cherished and kept forever.",
    detailedDescription:
      "This exquisite twin set from Dolores Silicone captures a moment of pure calm: two realistic newborn girls resting side by side, with softened expressions in sweet smiles, skin kissed with natural warmth and newborn-realistic relaxed limbs. Every contour, from the subtle creases of the hands to the tender curl of the toes, has been individually sculpted and finished to evoke the intimate stillness of the first days of life.\n\nHandmade as full-body silicone reborn babies, each piece offers a remarkable sense of presence and emotional connection. Their soft, weighted silicone bodies respond naturally when cradled, creating an experience that goes beyond display: one that invites bonding, comfort and reflection. Dressed in blush-pink knitted jackets, cream leggings and ivory bonnets, the twins embody a refined, heirloom aesthetic designed to harmonize with elegant nurseries and curated collections.\n\nEach baby arrives with a Certificate of Authenticity verifying it as a genuine Dolores Silicone creation. This certificate confirms the craftsmanship, materials and limited nature of the piece, guaranteeing lasting value for discerning collectors and families seeking a meaningful keepsake.\n\nCreated not for trends but for timelessness, this twin set is a celebration of connection: between art and emotion, memory and craftsmanship.",
    materialsAndCare:
      "Crafted from premium platinum-grade full-body silicone, delicately hand-painted with layered pigments and finished with fine details for skin realism. Hair and features are individually refined to preserve a soft newborn appearance.\n\nThis piece is a handmade collectible art doll, not a toy. Intended for gentle handling, display, therapeutic comfort and emotional connection. Due to the handcrafted nature and realistic construction, adult supervision is required for children. Avoid excessive stretching, sharp objects, ink transfer from dark fabrics and prolonged direct sunlight. Clean only with a soft, slightly damp cloth and allow to air dry naturally.",
    shippingInfo:
      "• Free worldwide shipping on all orders\n• Artisan processing time: approximately 2 to 4 weeks, as each piece is carefully prepared\n• Express delivery: estimated at 3 to 7 business days after dispatch\n• Presented in luxury magnetic gift packaging, ideal for gifting or archival storage\n\nDue to the bespoke, handcrafted nature of collectible art dolls, returns are only accepted in original condition. A restocking fee may apply for custom or limited creations. Full return details are provided at purchase to ensure transparency and trust.",
  },

  // ── "accessory" category (normalized to accessories) ───────────────
  "dolores-silicone-baby-essentials-starter-kit-blue": {
    name: "Dolores Silicone – Baby Essentials Starter Kit (Blue)",
    description:
      "A thoughtfully curated essentials kit with simple, everyday accessories designed to complement your silicone reborn baby with softness, comfort and timeless style.",
    detailedDescription:
      "What's included\n\nSoft Two-Piece Set (Blue)\nA lightweight newborn-style set with a top and footed pants, designed for easy dressing and gentle contact with the silicone.\n\nNewborn Socks (Pair)\nSoft stretch-knit socks that add warmth and realism without pressure.\n\nKnitted Bonnet\nA simple ribbed bonnet in a matching blue tone, ideal for the newborn look.\n\nMagnetic Pacifiers (Set of 2)\nDisplay-only pacifiers designed for realistic posing and photography.\n\nMini Woven Basket\nA lightweight basket suitable for resting, displaying or staging photo sessions when lined with a cloth or blanket.\n\nSoft Swaddle Blanket\nA basic, breathable blanket for swaddling, displaying or gentle holding.\n\nAll items in this kit are intended solely for collectible silicone reborn art dolls.\nThis kit does not contain functional baby products and is not suitable for real babies. Adult supervision is required when used near children.",
  },

  // ── "girls" category ───────────────────────────────────────────────
  "elena-rose": {
    description:
      "A beautiful and realistic silicone newborn baby girl, with soft features and a weighted body for an authentic feel.",
    detailedDescription:
      "This stunning newborn baby is meticulously handmade from premium platinum silicone. Every detail, from the delicate hand wrinkles to the tiny fingernails, has been carefully sculpted by our master artisan. The baby comes with repositionable limbs and realistic crystal eyes that add to her lifelike appearance.",
    materialsAndCare:
      "Made from premium platinum silicone. Clean with mild soap and water. Avoid direct sunlight. Store in a cool, dry place.",
    shippingInfo: "Ships within 3 to 5 business days. Carefully packaged in a padded box.",
  },
  "isla-may": {
    description:
      "A precious baby with delicate features and premium silicone construction for lasting quality.",
    detailedDescription:
      "Isla has beautifully hand-implanted hair strands, realistic lanugo details and weighted glass bead filling for that perfect baby feel. Her sweet expression and rosy cheeks make her irresistible.",
    materialsAndCare: "Premium platinum silicone construction. Hand wash only. Store in original position.",
    shippingInfo: "We ship worldwide, with tracking.",
  },
  "sophie-nicole": {
    description: "An adorable little girl with the most realistic detailing and expression.",
    detailedDescription:
      "Sophie is one of our most detailed little girls, with realistic skin tones, subtle veins and beautiful hand-painted features. Her weighted body makes her perfect for cuddling.",
    materialsAndCare: "Premium silicone. Clean with a damp cloth. Avoid submerging in water.",
    shippingInfo: "Secure delivery.",
  },
  "layla-grace": {
    description: "A calm sleeping baby with realistic closed eyes and a sweet expression.",
    detailedDescription:
      "Layla is beautifully crafted with realistic closed eyes showing delicate lashes. Her weighted body and natural sleeping position make her perfect for display or cuddling.",
    materialsAndCare: "Silicone construction. Clean gently with mild soap.",
    shippingInfo: "Carefully packaged and securely shipped, with a tracking number provided once the order is confirmed.",
  },
  "isabella-grace": {
    description: "Our premium collectible baby with exceptional detail and realism.",
    detailedDescription:
      "Isabella represents the pinnacle of our craft. Every detail has been carefully considered, from individual hairs to subtle skin tones. She is a true masterpiece.",
    materialsAndCare: "Collector-grade silicone. Professional cleaning recommended.",
    shippingInfo: "Premium shipping with insurance included.",
  },
  "harper-lynn": {
    description: "Our premium artisan baby with museum-quality detail.",
    detailedDescription:
      "Harper is a one-of-a-kind piece featuring our finest craftsmanship. From the subtle veining to the perfect skin tone, she represents months of careful work.",
    materialsAndCare: "Museum quality. Professional care recommended.",
    shippingInfo: "White-glove delivery available.",
  },
  "lily-rose-and-ruby-anne": {
    name: "Lily Rose and Ruby Anne",
    description:
      "A precious baby with delicate features and premium silicone construction.",
    detailedDescription:
      "Realistic sleeping dolls with soft skin tones.\nThese twins should always stay together.",
    materialsAndCare: "MATERIAL: silicone and vinyl blend, cloth body.\nCARE: store lying down to maintain shape.",
  },
  "emma-grace": {
    description: "A beautiful newborn with a realistic sleeping expression and soft features.",
    detailedDescription: "A soft-expression doll with a natural newborn posture.",
    materialsAndCare: "MATERIAL: silicone limbs, cloth body, acrylic eyes.\n\nCARE: spot clean only.",
  },
  "sofia-joy": {
    description: "A cheerful baby with expressive eyes and beautiful hand-painted details.",
    detailedDescription: "Realistic newborn style, rooted hair, soft-touch silicone skin.",
    materialsAndCare: "MATERIAL: full silicone, sealed paint layers, rooted hair.\nCARE: keep away from dust, use baby powder sparingly.",
  },
  "chloe-anne": {
    description: "A precious little one with delicate coloring and an authentic weighted body.",
    detailedDescription: "Adorable baby doll with rosy cheeks and tiny little ears.",
    materialsAndCare: "MATERIAL: eco-friendly silicone, detailed hand painting.\n\nCARE: wash gently and air dry completely.",
  },
  "nora-faith": {
    description: "A serene baby with calm features and premium silicone skin.",
    detailedDescription: "Realistic baby doll with curled hands and a serene expression.",
    materialsAndCare: "MATERIALS: medical-grade silicone, painted brows, rooted mohair.\n\nCARE: wash with care, avoid brushing hair roughly.",
  },
  "mia-faith": {
    description: "A compact baby with the softest, most huggable body and a loving presence.",
    detailedDescription: "Cute full silicone baby doll with a snuggly design.",
    materialsAndCare: "MATERIALS: full silicone body, realistic skin texture.\n\nCARE: store flat or propped to maintain shape.",
  },
  "olivia-hope": {
    description: "A precious baby with detailed features and a natural position.",
    detailedDescription: "Small newborn-style doll with tiny fingers and realistic creases.",
    materialsAndCare: "MATERIALS: silicone body, weighted interior, soft finish.\nCARE: keep away from ink and dark fabrics to avoid staining.",
  },
  "sandra-lois": {
    description: "So soft and squishy.",
    detailedDescription: "A special, realistic baby doll with wonderful eyes and features. So soft and adorable.",
    materialsAndCare: "MATERIAL: made of high-quality silicone, soft realistic skin feel.\nCARE: clean with mild soap and warm water.",
    shippingInfo: "Delivery as fast as possible.",
  },
  "samanta-grace": {
    description: "Soft realistic silicone baby doll with lifelike details, made for cuddling, collecting and gifting.",
    detailedDescription:
      "Our silicone baby dolls are soft, realistic and carefully crafted with lifelike details to look and feel like a real baby. Perfect for collectors, gifts and reborn doll lovers.",
    materialsAndCare: "MATERIAL: hand-painted details for a realistic look.\nCARE: keep away from direct heat and sunlight. Dress in light-colored clothing to avoid staining.",
    shippingInfo: "Fast, hassle-free delivery.",
  },
  "ella-joy": {
    description: "Cute, realistic silicone baby doll with weighted feel for added realism.",
    detailedDescription:
      "This silicone baby doll is handmade from soft, realistic platinum silicone, giving it a realistic touch and appearance. It features delicate facial details, soft skin tones and a huggable body perfect for collectors and supervised children.",
    materialsAndCare:
      "MATERIAL: high-quality silicone is used because it feels soft, flexible and realistic like human skin.\nCARE: strong cleaners, alcohol or bleach can damage or discolor silicone.",
    shippingInfo: "No problems, no rough handling.",
  },
  "stella-queen": {
    description: "An adorable baby with the sweetest smile and a soft expression.",
    detailedDescription:
      "Made of durable platinum silicone, this baby doll is soft, squeezable and realistic, designed to provide a realistic newborn experience for play or collection.",
    materialsAndCare: "Material: soft hair inserted strand by strand to imitate real baby hair.\nCare: some silicone babies are heavy, so proper support prevents joint stress.",
    shippingInfo: "Fast delivery.",
  },
  "marie-clare": {
    description: "A wonderful creation with realistic expressions and premium quality.",
    detailedDescription:
      "This adorable silicone baby doll has a flexible body, natural skin tones and fine detail such as tiny veins, wrinkles and soft hair for a realistic effect.",
    materialsAndCare:
      "Material: a special type of silicone commonly used to make soft, full-body reborn dolls for its durability.\nCare: apply silicone-safe powder after cleaning to reduce tackiness and keep the skin soft.",
    shippingInfo: "Good rates.",
  },
  "rose-marie": {
    description: "A precious baby with delicate features and premium silicone construction.",
    detailedDescription:
      "This premium silicone baby doll comes with hand-finished features, soft vinyl-like skin and a huggable feel, making it perfect for display, gifting or emotional comfort.",
    materialsAndCare:
      "Material: placed inside some dolls for magnetic pacifiers or accessories.\nCare: remove tight clothing slowly because stretching can damage fingers or limbs.",
    shippingInfo: "Shipping with tracking.",
  },
  "prisca-grace": {
    description: "Beautiful baby girl doll created with lifelike details and charm.",
    detailedDescription:
      "A realistic newborn reborn doll with a weighted body, sweet facial expression and carefully crafted details that make her feel and look like a real baby.",
    materialsAndCare:
      "Material: added internally to help shape the body and reduce weight.\nCare: use only products made for silicone dolls to maintain quality and appearance.",
    shippingInfo: "Delivery to your doorstep.",
  },
  "sophia-peace": {
    description: "Playful little girl doll.",
    detailedDescription: "Sophia is styled in a playful, slightly awake pose.",
    materialsAndCare: "Material: silicone + armature.\nCare: handle joints gently.",
    shippingInfo: "Safe delivery.",
  },
  "emma-cleo": {
    description: "Perfect for collectors, photography, display or as a beloved companion.",
    detailedDescription:
      "This beautiful handmade silicone baby is designed with incredible realism, featuring delicate hand-painted skin tones, soft rooted hair, detailed little fingers and toes, and a peaceful sleeping expression. She weighs 8 pounds and measures 20 inches.",
    materialsAndCare: "Material: 100% platinum-cured silicone, hand-painted with premium silicone paints.\nCare: wash only with warm water and mild soap if needed.",
    shippingInfo: "Worldwide shipping with tracking available.",
  },
  "lily-ray": {
    description: "A premium silicone baby doll with realistic features and incredible skin color.",
    detailedDescription:
      "* Length: approximately 20 inches\n* Weight: approximately 6.2 pounds\n* Clothing size: fits newborn to 2-month baby clothes\n* Pacifier: magnetic\n* Includes: knitted outfit, matching bonnet, magnetic pacifier, crochet bunny toy and protective packaging",
    materialsAndCare: "Material: full-body silicone, premium hand-rooted mohair.\nCare: clean only with warm water and mild baby soap.",
    shippingInfo: "Orders are securely packaged with protective wrapping to ensure safe delivery.",
  },
  "blessing-mariam": {
    description:
      "Fall in love with this beautifully handcrafted reborn doll, featuring delicate sleeping features, soft rooted curly hair and incredibly lifelike details. Includes outfits, a blanket, pacifier, bottle, care instructions and extra gifts in the package.",
    detailedDescription:
      "Meet this stunning reborn baby, handmade with love to capture the beauty and innocence of a peacefully sleeping newborn. Every detail, from the delicately rooted dark curly hair to the hand-painted soft complexion and tiny lifelike features, has been carefully crafted to deliver an incredibly realistic experience. She measures 21 inches and weighs 8 pounds, wearing 3-month newborn clothing.",
    materialsAndCare:
      "Material: hand-painted with realistic skin tones, subtle veins, blush and tiny details.\nCare: handle gently and support the head as you would a real newborn.",
    shippingInfo: "Includes secure tracked shipping.",
  },
  "anna-clovette": {
    description:
      "A beautifully handcrafted realistic reborn doll with rooted brown hair, lifelike newborn details, a soft weighted body and a magnetic pacifier. Perfect for collectors, gifts, photography and reborn enthusiasts.",
    detailedDescription:
      "Meet this stunning realistic reborn doll, carefully handmade to capture the delicate beauty of a real newborn. Featuring beautiful rooted brown hair, softly blushed skin, tiny hand-painted details and a peaceful sleeping expression, this baby is designed to feel incredibly realistic. She weighs 6 pounds, wears newborn clothing and measures 20 inches.",
    materialsAndCare:
      "Material: soft cloth body filled with premium PP cotton and fine glass beads for realistic weight.\nCare: gently clean with a soft, damp cloth; do not soak or submerge in water.",
    shippingInfo: "Securely packaged to help prevent damage during transit.",
  },
  "seraphina-elowen": {
    description:
      "Seraphina Elowen is a stunning handcrafted reborn doll with delicately rooted dark mohair, peaceful sleeping features and beautifully hand-painted skin. Designed with incredible realism, she is a treasured keepsake for collectors and reborn enthusiasts.",
    detailedDescription:
      "Meet Seraphina Elowen, a reborn doll handmade with love to capture the sweet beauty of a sleeping newborn. Her softly blushed complexion, tiny hand-painted fingernails and toenails, realistic skin tones and premium rooted dark mohair make her incredibly realistic.",
    materialsAndCare:
      "Material: premium soft-touch vinyl head, arms and legs.\nCare: do not submerge in water unless the doll is full-body silicone.",
    shippingInfo: "Worldwide shipping available.",
  },
  "feola-mae": {
    description:
      "Length: 19 inches. Weight: 6.4 pounds. Clothing size: newborn. Diaper size: newborn.",
    detailedDescription:
      "Meet Feola Mae, a beautiful handmade realistic silicone baby with sweet dark curly hair and peaceful sleeping features. Every detail has been carefully designed to resemble a real newborn, from her soft skin texture and little fingers to her delicate facial expressions. Feola Mae is perfect for collectors, photography, display, therapeutic comfort or anyone looking for an incredibly realistic silicone baby. She arrives ready to be loved and treasured.",
    materialsAndCare:
      "Material: 100% platinum-cured full-body silicone.\nCare: lightly dust with silicone-safe baby powder to keep the silky feel.",
    shippingInfo: "Carefully packaged in a secure protective box.",
  },
  "elodie-claire": {
    description:
      "This little charmer has a peaceful sleeping expression, delicately painted features and a huggable newborn look that makes her appear to be dreaming peacefully. Perfect for collectors or anyone seeking a realistic companion.",
    detailedDescription:
      "Name: Elodie Claire\nGender: Girl\nSize: 20 inches\nWeight: 7 pounds\nAge: 3-month newborn\nHair: premium soft hand-rooted mohair, gently styled for a natural newborn look\nEyes: closed",
    materialsAndCare: "Material: soft, flexible, realistic full-body silicone.\nCare: store in a cool, dry place when not on display.",
    shippingInfo: "Worldwide shipping available.",
  },
  "grace-elise": {
    description:
      "Meet Grace Elise, a beautifully handmade full-body silicone baby designed to capture the precious look and feel of a peacefully sleeping newborn. With her soft features, chubby cheeks and realistic skin tones, Grace Elise is a touching companion for collectors, reborn enthusiasts and anyone seeking an incredibly realistic silicone baby.",
    detailedDescription:
      "* Name: Grace Elise\n* Gender: Girl\n* Length: approximately 20 inches\n* Weight: approximately 8.2 pounds\n* Material: 100% platinum-cured Ecoflex silicone\n* Body type: full-body silicone with anatomically correct details\n* Skin tone: soft newborn complexion with realistic blush and subtle veins\n* Hair: premium hand-rooted mohair\n* Brows: hand-painted for a natural look\n* Lashes: soft hand-rooted mohair\n* Eyes: closed, peaceful sleeping expression\n* Mouth: slightly open and suitable for a magnetic pacifier\n* Posability: flexible arms, legs, head and body for gentle posing",
    materialsAndCare: "Material: 100% platinum-cured Ecoflex silicone.\nCare: avoid dark fabrics that may stain the silicone.",
    shippingInfo: "Shipping and delivery worldwide.",
  },
  "lily-grace": {
    description:
      "Meet Lily Grace, a beautifully handmade full-body silicone reborn doll with incredibly lifelike details. She has soft, realistic skin, delicately hand-painted features, fine rooted hair and an adorable curled-up sleeping pose that makes her look like a peaceful newborn.",
    detailedDescription:
      "* Gender: Girl\n* Length: 19 inches\n* Weight: 6 pounds\n* Material: premium platinum full-body silicone\n* Hair: premium hand-rooted mohair\n* Eyes: closed\n* Includes: outfit, magnetic pacifier, bottle, blanket, birth certificate and care instructions.",
    materialsAndCare:
      "Material: crafted from premium platinum full-body silicone, giving the doll an incredibly soft, flexible and realistic feel.\nCare: lightly dust with silicone-safe baby powder to maintain a silky feel.",
    shippingInfo: "Fast and easy service.",
  },
  "ella-realistic-newborn": {
    name: "Ella – Realistic Newborn",
    description:
      "Meet Ella, a beautifully crafted silicone reborn baby with intricate details that mimic a real newborn.",
    detailedDescription:
      "Ella is a full-body silicone baby, meticulously sculpted and hand-painted. She has rooted mohair, realistic skin tones, subtle veins and delicate fingernails.",
    materialsAndCare:
      "Crafted from platinum-cured silicone, known for its durability and realistic feel.",
    shippingInfo:
      "All reborn babies are safely shipped in custom packaging to ensure they arrive in perfect condition.",
    attributes: {
      hairColor: "Blonde",
      eyeColor: "Blue",
      size: "19 inches",
      gender: "Girl",
    },
  },
  "liam-peaceful-sleeper": {
    name: "Liam – Peaceful Sleeper",
    description: "A calm, sleeping baby with realistic features.",
    attributes: {
      hairColor: "Brown",
      eyeColor: "Green",
      size: "20 inches",
      gender: "Boy",
    },
  },
  "lea-rei": {
    description:
      "Meet **Lea Rei**, a beautifully crafted full silicone baby doll with incredible attention to detail. From her soft, realistic skin to her delicate facial features, Lea Rei captures the charm and innocence of a real newborn.",
    detailedDescription:
      "Made from premium high-quality silicone, she has a soft, realistic touch and is perfect for collectors, artists, photography, display or gentle role play. Every detail, from her tiny fingers and toes to her sweet expression, has been carefully designed to create a truly realistic experience.",
  },

  // ── "boys" category ────────────────────────────────────────────────
  "lucas-daniel": {
    description: "A compact, adorable baby with the sweetest expression and quality craftsmanship.",
    detailedDescription:
      "Lucas is a charming baby with rosy cheeks, detailed fingers and a sweet smile. Despite his smaller size, he has all the detail of our larger babies.",
    materialsAndCare: "Quality silicone. Easy to clean and maintain.",
    shippingInfo: "Standard shipping available.",
  },
  "liam-brooks": {
    description: "Perfectly balanced for cuddling, with the softest silicone feel.",
    detailedDescription:
      "Liam is designed for cuddling with optimal weight distribution and incredibly soft silicone. His sweet expression invites endless affection.",
    materialsAndCare: "Ultra-soft silicone. Gentle handling recommended.",
    shippingInfo: "Ships within minutes.",
  },
  "kyro-james": {
    description: "A cheerful baby with expressive features and beautiful coloring.",
    detailedDescription:
      "Kyro has the most expressive painted eyes and natural rosy skin. Every feature is hand-painted by our talented artists.",
    materialsAndCare: "Hand-painted details. Clean with care.",
    shippingInfo: "Shipping with tracking available.",
  },
  "toby-mason": {
    description: "A sleeping beauty with the most realistic closed eyes.",
    detailedDescription:
      "Toby has remarkably detailed closed eyes with painted lashes. His peaceful expression and weighted body make him ideal for cuddling.",
    materialsAndCare: "MATERIAL: premium silicone. Clean gently.\n\nCARE: keep dry, avoid excess water or exposure.",
    shippingInfo: "We ship worldwide.",
  },
  "ethan-cole": {
    description: "An adorable baby with the sweetest smile and a soft expression.",
    detailedDescription: "Little boy baby doll with detailed nails and lips.",
    materialsAndCare: "MATERIALS: full-body silicone, hand-painted skin tones.\n\nCARE: handle gently, avoid stretching limbs.",
  },
  "milo-blue": {
    description: "A striking creation with realistic veins and beautiful hand-rooted hair.",
    detailedDescription: "Chubby baby boy with soft-touch skin feel.",
    materialsAndCare: "MATERIALS: soft silicone body, realistic veins, weighted design.\n\nCARE: use baby powder occasionally and keep dust-free.",
  },
  "leo-nathan": {
    description: "A wonderful creation with realistic expressions and premium quality.",
    detailedDescription: "Newborn-style baby boy with sleepy eyes and chubby cheeks.",
    materialsAndCare: "MATERIAL: full silicone body, hand-painted details, soft rooted hair.\nCARE: clean with mild soap and water, dry gently, avoid sharp objects.",
  },
  "zaylen-noah": {
    description: "A striking creation with realistic veins and beautiful hand-rooted hair.",
    detailedDescription: "A unique-style silicone baby with expressive eyes and soft hair rooting.",
    materialsAndCare: "MATERIAL: platinum silicone, mohair, sealed paint.\nCARE: avoid rough brushing; use only a soft brush.",
    shippingInfo: "Delivery as fast as possible.",
  },
  "bryan-alex": {
    description:
      "A realistic full-body silicone baby boy, with soft skin, lifelike details and a huggable feel.",
    detailedDescription:
      "This adorable full-body silicone baby boy is handmade with lifelike details, soft skin texture and realistic features. Designed for cuddles, collecting and display.",
    materialsAndCare:
      "Material: special powder used on silicone skin to reduce tackiness and maintain softness.\nCare: strong cleaners, alcohol or bleach can damage or discolor silicone.",
    shippingInfo: "Worldwide delivery.",
  },
  "liam-carter": {
    description: "A cute, realistic newborn boy doll with soft expressions.",
    detailedDescription:
      "Liam Carter has a finely sculpted face, soft vinyl-silicone blend skin and realistic newborn proportions. He is designed for emotional comfort, photography and high-end collecting.",
    materialsAndCare: "Material: glass beads or silicone granules.\nCare: do not use harsh chemicals or alcohol.",
    shippingInfo: "Secure packaging for full protection during transit.",
  },
  "logan-james": {
    description: "Soft newborn baby boy.",
    detailedDescription: "Logan has realistic newborn skin folds and a soft-touch feel.",
    materialsAndCare: "Materials: silicone, cotton filling.\nCare: avoid soaking in water.",
    shippingInfo: "Worldwide, securely packaged with protective foam.",
  },
  "loyd-gabriel": {
    description: "Full silicone baby dolls with special features and accessories.",
    detailedDescription:
      "Soft, squishy baby dolls; a full silicone baby boy that comes with an outfit, a blanket, pacifier, bottle, care instructions and sometimes extra gifts in the package.",
    materialsAndCare:
      "Material: platinum-cured silicone, pigments and silicone paints.\nCare: handle gently and support the head and limbs. Clean only with warm water and mild soap.",
    shippingInfo: "Worldwide delivery through my shipping agency.",
  },
  "micheal-gold": {
    description:
      "A complete baby boy with realistic baby features, soft and with closed eyes.",
    detailedDescription:
      "A sweet newborn sleeps peacefully on a soft cream blanket. The baby has dark hair, delicate features and wears gray and white striped pajamas with colorful accents and matching feet. A pacifier clip with a plush toy is attached to the outfit, adding an adorable touch. The baby rests comfortably with one arm raised, creating a calm and touching scene.",
    materialsAndCare:
      "Materials: made with premium platinum silicone or premium reborn vinyl, with hand-painted details, rooted or painted hair, realistic glass or acrylic eyes (if open), soft stuffed body (for reborn dolls) and carefully crafted features designed to resemble a real newborn.\nCare: do not use harsh chemicals, alcohol-based products or abrasive cleaners.",
    shippingInfo: "Worldwide shipping.",
  },
  "milo-asher": {
    description:
      "A beautifully handcrafted sleeping reborn doll with rooted hair, lifelike newborn features, a soft weighted body and a magnetic pacifier. Perfect for collectors, gifts, photography and reborn baby lovers.",
    detailedDescription:
      "Meet Asher, my sleeping reborn doll, handmade with love to capture the peaceful beauty of a newborn at rest. With delicately rooted light brown hair, softly blushed skin, tiny hand-painted details and a sweet sleeping expression, this realistic baby is designed to bring warmth and realism to any collection. Complete with a magnetic pacifier, this reborn is perfect for cuddling, display, photography, play or as a thoughtful gift.",
    materialsAndCare:
      "Material: premium soft-touch vinyl head, arms and legs.\nCare: recommended for collectors and children aged 3 and up with adult supervision.",
    shippingInfo: "Carefully packaged with protective wrapping for safe delivery.",
  },
  "carlos-logan": {
    description:
      "Length: 22 inches. Weight: 7 pounds. Baby clothing size: newborn, though some 3-month clothes also fit depending on the brand. Diaper size: newborn.",
    detailedDescription:
      "Meet Carlos, a beautifully handmade sleeping reborn doll designed to capture the peaceful charm of a newborn. With delicately painted features, soft blond hair, rosy cheeks, tiny realistic fingers and a serene sleeping expression, this baby is made to look and feel incredibly realistic. Dressed in a cozy Disney outfit and hugging a colorful plush toy, this little one is perfect for collectors, gifts, photography or anyone who loves realistic reborn dolls. The weighted body provides a comforting, realistic feel when held.",
    materialsAndCare:
      "Material: soft weighted cloth body with premium filling.\nCare: keep away from direct sunlight and excessive heat.",
    shippingInfo: "Shipped in a secure box to protect the doll during transit.",
  },
  "josh-marshal": {
    description:
      "Josh Marshal is a realistic sleeping reborn doll with soft brown hair, hand-painted details and an adorable navy striped outfit. A charming companion perfect for collectors, gifts or nursery displays.",
    detailedDescription:
      "Meet Josh Marshal, an irresistibly realistic sleeping baby with a peaceful expression and soft brown hair. His delicately painted features, gently closed eyes, rosy cheeks and tiny pursed lips create the look of a newborn dreaming peacefully. Dressed in a classic navy knitted top with striped pants and hugging his favorite teddy bears, Josh brings warmth and comfort to any nursery or collection. Every detail is carefully crafted to capture the beauty of a real newborn, making him a wonderful companion for collecting, display, photography or heartfelt gifts.",
    materialsAndCare:
      "Material: high-quality acrylic paint with a protective finish.\nCare: brush the hair gently with a soft baby brush if needed.",
    shippingInfo: "Tracking information is provided once your order has shipped.",
  },
  "logan-vans": {
    description:
      "Meet Logan Vans, an incredibly realistic full-body silicone reborn baby, handmade with remarkable attention to detail. From his delicate facial features and tiny fingers to his soft curly hair and peaceful sleeping expression, he is designed to capture the beauty of a real newborn. Reborn dolls are handmade to resemble real babies with highly realistic painting, weighting and detail, plus flexible arms and legs for natural posing.",
    detailedDescription:
      "* Name: Logan Vans\n* Gender: Boy\n* Length: 18 inches\n* Weight: 5.7 pounds\n* Material: premium eco-friendly platinum silicone\n* Body: full-body silicone\n* Hair: premium hand-rooted mohair\n* Eyes: closed\n* Skin tone: hand-painted with realistic newborn mottling, veins and blush",
    materialsAndCare:
      "Material: professionally hand-painted with non-toxic, permanent silicone pigments.\nCare: avoid sharp objects and dark clothing that may stain the silicone.",
    shippingInfo: "Worldwide shipping available.",
  },

  // ── "accessories" category ─────────────────────────────────────────
  "hand-knit-newborn-blanket": {
    name: "Hand-Knitted Newborn Blanket",
    description:
      "A soft hand-knitted blanket in delicate pastel tones, perfect for your reborn baby.",
    detailedDescription:
      "Crafted from premium cotton yarn, this blanket features a classic cable knit pattern in soft pastel tones. Ideal for photo sessions and display.",
  },
  "reborn-baby-bottle-set": {
    name: "Reborn Doll Bottle Set",
    description:
      "A set of realistic miniature bottles for displaying with your reborn doll.",
    detailedDescription:
      "Three finely detailed miniature bottles in clear, pink and blue. Filled with non-toxic resin for a realistic weighted feel.",
  },
};