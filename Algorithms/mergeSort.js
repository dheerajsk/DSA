

function divide(array, leftIndex, rightIndex){
    if(leftIndex>=rightIndex){
        // stop dividing, array has just one element.
        return;
    }
    // left->, right->6=> 0+parseInt((0-6)/2)=>0+3 => 3
    // 0+parseInt((0-8)/2)=> 0+3 => 3
    // 4+ (4-6)/2 => 4+parseInt((4-6)/2) => 4+1 => 5
    var mediumIndex = leftIndex+ parseInt((rightIndex-leftIndex)/2);
    divide(array, leftIndex, mediumIndex); // left array
    divide(array, mediumIndex+1, rightIndex); // right array
    merge(array, leftIndex, mediumIndex, rightIndex);
}

    // 0, 3, 6 =>
function merge(array, left, medium, right){
   
    var leftArraySize = medium-left+1; // 3-0+1 => 4
    var rightArraySize =right-medium; //6-3 =3
    var leftArray = new Array(leftArraySize);
    var rightArray = new Array(rightArraySize);

    // [2, 3, 4, 5, 6] -> 0, 2, 4   - > Size (3), (2)
    // Create left and right array.
    for(var i=0; i<leftArraySize; i++){
        leftArray[i]=array[left+i]; //2, 3, 4
    }

    for(var j=0; j<rightArraySize; j++){ 
        rightArray[j]=array[medium+1+j]; // 5, 6
    }

    // Merge and Sort
    i=0, j=0;
    var k=left;
    // 2,3,4, i   // 5j,6     // 2,3,4
    while(i<leftArraySize && j<rightArraySize){
        if(leftArray[i]<=rightArray[j]){
            array[k]=leftArray[i];
            i++;
        }else{
            array[k]=rightArray[j];
            j++;
        }
        k++;
    }
     // 2,3,4
    while(i<leftArraySize){
        array[k]=leftArray[i];
        i++;
        k++;
    }
    // 2<2   // 5,6j 
    while(j<rightArraySize){
        array[k]=rightArray[j]; // 2,3,4,5,6
        j++;k++;
    }

}

const array=[7, 13, 2, 94, 3, 67, 43, 21];
divide(array, 0, array.length-1);
for(let i=0; i<array.length-1; i++){
    console.log(array[i]);
}