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