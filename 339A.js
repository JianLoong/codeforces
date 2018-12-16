const solve = s => {
  let arr = s.split("+");
  let result = arr.sort((a, b) => a - b);

  return result.join("+");
};

const input = "3+2+1";

console.log(solve(input));
