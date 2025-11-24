"use client";

import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
    _id: string;
    question: string;
    answer: string;
}

export default function FAQPage() {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

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

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-500 text-lg">
                    Find answers to common questions about our Reborn Babies.
                </p>
            </div>

            <div className="space-y-4">
                {isLoading ? (
                    <p className="text-center text-gray-500">Loading FAQs...</p>
                ) : faqs.length > 0 ? (
                    faqs.map((faq, index) => (
                        <div
                            key={faq._id}
                            className="border border-pink-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-pink-50/50 transition-colors"
                            >
                                <span className="font-medium text-lg text-gray-800">
                                    {faq.question}
                                </span>
                                <span className="text-pink-500 ml-4">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-pink-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No FAQs available at the moment.</p>
                )}
            </div>
        </div>
    );
}
