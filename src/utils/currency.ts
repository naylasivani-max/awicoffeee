/** Formats a number using Indonesian rupiah conventions, e.g. 45000 → "Rp45.000". */
export function formatRupiah(value: number): string {
  return `Rp${Math.round(value).toLocaleString('id-ID')}`;
}