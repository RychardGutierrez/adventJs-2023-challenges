function howManyReindeers(reindeerTypes, gifts) {
  //sort reindeert
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);

  const getReindeers = (weight) => {
    const allowedReindeersCapacity = reindeerTypes.filter(
      (reindeerType) => reindeerType.weightCapacity < weight
    );

    let totalWeightCapacity = allowedReindeersCapacity.reduce(
      (accumulator, reindeerType) => accumulator + reindeerType.weightCapacity,
      0
    );
    const allowedReindeersTypes = allowedReindeersCapacity.map(
      (reindeerType) => {
        const calculteCapacity = Math.floor(weight / totalWeightCapacity);

        weight -= calculteCapacity * reindeerType.weightCapacity;
        totalWeightCapacity -= reindeerType.weightCapacity;

        return {
          type: reindeerType.type,
          num: calculteCapacity,
        };
      }
    );

    const allowedReindeersCapacityFilter = allowedReindeersTypes.filter(
      ({ num }) => num > 0
    );
    return allowedReindeersCapacityFilter;
  };

  return gifts.map((gift) => ({
    country: gift.country,
    reindeers: getReindeers(gift.weight),
  }));
}

const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 },
];

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 },
];

console.log(howManyReindeers(reindeerTypes, gifts));
