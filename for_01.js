let result = 0;
function sumTo(num){
    for(let i = 0;  i <= num; i++){
        result = result + i;
    }
    return result;
}
let output = sumTo(3)
console.log(output);
/**
 * 0부터 num까지의 합을 리턴
 * ___1._0부터 num까지
 * ___for(let i = 0; i <= num; i++);
 * ___2._i 들의 합 구하기
 * ___let result = 0
 * ___result = result + i;
 * ___result += i; 라고 표현해도 같은 의미이다.
 * ___3._리턴하기
 * ___return result;
 * 
 * 
 * -------------------------------
 * 조건
 * number타입 리턴
 * for문 사용
 */

