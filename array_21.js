// function addToBackOfNew(arr, el){
//     let newArr = [...arr, el];
//     //배열 앞에 ...을 붙이면 배열을 벗긴값을 알려준다.
//     return newArr
// }

function addToBackOfNew(arr, el){
    let result = 0;
    result = arr.concat(el);
    return result;
}









let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]