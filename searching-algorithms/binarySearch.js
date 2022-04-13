


function binarySearch(array, key, left, right){

    if(left<=right){
        
    // Step 1: Find the mid element
    const mid = Math.floor((right+left)/2);
    
    console.log(array[mid]);
    // Step 2: Check if mid is key.
    if(array[mid]==key){
        console.log("Element found at index "+mid);
        return;
    }
    // Step 3: If key is less than mid element.
    else if(array[mid]<key){
        console.log("mid is less");
        return binarySearch(array, key, mid+1, right);
    }
    // Step 4: If key is greater than mid element.
    else{
        console.log("mid is greater");
        return binarySearch(array, key, left, mid-1);
    }
    }
    console.log("Element not found");
}

binarySearch([4, 15, 32, 46, 78, 92, 104], 32, 0, 6);

// T(n) => O(logn) // 4-> 2, 8-> 3, 16-> 4
// S(n) => O(n)

