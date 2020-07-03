
let str = prompt('Enter Your Word')
function isUpperCase(str) {
    if(str === str.toUpperCase()){
    return ("All character are capital.");
    }else if (str === str.toLowerCase()){
         return ("All character are small.");
    }return ("All character are mix.")
}
isUpperCase(str);

console.log(isUpperCase(str))
