const solve = s => {
  const set = new Set();
  s.split("").forEach(element => {
    set.add(element.toLowerCase());
  });

  return set.size == 26 ? true : false;
};

const s = "TheQuickBrownFoxJumpsOverTheLazyDog";

console.log(solve(s));
