function newPrice(currentPrice, discount) {
  if (Number.isFinite(currentPrice) && Number.isFinite(discount) && discount >= 0 && discount <= 100) {
    let res = currentPrice - (currentPrice * discount) / 100;
    return res.toFixed(3);
  }
  else {
    return 'Invalid';
  }
}