

function isMountainArray(...array){
    let n = array.length; 
    if(n<3){
        console.log(false);
        return;
    }

    // Create left and right pointers.

    let leftPointer = 0;
    let rightPointer = n-1;
    while(leftPointer<n-1 && array[leftPointer]<=array[leftPointer+1]){
  
        leftPointer++;
    }
    while(rightPointer>0 && array[rightPointer]<=array[rightPointer-1]){
        rightPointer--;
    }
    if(rightPointer==leftPointer && rightPointer>0 && leftPointer<n-1){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// isMountainArray(0, 3, 2, 1); // true
// isMountainArray(0, 3, 2,3,2, 1); // false
// isMountainArray(2,1); // false
// isMountainArray(2,4,4,6,3,2); // true
// isMountainArray(0,1,2,3,4,5,6,7,8,9); // false

// T(n) => O(n)
// S(n) => O(1)

