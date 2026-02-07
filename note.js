//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount > 100 ||
    discount < 0
  ) {
    return "Invalid";
  }
  const discountedPrice = (currentPrice * discount) / 100;
  const newPrice = currentPrice - discountedPrice;
  return newPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string" || otp.trim() === "") {
    return "Invalid";
  } else if (!otp.startsWith("ph-") || otp.length !== 8) {
    return false;
  } else return true;
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  if (
    typeof omr !== "object" ||
    omr === null ||
    typeof omr.right !== "number" ||
    typeof omr.wrong !== "number" ||
    typeof omr.skip !== "number"
  ) {
    return "Invalid";
  }
  if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  }
  const score = omr.right - omr.wrong / 2;
  return Math.round(score);
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Invalid";
  }
  let ha = 0;
  let na = 0;
  for (const item of array) {
    if (item === "ha") {
      ha++;
    } else if (item === "na") {
      na++;
    }
  }
  if (ha === na) {
    return "equal";
  } else if (ha > na) {
    return true;
  } else return false;
}

//Problem-05: Text Analyzer for an AI Company
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
