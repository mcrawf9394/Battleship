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
    attacksSpot: [],
    attack () {
        function hitTargets (newTarget) {
            if (newTarget.hit === false) {
                newTarget.hit = true
                if (newTarget.ship === false) {
                    return "miss"
                }
                else {
                    return "hit"
                }
            }
            else {
                return "find different spot"
            }
        }
        function handleShot (response, array) {
            if (response === "miss") {
                let newArray = [0]
                let finalArray = newArray.concat(array)
                return finalArray
            }
            else if (response === "hit") {
                let newArray = [1]
                let finalArray = newArray.concat(array)
                return finalArray
            }
            else {

            }
        }
        function getCoordinates () {
            let x = Math.floor(Math.random()*10)
            let y = Math.floor(Math.random()*10)
            let array = [x, y]
            return array
        }
        let response
        let array
        let target
        if (this.attacksSpot.length > 1 && this.attacksSpot[this.attacksSpot.length - 1].hit === false && this.attacksSpot[this.attacksSpot.length - 2].ship === true) {
            let targetClose = this.attacksSpot[this.attacksSpot.length - 2]
            if (targetClose.above.hit === true && targetClose.above.ship === true) {
                while (targetClose != null && targetClose.above.hit === true) {
                    targetClose = targetClose.above
                }
                if (targetClose.above != null) {
                    target = targetClose.above
                    response = hitTargets(target)
                    array = [target.xAxis, target.yAxis]
                }
                else {
                    targetClose = this.attacksSpot[this.attacksSpot.length - 2]
                }
            }
            else if (targetClose.below.hit === true && targetClose.below.ship === true) {
                while (targetClose != null && targetClose.below.hit === true) {
                    targetClose = targetClose.below
                }
                if (targetClose.below != null) {
                    target = targetClose.above
                    response = hitTargets(target)
                    array = [target.xAxis, target.yAxis]
                }
                else {
                    targetClose = this.attacksSpot[this.attacksSpot.length - 2]
                }
            }
            else if (targetClose.left.hit === true && targetClose.left.ship === true) {
                while (targetClose != null && targetClose.left.hit === true) {
                    targetClose = targetClose.left
                }
                if (targetClose.left != null) {
                    target = targetClose.left
                    response = hitTargets(target)
                    array = [target.xAxis, target.yAxis]
                }
                else {
                    targetClose = this.attacksSpot[this.attacksSpot.length - 2]
                }
            }
            else if (targetClose.right.hit === true && targetClose.right.ship === true) {
                while (targetClose != null && targetClose.right.hit === true) {
                    targetClose = targetClose.right
                }
                if (targetClose.right != null) {
                    target = targetClose.right
                    response = hitTargets(target)
                    array = [target.xAxis, target.yAxis]
                }
                else {
                    targetClose = this.attacksSpot[this.attacksSpot.length - 2]
                }
            }
            else {
                let spot = null
                let choices = ["above", "below", "left", "right"]
                while (spot === null && choices.length > 0) {
                    let ran = Math.floor(Math.random()*choices.length)
                    let choice = choices[ran]
                    if (choice === "above"  && this.attacksSpot[this.attacksSpot.length - 2].above != null && this.attacksSpot[this.attacksSpot.length - 2].above.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 2].above
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else if (choice === "below" && this.attacksSpot[this.attacksSpot.length - 2].below != null && this.attacksSpot[this.attacksSpot.length - 2].below.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 2].below
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else if (choice === "left" && this.attacksSpot[this.attacksSpot.length - 2].left != null && this.attacksSpot[this.attacksSpot.length - 2].left.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 2].left
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else if (choice === "right" && this.attacksSpot[this.attacksSpot.length - 2].right != null && this.attacksSpot[this.attacksSpot.length - 2].left.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 2].right
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else {
                        choices.splice(ran, 1)
                    }
                }
                if (spot === null) {
                    array = getCoordinates()
                    while (realPlayer.playerGameBoard.find(array).hit === true){
                        array = getCoordinates()
                    }
                    spot = realPlayer.playerGameBoard.find(array)
                    target = spot
                    response = hitTargets(spot)
                }
            }
            target.hit = true
            this.attacksSpot.push(target)
            let finalArray =  handleShot(response, array)
            console.log(finalArray)
            return finalArray
        }
        if (this.attacksSpot.length > 1 && this.attacksSpot[this.attacksSpot.length - 1].hit === true && this.attacksSpot[this.attacksSpot.length - 1].ship === true) {
            if (this.attacksSpot[this.attacksSpot.length - 1].above != null && this.attacksSpot[this.attacksSpot.length - 1].above.hit === true && this.attacksSpot[this.attacksSpot.length - 1].above.ship === true && this.attacksSpot[this.attacksSpot.length - 1].below != null && this.attacksSpot[this.attacksSpot.length - 1].below.hit === false) {
                target = this.attacksSpot[this.attacksSpot.length - 1].below
                response = hitTargets(this.attacksSpot[this.attacksSpot.length - 1].below)
                array = [this.attacksSpot[this.attacksSpot.length - 1].below.xAxis, this.attacksSpot[this.attacksSpot.length - 1].below.yAxis]
            }
            else if (this.attacksSpot[this.attacksSpot.length - 1].below != null && this.attacksSpot[this.attacksSpot.length - 1].below.hit === true && this.attacksSpot[this.attacksSpot.length - 1].below.ship === true && this.attacksSpot[this.attacksSpot.length - 1].above != null && this.attacksSpot[this.attacksSpot.length - 1].above.hit === false) {
                target = this.attacksSpot[this.attacksSpot.length - 1].above
                response = hitTargets(this.attacksSpot[this.attacksSpot.length - 1].above)
                array = [this.attacksSpot[this.attacksSpot.length - 1].above.xAxis, this.attacksSpot[this.attacksSpot.length - 1].above.yAxis]
            }
            else if (this.attacksSpot[this.attacksSpot.length - 1].left != null && this.attacksSpot[this.attacksSpot.length - 1].left.hit === true && this.attacksSpot[this.attacksSpot.length - 1].left.ship === true && this.attacksSpot[this.attacksSpot.length - 1].right != null && this.attacksSpot[this.attacksSpot.length - 1].right.hit === false) {
                target = this.attacksSpot[this.attacksSpot.length - 1].right
                response = hitTargets(this.attacksSpot[this.attacksSpot.length - 1].right)
                array = [this.attacksSpot[this.attacksSpot.length - 1].right.xAxis, this.attacksSpot[this.attacksSpot.length - 1].right.yAxis]
            }
            else if (this.attacksSpot[this.attacksSpot.length - 1].right != null && this.attacksSpot[this.attacksSpot.length - 1].right.hit === true && this.attacksSpot[this.attacksSpot.length - 1].right.ship === true && this.attacksSpot[this.attacksSpot.length - 1].left != null && this.attacksSpot[this.attacksSpot.length - 1].left.hit === false){
                target = this.attacksSpot[this.attacksSpot.length - 1].left
                response = hitTargets(this.attacksSpot[this.attacksSpot.length - 1].left)
                array = [this.attacksSpot[this.attacksSpot.length - 1].left.xAxis, this.attacksSpot[this.attacksSpot.length - 1].left.yAxis]
            }
            else {
                let spot = null
                let choices = ["above", "below", "left", "right"]
                while (spot === null && choices.length > 0) {
                    let ran = Math.floor(Math.random()*choices.length)
                    let choice = choices[ran]
                    if (choice === "above"  && this.attacksSpot[this.attacksSpot.length - 1].above != null && this.attacksSpot[this.attacksSpot.length - 1].above.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 1].above
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else if (choice === "below" && this.attacksSpot[this.attacksSpot.length - 1].below != null && this.attacksSpot[this.attacksSpot.length - 1].below.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 1].below
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else if (choice === "left" && this.attacksSpot[this.attacksSpot.length - 1].left != null && this.attacksSpot[this.attacksSpot.length - 1].left.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 1].left
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else if (choice === "right" && this.attacksSpot[this.attacksSpot.length - 1].right != null && this.attacksSpot[this.attacksSpot.length - 1].left.hit === false) {
                        target = this.attacksSpot[this.attacksSpot.length - 1].right
                        spot = target
                        response = hitTargets(target)
                        array = [target.xAxis, target.yAxis]
                    }
                    else {
                        choices.splice(ran, 1)
                    }
                }
                if (spot === null) {
                    array = getCoordinates()
                    while (realPlayer.playerGameBoard.find(array).hit === true){
                        array = getCoordinates()
                    }
                    spot = realPlayer.playerGameBoard.find(array)
                    target = spot
                    response = hitTargets(spot)
                }   
            }
            target.hit = true
            this.attacksSpot.push(target)
            let finalArray =  handleShot(response, array)
            console.log(finalArray)
            return finalArray
        }
        else {
            let array = getCoordinates()
            while (realPlayer.playerGameBoard.find(array).hit === true){
                array = getCoordinates()
            }
            let spot = realPlayer.playerGameBoard.receiveAttack(array)
            if (spot === true) {
                let newArray = [true]
                let finalArray = newArray.concat(array)
                return finalArray
            }
            this.attacksSpot.push(spot)
            this.attacks.push(array)
            if (spot.hit === true && spot.ship === false) {
                let newArray = [0]
                let finalArray = newArray.concat(array)
                return finalArray
            }
            else {
                let newArray = [1]
                let finalArray = newArray.concat(array)
                return finalArray
            }
        }
    }
}
export {realPlayer}
export {computerPlayer}