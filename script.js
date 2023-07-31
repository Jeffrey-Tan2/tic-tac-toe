/*
Tic-Tac-Toe script
By: Jeffrey Tan
*/

const gameBoard = (() => {
    board = Array(9);
    const createBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "_";
            let block = document.createElement("div");
            let grid = document.getElementById("grid");
            block.className = "block";
            block.addEventListener("click", () => {
                board[i] = "o";
                console.log(board);
                checkBoard(board);
            })
            grid.appendChild(block);
        }
    }
    const checkBoard = () => {
        if (boardFull) {
            console.log("it's a tie!");
            resetBoard();
        } else {
            if (board[0] == "x" && board[1] == "x" && board[2] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[3] == "x" && board[4] == "x" && board[5] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[6] == "x" && board[7] == "x" && board[8] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[0] == "x" && board[3] == "x" && board[6] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[1] == "x" && board[4] == "x" && board[7] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[2] == "x" && board[5] == "x" && board[8] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[0] == "x" && board[4] == "x" && board[8] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[2] == "x" && board[4] == "x" && board[6] == "x") {
                console.log("x marker wins!");
                resetBoard();
            } else if (board[0] == "o" && board[1] == "o" && board[2] == "o") {
                console.log("o marker wins!");
                resetBoard();
            } else if (board[3] == "o" && board[4] == "o" && board[5] == "o") {
                console.log("o marker wins!");
                resetBoard();
            } else if (board[6] == "o" && board[7] == "o" && board[8] == "o") {
                console.log("o marker wins!");
                resetBoard();
            } else if (board[0] == "o" && board[3] == "o" && board[6] == "o") {
                console.log("o marker wins!");
                resetBoard();
            } else if (board[1] == "o" && board[4] == "o" && board[7] == "o") {
                console.log("o marker wins!");
                resetBoard();
            } else if (board[2] == "o" && board[5] == "o" && board[8] == "o") {
                console.log("o marker wins!");
                resetBoard();
            } else if (board[0] == "o" && board[4] == "o" && board[8] == "o") {
                console.log("o marker wins!");
                resetBoard();
            } else if (board[2] == "o" && board[4] == "o" && board[6] == "o") {
                console.log("o marker wins!");
                resetBoard();
            }
        }
    }
    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "_";
        }
    }
    const boardFull = () => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "_") {
                return false;
            }
        }
        return true;
    }
    return {
        board,
        createBoard,
        checkBoard,
        resetBoard,
        boardFull,
    };
})();

const playerFactory = ((playerName, marker) => {
    const winMsg = () => console.log(playerName + " wins!");
    return {playerName, marker, winMsg};
})

gameBoard.createBoard();