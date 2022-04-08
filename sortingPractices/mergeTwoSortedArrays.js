
function mergeTwoSortedArray(array1, array2){

    const result =[];
    let i=0,j=0;
    while(i<array1.length && j<array2.length){
        if(array1[i]<=array2[j]){
            result.push(array1[i]);
            i++;
        }else{
            result.push(array2[j]);
            j++;
        }
    }
    while(i<array1.length){
        result.push(array1[i]);
        i++;
    }
    while(j<array2.length){
        result.push(array2[j]);
        j++;
    }
    console.log(result);
}

const arr1 = [2,6,9]
const arr2 = [1,4,8,10,23];
mergeTwoSortedArray(arr2, arr1)
// [1,2,4,6,8,10,23]
// T(n) => O(n)
// S(n) => O(n)