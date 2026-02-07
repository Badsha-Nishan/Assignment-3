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

// function finalScore(omr) {
//   if (omr.right + omr.wrong + omr.skip !== 100) {
//     return "Invalid";
//   }
//   const pointSubtract = omr.right - omr.wrong / 2;
//   return Math.round(pointSubtract);
// }

// const obj = {
//   right: 50,
//   wrong: 10,
//   skip: 40,
// };
// const result = finalScore(obj);
// console.log(result);

// Problem # 4

// function gonoVote(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }
//   let ha = 0;
//   let na = 0;
//   for (const item of array) {
//     if (item === "ha") {
//       ha++;
//     } else if (item === "na") {
//       na++;
//     }
//   }
//   if (ha === na) {
//     return "equal";
//   } else if (ha > na) {
//     return true;
//   } else return false;
// }
// const arr = ["ha", "na", "na", "na"];
// const result = gonoVote(arr);
// console.log(result);

// Problem # 5

function analyzeText(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }
  const newStr = str.split(" ");
  let long = newStr[0];
  let sum = 0;
  for (const val of newStr) {
    const sumOfLength = val.length;
    sum += sumOfLength;
    if (long.length < val.length) {
      long = val;
    }
  }
  return {
    longwords: long,
    token: sum,
  };
}

const str = "I am Learning JavaScrip with Programming Hero.";
const result = analyzeText(str);
console.log(result);
