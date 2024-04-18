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
    }
}
class gameBoard {
    constructor () {
        this.root = new nodes (0, 0)
        this.buildGameBoard()
        this.pushShips()
    }
    buildGameBoard () {
        let start = this.root
        while (start.xAxis <= 10) {
            if (start.xAxis % 2 === 0) {
                while (start.yAxis < 10) {
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
            if (start.xAxis === 11){
                break
            }
            prevNode.right = start
            start.left = prevNode
        }
        start = this.root
        while (start.xAxis <= 10) {
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
                if (start.yAxis === 10) {
                    currentNode = start.right
                }
                else {
                    currentNode = start.above
                }
            }
            while (currentNode.xAxis != (start.xAxis + 1)) {
                while(currentNode.yAxis != start.yAxis) {
                    if (start.xAxis === 10) {
                        return
                    }
                    if (currentNode.xAxis % 2 === 0) {
                        if (currentNode.yAxis != 10) {
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
                if (start.yAxis != 10) {
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
        let moveX = start[0]
        let moveY = start[1]
        while (currentNode.xAxis != start[0] || currentNode.yAxis != start[1]) {
            if (start [0] != currentNode.xAxis) {
                currentNode = currentNode.right
                moveX = moveX - 1
            }
            if (start[1] != currentNode.yAxis) {
                currentNode = currentNode.above
                moveY = moveY - 1
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
        })
        if (needsNewSpot === true) {
            this.randomCoordinate(newShip)
            return
        }
        shipCoordinates.forEach(spot => {
            spot.ship = true
        })
        console.log(shipCoordinates)
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
                if ((x + ship.length) < 11) {
                    i = 1
                }
            }
            else {
                if ((y - ship.length) >= 0) {
                    i = 1
                }
            }
        }
        console.log(x, y)
        let array = [x, y]
        this.placeShip(ship, array)
    }
    pushShips () {
       let carrier = new ships(5, true)
       this.randomCoordinate(carrier)
       let battleship = new ships(4, false)
       this.randomCoordinate(battleship)
       let cruiser = new ships(3, true)
       this.randomCoordinate(cruiser)
       let submarine = new ships(3, false)
       this.randomCoordinate(submarine)
       let destroyer = new ships(2, true)
       this.randomCoordinate(destroyer) 
    }
}
export default gameBoard