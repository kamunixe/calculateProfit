function calculateProfit(amount, percent, period){
  let total = amount;

  for( let year = 0; year <= period; year++){
    total += total * percent / 100;
  }
  return total - amount;
}