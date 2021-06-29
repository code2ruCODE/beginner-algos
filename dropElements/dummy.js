function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].





// function dropElements(arr, func) {
//   // drop them elements.
//   let originalLen = arr.length;
//   for (let i = 0; i < originalLen; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }
