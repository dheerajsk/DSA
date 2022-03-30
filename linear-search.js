
// Expectations:
// Input 1 : [45, 89, 29, 43, 49, 36, 41, 100, 32];
// Find 49 - Found
// 37 - Not found

const numbers = [45, 89, 29, 43, 49, 36, 41, 100, 32];
// length of Array = 9
// Max index = 8

function linearSearch(numToFind){
    for(let i=0; i<numbers.length; i++){  // n
        if(numbers[i]==numToFind){        // n
            console.log("Number found at "+i +" index"); // 1
            return;
        }
    }
    console.log("Number not found");  // 1
}

// Space Complexity
// O(1)


// T =  n+n+1 = 2n+1 => n => O(n)

linearSearch(49); // Number found at 4 index.
linearSearch(37); // Number not found.