const gameBoard = require('./testGameBoard')
const ship = require('./testShip')
let newGameBoard = new gameBoard
let fun = newGameBoard.testFunction
test('ddad', () => {
    expect(fun()).toBe(true)
})
let placeShip = newGameBoard.placeShip
let newShip = new ship(4, false)
let root = newGameBoard.root
test('making sure that the ships are being placed in the grid', () => {
    expect(placeShip(newShip, [5, 5], root)).toEqual([[5,5], [5,4], [5,3], [5,2]])
})
let secondShip = new ship(3, true)
test('making sure that ships cannot overlap', () => {
    expect(placeShip(secondShip, [5,3], root)).toBe("Choose new coordinates!")
})
test('making sure that ships also present as horizontal', () => {
    expect(placeShip(secondShip, [7,1], root)).toEqual([[7,1], [8,1],[9,1]])
})
const betterComputer = require('./testPlayer')
lastCoordinates = {
    ship: true,
    hit: true,
    above: {
        ship:true,
        hit:true
    },
    below: {
        ship: true,
        hit: false
    }
}
previousCoordinates = {
    ship: true,
    hit: true,
    above: {
        ship: false,
        hit: false
    },  
    below: {
        ship: false,
        hit: false
    },
    left: {
        ship: true,
        hit: false,
        left: {
            ship: true,
            hit: false
        }
    },
    right: {
        ship: true,
        hit: false
    }
}
test('Checking the computer to see if it can play more realistically, this should hit below recognizing that the two above have been hit', () => {
    expect(betterComputer(lastCoordinates)).toBe(true)
})
test('Checking to see if the computer can hit around a target until it finds where the other part of the ship is', () => {
    expect(betterComputer(previousCoordinates)).toBe(true)
})