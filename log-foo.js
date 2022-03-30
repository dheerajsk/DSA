//i=0, 1,2,3,4,5,6, iteration of j: 0, 0, 0, 1, 3, 5, 7

function foo(n){
    let answer = 0;         // c1
    for(let i=0; i<n; i++){            
        console.log("log: "+Math.log(i)); // n
        for(let j=0; j<Math.log(i); j++){ // log(n)-3
            console.log(j);  // c2
            answer=answer+1; // c3
        }
    }
    console.log(answer); // c4
}

// for(0..n as i){ // n      0,   1, 2, 3
//     for(0..i as j)  // n  no run, 1, 2, 3 (n)
// } n*n


// for(0..n){ // n
//     for(0..log(n))  // log(n)
// } n*logn

// T(N) = (c1+n)*((c2+c3)*logN)+c4
// n*logN
// T(N)=> O(nlogN); 

foo(6);




// for(1..5){ 1, 2, 3, 4  -n
    // for(1..5){ 5, 10, 15, 20 - n
    // }
// }
// for() // n
// for() // n
// 2n