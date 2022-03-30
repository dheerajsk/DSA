
// Problem
// - For n numbers, run 3 nested loops to calculate n*n*n;

function foo(n){
    for(let i=1; i<n; i++){  // n
        for(let j=1; j<n; j++){   //n
            for(let k=1; k<n; k++){  // n
                let result = i*j*k;  // C1
                console.log(result);  // C2
            }
        }
    }
}
// O(1+1+1+1)=> O(1)

// T(N) = n*n*(C1+C2(n));
// T(N) = O(n^3)

foo(3);