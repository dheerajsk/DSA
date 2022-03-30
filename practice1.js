
function foo(n){
    let ans=0;
    let count=0;
    while(n>0){
        count++;
        // console.log(count);
        console.log(n);
        ans +=n%10;
        n = n/10;
    }
    console.log(count);
    console.log(ans);
}

foo(1);
// T(N)=> O(n), O(log10n)
// S(N)=> O(1) - Correct