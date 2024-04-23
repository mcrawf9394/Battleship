import gameBoard from "./gameBoard";
const realPlayer = {
    name: null,
    playerGameBoard: new gameBoard,
    attack (array) {
        let spot = computerPlayer.playerGameBoard.receiveAttack(array)
        if (spot === true) {
            return null
        }
        if (spot.hit === true && spot.ship === false) {
            return false
        }
        else {
            return true
        }
    }
}

const computerPlayer  = {
    playerGameBoard: new gameBoard,
    attacks: [],
    attacksShip: [],
    attack () {
        let newattack
        let spot
        if (this.attacks.length === 0 || this.attacksShip.length === 0) {
            newattack = this.randomAttack()
            while (realPlayer.playerGameBoard.find(newattack).hit === true) {
                newattack = this.randomAttack()
            }
            spot = realPlayer.playerGameBoard.find(newattack)
        }
        else if (this.attacksShip.length === 1) {
            newattack = this.attackNear()
            spot = realPlayer.playerGameBoard.find(newattack)
        }
        else if (this.attacksShip.length <= this.attacksShip[0].shipType.length + 1) {
            newattack = this.followAttacks()
            spot = realPlayer.playerGameBoard.find(newattack)
        }
        let newArray
        if (spot === undefined || spot.hit === true) {
            newattack = this.randomAttack()
            while (realPlayer.playerGameBoard.find(newattack).hit === true) {
                newattack = this.randomAttack()
            }
            spot = realPlayer.playerGameBoard.find(newattack)
        }
        spot.hit = true
        if (realPlayer.playerGameBoard.receiveAttack(newattack) === true) {
            newArray = [true]
            let finalArray = newArray.concat(newattack)
            return finalArray
        }
        if (spot.ship === true) {
            let i = 0
            this.attacksShip.forEach(ship => {
                if (ship.shipType != this.attacksShip[this.attacksShip.length -1].shipType) {
                    this.attacksShip.splice(i, 1)
                }
                i++
            })
            this.attacksShip.push(spot)
            if (this.attacksShip.length === this.attacksShip[0].shipType.length) {
                while (this.attacksShip.length > 0) {
                    this.attacksShip.pop()
                }
            }
        }
        this.attacks.push(spot)
        if (spot.hit === true && spot.ship === false) {
            newArray = [0]
        }
        else {
            newArray = [1]
        }
        let finalArray = newArray.concat(newattack)
        return finalArray
    },
    randomAttack () {
        let x = Math.floor(Math.random()*10)
        let y = Math.floor(Math.random()*10)
        let array = [x, y]
        return array
    },
    attackNear () {
        let i = 0
        let directionArray = ["above", "below", "right", "left"]
        let newattack = this.attacksShip[0]
        while (newattack.hit === true && directionArray.length > 0 && i < 4) {
            newattack = this.attacksShip[0]
            let random = Math.floor(Math.random()*directionArray.length)
            let newDirection = directionArray[random]
            i = i +1
            if (newDirection === "above" && newattack.above != null) {
                newattack = newattack.above
            }
            else if (newDirection === "below" && newattack.below != null) {
                newattack = newattack.below
            }
            else if (newDirection === "right" && newattack.right != null) {
                newattack = newattack.right
            }
            else if (newDirection === "left" && newattack.left != null) {
                newattack = newattack.left
            }
            else {
                if (directionArray.length > 1) {
                    directionArray.splice(random, 1)
                }
                else {
                    directionArray.pop()
                }
            }
        }
        if (newattack === this.attacksShip[this.attacksShip.length -1] || newattack === null || newattack === undefined) {
            let random = this.randomAttack()
            newattack = realPlayer.playerGameBoard.find(random)
            while (this.attacksShip.length > 0) {
                this.attacksShip.pop()
            }
        }
        let x = newattack.xAxis
        let y = newattack.yAxis
        return [x, y]
    },
    followAttacks () {
        let random
        let x
        let y
        let spot
        let lastAttack = this.attacksShip[this.attacksShip.length - 1]
        if (lastAttack.above != null && lastAttack.above.hit === true && lastAttack.above.ship === true && lastAttack.below != null) {
            if (lastAttack.below.hit === true && lastAttack.below.ship === false) {
                if (this.attacksShip[0].above != null && this.attacksShip[0].above.hit === false) {
                    spot = this.attacksShip[0].above
                }
                else {
                    random = this.randomAttack()
                    spot = realPlayer.playerGameBoard.find(random)
                    while (this.attacksShip.length > 0) {
                        this.attacksShip.pop()  
                    }
                }
            }
            else if (lastAttack.below.hit === false) {
                spot = lastAttack.below
            }
        }
        else if (lastAttack.below != null && lastAttack.below.hit === true && lastAttack.below.ship === true && lastAttack.above != null) {
            if (lastAttack.above.hit === true && lastAttack.above.ship === false) {
                if (this.attacksShip[0].below != null && this.attacksShip[0].below.hit === false) {
                    spot = this.attacksShip[0].below
                }
                else {
                    random = this.randomAttack()
                    spot = realPlayer.playerGameBoard.find(random)
                    while (this.attacksShip.length > 0) {
                        this.attacksShip.pop()  
                    }
                }
            }
            else if (lastAttack.above.hit === false) {
                spot = lastAttack.above
            }
        }
        else if (lastAttack.right != null && lastAttack.right.hit === true && lastAttack.right.ship === true && lastAttack.left != null) {
            if (lastAttack.left.hit === true && lastAttack.left.ship === false) {
                if (this.attacksShip[0].right != null && this.attacksShip[0].right.hit === false) {
                    spot = this.attacksShip[0].right
                }
                else {
                    random = this.randomAttack()
                    spot = realPlayer.playerGameBoard.find(random)
                    while (this.attacksShip.length > 0) {
                        this.attacksShip.pop()  
                    }
                }
            }
            else if (lastAttack.left.hit === false) {
                spot = lastAttack.left
            }
        }
        else if (lastAttack.left != null && lastAttack.left.hit === true && lastAttack.left.ship === true && lastAttack.right != null) {
            if (lastAttack.right.hit === true && lastAttack.right.ship === false) {
                if (this.attacksShip[0].left != null && this.attacksShip[0].left.hit === false) {
                    spot = this.attacksShip[0].left
                }
                else {
                    random = this.randomAttack()
                    spot = realPlayer.playerGameBoard.find(random)
                    while (this.attacksShip.length > 0) {
                        this.attacksShip.pop()  
                    }
                }
            }
            else if (lastAttack.right.hit === false) {
                spot = lastAttack.right
            }
        }
        else if (spot === null || spot === undefined){
            spot = realPlayer.playerGameBoard.find(this.attackNear())
        }
        x = spot.xAxis
        y = spot.yAxis
        let newattack = [x, y]
        return newattack
    }
}
export {realPlayer}
export {computerPlayer}