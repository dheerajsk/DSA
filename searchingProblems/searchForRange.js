

function searchRange(array, key){


}

function first(array, left, right, key){
    if(left<right){

        const mid = Math.floor((left+right)/2);
        if(key==array[mid] || key>array[mid]){
            right=mid-1;
        }else{
            left = mid+1;
        }
    }
}


searchRange([2, 4, 7, 7, 7, 7, 7, 9, 11], 7);