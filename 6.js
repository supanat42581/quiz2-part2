let string1 = prompt("Enter string1")
let string2 = prompt("Enter string2")
function isTheSameAnagram( string1 , string2 ){
let word = true;
    for (let i = 0; i < string1.length; i++) {
      word = string2.includes(string1[i]) && word;
    }
    return word;
}
isTheSameAnagram( string1 , string2 )