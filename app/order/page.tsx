"use client";

import { useState, useEffect, FormEvent } from "react";
import { useCart } from "@/lib/context/cart-context";
import { CartItemComponent } from "@/components/cart/cart-item";
import { FormInput, FormSelect, RadioOption } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { FaInfoCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

const countries = [
  { value: "", label: "Selecciona un país" },
  { value: "US", label: "Estados Unidos" },
  { value: "CA", label: "Canadá" },
  { value: "GB", label: "Reino Unido" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "Nueva Zelanda" },
  { value: "DE", label: "Alemania" },
  { value: "FR", label: "Francia" },
  { value: "IT", label: "Italia" },
  { value: "ES", label: "España" },
  { value: "OTHER", label: "Otro" },
];

export default function OrderPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherPayment, setShowOtherPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);

  const subtotal = getTotal();
  const total = subtotal;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    paymentMethod: "",
    customPaymentMethod: "",
    customCountry: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const res = await fetch("/api/admin/payment-methods");
        if (res.ok) {
          const data = await res.json();
          setPaymentMethods(data.filter((m: any) => m.isActive));
        }
      } catch (error) {
        console.error("Failed to fetch payment methods:", error);
      }
    };

    fetchPaymentMethods();
  }, []);

  if (items.length === 0) {
    return (
      <div className="w-full max-w-viewport mx-auto px-4 text-center py-12">
        <h1 className="mb-4">Tu Carrito está Vacío</h1>
        <p className="mb-8 text-gray-500">
          Añade artículos a tu carrito antes de hacer un pedido.
        </p>
        <Button href="/shop">Seguir Comprando</Button>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Show/hide other payment method field
    if (name === "paymentMethod") {
      setShowOtherPayment(value === "other");
      if (value !== "other") {
        setFormData((prev) => ({ ...prev, customPaymentMethod: "" }));
      }
    }

    // Clear custom country if country changes from OTHER
    if (name === "country" && value !== "OTHER") {
      setFormData((prev) => ({ ...prev, customCountry: "" }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "El nombre completo es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El correo electrónico es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "El correo electrónico no es válido";
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "La dirección es obligatoria";
    if (!formData.city.trim()) newErrors.city = "La ciudad es obligatoria";
    if (!formData.zipCode.trim()) newErrors.zipCode = "El código postal es obligatorio";
    if (!formData.country) newErrors.country = "El país es obligatorio";
    if (formData.country === "OTHER" && !formData.customCountry.trim())
      newErrors.customCountry = "Especifica tu país";

    if (!formData.paymentMethod)
      newErrors.paymentMethod = "El método de pago es obligatorio";
    if (formData.paymentMethod === "other" && !formData.customPaymentMethod.trim())
      newErrors.customPaymentMethod = "Especifica el método de pago";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare order data
      const orderData = {
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          attributes: item.attributes,
        })),
        customer: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || undefined,
        },
        shipping: {
          address: formData.streetAddress,
          city: formData.city,
          zipCode: formData.zipCode,
          state: formData.state || undefined,
          country: formData.country === "OTHER" ? formData.customCountry : formData.country,
        },
        payment: {
          preferredMethod:
            formData.paymentMethod === "other"
              ? formData.customPaymentMethod
              : formData.paymentMethod,
          customMethod:
            formData.paymentMethod === "other"
              ? formData.customPaymentMethod
              : undefined,
          totalAmount: total,
        },
      };

      // Submit order
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "No se pudo enviar el pedido");
      }

      const result = await response.json();

      // Redirect to confirmation
      router.push(`/order/${result.orderReference}`);
    } catch (error: any) {
      console.error("Order submission error:", error);
      toast.error(error.message || "Hubo un error al enviar tu pedido. Inténtalo de nuevo.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-viewport mx-auto px-4 pt-4 md:pt-8">
      <h1 className="mb-6 md:mb-12 text-2xl md:text-4xl font-serif">Tu Solicitud de Pedido</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            {/* Cart Items */}
            <div className="mb-12">
              <h2 className="mb-4 md:mb-8 text-lg md:text-2xl font-serif">1. Tus Artículos</h2>
              <div className="space-y-0">
                {items.map((item) => (
                  <CartItemComponent key={item.id} item={item} />
                ))}
              </div>
              <div className="text-right font-medium pt-4 border-t border-gray-300 mt-4">
                <p className="mb-0">Subtotal: {formatPrice(subtotal)}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 md:mb-8 text-lg md:text-2xl font-serif">2. Información de Contacto</h2>
              <FormInput
                id="fullName"
                name="fullName"
                label="Nombre Completo"
                type="text"
                placeholder="María García"
                required
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
              <FormInput
                id="email"
                name="email"
                label="Correo Electrónico"
                type="email"
                placeholder="maria.garcia@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <FormInput
                id="phone"
                name="phone"
                label="Número de Teléfono"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>

            {/* Shipping Address */}
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 md:mb-8 text-lg md:text-2xl font-serif">3. Dirección de Envío</h2>
              <FormInput
                id="streetAddress"
                name="streetAddress"
                label="Dirección"
                type="text"
                placeholder="Calle Principal 123"
                required
                value={formData.streetAddress}
                onChange={handleChange}
                error={errors.streetAddress}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormInput
                  id="city"
                  name="city"
                  label="Ciudad"
                  type="text"
                  placeholder="Madrid"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                />
                <FormInput
                  id="state"
                  name="state"
                  label="Estado / Provincia"
                  type="text"
                  placeholder="Provincia"
                  value={formData.state}
                  onChange={handleChange}
                  error={errors.state}
                />
                <FormInput
                  id="zipCode"
                  name="zipCode"
                  label="Código Postal"
                  type="text"
                  placeholder="28001"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  error={errors.zipCode}
                />
              </div>
              <FormSelect
                id="country"
                name="country"
                label="País"
                required
                options={countries}
                value={formData.country}
                onChange={handleChange}
                error={errors.country}
              />
              {formData.country === "OTHER" && (
                <div className="mt-4">
                  <FormInput
                    id="customCountry"
                    name="customCountry"
                    label="Especifica el País"
                    type="text"
                    placeholder="Escribe tu país"
                    required
                    value={formData.customCountry}
                    onChange={handleChange}
                    error={errors.customCountry}
                  />
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 text-lg md:text-2xl font-serif">4. Método de Pago Preferido</h2>
              <p className="text-sm text-gray-500 mb-6">
                Te contactaremos para organizar el pago. Indica tu
                método preferido a continuación.
              </p>

              {paymentMethods.map((method) => (
                <div key={method._id} className="flex items-center mb-4">
                  <input
                    type="radio"
                    id={method.name}
                    name="paymentMethod"
                    value={method.name}
                    checked={formData.paymentMethod === method.name}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 accent-purple-600"
                  />
                  <label style={{ display: "flex" }} htmlFor={method.name} className="ml-3 flex-row items-center gap-3 cursor-pointer">
                    {method.logoUrl && (
                      <div className="w-8 h-8 relative rounded-md overflow-hidden border border-gray-200">
                        <Image src={method.logoUrl} alt={method.name} fill className="object-cover" />
                      </div>
                    )}
                    <div className="text-gray-900 font-medium font-semibold">{method.name}</div>
                  </label>
                </div>
              ))}

              <RadioOption
                id="otherPayment"
                name="paymentMethod"
                value="other"
                label="Otro (especificar):"
                checked={formData.paymentMethod === "other"}
                onChange={handleChange}
              />

              {showOtherPayment && (
                <div className="ml-6 mt-2">
                  <FormInput
                    id="customPaymentMethod"
                    name="customPaymentMethod"
                    label=""
                    type="text"
                    placeholder="p. ej., Wise, Zelle, etc."
                    required={showOtherPayment}
                    value={formData.customPaymentMethod}
                    onChange={handleChange}
                    error={errors.customPaymentMethod}
                  />
                </div>
              )}

              {errors.paymentMethod && (
                <p className="text-sm text-red-600 mt-2 mb-0">
                  {errors.paymentMethod}
                </p>
              )}

              <div className="mt-6 p-4 bg-gray-100 border border-gray-300">
                <p className="text-sm text-black mb-0 flex items-start">
                  <FaInfoCircle className="mr-2 mt-0.5 flex-shrink-0" />
                  Al hacer clic en &quot;Enviar Solicitud de Pedido&quot;, inicias un pedido y
                  te contactaremos con los datos de pago. No se realizará ningún
                  pago inmediato.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-purple-50 p-6 border border-purple-200 sticky top-6 rounded-xl shadow-sm">
              <h2 className="mb-8">Resumen del Pedido</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Envío</span>
                  <span>Por Confirmar</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mt-4">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total (Sin Envío)</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 md:mt-8 h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl text-sm md:text-lg font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitud de Pedido"}
              </Button>

              {/* Trust Badges */}
              <div className="flex justify-center items-center gap-6 mt-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="flex flex-col items-center gap-1">
                  <div className="relative h-8 w-24">
                    <Image
                      src="/assets/fortinet logo.png"
                      alt="Fortinet Secured"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="relative h-8 w-24">
                    <Image
                      src="/assets/cloudflare logo.png"
                      alt="Cloudflare Protected"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>


    </div>
  );
}

