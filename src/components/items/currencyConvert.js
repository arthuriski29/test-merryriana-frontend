export function currencyConverter(curr) {
  let formatted = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
  }).format(curr);
  
  formatted = formatted.replace('Rp', 'Rp ') + ',-';

  return formatted;
}