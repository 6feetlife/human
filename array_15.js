function getElementsUpTo(arr, n){
    let result = 0;
    if(n > arr.length){
        result = undefined;
    } else {
        result = arr.slice(0, n);        
    }
    return result;
}









let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
console.log(output); // --> ['a', 'b', 'c']