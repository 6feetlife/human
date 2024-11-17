function addToFrontOfNew(arr, el){
    let result = 0;
    result = [el].concat(arr);
    return result
}




let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); //--> [3, 1, 2];
console.log(input); //--> [1, 2]