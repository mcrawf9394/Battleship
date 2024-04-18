class nodes {
    constructor (x, y) {
        this.xAxis = x
        this.yAxis = y
        this.above = null
        this.below = null
        this.right = null
        this.left = null
        this.ship = null
        this.hit = null
    }
}
class gameBoard {
    constructor () {
        this.root = new nodes (0, 0)
        this.buildGameBoard()
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
        while (currentNode.xAxis < start[0] || currentNode.yAxis < start[1]) {
            if (start [0] != currentNode.xAxis) {
                currentNode = currentNode.right
            }
            if (start[1] != currentNode.yAxis) {
                currentNode = currentNode.above
            }
        }
        return currentNode
    }
    placeShip (newShip, array, root) {
        function find (start) {
            let currentNode = root
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
        let startNode = find(array)
        let i = 0
        let shipCoordinates = []
        let x = startNode.xAxis
        let y = startNode.yAxis
        if (startNode.ship != null) {
            return "Choose new coordinates!"
        }
        while (i < newShip.length) {
            startNode.ship = true
            let newStart = []
            newStart.push(x)
            newStart.push(y)
            startNode = find(newStart)
            shipCoordinates.push(newStart)
            if (newShip.horizontal === true) {
                x = x + 1
            }
            if (newShip.horizontal === false) {
                y = y - 1
            }
             i = i + 1
        }
        return shipCoordinates
    }
    testFunction () {
        return true
    }
}
module.exports = gameBoard