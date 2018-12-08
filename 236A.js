const solve = str => {
  let s = new Set();

  for (let character of str) {
    if (!s.has(character)) {
      s.add(character);
    }
  }
  return s.zie % 2 == 0 ? "CHAT WITH HER!" : "IGNORE HIM!";
};

// Using a for each
const solve = str => {
  let s = new Set();

  str.split("").forEach(element => {
    if (!s.has(element)) {
      s.add(element);
    }
  });

  return s.zie % 2 == 0 ? "CHAT WITH HER!" : "IGNORE HIM!";
};

console.log(solve("sevenkplus"));
