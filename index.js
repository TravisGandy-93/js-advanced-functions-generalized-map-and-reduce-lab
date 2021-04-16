// Add your functions here
function map(array, func){
        var i, l,
            temp = [];
        for (i = 0, l = array.length; i < l; i++) {
            temp.push(func(array[i]));
        }
        return temp;
    
}


function reduce(array, func, startingVal = 0){
    if (startingVal > 0){
       return array.reduce(func, startingVal)
    } else {
        return array.reduce(func)
    }
    }