function sum(n){
    let result = 0;
    for(let i=0; i<n; i++){
        result = result+add(i, i+1);
        console.log(result);
    }
    return result;
}

function add(num1, num2){
    return num1+num2;
}

// iteration1: 0+add(0, 1)=>1
// 2: 1+add(1, 2) = 1+3 = 4
// 3 4+add(2,3) = 4+5 = 9
// 4 9+add(3,4) = 9+7 = 16


console.log(sum(4));

// T(N)=>O(n)
// S(N)=>O(1)