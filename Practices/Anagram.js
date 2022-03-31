


function printAnagram(words){
    const result = {
        key: [values]
    }
    // for(let i=0; i<words.length; i++){
    //     const word = words[i];
    // }
    for(const word of words){ // n
        // 1. Split, Sort and Join. "tac" split=> ['t','a','c']=>sort=>['a','c','t']=>'act'
        const sortedWord = word.split('').sort().join(); // act
        // 2. Check if exists in hash.
        if(sortedWord in result){ // O(1)
            // add new word to existing key.
            result[sortedWord].push(word);  //1
        }else{
            // create key and add value.
            result[sortedWord]=[word]  // 1 // {act: ["tac", "cat", "act"], dgo:["god", "dog"], floo:["fool", "loof"], eh: ["he", "eh"]}
        }
    }
    console.log(Object.values(result));
}

const array = ["tac", "I", "god", "cat", "fool", "loof", "he", "act", "dog", "eh"];

printAnagram(array);

// T(n) => O(n), O(n^2logn), n^2 => n*slogs
// S(n) => O(n)




