let result = 1;
function makeDigits2(num){
    let i = 1;
    while(i < num){
        result = `${result}-${i}`
        i++
        //wile문에서 증감식은 무조건 마지막에 위치해야함
    }
    return `"${result}"`
}
let output = makeDigits2(1);
console.log(output);

/**
 * 1부터 num까지 정수의 문자열 리턴
 * ___1._1부터 num까지 정수 나열
 * ___let i = 0
 * ___while(i <= num){
 * ___i++
 * ___}
 * ___2._정수 나열
 * ___let result = 1;
 * ___result = `${result}-${i}`;
 * ___3._리턴하기
 * ___return `"${result}"`
 * 
 * --------------------------------
 * 조건
 * string 타입 리턴
 * while문 사용
 * for문 사용 금지
 * 숫자 사이를 '-'로 구분
 * ex) '1-2-3-4-5'
 */