function getNthElement(arr, index){
     return arr[index];
}

//뭐임 왜 안풀려있음
//니가 나중에 다시 푸셈




let output = getNthElement([1, 3, 5, 4, 7], 4);
console.log(output); // --> 7



/**
 * 배열과 수를 입력받고
 * 배열 = arr
 * 수 = index
 * 수가 인덱스로 가리키는 배열의 요소 찾기
 * 수 = arr[index]
 * 
 * 수가 가리키는 배열
 * 
 * 
 * 리턴
 * ------------------------------------
 * 조건
 * 빈 배열은 undefined출력 ---자동으로 바꿔주니까 굳이 ㄴㄴ
 * 배열의 길이를 벗어나는 수를 입력받으면
 * 'out of index range'를 리턴
 */