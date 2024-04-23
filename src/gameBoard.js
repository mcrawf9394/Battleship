import ships from "./ship";
class nodes {
    constructor (x, y) {
        this.xAxis = x
        this.yAxis = y
        this.above = null
        this.below = null
        this.right = null
        this.left = null
        this.ship = false
        this.hit = false
        this.shipType = null
    }
}
class gameBoard {
    constructor () {
        this.root = new nodes (0, 0)
        this.buildGameBoard()
        let array = [true, false]
        let random = Math.floor(Math.random()*2)
        this.carrier = new ships(5, array[random], "carrier")
        this.randomCoordinate(this.carrier)
        random = Math.floor(Math.random()*2)
        this.battleship = new ships(4, array[random], "battleship")
        this.randomCoordinate(this.battleship)
        random = Math.floor(Math.random()*2)
        this.cruiser = new ships(3, array[random], "cruiser")
        this.randomCoordinate(this.cruiser)
        random = Math.floor(Math.random()*2)
        this.submarine = new ships(3, array[random], "submarine")
        this.randomCoordinate(this.submarine)
        random = Math.floor(Math.random()*2)
        this.destroyer = new ships(2, array[random], "destroyer")
        this.randomCoordinate(this.destroyer)
    }
    buildGameBoard () {
        let start = this.root
        while (start.xAxis <= 9) {
            if (start.xAxis % 2 === 0) {
                while (start.yAxis < 9) {
                    let newY = start.yAxis + 1
                    let prevNode = start
                    start = new nodes(start.xAxis, newY)
                    start.below = prevNode
                    prevNode.above = start 
                }
            }
            else {
                while (start.yAxis > 0) {
                    let newY = start.yAxis - 1
                    let prevNode = start
                    start = new nodes (start.xAxis, newY)
                    start.above = prevNode
                    prevNode.below = start
                }
            }
            let newX = start.xAxis + 1
            let prevNode = start
            start =  new nodes (newX, start.yAxis)
            if (start.xAxis === 10){
                break
            }
            prevNode.right = start
            start.left = prevNode
        }
        start = this.root
        while (start.xAxis <= 9) {
            let currentNode
            if (start.xAxis % 2 != 0) {
                if (start.yAxis === 0) {
                    currentNode = start.right
                }
                else {
                    currentNode = start.below
                }
            }
            else {
                if (start.yAxis === 9) {
                    currentNode = start.right
                }
                else {
                    currentNode = start.above
                }
            }
            while (currentNode.xAxis != (start.xAxis + 1)) {
                while(currentNode.yAxis != start.yAxis) {
                    if (start.xAxis === 9) {
                        return
                    }
                    if (currentNode.xAxis % 2 === 0) {
                        if (currentNode.yAxis != 9) {
                            currentNode = currentNode.above
                        }
                        else {
                            currentNode = currentNode.right
                        }
                    }
                    else {
                        if (currentNode.yAxis != 0) {
                            currentNode = currentNode.below
                        }
                        else {
                            currentNode = currentNode.right
                        }
                    }
                }
            }
            currentNode.left = start
            start.right = currentNode
            if (start.xAxis %2 === 0) {
                if (start.yAxis != 9) {
                    start = start.above
                }
                else {
                    start = start.right
                }
            }
            else {
                if (start.yAxis != 0) {
                    start = start.below
                }
                else {
                    start = start.right
                }
            }
        }
    }
    find (start) {
        let currentNode = this.root
        while (currentNode.xAxis != start[0] || currentNode.yAxis != start[1]) {
            if (start [0] != currentNode.xAxis) {
                currentNode = currentNode.right
            }
            if (start[1] != currentNode.yAxis) {
                currentNode = currentNode.above
            }
        }
        return currentNode
    }
    placeShip (newShip, array) {
        let startNode = this.find(array)
        let i = 0
        let shipCoordinates = []
        let x = startNode.xAxis
        let y = startNode.yAxis
        while (i < newShip.length) {
            let newStart = []
            newStart.push(x)
            newStart.push(y)
            startNode = this.find(newStart)
            shipCoordinates.push(startNode)
            if (newShip.horizontal === true) {
                x = x + 1
            }
            if (newShip.horizontal === false) {
                y = y - 1
            }
             i = i + 1
        }
        let needsNewSpot = false
        shipCoordinates.forEach(spot => {
            if (spot.ship != false) {
                needsNewSpot = true
            }
            else if (spot.above != null && spot.above.ship != false && spot.above.shipType != spot.shipType) {
                needsNewSpot = true
            }
            else if (spot.below != null && spot.below.ship != false && spot.below.shipType != spot.shipType) {
                needsNewSpot = true
            }
            else if (spot.left != null && spot.left.ship != false && spot.left.shipType != spot.shipType) {
                needsNewSpot = true
            }
            else if (spot.right != null && spot.right.ship != false && spot.right.shipType != spot.shipType) {
                needsNewSpot = true
            }
        })
        if (needsNewSpot === true) {
            this.randomCoordinate(newShip)
            return
        }
        shipCoordinates.forEach(spot => {
            spot.ship = true
            spot.shipType = newShip
        })
        return shipCoordinates
    }
    randomCoordinate (ship) {
        let i = 0
        let x
        let y
        while (i < 1) {
            x = Math.floor(Math.random()*10)
            y = Math.floor(Math.random()*10)
            if (ship.horizontal === true) {
                if ((x + ship.length) < 10) {
                    i = 1
                }
            }
            else {
                if ((y - ship.length) >= 0) {
                    i = 1
                }
            }
        }
        let array = [x, y]
        this.placeShip(ship, array)
    }
    receiveAttack (array) {
        let attackedSpot = this.find(array)
        if (attackedSpot.ship === true) {
            let shipType = attackedSpot.shipType.shipType
            if(shipType === "carrier") {
                this.carrier.hit()
            }
            else if (shipType === "battleship") {
                this.battleship.hit()
            }
            else if (shipType === "cruiser") {
                this.cruiser.hit()
            }
            else if (shipType === "submarine") {
                this.submarine.hit()
            }
            else if (shipType === "destroyer") {
                this.destroyer.hit()
            }
        }
        let loss = this.checkLoss()
        if (loss === true) {
            return true
        }
        attackedSpot.hit = true
        return attackedSpot
    }
    checkLoss () {
        if (this.carrier.sunk === true && this.battleship.sunk === true && this.cruiser.sunk === true && this.submarine.sunk === true && this.destroyer.sunk === true) {
            return true
        }
        else {
            return false
        }
    }
}
export default gameBoard