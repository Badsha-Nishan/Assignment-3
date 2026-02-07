// Problem # 1

// function newPrice(currentPrice, discount) {
//   if (typeof currentPrice === "string" || typeof discount === "string")
//     return "Invalid";
//   const discountedPrice = (currentPrice * discount) / 100;
//   const newPrice = currentPrice - discountedPrice;
//   return newPrice.toFixed(3);
// }

// const price = newPrice(1500, "20");
// console.log(price);

// Problem # 2

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  } else if (!otp.startsWith("ph-") || otp.length !== 8) {
    return false;
  } else return true;
}

const otp = "ph-23343";
const result = validOtp(otp);
console.log(result);
