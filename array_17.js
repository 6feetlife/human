function getAllElementsButLast(arr){
    let result = 0
    result  = arr.slice(0, arr.length - 1);
    return result;
}










let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2, 3]