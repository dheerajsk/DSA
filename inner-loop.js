
function foo(n){
    let result=0; // C1
    for(let i=0; i<n; i++){   // n
        for(let j=n; j>i; j--){ // n-1
            result=result+1;    // C2
        }
    }
    console.log(result); // C3
}

// T(N) = C1+n*(C2+n-1)+C3
// = n*(n-1) = n^2-n = n^2


foo(1);


// iteration 1: i=0, j=1


// iteration 1: i=0, j=3,2,1
// iteration 2: i=1, j=3,2
// iteration 3: i=2, j=3