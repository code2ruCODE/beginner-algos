function confirmEnding(str, target) {
  let endingStr = str.slice(-target.length);

  if (endingStr === target) {
    return true;
  } else {
    return false;
  }
}
