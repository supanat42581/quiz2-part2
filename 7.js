function numberOfSquare(height, width) {
    let square = height*width
    for(let i=1;i<=square;i++) {
    if(square % (i*i) == 0 && (height % i == 0) && (width % i == 0)){
        bigSquare = i*i;  
    }
     }
    return square/bigSquare;
}
numberOfSquare(20, 15)

