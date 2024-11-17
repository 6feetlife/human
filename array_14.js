function getElementsAfter(arr, n){
    let result = 0;
    //arr.slice(n + 1, arr.length);
    result = arr.slice(n + 1);
    return result; 
}

//arr.slice(n)







let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']