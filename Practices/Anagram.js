


function printAnagram(words){
    const result = {
    }
    // for(let i=0; i<words.length; i++){
    //     const word = words[i];
    // }
    for(const word of words){
        // 1. Split, Sort and Join. split=> ['t','a','c']=>sort=>['a','c','t']=>'act'
        const sortedWord = word.split('').sort().join();
        // 2. Check if exists in hash.
        if(sortedWord in result){
            // add new word to existing key.
            result[sortedWord].push(word);
        }else{
            // create key and add value.
            result[sortedWord]=[word] // {act: ["tac", "cat", "act"], dgo:["god", "dog"], floo:["fool", "loof"], eh: ["he", "eh"]}
        }
    }
    console.log(Object.values(result));
}

const array = ["tac", "I", "god", "cat", "fool", "loof", "he", "act", "dog", "eh"];

printAnagram(array);




