

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
    for(i=0;i<=10; i++){ // O(n)
        count[i]=0;
    }

    console.log(count);
    for(i=0; i<length; i++){ // O(n)
        count[array[i]]++;
    }
    console.log(count);

    let k=0;
    for(j=0; j<count.length; j++){ // O(n)
        while(count[j]>0){ //O(n-1)
            output[k]=j;
            k++;
            count[j]--;
        }
    }

    console.log(output);

}

countSort(7,3,2,4,1,7,3,10);

// O(n)+O(n)+O(n)+O(n) => O(4n)=>. O(n^2)