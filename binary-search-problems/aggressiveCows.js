

function aggressiveCows(stalls, cows){
    let start=0;
    let n = stalls.length;
    let end = stalls[n-1];
    let maxDistance = -1;

    while(start<end){
        let mid = Math.floor((start+end)/2);
        if(isPossibleToAccomodate(stalls, cows, mid)){
            if(mid>maxDistance){
                maxDistance = mid;
                start=mid+1;
            }
        }else{
            end=mid;
        }
    }
    return maxDistance;
}

function isPossibleToAccomodate(stalls, cows, mid){
    let position = stalls[0];
    let cowAccomodated=1;
    for(let i=1; i<stalls.length; i++){
        if(stalls[i]-position>=mid){
            cowAccomodated++;
            position = stalls[i];
            if(cowAccomodated==cows){
                return true;
            }
        }
    }
    return false;
}


stalls=[4,7,9,14,23];
cows=3;
console.log(aggressiveCows(stalls, cows));
