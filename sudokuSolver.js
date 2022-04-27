
function solveSudoku(board){
    solvePartialSudoku(0, 0, board);
    return board;
}

function solvePartialSudoku(row, col, board){
    if(col==board.length){
        row++;
        col=0;
        if(row==board.length){
            return true;
        }
    }
    // if value is 0, try 1-9
    if(board[row][col]==0){
        return tryAtThisPosition(row, col, board)
    }
    // if not 0, move to next col.
    return solvePartialSudoku(row, col+1, board);
}

function tryAtThisPosition(row, col, board){
    for(let i=1; i<10; i++){
        if(isValid(row, col, board, i)){
            board[row][col]=i;
            if(solvePartialSudoku(row, col+1, board)){
                return true;
            }
        }
    }
    board[row][col]=0;
    return false;
}

function isValid(row, col, board, value){

    // check if row already contains value
    const isValidRow = !board[row].includes(value);
    // check if column already contains value.
    const isValidCol = !board.map(r=> r[col]).includes(value);
    if(!isValidCol || !isValidRow) return false;
    // Find grid positions.
    const girdRowStart = Math.floor(row/3)*3;
    const gridColStart = Math.floor(col/3)*3;
    // look in grid to find value.
    for(let ri=0; ri<3; ri++){
        for(let ci=0; ci<3; ci++){
            const rowToCheck = girdRowStart+ri;
            const colToCheck = gridColStart+ci;
            if(board[rowToCheck][colToCheck]==value){
                return false;
            }
        }
    }
    return true;
}

// cols=[];
// for(let i =0; i<board.length; i++){
//     let r = board[i];
//     cols.push(r[col]);
// }

const board=[
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7]
  ];

console.log(solveSudoku(board));

// T(n) = 9^(n*n) => 9^(81)=> O(1)
