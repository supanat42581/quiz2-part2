function evenArraySum( array ){
let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sum += array[i];
      }
    }
    return sum;
}evenArraySum([5, 8, 6, 7, 1]);


    
  
  