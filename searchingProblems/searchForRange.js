

function searchRange(array, key){
    rangeResult=[-1, -1];
    searchHelper(array, 0, array.length-1, key, rangeResult, true); // logn
    searchHelper(array, 0, array.length-1, key, rangeResult, false); // logn
    console.log(rangeResult);
}

function searchHelper(array, left, right, key, rangeResult, searchInLeft){

    if(left>right) {return;}
    let mid = Math.floor((left+right)/2);
    if(array[mid]<key){
        searchHelper(array, mid+1, right, key, rangeResult, searchInLeft);
    }else if(array[mid]>key){
        searchHelper(array, left, mid-1, key, rangeResult, searchInLeft);
    }else{
        if(searchInLeft){
            if(mid==0 || array[mid-1]!=key){
                rangeResult[0]=mid;
            }else{
                searchHelper(array, left, mid-1, key, rangeResult, searchInLeft);
            }
        }else{
            if(array[mid+1]!=key || mid==array.length-1){
                rangeResult[1]=mid;
            }else{
                searchHelper(array, mid+1, right, key, rangeResult, searchInLeft);
            }
        }
    }
}

searchRange([2, 4, 4, 7, 7, 7, 7, 9, 11], 4);

// T(n) => logn*logn || logn+logn => 2logn => O(logn)
// S(n) => O(logn)
