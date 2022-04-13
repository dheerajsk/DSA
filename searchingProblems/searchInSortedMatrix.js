

function searchInSortedMatrix(arr, key){
    for(let i=0;i<arr.length;i++){ 
        for(let j=0;j<arr[0].length;j++){ 
            if(arr[i][j] == key){ 
                return [i, j];
            } 
        } 
    } 
    return [-1, -1]
}

const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003]
]     
const key = 41;
console.log(searchInSortedMatrix(matrix, key));

// T(n, m) => O(n*m)
// .. n=> no of rows, m is no of columns