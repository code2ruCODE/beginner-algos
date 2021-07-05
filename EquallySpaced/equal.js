function Equalspace(a, b, c) {
    let arr =[]
    arr[0]=a
    arr[1]=b
    arr[2]=c
    arr.sort((a,b)=>a-b)
    a =arr[0]
    b =arr[1]
    c =arr[2]
    let mid = (a+c)/2
    if(mid==b){
        return true
    }
    else return false
  
}

console.log(Equalspace(4, 6, 2));
console.log(Equalspace(10, 15, 2));
