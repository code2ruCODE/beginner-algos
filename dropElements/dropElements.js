function dropElements(arr, func) {
let newArr =[]
    for(ar of arr){
        if(func(ar)===true){
            newArr.push(ar)
        }
    }
    return newArr
}
function greaterThan5(n){
    return n>5
}
dropElements([1, 2, 3, 4], function (n) {return n > 5;}); //should return [].
console.log(dropElements([1,2,3,4,5,6,7,8,9,10],greaterThan5))
