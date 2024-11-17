function mergeArrays(arr1, arr2){
    let result = 0;
    result = arr1.concat(arr2);
    //[...arr1,...arr2] 이렇게도 표현 가능
    return result;
}













let output = mergeArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]