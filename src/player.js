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
    attack () {
        //if (this.attacks.length > 1 && this.attacks[this.attacks.length - 1].hit === true && this.attacks[this.attacks.length - 1].ship === true) {

        //}
       // else {
            function getCoordinates () {
                let x = Math.floor(Math.random()*10)
                let y = Math.floor(Math.random()*10)
                let array = [x, y]
                return array
            }
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
    //}
}
export {realPlayer}
export {computerPlayer}