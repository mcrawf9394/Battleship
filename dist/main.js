/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass nodes {\n  constructor(x, y) {\n    this.xAxis = x;\n    this.yAxis = y;\n    this.above = null;\n    this.below = null;\n    this.right = null;\n    this.left = null;\n    this.ship = false;\n    this.hit = false;\n    this.shipType = null;\n  }\n}\nclass gameBoard {\n  constructor() {\n    this.root = new nodes(0, 0);\n    this.buildGameBoard();\n    let array = [true, false];\n    let random = Math.floor(Math.random() * 2);\n    this.carrier = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, array[random], \"carrier\");\n    this.randomCoordinate(this.carrier);\n    random = Math.floor(Math.random() * 2);\n    this.battleship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, array[random], \"battleship\");\n    this.randomCoordinate(this.battleship);\n    random = Math.floor(Math.random() * 2);\n    this.cruiser = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, array[random], \"cruiser\");\n    this.randomCoordinate(this.cruiser);\n    random = Math.floor(Math.random() * 2);\n    this.submarine = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, array[random], \"submarine\");\n    this.randomCoordinate(this.submarine);\n    random = Math.floor(Math.random() * 2);\n    this.destroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, array[random], \"destroyer\");\n    this.randomCoordinate(this.destroyer);\n  }\n  buildGameBoard() {\n    let start = this.root;\n    while (start.xAxis <= 9) {\n      if (start.xAxis % 2 === 0) {\n        while (start.yAxis < 9) {\n          let newY = start.yAxis + 1;\n          let prevNode = start;\n          start = new nodes(start.xAxis, newY);\n          start.below = prevNode;\n          prevNode.above = start;\n        }\n      } else {\n        while (start.yAxis > 0) {\n          let newY = start.yAxis - 1;\n          let prevNode = start;\n          start = new nodes(start.xAxis, newY);\n          start.above = prevNode;\n          prevNode.below = start;\n        }\n      }\n      let newX = start.xAxis + 1;\n      let prevNode = start;\n      start = new nodes(newX, start.yAxis);\n      if (start.xAxis === 10) {\n        break;\n      }\n      prevNode.right = start;\n      start.left = prevNode;\n    }\n    start = this.root;\n    while (start.xAxis <= 9) {\n      let currentNode;\n      if (start.xAxis % 2 != 0) {\n        if (start.yAxis === 0) {\n          currentNode = start.right;\n        } else {\n          currentNode = start.below;\n        }\n      } else {\n        if (start.yAxis === 9) {\n          currentNode = start.right;\n        } else {\n          currentNode = start.above;\n        }\n      }\n      while (currentNode.xAxis != start.xAxis + 1) {\n        while (currentNode.yAxis != start.yAxis) {\n          if (start.xAxis === 9) {\n            return;\n          }\n          if (currentNode.xAxis % 2 === 0) {\n            if (currentNode.yAxis != 9) {\n              currentNode = currentNode.above;\n            } else {\n              currentNode = currentNode.right;\n            }\n          } else {\n            if (currentNode.yAxis != 0) {\n              currentNode = currentNode.below;\n            } else {\n              currentNode = currentNode.right;\n            }\n          }\n        }\n      }\n      currentNode.left = start;\n      start.right = currentNode;\n      if (start.xAxis % 2 === 0) {\n        if (start.yAxis != 9) {\n          start = start.above;\n        } else {\n          start = start.right;\n        }\n      } else {\n        if (start.yAxis != 0) {\n          start = start.below;\n        } else {\n          start = start.right;\n        }\n      }\n    }\n  }\n  find(start) {\n    let currentNode = this.root;\n    while (currentNode.xAxis != start[0] || currentNode.yAxis != start[1]) {\n      if (start[0] != currentNode.xAxis) {\n        currentNode = currentNode.right;\n      }\n      if (start[1] != currentNode.yAxis) {\n        currentNode = currentNode.above;\n      }\n    }\n    return currentNode;\n  }\n  placeShip(newShip, array) {\n    let startNode = this.find(array);\n    let i = 0;\n    let shipCoordinates = [];\n    let x = startNode.xAxis;\n    let y = startNode.yAxis;\n    while (i < newShip.length) {\n      let newStart = [];\n      newStart.push(x);\n      newStart.push(y);\n      startNode = this.find(newStart);\n      shipCoordinates.push(startNode);\n      if (newShip.horizontal === true) {\n        x = x + 1;\n      }\n      if (newShip.horizontal === false) {\n        y = y - 1;\n      }\n      i = i + 1;\n    }\n    let needsNewSpot = false;\n    shipCoordinates.forEach(spot => {\n      if (spot.ship != false) {\n        needsNewSpot = true;\n      } else if (spot.above != null && spot.above.ship != false && spot.above.shipType === spot.shipType) {\n        needsNewSpot = true;\n      } else if (spot.below != null && spot.below.ship != false && spot.below.shipType === spot.shipType) {\n        needsNewSpot = true;\n      } else if (spot.left != null && spot.left.ship != false && spot.left.shipType === spot.shipType) {\n        needsNewSpot = true;\n      } else if (spot.right != null && spot.right.ship != false && spot.right.shipType === spot.shipType) {\n        needsNewSpot = true;\n      }\n    });\n    if (needsNewSpot === true) {\n      this.randomCoordinate(newShip);\n      return;\n    }\n    shipCoordinates.forEach(spot => {\n      spot.ship = true;\n      spot.shipType = newShip;\n    });\n    return shipCoordinates;\n  }\n  randomCoordinate(ship) {\n    let i = 0;\n    let x;\n    let y;\n    while (i < 1) {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n      if (ship.horizontal === true) {\n        if (x + ship.length < 10) {\n          i = 1;\n        }\n      } else {\n        if (y - ship.length >= 0) {\n          i = 1;\n        }\n      }\n    }\n    let array = [x, y];\n    this.placeShip(ship, array);\n  }\n  receiveAttack(array) {\n    let attackedSpot = this.find(array);\n    if (attackedSpot.ship === true) {\n      let shipType = attackedSpot.shipType.shipType;\n      if (shipType === \"carrier\") {\n        this.carrier.hit();\n      } else if (shipType === \"battleship\") {\n        this.battleship.hit();\n      } else if (shipType === \"cruiser\") {\n        this.cruiser.hit();\n      } else if (shipType === \"submarine\") {\n        this.submarine.hit();\n      } else if (shipType === \"destroyer\") {\n        this.destroyer.hit();\n      }\n    }\n    let loss = this.checkLoss();\n    if (loss === true) {\n      return true;\n    }\n    attackedSpot.hit = true;\n    return attackedSpot;\n  }\n  checkLoss() {\n    if (this.carrier.sunk === true && this.battleship.sunk === true && this.cruiser.sunk === true && this.submarine.sunk === true && this.destroyer.sunk === true) {\n      console.log(\"The other player has won!\");\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n//# sourceURL=webpack://Battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n\n\nconst display = {\n  dialog() {\n    let dialog = document.getElementById('player1Dialog');\n    dialog.showModal();\n    let button = document.getElementById('player1Submit');\n    button.addEventListener('click', click => {\n      click.preventDefault();\n      let input = document.getElementById('player1Name');\n      let name = input.value;\n      _player__WEBPACK_IMPORTED_MODULE_1__.realPlayer.name = name;\n      this.createUnclickableGrid();\n      this.createClickableGrids();\n      dialog.close();\n    });\n    return;\n  },\n  createUnclickableGrid() {\n    let container;\n    container = document.getElementById('player1');\n    let j;\n    let i;\n    for (j = 0; j < 10; j++) {\n      for (i = 0; i < 10; i++) {\n        let newBox = document.createElement('button');\n        newBox.value = j;\n        newBox.id = i + \"\" + j;\n        let array = [i, j];\n        if (_player__WEBPACK_IMPORTED_MODULE_1__.realPlayer.playerGameBoard.find(array).ship === true) {\n          newBox.name = \"ship\";\n        }\n        newBox.className = \"gridCells\";\n        newBox.disabled = true;\n        container.appendChild(newBox);\n      }\n    }\n    return;\n  },\n  createClickableGrids() {\n    let container;\n    container = document.getElementById('player2');\n    let j;\n    let i;\n    for (j = 0; j < 10; j++) {\n      for (i = 0; i < 10; i++) {\n        let newBox = document.createElement('button');\n        newBox.value = j;\n        newBox.id = i;\n        newBox.className = \"gridCells\";\n        newBox.addEventListener('click', () => {\n          let x = parseInt(newBox.id);\n          let y = parseInt(newBox.value);\n          let array = [x, y];\n          let status = _player__WEBPACK_IMPORTED_MODULE_1__.realPlayer.attack(array);\n          if (status === true) {\n            newBox.className += \"shipHit\";\n          } else if (status === null) {\n            newBox.name = \"hit\";\n            newBox.className += \"shipHit\";\n            let messageContainer = document.getElementById('finalMessage');\n            let message = document.createElement('h2');\n            message.textContent = \"You have won\";\n            messageContainer.append(message);\n            return;\n          }\n          newBox.disabled = true;\n          let newArray = _player__WEBPACK_IMPORTED_MODULE_1__.computerPlayer.attack();\n          let otherx = newArray[1].toString();\n          let othery = newArray[2].toString();\n          let userGameBoard = document.getElementById(otherx + \"\" + othery);\n          if (newArray[0] === true) {\n            userGameBoard.name = \"hit\";\n            userGameBoard.className += \"shipHit\";\n            let messageContainer = document.getElementById('finalMessage');\n            let message = document.createElement('h2');\n            message.textContent = \"You have lost\";\n            messageContainer.append(message);\n          } else if (newArray[0] === 1) {\n            userGameBoard.name = \"hit\";\n            userGameBoard.className += \"shipHit\";\n          } else {\n            userGameBoard.className += \"miss\";\n          }\n        });\n        container.appendChild(newBox);\n      }\n    }\n    return;\n  }\n};\nconst backSideGame = {};\ndisplay.dialog();\n\n//# sourceURL=webpack://Battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer),\n/* harmony export */   realPlayer: () => (/* binding */ realPlayer)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\nconst realPlayer = {\n  name: null,\n  playerGameBoard: new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n  attack(array) {\n    let spot = computerPlayer.playerGameBoard.receiveAttack(array);\n    if (spot === true) {\n      return null;\n    }\n    if (spot.hit === true && spot.ship === false) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n};\nconst computerPlayer = {\n  playerGameBoard: new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n  attacks: [],\n  attacksShip: [],\n  attack() {\n    let newattack;\n    let spot;\n    if (this.attacks.length === 0 || this.attacksShip.length === 0) {\n      newattack = this.randomAttack();\n      while (realPlayer.playerGameBoard.find(newattack).hit === true) {\n        newattack = this.randomAttack();\n      }\n      spot = realPlayer.playerGameBoard.find(newattack);\n    } else if (this.attacksShip.length === 1) {\n      newattack = this.attackNear();\n      spot = realPlayer.playerGameBoard.find(newattack);\n    } else if (this.attacksShip.length <= this.attacksShip[0].shipType.length) {\n      newattack = this.followAttacks();\n      spot = realPlayer.playerGameBoard.find(newattack);\n    }\n    let newArray;\n    if (spot === undefined || spot.hit === true) {\n      newattack = this.randomAttack();\n      while (realPlayer.playerGameBoard.find(newattack).hit === true) {\n        newattack = this.randomAttack();\n      }\n      spot = realPlayer.playerGameBoard.find(newattack);\n    }\n    spot.hit = true;\n    if (realPlayer.playerGameBoard.checkLoss() === true) {\n      newArray = [true];\n      let finalArray = newArray.concat(newattack);\n      return finalArray;\n    }\n    if (spot.ship === true) {\n      let i = 0;\n      this.attacksShip.forEach(ship => {\n        if (ship.shipType != this.attacksShip[this.attacksShip.length - 1].shipType) {\n          this.attacksShip.splice(i, 1);\n        }\n        i++;\n      });\n      this.attacksShip.push(spot);\n      if (this.attacksShip.length === this.attacksShip[0].shipType.length) {\n        while (this.attacksShip.length > 0) {\n          this.attacksShip.pop();\n        }\n      }\n    }\n    this.attacks.push(spot);\n    if (spot.hit === true && spot.ship === false) {\n      newArray = [0];\n    } else {\n      newArray = [1];\n    }\n    let finalArray = newArray.concat(newattack);\n    console.log(this.attacksShip);\n    return finalArray;\n  },\n  randomAttack() {\n    let x = Math.floor(Math.random() * 10);\n    let y = Math.floor(Math.random() * 10);\n    let array = [x, y];\n    return array;\n  },\n  attackNear() {\n    let i = 0;\n    let directionArray = [\"above\", \"below\", \"right\", \"left\"];\n    let newattack = this.attacksShip[0];\n    while (newattack.hit === true && directionArray.length > 0 && i < 4) {\n      newattack = this.attacksShip[0];\n      let random = Math.floor(Math.random() * directionArray.length);\n      let newDirection = directionArray[random];\n      i = i + 1;\n      if (newDirection === \"above\" && newattack.above != null) {\n        newattack = newattack.above;\n      } else if (newDirection === \"below\" && newattack.below != null) {\n        newattack = newattack.below;\n      } else if (newDirection === \"right\" && newattack.right != null) {\n        newattack = newattack.right;\n      } else if (newDirection === \"left\" && newattack.left != null) {\n        newattack = newattack.left;\n      } else {\n        if (directionArray.length > 1) {\n          directionArray.splice(random, 1);\n        } else {\n          directionArray.pop();\n        }\n      }\n    }\n    console.log(\"its going here!\");\n    if (newattack === this.attacksShip[this.attacksShip.length - 1] || newattack === null || newattack === undefined) {\n      let random = this.randomAttack();\n      newattack = realPlayer.playerGameBoard.find(random);\n      while (this.attacksShip.length > 0) {\n        this.attacksShip.pop();\n      }\n    }\n    let x = newattack.xAxis;\n    let y = newattack.yAxis;\n    return [x, y];\n  },\n  followAttacks() {\n    let random;\n    let x;\n    let y;\n    let spot;\n    let lastAttack = this.attacksShip[this.attacksShip.length - 1];\n    if (lastAttack.above != null && lastAttack.above.hit === true && lastAttack.above.ship === true && lastAttack.below != null) {\n      if (lastAttack.below.hit === true && lastAttack.below.ship === false) {\n        if (this.attacksShip[0].above != null && this.attacksShip[0].above.hit === false) {\n          spot = this.attacksShip[0].above;\n        } else {\n          random = this.randomAttack();\n          spot = realPlayer.playerGameBoard.find(random);\n          while (this.attacksShip.length > 0) {\n            this.attacksShip.pop();\n          }\n        }\n      } else if (lastAttack.below.hit === false) {\n        spot = lastAttack.below;\n      }\n    } else if (lastAttack.below != null && lastAttack.below.hit === true && lastAttack.below.ship === true && lastAttack.above != null) {\n      if (lastAttack.above.hit === true && lastAttack.above.ship === false) {\n        if (this.attacksShip[0].below != null && this.attacksShip[0].below.hit === false) {\n          spot = this.attacksShip[0].below;\n        } else {\n          random = this.randomAttack();\n          spot = realPlayer.playerGameBoard.find(random);\n          while (this.attacksShip.length > 0) {\n            this.attacksShip.pop();\n          }\n        }\n      } else if (lastAttack.above.hit === false) {\n        spot = lastAttack.above;\n      }\n    } else if (lastAttack.right != null && lastAttack.right.hit === true && lastAttack.right.ship === true && lastAttack.left != null) {\n      if (lastAttack.left.hit === true && lastAttack.left.ship === false) {\n        if (this.attacksShip[0].right != null && this.attacksShip[0].right.hit === false) {\n          spot = this.attacksShip[0].right;\n        } else {\n          random = this.randomAttack();\n          spot = realPlayer.playerGameBoard.find(random);\n          while (this.attacksShip.length > 0) {\n            this.attacksShip.pop();\n          }\n        }\n      } else if (lastAttack.left.hit === false) {\n        spot = lastAttack.left;\n      }\n    } else if (lastAttack.left != null && lastAttack.left.hit === true && lastAttack.left.ship === true && lastAttack.right != null) {\n      if (lastAttack.right.hit === true && lastAttack.right.ship === false) {\n        if (this.attacksShip[0].left != null && this.attacksShip[0].left.hit === false) {\n          spot = this.attacksShip[0].left;\n        } else {\n          random = this.randomAttack();\n          spot = realPlayer.playerGameBoard.find(random);\n          while (this.attacksShip.length > 0) {\n            this.attacksShip.pop();\n          }\n        }\n      } else if (lastAttack.right.hit === false) {\n        spot = lastAttack.right;\n      }\n    } else {\n      spot = realPlayer.playerGameBoard.find(this.attackNear());\n    }\n    x = spot.xAxis;\n    y = spot.yAxis;\n    let newattack = [x, y];\n    return newattack;\n  }\n};\n\n\n\n//# sourceURL=webpack://Battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ships {\n  constructor(length, isHorizontal, shipType) {\n    this.length = length;\n    this.horizontal = isHorizontal;\n    this.hits = 0;\n    this.sunk = false;\n    this.shipType = shipType;\n  }\n  hit() {\n    this.hits = this.hits + 1;\n    this.isSunk();\n    return this.sunk;\n  }\n  isSunk() {\n    if (this.length === this.hits) {\n      this.sunk = true;\n    } else {\n      this.sunk = false;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);\n\n//# sourceURL=webpack://Battleship/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    padding: 0;\n}\nh1 {\n    text-align: center;\n}\n:disabled {\n    background-color: grey;\n}\n#centerOfPage {\n    display: inline-flex;\n    margin-top: 10%;\n    width: 100%;\n    height: 70vh;\n}\n#player1, #player2 {\n    display: grid;\n    margin-left: 10%;\n    margin-right: 10%;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns:  repeat(10, 1fr);\n    width: 30%;\n    height: 65%;\n}\nbutton[name=ship] {\n    background-color: green;\n}\n.gridCellsshipHit {\n    background-color: red;\n}\n.gridCellsmiss {\n    background-color: aqua;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;