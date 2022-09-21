'use strict'

const FLAG = '🚩'
const CELL = '⬜'
const EMPTY = ' '
const MINE = '💣'

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gBoard = {
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}

var gLevel = {
    SIZE: 4,
    MINES: 2
};

function init() {
    console.log('hello')

    gBoard = buildBoard()



function restartGame() {
    gGame.score = 0
    init()
}

function buildBoard() {
    const board = []

    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])

        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = j + 1
        }
    }
    board[randomInt][0] = MINE
    board[randomInt][3] = MINE
    board[1][randomInt] = MINE
    board[2][randomInt] = MINE
    return board
}



renderBoard(gBoard,'.board-container')
// var strHTML = '';
// for (var i = 0; i < gBoard.length; i++) {
//     strHTML += `<tr>`
//     for (var j = 0; j < gBoard[0].length; j++) {
//         var currCell = gBoard[i][j]
//         var className = currCell ? 'occupied' : ''
//         strHTML += `<td class="${className}"
//         data-i="${i}" data-j="${j}"
//         onclick="onCellClicked(this,${i},${j})">
//         ${currCell}</td>`
//     }
//     strHTML += `</tr>`
// }
// // console.log('strHTML', strHTML)
// var elBoard = document.querySelector('.board-container')
// elBoard.innerHTML = strHTML    
}

function updateScore(diff) {
    gGame.score += diff
    document.querySelector('h2 span').innerText = gGame.score
}

function setMinesNegsCount() {
    
}

function gameOver() {
    alert('Game Over')
    gGame.isOn = false
    var isReStart = confirm('Wanna play again?')
    if (isReStart = true) {
        init()
    } else {
        return
    }
}

