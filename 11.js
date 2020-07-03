function dotProduct(vector1, vector2) {
    let len = 0,
        sum = 0;
    if (vector1.length > vector2.length) {
        len = vector1.length
    } else if (vector1.length < vector2.length) {
        len = vector2.length
    }
    
    for (let i = 0; i < len; i++) {
        if (typeof(vector1[i]) === "undefined") {
            vector1.push(0)
        }
        if (typeof(vector2[i]) === "undefined") {
            vector2.push(0)
        }
        
        sum+= vector1[i] * vector2[i]
    }
    return sum
    
}

console.log(dotProduct([3,4], [2,8,9,11]))