


function minIncreament(array){
    
    array.sort((a,b)=> a-b);
    let counter=0;
    for(let i=1; i<array.length; i++){
       if(array[i]<=array[i-1]){
           const temp = array[i];
           array[i] = array[i-1]+1;
           counter+=array[i]-temp;
       }
    }
    console.log(array);
    console.log(counter);
}

// T(n) => nlogn+n => O(nlogn)
// S(n) => O(1)

const array = [3,7,1,2,1,4]
// o/p => 4   => [3,7,5,2,1,4]
minIncreament(array);
