

function countSort(...array){

    const length = array.length;
    const output = Array.from({length: length});

    // Pre Steps.
    let max=0;
    for(i=0; i<length; i++){ // O(n)
       if(array[i]>max){
           max = array[i];
       }
    }
    
    // Step 1: Create count array
    const count = Array.from({length: max});

    // Step 2: Store count of every character from input.
    for(i=0;i<=max; i++){ // O(n)
        count[i]=0;
    }
    console.log(count);
    // [2, 7, 18, 9]
    for(i=0; i<length; i++){ // O(n)
        count[array[i]]++;
    }
    console.log(count);

    // Step 3: Cummulative sum of values.
    for(i=1; i<=max; i++){
        count[i]=count[i]+count[i-1];
    }
    
    console.log(count);

    // Step 4: Find correct index of input element in output array.
    for(i=length-1; i>=0; i--){
        const currentInputElement = array[i]; // 3
        const valueAtCount = count[currentInputElement]; // Find value in count // 2
        count[currentInputElement] = valueAtCount-1; // Decreament the value // 1
        const decreasedValueAtCount = count[currentInputElement]; // 1
        output[decreasedValueAtCount]=array[i]; // copy into output
    }
    console.log(output);

}

countSort(7,3,2,4,1,7,3,10);

// O(n)+O(n)+O(n)+O(n) => O(5n)=>. O(n)