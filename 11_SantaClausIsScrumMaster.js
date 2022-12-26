function getCompleted(part, total) {
  const partSplit = part.split(':');
  const totalSplit = total.split(':');

  const partSecond = (+partSplit[0] * 60 + +partSplit[1]) * 60 + +partSplit[2];
  const totalSecond =
    (+totalSplit[0] * 60 + +totalSplit[1]) * 60 + +totalSplit[2];

  const getCalculeTime = (_partSecond, _totalSecond) => {
    while (_totalSecond) {
      const temp = _totalSecond;
      _totalSecond = _partSecond % _totalSecond;
      _partSecond = temp;
    }
    return _partSecond;
  };

  const calculateTime = getCalculeTime(partSecond, totalSecond);

  const partResult = partSecond / calculateTime;
  const totalResult = totalSecond / calculateTime;
  return `${partResult}/${totalResult}`;
}

console.log(getCompleted('01:00:00', '03:00:00')); // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')); // '1/2'
// getCompleted('01:00:00', '01:00:00'); // '1/1'
// getCompleted('00:10:00', '01:00:00'); // '1/6'
// getCompleted('01:10:10', '03:30:30'); // '1/3'
// getCompleted('03:30:30', '05:50:50');
