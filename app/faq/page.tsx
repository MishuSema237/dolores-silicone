"use client";

import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
    _id: string;
    question: string;
    answer: string;
}

export default function FAQPage() {
    const faqs: FAQItem[] = [
        {
            _id: "1",
            question: "¿Qué es un Bebé Reborn?",
            answer: "Un Bebé Reborn es una muñeca de piel fabricada que ha sido transformada por un artista para parecerse a un bebé humano con el máximo realismo posible. El proceso de crear una muñeca reborn se denomina reborning y los artistas se denominan reborners."
        },
        {
            _id: "2",
            question: "¿Son estas muñecas adecuadas para niños?",
            answer: "Los bebés reborn son principalmente artículos de colección y piezas de arte. Aunque pueden ser disfrutados por niños mayores responsables, no se recomiendan para niños pequeños como muñecas de juego debido a sus delicadas características, cuerpos con peso y el potencial de daño si se manipulan bruscamente."
        },
        {
            _id: "3",
            question: "¿Cómo cuido a mi Bebé Reborn?",
            answer: "Los bebés reborn deben tratarse como bebés reales. Sostén su cabeza al levantarlos, evita la luz solar directa y el calor extremo, y mantenlos alejados de las mascotas. Quita el polvo suavemente con un cepillo suave y evita mojar el cuerpo de tela."
        },
        {
            _id: "4",
            question: "¿Puedo lavar a mi Bebé Reborn?",
            answer: "No, nunca debes sumergir tu bebé reborn en agua, especialmente si tiene un cuerpo de tela. Si las partes de vinilo se ensucian, puedes limpiarlas suavemente con un paño húmedo, pero evita productos químicos agresivos o toallitas para bebés que pueden dañar la pintura."
        },
        {
            _id: "5",
            question: "¿Qué materiales se utilizan para hacerlos?",
            answer: "Nuestros bebés se crean típicamente con kits de vinilo o silicona de alta calidad. Se pintan con múltiples capas de pinturas de fijado por calor para lograr tonos de piel realistas. Los cuerpos suelen ser de tela suave rellena con cuentas de vidrio y relleno de poliéster para dar peso y abrazabilidad."
        },
        {
            _id: "6",
            question: "¿Vienen con certificado de nacimiento?",
            answer: "Sí, cada bebé de Dolores Silicone viene con un hermoso certificado de nacimiento y un certificado de autenticidad, haciendo oficial tu adopción."
        },
        {
            _id: "7",
            question: "¿Puedo cambiarles la ropa?",
            answer: "¡Por supuesto! Una de las alegrías de tener un reborn es vestirlos. La mayoría de nuestros bebés caben en ropa estándar de bebés reales. La talla (Prematuro, Recién Nacido, 0-3 meses) se especificará en la descripción del bebé."
        },
        {
            _id: "8",
            question: "¿Ofrecen pedidos personalizados?",
            answer: "Sí, ¡aceptamos pedidos personalizados! Si tienes una escultura o un aspecto específico en mente, contáctanos. Podemos trabajar juntos para crear el bebé de tus sueños con tu color de cabello, color de ojos y peso preferidos."
        },
        {
            _id: "9",
            question: "¿Se puede peinar el cabello?",
            answer: "Si tu bebé tiene mohair implantado, se puede peinar suavemente con un cepillo suave para bebés y un poco de agua o acondicionador sin enjuague. El cabello pintado no requiere peinado, pero se ve increíblemente realista y no requiere mantenimiento."
        },
        {
            _id: "10",
            question: "¿Cómo se les da el peso a los bebés?",
            answer: "Usamos finas cuentas de vidrio y relleno de poliéster de alta calidad para dar peso a nuestros bebés. Esto les da una sensación realista de 'peso muerto', de modo que se acomodan y reposan en tus brazos como un bebé dormido real."
        },
        {
            _id: "11",
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos pagos seguros a través de Zelle, Cash App y Apple Pay. Priorizamos las transacciones seguras para garantizar tu tranquilidad."
        },
        {
            _id: "12",
            question: "¿Ofrecen apartados o planes de pago?",
            answer: "Entendemos que un reborn es una inversión especial. Contáctanos directamente para hablar sobre posibles acuerdos de pago flexibles para los bebés de mayor precio."
        },
        {
            _id: "13",
            question: "¿Cuánto tarda el envío?",
            answer: "Una vez procesado tu pedido, el envío suele tardar de 3 a 7 días laborables dependiendo del destino. Nos aseguramos de que cada bebé esté empacado de forma segura para su viaje a casa."
        },
        {
            _id: "14",
            question: "¿Hacen envíos internacionales?",
            answer: "Sí, podemos enviar nuestros bebés a hogares amorosos en todo el mundo. Los costos de envío y los tiempos de entrega variarán según el país de destino."
        },
        {
            _id: "15",
            question: "¿Cuál es su política de devoluciones?",
            answer: "Debido a la naturaleza personalizada y artística de nuestras creaciones, todas las ventas suelen ser definitivas. Sin embargo, queremos que estés feliz con tu adopción. Si hay un problema con tu pedido a su llegada, contáctanos inmediatamente para poder resolverlo."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const isLoading = false;

    /*
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await fetch("/api/admin/faqs");
                if (res.ok) {
                    const data = await res.json();
                    // Filter only active FAQs if the API returns all, or rely on API to filter
                    // Assuming API returns all for admin, we might need to filter here or update API
                    // For now, let's filter client-side if 'active' property exists, or just show all
                    setFaqs(data.filter((f: any) => f.active !== false));
                }
            } catch (error) {
                console.error("Failed to fetch FAQs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFaqs();
    }, []);
    */

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
                    Preguntas Frecuentes
                </h1>
                <p className="text-gray-500 text-lg">
                    Encuentra respuestas a las preguntas más comunes sobre nuestros Bebés Reborn.
                </p>
            </div>

            <div className="space-y-4">
                {isLoading ? (
                    <p className="text-center text-gray-500">Cargando preguntas frecuentes...</p>
                ) : faqs.length > 0 ? (
                    faqs.map((faq, index) => (
                        <div
                            key={faq._id}
                            className="border border-purple-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-purple-50/50 transition-colors"
                            >
                                <span className="font-medium text-lg text-gray-800">
                                    {faq.question}
                                </span>
                                <span className="text-purple-500 ml-4">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-purple-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No hay preguntas frecuentes disponibles por el momento.</p>
                )}
            </div>
        </div>
    );
}
