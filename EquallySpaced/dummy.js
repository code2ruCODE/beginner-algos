function evenlySpaced(first, second, last) {
  //Provide your solution here

  let numberArray = [];
  numberArray.push(first);
  numberArray.push(second);
  numberArray.push(last);

  numberArray.sort(function (a, b) {
    return a - b;
  });

  if (numberArray[1] - numberArray[0] !== numberArray[2] - numberArray[1]) {
    return false;
  }

  return true;
}

evenlySpaced(4, 6, 3) // → false
