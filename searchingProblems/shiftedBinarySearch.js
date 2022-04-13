

function shiftedBinarySearch(array, key){
    const result = binarySearch(array, key, 0, array.length-1);
    console.log(result);
}

function binarySearch(array, key, left, right){
    if(left>right) return -1;
    // Step 1: Find mid
    mid = Math.floor((left+right)/2);
    midValue = array[mid];
    // Step 2: Is Key same as mid.
    if(key==midValue){
        return mid;
    }
    // Step 3: If left array is sorted
    if(array[left]<midValue){
        //  3.1 Does key exist in left.
        if(key<midValue && key>=array[left]){
            return binarySearch(array, key, left, mid-1);
        }else{
            // 3.2 When key doesn't exist in left.
            return binarySearch(array, key, mid+1, right);
        }
    }else{ // 4. If right array is sorted.
        // 4.1 Does key exist in right.
        if(key>midValue && key<=array[right]){
            return binarySearch(array, key, mid+1, right);
        }else{
            return binarySearch(array, key, left, mid-1);
        }
    }
}

const array = [72, 91, 2, 7, 13, 24, 37, 59];
const key = 379;
shiftedBinarySearch(array, key);

// T(n) => O(logn)
// S(n) => O(logn)