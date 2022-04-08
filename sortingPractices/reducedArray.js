

function reduceArray(array){

    let obj ={};

    for(let i=0; i<array.length; i++){
        obj[array[i]]=i;
    }
    console.log(obj);
    array.sort((a,b)=> a-b);

    for(let i=0; i<array.length; i++){
       array[i] = obj[array[i]];
    }

    console.log(array);
}

// T(n) => n+ nlogn +n => 2n+nlogn => nlogn

const input = [4, 29, 18, 11, 7, 32]; // [4,7,11,18,29,32]
// opt => [0, 4, 3, 2, 1, 5]
reduceArray(input);

function reduceArray(array){
    let array1 = array.map(x=>x).sort((a,b)=>a-b)

    for(let i=0; i<array.length; i++){
        for(let j=0;j<array1.length;j++){
            if(array[i]==array1[j])
            {
                array[i] = j
            }
        }
    }
    console.log(array);
}
let array =[4,29,18,11,7,32]
reduceArray(array);

// T(n)=> O(n^2)