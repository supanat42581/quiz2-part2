function minPairSum( array ){
    array.sort((a, b) => a - b)
    return array[0] + array[1];
}
minPairSum( [2, 5, 3, 9, 19, 3, 7, 58] )
