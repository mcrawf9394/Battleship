class ships {
    constructor (length, isHorizontal, shipType) {
        this.length = length
        this.horizontal = isHorizontal
        this.hits = 0
        this.sunk = false
        this.shipType = shipType
    }
    hit () {
        this.hits = this.hits + 1
        this.isSunk()
        return this.sunk
    }
    isSunk () {
        if (this.length === this.hits) {
            this.sunk = true
        }
        else {
            this.sunk = false
        }
    }
}
export default ships