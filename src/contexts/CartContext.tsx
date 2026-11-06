import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getProductById } from '../data/products';
import { Product } from '../types/product';

interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartLine {
  product: Product;
  quantity: number;
  subtotal: number;
}

interface CartContextValue {
  lines: CartLine[];
  itemCount: number;
  total: number;
  addItem: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const MAX_QUANTITY = 99;
const STORAGE_KEY = 'awicoffee-cart';
const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (i): i is CartItem =>
      typeof i === 'object' && i !== null && typeof i.productId === 'string' && typeof i.quantity === 'number'
    );
  } catch {
    return [];
  }
}

const clamp = (q: number) => Math.max(1, Math.min(MAX_QUANTITY, Math.round(q)));

export function CartProvider({ children }: {children: React.ReactNode;}) {
  const [items, setItems] = useState<CartItem[]>(loadCart);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {

      // storage unavailable
    }}, [items]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
        i.productId === productId ? { ...i, quantity: clamp(i.quantity + quantity) } : i
        );
      }
      return [...prev, { productId, quantity: clamp(quantity) }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) => prev.map((i) => i.productId === productId ? { ...i, quantity: clamp(quantity) } : i));
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const lines = useMemo<CartLine[]>(
    () =>
    items.flatMap((item) => {
      const product = getProductById(item.productId);
      return product ? [{ product, quantity: item.quantity, subtotal: product.price * item.quantity }] : [];
    }),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      itemCount: lines.reduce((n, l) => n + l.quantity, 0),
      total: lines.reduce((n, l) => n + l.subtotal, 0),
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      isDrawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false)
    }),
    [lines, addItem, updateQuantity, removeItem, clearCart, isDrawerOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}