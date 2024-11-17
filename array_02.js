function getFirstElement(arr){
    let result = 0;
    if(Array.isArray(arr)){
        if(arr.length === 0){
            result = undefined
        } else {
            result = arr[0];
        }
    }
    return result;
}

function getFirstElement(arr){
    return arr[0];
}

let output = getFirstElement([1,2,3,4,5]);
console.log(output);












/**
 * 배열을 입력받고
 * 배열의 첫번째 요소를 리턴
 * -----------------------------
 * 조건
 * 빈 배열 = undefined를 리턴
 */
