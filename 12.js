const maxPairSum = (array) => {
    array.sort((a, b) => b - a);
    return array[0] + array[1];
  };
  
maxPairSum([2, 5, 3, 9, 19, 3, 7, 58]);