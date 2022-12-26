function getFilesToBackup(lastBackup, changes) {
  const modifiedIds = changes.filter(
    ([id, timestamp]) => timestamp > lastBackup
  );

  const mapIds = modifiedIds.map(([id]) => id);

  return [...new Set(mapIds)].sort();
}

const lastBackup = 1546300800;

const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

console.log(getFilesToBackup(lastBackup, changes));
