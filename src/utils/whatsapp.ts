import { WHATSAPP } from '../data/site';
import { formatRupiah } from './currency';

export interface OrderLine {
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface OrderDetails {
  customerName: string;
  deliveryAddress: string;
  lines: OrderLine[];
  total: number;
}

export function buildOrderMessage(order: OrderDetails): string {
  const items = order.lines.
  map((line, index) =>
  [
  `${index + 1}. Product Name: ${line.name}`,
  `Product Price: ${formatRupiah(line.price)}`,
  `Quantity: ${line.quantity}`,
  `Subtotal: ${formatRupiah(line.subtotal)}`].
  join('\n')
  ).
  join('\n\n');

  return [
  'AWICOFFEE ORDER',
  '',
  `Customer Name: ${order.customerName.trim()}`,
  `Delivery Address: ${order.deliveryAddress.trim()}`,
  '',
  'Order Details:',
  items,
  '',
  `Total Order: ${formatRupiah(order.total)}`,
  '',
  'Please confirm product availability, shipping costs, and payment arrangements.'].
  join('\n');
}

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP.url}?text=${encodeURIComponent(message)}`;
}