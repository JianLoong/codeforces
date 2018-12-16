const solve = s => {
  let target = "hello".split("");

  for (let character of s) {
    if (character === target[0]) {
      target.shift();
    }
  }

  return target.length == 0 ? "YES" : "NO";
};

const s = "hlelo";

console.log(solve(s));
