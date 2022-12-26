function checkStepNumbers(systemNames, stepNumbers) {
  const checkStep = systemNames.every((name, index) => {
    const nextIndex = systemNames.indexOf(name, index + 1);
    return nextIndex === -1 || stepNumbers[index] < stepNumbers[nextIndex];
  });

  return checkStep;
}

const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'];
const stepNumbers = [1, 33, 10, 2, 44, 20];
console.log(checkStepNumbers(systemNames, stepNumbers));

checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10]);
