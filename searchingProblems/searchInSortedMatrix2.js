

function searchInSortedMatrix(arr, key){
   
    let row = 0;
    let col = arr[0].length-1;
    let counter=0;
    while(row<arr.length && col>=0){
        console.log(counter++);
        // 1. if [row, col] is key.
        if(arr[row][col]==key){
            return [row, col];
        }
        // 2. if key less than [row, col]
        else if(arr[row][col]>key){
            col--;
        }else{
            row++;
        }
    }

    return [-1, -1];
}

const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003]
]     

const key = 40;
console.log(searchInSortedMatrix(matrix, key));

// T(n,m) => O(n), logn
// S(n,m) =>
