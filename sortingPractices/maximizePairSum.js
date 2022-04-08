

function findMaximizePairSum(array){
    array.sort((a, b)=> b-a);

    const sum = array[0]+array[1];
    console.log(sum);
}


const array = [59, 23, 17, 8, 32, 4, 40]; // =>99
findMaximizePairSum(array);

// T(n) => nlogn
// S(n) => O(1)