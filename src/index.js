import './style.css';
import { realPlayer } from './player';
import { computerPlayer } from './player';
import gameBoard from './gameBoard';
const display = {
    startGame () {
        this.createUnclickableGrid()
        this.createClickableGrids()
        let message = document.createElement('h2')
        message.textContent = "You have 5 ships to sink!"
        let messageContainer = document.getElementById('finalMessage')
        messageContainer.append(message)
        let changeBoard = document.getElementById('randomizeBoard')
        changeBoard.addEventListener('click', () => {
            realPlayer.playerGameBoard = new gameBoard
            while (document.getElementById('player1').firstChild) {
                document.getElementById('player1').removeChild(document.getElementById('player1').firstChild)
            }
            this.createUnclickableGrid()
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
                    if (document.getElementById('randomizeBoard')) {
                        document.getElementById('randomizeBoard').remove()
                    }
                    let x = parseInt(newBox.id)
                    let y = parseInt(newBox.value)
                    let array = [x, y]
                    let status = realPlayer.attack(array)
                    newBox.disabled = true
                    if (status === true) {
                        newBox.className += "shipHit"
                        let i = 0
                        if (computerPlayer.playerGameBoard.carrier.sunk === true) {
                            i = i + 1
                        }
                        if (computerPlayer.playerGameBoard.battleship.sunk === true) {
                            i = i + 1
                        }
                        if (computerPlayer.playerGameBoard.cruiser.sunk === true) {
                            i = i + 1
                        }
                        if (computerPlayer.playerGameBoard.submarine.sunk === true) {
                            i = i + 1
                        }
                        if (computerPlayer.playerGameBoard.destroyer.sunk === true) {
                            i = i + 1
                        }
                        i = 5 - i
                        let message = document.querySelector('h2')
                        if (i > 1) {
                            message.textContent = "You have " + i +" ships to sink!"
                        }
                        else if (i === 1) {
                            message.textContent = "You have 1 ship to go!"
                        }
                    }
                    else if (status === null) {
                        newBox.name = "hit"
                        newBox.className += "shipHit"
                        let message = document.querySelector('h2')
                        message.textContent = "You have won"
                        let allButtons = document.querySelectorAll('button')
                        allButtons.forEach(button => {
                            button.disabled = true
                        })
                        return
                    }
                    if (status === false) {
                        newBox.className += "miss"
                    }
                    let newArray = computerPlayer.attack()
                    let otherx = newArray[1].toString()
                    let othery = newArray[2].toString()
                    let userGameBoard = document.getElementById(otherx + "" + othery)
                    if (newArray[0] === true) {
                        userGameBoard.name = "hit"
                        userGameBoard.className += "shipHit"
                        let message = document.querySelector('h2')
                        message.textContent = "You have lost"
                        let allButtons = document.querySelectorAll('button')
                        allButtons.forEach(button => {
                            button.disabled = true
                        })
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
display.startGame()