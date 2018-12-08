const solve = problems => {
  const noOfCanSolve = 2;

  let result = 0;

  for (let problem of problems) {
    let count = 0;
    for (let people of problem) {
      if (people == 1) {
        count++;

        if (count >= 2) break;
      }
    }

    if (count >= 2) {
      result++;
    }
  }

  return result;
};

const noOfPeople = 3;
const problems = [[1, 0, 0], [0, 1, 1]];

console.log(solve(problems));
