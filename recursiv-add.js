

function add(n){
    if(n<=0){
        return 0;
    }
    return n+add(n-1);
}

const result = add(4);
console.log(result);

// T(N)=O(n)
// S(N)=O(n)

// add(4) O(1)
//     add(3) O(2)
//         add(2)
//             add(1)
//                 add(0) - O(n)

function print(msg){
    console.log(msg); // O(1)
}