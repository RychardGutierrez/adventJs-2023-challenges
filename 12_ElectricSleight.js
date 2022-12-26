function selectSleigh(distance, sleighs) {
  const sleighsWatts = sleighs.map(({ name, consumption }) => ({
    name,
    consumption: consumption * distance,
  }));

  const bestDistances = sleighsWatts.filter(
    ({ consumption }) => consumption <= 20
  );

  bestDistances.unshift({ name: null });

  return bestDistances[bestDistances.length - 1].name;
}

const distance = 30;
const sleighs = [
  { name: 'Gorusuke', consumption: 0.3 },
  { name: 'Madeval', consumption: 0.5 },
  { name: 'Lolivier', consumption: 0.7 },
  { name: 'Hyuuh', consumption: 1 },
];

console.log(selectSleigh(distance, sleighs)); // => "Madeval"
