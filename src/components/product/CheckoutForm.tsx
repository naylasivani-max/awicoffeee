import React, { useMemo, useRef, useState } from 'react';
import { CheckCircle2Icon, ExternalLinkIcon } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { buildOrderMessage, buildWhatsAppUrl } from '../../utils/whatsapp';

interface FormErrors {
  name?: string;
  address?: string;
}

function validate(name: string, address: string): FormErrors {
  const errors: FormErrors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (address.trim().length < 10)
  errors.address = 'Please enter a complete delivery address, including street, city, and postal code.';
  return errors;
}

export function CheckoutForm() {
  const { lines, total, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLTextAreaElement>(null);

  const message = useMemo(
    () =>
    buildOrderMessage({
      customerName: name || '[Your name]',
      deliveryAddress: address || '[Your delivery address]',
      lines: lines.map((l) => ({ name: l.product.name, price: l.product.price, quantity: l.quantity, subtotal: l.subtotal })),
      total
    }),
    [name, address, lines, total]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(name, address);
    setErrors(nextErrors);
    if (nextErrors.name) return nameRef.current?.focus();
    if (nextErrors.address) return addressRef.current?.focus();
    const url = buildWhatsAppUrl(message);
    setSentUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (sentUrl) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-6">
        <CheckCircle2Icon className="h-7 w-7 text-sage-ink" aria-hidden="true" />
        <h3 className="mt-3 font-display text-2xl">Your order message is ready</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          WhatsApp should have opened with your order filled in. <strong className="text-ink">Press send</strong> to submit it — your
          order isn’t placed until AWICOFFEE receives the message and replies to confirm availability, shipping, and payment.
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Open WhatsApp again
            <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              clearCart();
              setSentUrl(null);
            }}>
            
            I’ve sent it — clear cart
          </button>
        </div>
      </div>);

  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="checkout-name" className="text-sm font-medium">
          Full name <span aria-hidden="true" className="text-muted">*</span>
        </label>
        <input
          ref={nameRef}
          id="checkout-name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
          }}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'checkout-name-error' : undefined}
          className={`input mt-1.5 ${errors.name ? 'border-[#B5483F]' : ''}`}
          placeholder="e.g. Budi Santoso" />
        
        {errors.name &&
        <p id="checkout-name-error" className="mt-1.5 text-sm text-[#B5483F] dark:text-brand-rose">
            {errors.name}
          </p>
        }
      </div>
      <div>
        <label htmlFor="checkout-address" className="text-sm font-medium">
          Delivery address <span aria-hidden="true" className="text-muted">*</span>
        </label>
        <textarea
          ref={addressRef}
          id="checkout-address"
          autoComplete="street-address"
          required
          rows={3}
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            if (errors.address) setErrors((er) => ({ ...er, address: undefined }));
          }}
          aria-invalid={Boolean(errors.address)}
          aria-describedby={errors.address ? 'checkout-address-error' : undefined}
          className={`input mt-1.5 resize-none ${errors.address ? 'border-[#B5483F]' : ''}`}
          placeholder="Street, number, district, city, postal code" />
        
        {errors.address &&
        <p id="checkout-address-error" className="mt-1.5 text-sm text-[#B5483F] dark:text-brand-rose">
            {errors.address}
          </p>
        }
      </div>

      <details className="group rounded-xl border border-line bg-surface">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium marker:hidden">
          Preview your WhatsApp message
        </summary>
        <pre className="max-h-64 overflow-auto whitespace-pre-wrap border-t border-line px-4 py-3 font-sans text-xs leading-relaxed text-muted">
          {message}
        </pre>
      </details>

      <button type="submit" className="btn btn-sage w-full">
        Send order via WhatsApp
      </button>
      <p className="text-xs leading-relaxed text-muted">
        This opens WhatsApp with your order pre-filled. No payment is taken here — AWICOFFEE will reply to confirm
        availability, shipping costs, and payment arrangements.
      </p>
    </form>);

}