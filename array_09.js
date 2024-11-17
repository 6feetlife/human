function getLongestWord(str){
    let arr = [];
    arr = str.split(' ');
    let maxWord = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(maxWord.length < arr[i].length){
            //maxword.length = 1  arr[1] = 4
            maxWord = arr[i];
        }
    }
    return maxWord;
}


let output = getLongestWord('I love javascript');
console.log(output); // --> "javascript"


/**
 * ___1_문자열을 입력받아
 * ex) str = 'I love javascript'
 * ___2_문자열에서 가장 긴 단어
 * 배열로 만들기
 * let
 * 
 * 
 * 
 * 
 * 
 * 조건
 * 가장 긴 단어가 2개 이상이면 첫번째 등장하는 단어를 리턴
 */