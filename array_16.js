function getAllElementsButFirst(arr){
    let result = 0;
    result = arr.slice(1);
    //shift
    return result;
}








let input = [1, 2, 3, 4];
let output = getAllElementsButFirst([1, 2, 3, 4]);
console.log(output); // --> [2, 3, 4]
console.log(input);