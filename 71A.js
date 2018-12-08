const solve = words => {
  const results = [];
  for (word of words) {
    let result = "";
    if (word.length >= 10) {
      result = word[0] + "" + (word.length - 2) + "" + word[word.length - 1];
    } else {
      result = word;
    }

    results.push(result);
  }

  return results;
};

const input = [
  "word",
  "localization",
  "internationalization",
  "pneumonoultramicroscopicsilicovolcanoconiosis"
];

console.log(solve(input));
