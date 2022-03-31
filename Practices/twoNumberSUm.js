



function twoNumberSum(nums, target){
    
    for(let i=0; i<nums.length-1; i++){
        let x = nums[i];
        const y = target-x;
        for(j=i+1; j<nums.length; j++){
            if(x+nums[j]==target){
            console.log("["+num1+", "+nums[j]+"]");
            }
        }
    }
}

twoNumberSum([3,5,-4, 8, 11, 1, -1, 6], 10); // [11, -1]

// T(n)= n^2
// S(n) = O(1)
