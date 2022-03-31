

function countFrequency(word){
    
    let result={};

    for(let i = 0; i < word.length; i++)
    { 
       if(result[word[i]]){
           result[word[i]]++;
       }else{
           result[word[i]]=1;
       }
    } 
    console.log(result);
    const keys =Object.keys(result);
    for(let i=0; i<keys.length; i++){
        if(result[keys[i]]==1){
            console.log(keys[i]);
            break;
        }
    }
}

// 2n => n

countFrequency("mumbai"); // u


// T(n) => 2N => O(n)
// S(n) => O(n)