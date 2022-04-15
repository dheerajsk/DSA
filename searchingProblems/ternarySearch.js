
function ternarySearch(array, key){
    console.log(searchHelper(array, 0, array.length-1, key));
}


function searchHelper(array, left, right, key){
    if(left>right) return -1;
    // 1. Find mid1, mid2
    let mid1 = Math.floor(left+(right-left)/3);
    let mid2 = Math.floor(right-(right-left)/3);

    // 2. If mid1 or mid2 is key
    if(array[mid1]==key) return mid1;
    if(array[mid2]==key) return mid2;

    // 3. if key<mid1
    if(array[mid1]>key){
        return searchHelper(array, left, mid1-1, key);
    }
    else if(array[mid2]<key){
        return searchHelper(array, mid2+1, right, key);
    }else{
        return searchHelper(array, mid1+1, mid2-1, key);
    }
}

ternarySearch([2,4,8,11,19,25,34,68,91,104], 111);

// T(n) => O(logB3(n))
// S(n) => O(logB3(n))