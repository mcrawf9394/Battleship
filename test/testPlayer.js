function betterComputer (lastCoordinates) {
    if (lastCoordinates.ship === true && lastCoordinates.hit === true) {
        if (lastCoordinates.above.hit === true && lastCoordinates.above.ship === true) {
            lastCoordinates.below.hit = true
            return lastCoordinates.below.hit
        }
        else if (lastCoordinates.below.hit === true && lastCoordinates.below.ship === true) {
            lastCoordinates.above.hit = true
            return lastCoordinates.above.hit
        }
        else if (lastCoordinates.left.hit === true && lastCoordinates.left.ship === true) {
            lastCoordinates.right.hit = true
            return lastCoordinates.right.hit
        }
        else if (lastCoordinates.right.hit === true && lastCoordinates.right.ship === true){
            lastCoordinates.left.hit = true
            return lastCoordinates.left.hit
        }
        else {
            // this part is going to be random in the actual program, and I might add something to where if a hit has happened within the last 4 turns, unless a ship is sunk 
            lastCoordinates.left.hit = true
            return lastCoordinates.left.hit
        }
    }
}
module.exports  = betterComputer