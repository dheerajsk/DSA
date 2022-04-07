
function bucketSort(array){
    const n = array.length;
    // Step 1: Create buckets.
    let buckets = new Array(n);
    for(let i=0; i<n; i++){
        buckets[i]=[];
    }

    // Step 2: Scatter elements from input into buckets.
    for(let i=0; i<n; i++){
        const index = Math.floor(array[i]/n); //  24/11 = 2
        buckets[index].push(array[i]);
    }

    // Step 3: Sort all the buckets.
    for(let i=0; i<n; i++){ // no of buckets
        buckets[i].sort((a, b)=> a-b);
    }

    // Step 4: Copy elements from individual buckets into output array.
    const result = [];
    let k=0;
    for(let i=0; i<n; i++){
        const bLength = buckets[i].length;
        for(j=0; j<bLength; j++){
            result[k]=buckets[i][j];
            k++;
        }
    }
    console.log(result);
}

bucketSort([24, 78, 32, 1, 42, 60, 39, 40, 7, 19, 21]);

