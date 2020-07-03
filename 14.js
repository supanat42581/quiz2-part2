
let count=1;
function numberOfJumpFrog( speed, distance ){
    for (let i=1; distance-speed>=0; i++ ) {
        distance-=speed
        count++
    }return count
}
numberOfJumpFrog( 5, 23 )
