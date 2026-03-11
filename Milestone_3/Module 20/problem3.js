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