function Equalspace(a, b, c) {
  let num = [a, b, c]; // 4, 6, 2

  sortNum = num.sort((b, a) => b - a); // [2, 4, 6]
  a = sortNum[0];
  b = sortNum[1];
  c = sortNum[2];
  let calc = (c + a) / 2;
  return calc == b ? true : false;
}

// function Equalspace(a, b, c) {
//     let
// }

// console.log(Equalspace(2, 4, 6));
console.log(Equalspace(4, 6, 2));
