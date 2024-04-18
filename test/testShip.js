class ships {
    constructor (length, isHorizontal) {
        this.length = length
        this.horizontal = isHorizontal
        this.hits = 0
        this.sunk = false
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
module.exports = ships