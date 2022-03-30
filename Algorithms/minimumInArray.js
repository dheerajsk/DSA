

function minimumValue(array){

    var minIndex=0;
    for(let i=1; i<array.length; i++){
        if(array[i]<array[minIndex]){
            minIndex=i;
        }
    }
    console.log(array[minIndex]);
}

minimumValue([56, 45, 23, 9, 12, 76, 21, 11]); //9