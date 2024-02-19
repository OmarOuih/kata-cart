export const calculateTvaTax = (price: number, category: string): number => {
  let taxRate = 0;

  switch (category) {
    case 'Food':
    case 'Medicine':
      taxRate = 0;
      break;
    case 'Books':
      taxRate = 10;
      break;
    default:
      taxRate = 20;
      break;
  }

  return roundToNearest5Cents((price * taxRate) / 100);
};

export const calculateImportTax = (
  price: number,
  isImported: boolean
): number => {
  const importTaxRate = isImported ? 5 : 0;
  return roundToNearest5Cents((price * importTaxRate) / 100);
};

export const roundToNearest5Cents = (price: number): number => {
  return Math.ceil(price * 20) / 20;
};
