let a = Number(prompt("Enter a in Exponential"))
let n = Number(prompt("Enter n in Exponential"))
let sum =1;
function pow(a, n){
    for(let i=1; i<=n; i++){
        sum*=a
    }
    return sum
}
console.log(pow(a, n));