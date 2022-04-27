

function knightTour(){

    // Creating 8*8 board and assign 0 to every block.
    const board = new Array(8);
    for(let i=0; i<board.length; i++){
        board[i]=new Array(8);
        for(let j=0; j<board.length; j++){
            board[i][j]=0;
        }
    }
    // Start move from 1st block.[0,0]
    board[0][0]=1;
    // Starting the tour from [0,0];
    if(!partialKnightTour(board, 0, 0, 1)){
        console.log("no path found");
    }
}   

let pathRow = [2,1,-1,-2, -2, -1, 1, 2];
let pathCol = [1, 2, 2, 1,-1,-2,-2,-1];

// Tour begins at this function.
function partialKnightTour(board, row, col, move){
    // If all blocks visited, it will print the board.
    if(move==64){
        // printing the board.
        const r = board.map(b=> b.join(" ")).join("\n");
        console.log(r);
        return true;
    }

    // Find next potential move for one of the 8 paths.
    for(let i=0; i<pathRow.length; i++){
        const nextRow = row+pathRow[i];
        const nextCol = col+pathCol[i];
        // Check if next move is valid.
        if(isValid(board, nextRow, nextCol)){
            move++;
            board[nextRow][nextCol]=move;
            // if valid, continue to move to next position
            if(partialKnightTour(board, nextRow, nextCol, move)){
                return true;
            }
            // if couldn't continue, revert back.
            move--;
            board[nextRow][nextCol]=0;
        }
    }
    return false;
}

function isValid(baord, row, col){
    // if next move is 0 and not outside board.
    if(row>=0 && col>=0 && row<8 && col<8 && baord[row][col]==0){
        return true;
    }
    return false;
}

knightTour();

// T(n) => 8^(n^2) => 8^64 => O(1)