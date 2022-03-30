

function insertionSort(array){
    // [2, 6, 31, 4, 98, 15, 11];
    // Outer iteration [Pick element from 1st position till end]
    for(let i=1; i<array.length; i++){
            // key - 15, i=5, j=4
        let key = array[i]; // preserve key because array[i] will change.
        
        let j = i-1; //3, 4
        while(j>=0 && array[j]>key){  // key=15, j=4
            array[j+1]=array[j]; //[2, 6, 31, 4, 98, 98, 11];
            j=j-1; 
        }
        array[j+1]=key;  //[2, 4, 6, 11, 15, 31, 98];
    }
    print(array);
}


function print(array){
    for(let i in array){
        console.log(array[i]+" ");
    }
}

// T(n) - O(n^2)
// S(n) - O(1)

const array = [6, 2, 31, 4, 98, 15, 11];
insertionSort(array);

// expected output [2, 4, 6, 11, 15, 31, 98]