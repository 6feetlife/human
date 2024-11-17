let result = '';
function makeMultiplesOfDigit(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0){
            result = `${result}${i}`;
        }
    }
    return `"${result}"`;
}
let output = makeMultiplesOfDigit(15);
console.log(output);

/**
 * 1부터 num까지 수 중에서 3의 배수로만 구성된 문자열 리턴
 * ___1._1부터 num까지 나열
 * ___for(let i = 0; i <= num; i++)
 * ___2._3의 배수만 골라내기
 * ___if(i % 3 === 0){
 * ___}
 * ___3._문자열 만들기
 * ___let result = '';
 * ___result = `${result}${i}`;
 * ___4._리턴
 * ___return `"${result}"`;
 * 
 * 
 * -------------------------------------
 * 조건
 * string타입 리턴
 * for문 사용
 * 숫자 사이 구분x (그냥 나열)
 * 3의 배수 없을 경우 빈 문자열 리턴
 * (예시를 보면 빈 문자열은 그냥 없는걸로 봐도 좋을듯하다)
 * (그러니 굳이 수식 ㄴㄴ)
 */
