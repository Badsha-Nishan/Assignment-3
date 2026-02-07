// Problem # 1

// function newPrice(currentPrice, discount) {
//   if (
//     typeof currentPrice !== "number" ||
//     typeof discount !== "number" ||
//     discount > 100 ||
//     discount < 0
//   ) {
//     return "Invalid";
//   }
//   const discountedPrice = (currentPrice * discount) / 100;
//   const newPrice = currentPrice - discountedPrice;
//   return newPrice.toFixed(3);
// }

// const price = newPrice(100, 12);
// console.log(price);

// Problem # 2

// function validOtp(otp) {
//   if (typeof otp !== "string" || otp.trim() === "") {
//     return "Invalid";
//   } else if (!otp.startsWith("ph-") || otp.length !== 8) {
//     return false;
//   } else return true;
// }

// const otp = "ph-25345";
// const result = validOtp(otp);
// console.log(result);

// Problem # 3

// function finalScore(omr) {
//   if (
//     typeof omr !== "object" ||
//     omr === null ||
//     typeof omr.right !== "number" ||
//     typeof omr.wrong !== "number" ||
//     typeof omr.skip !== "number"
//   ) {
//     return "Invalid";
//   }
//   if (omr.right + omr.wrong + omr.skip !== 100) {
//     return "Invalid";
//   }
//   const score = omr.right - omr.wrong / 2;
//   return Math.round(score);
// }

// const obj = {
//   right: 40,
//   wrong: 30,
//   skip: 30,
// };
// const result = finalScore(obj);
// console.log(result);

// Problem # 4

// function gonoVote(array) {
//   if (!Array.isArray(array) || array.length === 0) {
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
// const arr = [];
// const result = gonoVote(arr);
// console.log(result);

// Problem # 5

function analyzeText(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }
  const newStr = str.split(" ");
  let longwords = newStr[0];
  let token = 0;
  for (const val of newStr) {
    const sumOfLength = val.length;
    token += sumOfLength;
    if (longwords.length < val.length) {
      longwords = val;
    }
  }
  return {
    longwords,
    token,
  };
}

const str = "I am Learning JavaScrip with Programming Hero.";
const result = analyzeText(str);
console.log(result);
