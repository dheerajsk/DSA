

function countFrequency(word, char){
    let count=0;
    for(let I = 0; I < word.length; I++)
     { 
        if(word.charAt(I) == char)
            count++; 
    } 
    console.log(count); 
}

countFrequency("mumbai", "m");

// T(n) => O(n)
// S(n) => O(1)