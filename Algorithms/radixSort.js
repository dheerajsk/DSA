
function radixSort(array){

    let n = array.length;

    // Step 1: Find MAX.
    let MAX = 0;
    for(let i=0; i<n; i++){
        if(array[i]>MAX){
            MAX = array[i];
        }
    }
    // [312, 54, 9, 786]
    // Step 2: Fid no of digits in MAX. 312/1, 10, 100, 1000
    for(let position=1; MAX/position>1; position = position*10){
        countSort(array, position);
    }
    console.log(array);
}

function countSort(array, position){
    const n = array.length;
    const output = Array.from({length: n});

        // Pre Steps.
        let max=0;
        for(i=0; i<n; i++){ // O(n)
           if(array[i]>max){
               max = array[i];
           }
        }
        
    // Step 1: Create count array
    const count = Array.from({length: max});

    // Step 2 : Initialize 0.
    for(i=0;i<=10; i++){ // O(n)
        count[i]=0;
    }

    // [312, 54, 9, 786]
    // Step 3: Calculate occurances.
    for(i=0; i<n; i++){ // O(n)
        count[Math.floor(array[i]/position)%10]++;
    }
    
    // Step 4: Calculate cummulative count.
    for(i=1; i<=max; i++){
        count[i]=count[i]+count[i-1];
    }
    
    // Place value form input at correct position.
    for(i=n-1; i>=0; i--){
        output[count[Math.floor(array[i]/position)%10]-1] = array[i];
        count[Math.floor(array[i]/position)%10]--;
    }
    
    for(let i=0; i<n; i++){
        array[i]=output[i];
    }

}

radixSort([312, 54, 9, 786]);
