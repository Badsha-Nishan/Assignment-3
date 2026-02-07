function newPrice(currentPrice, discount) {
  if (typeof currentPrice === "string" || typeof discount === "string")
    return "Invalid";
  const discountedPrice = (currentPrice * discount) / 100;
  const newPrice = currentPrice - discountedPrice;
  return newPrice.toFixed(3);
}

const price = newPrice(1500, "20");
console.log(price);
