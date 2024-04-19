import './style.css';
import { realPlayer } from './player';
import { computerPlayer } from './player';
import gameBoard from './gameBoard';

const display = {
    dialog () {
        let dialog = document.getElementById('player1Dialog')
        dialog.showModal()
        let button = document.getElementById('player1Submit')
        button.addEventListener('click', (click) => {
            click.preventDefault()
            let input = document.getElementById('player1Name')
            let name = input.value
            realPlayer.name = name
            this.createUnclickableGrid()
            this.createClickableGrids()
            dialog.close()
        })
        return
    },
    createUnclickableGrid () {
        let container
        container = document.getElementById('player1')
        let j
        let i
        for (j = 0; j < 10; j++){
            for (i = 0; i < 10; i++){
                let newBox = document.createElement('button')
                newBox.value = j
                newBox.id = i + "" + j
                let array = [i, j]
                if (realPlayer.playerGameBoard.find(array).ship === true) {
                    newBox.name = "ship"
                }
                newBox.className = "gridCells"
                newBox.disabled = true
                container.appendChild(newBox)
            }
        }
        return
    },
    createClickableGrids () {
        let container
        container = document.getElementById('player2')
        let j
        let i
        for (j = 0; j < 10; j++){
            for (i = 0; i < 10; i++){
                let newBox = document.createElement('button')
                newBox.value = j
                newBox.id = i
                newBox.className = "gridCells"
                newBox.addEventListener('click', () => {
                    let x = parseInt(newBox.id)
                    let y = parseInt(newBox.value)
                    let array = [x, y]
                    let status = realPlayer.attack(array)
                    if (status === true) {
                        newBox.className += "shipHit"
                    }
                    else if (status === null) {
                        let messageContainer = document.getElementById('finalMessage')
                        let message = document.createElement('h2')
                        message.textContent = "You have won"
                        messageContainer.append(message)
                        return
                    }
                    newBox.disabled = true
                    let newArray = computerPlayer.attack()
                    let otherx = newArray[1].toString()
                    let othery = newArray[2].toString()
                    let userGameBoard = document.getElementById(otherx + "" + othery)
                    if (newArray[0] === true) {
                        userGameBoard.name = "hit"
                        userGameBoard.className += "shipHit"
                        let messageContainer = document.getElementById('finalMessage')
                        let message = document.createElement('h2')
                        message.textContent = "You have lost"
                        messageContainer.append(message)
                    }
                    else if (newArray[0] === 1) {
                        userGameBoard.name = "hit"
                        userGameBoard.className += "shipHit"
                    }
                    else {
                        userGameBoard.className += "miss"
                    }
                })
                container.appendChild(newBox)
            }
        }
        return
    }
}
const backSideGame = {

}
display.dialog()