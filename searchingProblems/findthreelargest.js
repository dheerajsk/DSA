

function findThreeLargestNumber(array){
    let max1=-1; // 90
    let max2=-1;
    let max3=-1;
    for(let i=0; i<array.length; i++){
        if(array[i]>max1){
            max1 = array[i];
        }
    }
    for(let i=0; i<array.length; i++){
        if(max2<max1 && max2<array[i] && array[i]!=max1){
            max2 = array[i];
        }
    }
    for(let i=0; i<array.length; i++){
        if(max3<max2 && max3<array[i] && array[i]!=max1 && array[i]!=max2){
            max3 = array[i];
        }
    }
    console.log([max3, max2, max1]);
}

const array = [7,7,7];
findThreeLargestNumber(array); // [73, 89 90];

// T(n) => O(n)
// S(n) => O(1)
