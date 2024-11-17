function getLargestElement(arr){
    let result = arr[0];
    for(let n = 1; n < arr.length; n++){
        if(result < arr[n]){
            result = arr[n];
        }
    }
    return result;
}










let output = getLargestElement([1, 4, 3]);
console.log(output); // --> 4

/**
 * ___1_배열을 입력받아
 * ex) str = [1, 4, 3]
 * ___2_가장 큰 요소 찾기
 * for(let n = 0; n)
 */
