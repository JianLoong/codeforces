const solve = input => {
  const vowels = ["a", "e", "i", "o", "u"];

  let result = "";
  for (let i = 0; i < input.length; i++) {
    let character = input[i];
    if (!vowels.includes(character.toLowerCase())) {
      result += ".";
      if (characterIsUpperCase(character)) {
        result += character.toLowerCase();
      } else {
        result += character;
      }
    }
  }

  return result;
};

const characterIsUpperCase = character => {
  return character === character.toUpperCase();
};

const input = "tour";

console.log(solve(input));
