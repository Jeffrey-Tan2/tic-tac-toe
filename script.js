/*
Tic-Tac-Toe script
By: Jeffrey Tan
*/

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

const playerFactory = ((playerName, marker) => {
    let score = 0;
    const winMsg = () => {return document.getElementById("winner").innerHTML = playerName + " wins!"};
    const getScore = () => {return score};
    const addScore = () => score++;
    const resetScore = () => score = 0;
    return {playerName, marker, score, winMsg, addScore, getScore, resetScore};
})

const gameBoard = (() => {
    const toggleBtns = () => {
        if (!gameState) {
            document.getElementById("restart").style.border = "2px solid red";
            document.getElementById("reset-scores").style.border = "2px solid red";
        } else {
            document.getElementById("restart").style.border = "transparent";
            document.getElementById("reset-scores").style.border = "transparent";
        }
    }
    board = Array(9);
    gameState = true;
    toggleBtns();
    const p1 = playerFactory('Player 1', 'x');
    const p2 = playerFactory('Player 2', 'o');
    currPlayer = p1;
    document.getElementById("player-turn").innerHTML = currPlayer.playerName + "'s turn " + "(" + currPlayer.marker + ")";
    document.getElementById("player1-score").innerHTML += p1.playerName + "'s score: " + p1.getScore();
    document.getElementById("player2-score").innerHTML += p2.playerName + "'s score: " + p2.getScore();
    let restartBtn = document.getElementById("restart");
    restartBtn.addEventListener("click", () => {
        resetBoard();
    })
    let resetScoreBtn = document.getElementById("reset-scores");
    resetScoreBtn.addEventListener("click", () => {
        resetBoard();
        p1.resetScore();
        p2.resetScore();
        document.getElementById("player1-score").innerHTML = p1.playerName + "'s score: " + p1.getScore();
        document.getElementById("player2-score").innerHTML = p2.playerName + "'s score: " + p2.getScore();
    })
    const createBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "_";
            let block = document.createElement("div");
            let grid = document.getElementById("grid");
            block.id = i;
            block.className = "block";
            block.addEventListener("click", () => {
                if (board[i] == "_" && gameState) {
                    document.getElementById(i).innerHTML = currPlayer.marker;
                    board[i] = currPlayer.marker;
                    switchPlayer();
                    document.getElementById("player-turn").innerHTML = currPlayer.playerName + "'s turn " + "(" + currPlayer.marker + ")";
                    checkBoard();
                } else {
                    return;
                } 
            })
            grid.appendChild(block);
        }
    }
    const checkBoard = () => {
        if (boardFull()) {
            document.getElementById("winner").innerHTML = "It's a tie!";
            gameState = false;
            toggleBtns();
        } else if (checkWin(p1.marker)) {
            p1.winMsg();
            p1.addScore();
            document.getElementById("player1-score").innerHTML = p1.playerName + "'s score: " + p1.getScore();
            gameState = false;
            toggleBtns();
        } else if (checkWin(p2.marker)) {
            p2.winMsg();
            p2.addScore();
            document.getElementById("player2-score").innerHTML = p2.playerName + "'s score: " + p2.getScore();
            gameState = false;
            toggleBtns();
        }
    }
    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "_";
            document.getElementById(i).innerHTML = "";
        }
        currPlayer = p1;
        document.getElementById("player-turn").innerHTML = currPlayer.playerName + "'s turn " + "(" + currPlayer.marker + ")";
        document.getElementById("winner").innerHTML = "";
        gameState = true;
        toggleBtns();
    }
    const boardFull = () => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "_") {
                return false;
            }
        }
        return true;
    }
    const switchPlayer = () => {
        if (currPlayer == p1) {
            currPlayer = p2;
        } else {
            currPlayer = p1;
        }
    }
    const checkWin = (marker) => {
        if ((board[0] == marker && board[1] == marker && board[2] == marker)
             || (board[3] == marker && board[4] == marker && board[5] == marker)
             || (board[6] == marker && board[7] == marker && board[8] == marker)
             || (board[0] == marker && board[3] == marker && board[6] == marker)
             || (board[1] == marker && board[4] == marker && board[7] == marker)
             || (board[2] == marker && board[5] == marker && board[8] == marker)
             || (board[0] == marker && board[4] == marker && board[8] == marker)
             || (board[2] == marker && board[4] == marker && board[6] == marker)) {
                return true;
            } else {
                return false;
            }
    }
    return {
        board,
        createBoard,
        checkBoard,
        resetBoard,
        boardFull,
        switchPlayer,
        checkWin,
        toggleBtns,
    };
})();

gameBoard.createBoard();