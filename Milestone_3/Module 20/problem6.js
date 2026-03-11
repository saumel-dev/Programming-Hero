function newPrice(currentPrice, discount) {
  if (Number.isFinite(currentPrice) && Number.isFinite(discount) && discount >= 0 && discount <= 100) {
    let res = currentPrice - (currentPrice * discount) / 100;
    return res.toFixed(3);
  }
  else {
    return 'Invalid';
  }
}

function validOtp(otp) {
  if (typeof otp != 'string') {
    return 'Invalid';
  }
  else if (typeof otp == 'string' && otp.startsWith('ph-') && otp.length == 8) {
    return true;
  }
  else return false;
}

function finalScore(omr) {
  if (typeof omr != 'object') {
    return 'Invalid';
  }
  let score = omr.right + omr.wrong + omr.skip;
  if (score != 100) {
    return 'Invalid';
  }
  let res = 0;
  res = Math.round(res + omr.right - (0.5 * omr.wrong));
  return res;
}

function gonoVote(array) {
  if (!Array.isArray(array)) return 'Invalid';
  let ha = 0, na = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "ha") ha++;
    else if (array[i] == "na") na++;
  }
  if (ha > na) return true;
  else if (na > ha) return false;
  else return 'equal';
}

function analyzeText(str) {
    if (typeof str != 'string' || str.length == 0 || str.trim() == "") {
        return 'Invalid';
    }
    let s = str.split(" ");
    let l_word = s[0];
    for (let word of s) {
        if (word.length > l_word.length) {
            l_word = word;
        }
    }
    const tot_len = str.split(" ").join("");

    const output = {
        longwords: l_word,
        token: tot_len.length
    }
    return output;
}