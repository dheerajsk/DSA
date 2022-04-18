

function allocateBooks(books, s){
    let start = 0;
    let end = 0;
    let result = Number.MAX_VALUE;
    for(let i=0; i<books.length; i++){
        end += books[i];
    }
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(isPossibleValue(books, mid, s)){
            if(mid<result){
                result = mid;
            }
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return result;
}

function isPossibleValue(array, mid, s){
    
    let pages=0;
    let student = 1;
    for(let i=0; i<array.length; i++){
        if(array[i]>mid){
            return false;
        }
        if(pages+array[i]>mid){
            if(student+1>s){
                return false;
            }
            student++;
            pages = array[i];   
        }else{
            pages +=array[i];
        }
    }
    return true;
}

const books = [10, 20, 30, 40];
const s = 2;
console.log(allocateBooks(books, s));
