for (let a = 1; a <= 100; a++){
    if (a / 3 && a / 5) {
        console.log("FizzBuzz")
    } else if (a / 5) {
        console.log("Buzz")
    } else if (a / 3) {
        console.log("Fizz")
    } else {
        console.log(a)
    }
}