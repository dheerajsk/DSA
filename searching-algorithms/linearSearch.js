


function linearSearch(array, key){

    for(let i=0; i<array.length; i++){
        if(array[i]==key){
            console.log("Data found at index "+i);
            return;
        }
    }
    console.log("Data not found");
}

const inputArray = [89, 32, 43, 82, 19, 20, 47, 19];
const key = 200;
linearSearch(inputArray, key);

// T(n) => O(n)
// S(n) => 1