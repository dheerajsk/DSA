

function selectionSort(array){
    var minIndex;
    // [2, 4, 6, 11, 15, 31, 98];
    for(let i=0; i<n-1; i++){ // [5, 98]
        // 1. Find minimum elememt
        minIndex=i; // Assume minIndex is i [5, 98]
        for(let j=i+1;j<n; j++){ 
            if(array[j]<array[minIndex]){ 
                minIndex=j; // [6,31]
            }
        }
        // 2. swap minIndex with i
        var temp = array[minIndex]; // 2
        array[minIndex]=array[i]; // 6
        array[i]=temp; // 2
        //[2, 6, 31, 4, 98, 15, 11];
    }
}

function print(array){
    for(let i in array){
        console.log(array[i]+" ");
    }
}

// T(n) => (n-1)*(n-i) => n^2
// S(n) => O(n)=> O(1)

const array = [6, 2, 31, 4, 98, 15, 11];
selectionSort(array);