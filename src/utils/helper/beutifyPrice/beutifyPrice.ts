export const beautifyPrice = (price: number) => {
  const priceStr = price.toString();
  if (priceStr.length > 4 && priceStr.length % 2) {
    return `${priceStr.slice(0, 2)} ${priceStr.slice(2, priceStr.length)}`;
  }
  return `${priceStr.slice(0, 3)} ${priceStr.slice(3, priceStr.length)}`;
};
