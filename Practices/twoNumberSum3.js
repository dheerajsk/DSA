



function twoNumberSum(array, target){

    let result={};  // Object is Hash Table ->  {key: value}
    for(let i=0; i<array.length; i++){ // n
        let x = array[i]; // 3  // 1
        let y = target-x; // 7 //1
        if(y in result){ //1  // please check if there is a key with y in hash table.
            return[y, x]; //1
        }else{
            result[x]=true; //1
        }
    }
    return []; //1
}

consle.log(twoNumberSum([3,5,-4, 8, 11, 1, -1, 6], 10));

// T(n)=> O(n)
// S(n) => O(n)