const solve = (k, n, w) => {
  const wantToBuy = w;
  const costOfFirstBanana = k;
  const initialDollars = n;

  let totalCost = 0;
  for (let i = 1; i <= wantToBuy; i++) {
    totalCost += k * i;
  }

  return totalCost - initialDollars;
};

const k = 3;
const n = 17;
const w = 4;

console.log(solve(k, n, w));
