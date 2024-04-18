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