const solve = s => {
  let zeroIndex = [];
  let oneIndex = [];
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroIndex.push(i);
    } else {
      oneIndex.push(i);
    }
  }
  let result = 0;
  let resultOne = 0;

  for (let i = zeroIndex.length - 1; i > 0; i--) {
    result += zeroIndex[i] - zeroIndex[i - 1] - 1;
  }

  for (let i = oneIndex.length - 1; i > 0; i--) {
    resultOne += oneIndex[i] - oneIndex[i - 1] - 1;
  }

  console.log(zeroIndex);

  return result >= 7 || resultOne >= 7 ? "YES" : "NO";
};

const situation = "00000001001";

console.log(solve(situation));
