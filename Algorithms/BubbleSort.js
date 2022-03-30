

function bubbleSort(array){
    // const n = array.length; // 1

    // Iteration Loop to go through n numer of times.
    for(let i=0; i<array.length-1; i++){ // n  //1
        // print(array);  // C1
        console.log("Iteration "+i); // C1
        // Comparing and Swapping.
        for(let j=0; j<array.length-i-1; j++){ // n-i-1 //1
            if(array[j]>array[j+1]){
                console.log("Swapping "+array[j]+" with "+array[j+1]);
                var temp = array[j]; //1
                array[j]=array[j+1];
                array[j+1] = temp;
            }
        }
        console.log("Iteration "+i+" completed");
        // print(array);
    }

}

// T(n) -> O(n^2)
    // n*(n-i-1)=> n^2-in-n=>n^2
// S(n)=> O(4)=> O(1)

function print(array){
    for(let i in array){
        console.log(array[i]+" ");
    }
}

const array = [6, 2, 31, 4, 98, 15, 11];
bubbleSort(array);

// expected output [2, 4, 6, 11, 15, 31, 98]
