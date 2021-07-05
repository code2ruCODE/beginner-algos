function truncateString(str, num) {
  if(str.length<=num){
      return str
  }
  else {
      return str.substring(0,num)+'...'
  }
}

console.log(truncateString("A-", 1));

console.log(truncateString("Let the comforter abide", 4)); // => A...
