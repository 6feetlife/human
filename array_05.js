function computeSumOfAllElements(arr){
    let result = 0;
    for(let n = 0; n < arr.length; n++){
        result += arr[n];
        // result = result; 이거 별 의미없음
        //대소 구분이 아닌 계속 더해지는 수식으로 존재 의미 xx
    }
    return result;
}





let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6

/**
 * 배열을 입력받아
 * [1,2,3];
 * 배열의 모든 요소의 합
 * for(let n = 0; 0 < arr.length; n++)
 * let result = 0;
 * result += arr[n];
 * result = result;
 * 리턴
 * return result;
 */