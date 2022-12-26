function createCube(size) {
  const top = [];
  const bottom = [];
  let blancSpace = ' ';

  for (let index = 0; index < size; index++) {
    top.push(
      `${blancSpace.repeat(size - index - 1)}${'/\\'.repeat(
        index + 1
      )}${'_\\'.repeat(size)}`
    );
    bottom.push(
      `${blancSpace.repeat(index)}${'\\/'.repeat(size - index)}${'_/'.repeat(
        size
      )}`
    );
  }

  return [top, bottom].flat().join('\n');
}

const cube = createCube(3);

// output:
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/
