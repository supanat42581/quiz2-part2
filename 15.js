let money =  Number (prompt('Enter Your Money'))
let years = Number(prompt('Enter Your Year'))
let sum = 0;

function calculateInterest( money , years ) {
    for (let i=1; i<=years ;i++ ){
        sum=money+money*2.5/100 
    }
    return sum
}
calculateInterest( money , years )

console.log(sum)