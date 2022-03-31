


1, 2, 3, 4, 5, 6, 7, 8, 
function divide(array, leftIndex, rightIndex){
    if(leftIndex>=rightIndex){
        // stop dividing, array has just one element.
        return;
    }
    // left->, right->6=> 0+parseInt((0-6)/2)=>0+3 => 3
    // 0+parseInt((0-8)/2)=> 0+3 => 3
    // 4+ (4-6)/2 => 4+parseInt((4-6)/2) => 4+1 => 5
    var mediumIndex = leftIndex+ parseInt((rightIndex-leftIndex)/2);
    divide(array, leftIndex, mediumIndex); // left array n/2
    divide(array, mediumIndex+1, rightIndex); // right array n/2
    merge(array, leftIndex, mediumIndex, rightIndex);
}

function merge(array, left, medium, right){
    console.log("\n=============\n")
    for(let n=left; n<=right; n++){
        console.log(array[n]);
    }
   
    console.log("left: "+left);
    console.log("medium: "+medium);
    console.log("right: "+right);

    var leftArraySize = medium-left+1;
    var rightArraySize =right-medium; 
    var leftArray = new Array(leftArraySize);
    var rightArray = new Array(rightArraySize);

    // Create left and right array.
    for(var i=0; i<leftArraySize; i++){
        leftArray[i]=array[left+i]; 
    }
    console.log("Left Array: "+leftArray);
    for(var j=0; j<rightArraySize; j++){ 
        rightArray[j]=array[medium+1+j]; 
    }

    console.log("Right Array: "+rightArray);

    // Merge and Sort
    // 2i,7,13   // 3j,94   //  2,3,7
    i=0, j=0;
    var k=left;
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

    console.log(i,j);
    console.log("Between Merge: "+array);
    while(i<leftArraySize){
        array[k]=leftArray[i];
        i++;
        k++;
    }
    while(j<rightArraySize){
        array[k]=rightArray[j]; 
        j++;k++;
    }
    console.log("After Merge: "+array);

}

const array=[7, 13, 2, 94, 3];
divide(array, 0, array.length-1);
// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }