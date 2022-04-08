


function threeNumberSum(array, target){
    array.sort((a,b)=> a-b); // nlogn
    let result=[];
    
    for(let i=0; i<array.length-2; i++){
        let j=i+1;
        let k = array.length-1;
        while(j<=k){
            if(array[i]+array[j]+array[k]==target){
                result.push([array[i], array[j], array[k]]);
                j++;k--;
            }else if(array[i]+array[j]+array[k]>target){
                    k--;
            }else{
                j++;
            }
        }
    }
    console.log(result);
}

// T(n) => nlogn + n^2 => n^2
// S(n) => O(n)


const array = [2,7,3,4,-1,12,9,5]
const target = 15
threeNumberSum(array, target);
// output