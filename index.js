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

// function validOtp(otp) {
//   if (typeof otp !== "string") {
//     return "Invalid";
//   } else if (!otp.startsWith("ph-") || otp.length !== 8) {
//     return false;
//   } else return true;
// }

// const otp = "ph-23343";
// const result = validOtp(otp);
// console.log(result);

// Problem # 3

function finalScore(omr) {
  if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  }
  const pointSubtract = omr.right - omr.wrong / 2;
  return Math.round(pointSubtract);
}

const obj = {
  right: 50,
  wrong: 10,
  skip: 40,
};
const result = finalScore(obj);
console.log(result);
