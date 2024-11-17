
function getMaxNumberFromString(num){
    //if(num.length ===0)
    let result = num[0];

    //let result = Number(num[0]);
    for(let i = 1; i < num.length; i++){
        /**
         * 원래대로 let i = 0이라고 해도 되나
         * 그러면 result의 초기값과 같은값을 비교하게되는
         * 불필요한 연산작업이 들어간다.
         */
        if(result < num[i]){
            result = num[i];
        }
    }
    return result;
}
let output = getMaxNumberFromString('5376');
/**
 * num에 할당되는 숫자가 string타입인지 number타입인지 신경써야한다
 * 원래대로num에 number타입인 4896을 넣으면
 * result부터 if까지 받을수있는 index가 없어져버린다
 */

console.log(output);











/**
 * '숫자 문자열'을 입력받아 '문자열'을 구성하는 각 '숫자' 중
 * 가장 큰 수를 나타내는 숫자를 리턴
 * ====================================================
 * 숫자 문자열 === num
 * 문자열을 구성하는 숫자 === (4885)
 * ex) num = "4885"
 * (4885)중 가장 큰 수를 나타내는 숫자를 리턴
 * 
 * ___1._함수 만들기
 * ___function getMaxNumberFromString(num)
 * ___2._num 에 들어있는 숫자 나열
 * ___for(let i = 0; i < num.length; i++)
 * ___3._나열한 숫자들 비교
 * ___let result = num[0]
 * ___if(result < num[i]){
 * ___result = num[i]
 * ___}
 * ___5._리턴하기
 * ___return result;
 * 
 * ex) num = 4885
 * for(let i = 0; i < num.length; i++)
 * i = 4, 8, 8, 5
 * 얘네 비교해서 대빵 뽑아야함
 * 비교 = 부등호
 * i가 들어갔을때 해당 숫자가 나오는건 num[i]를 의미함
 * num[1] 과 num[2]의 비교라면 num[2]가 이긴다
 * num[2] 와 num[3]은 둘이 같다 i에 해당하는 숫자가 무엇인지는
 * 중요하지않다 해당 자리에있는 숫자가 크거나 같으면 된다
 * num[3]과 num[4]는 num[3]이 8로 이긴다
 * 그러면 num[i]가 최종값 8이 되면 이긴다 비교에서 1등을 하면 멈추게 만들어야한다
 * for()
 * ============================================
 * num 4885로 설정했을때
 * 가장 큰숫자로 나눴을때 나머지가 가장 적다
 * let high = num / num[i]
 * for(let i = 0; i < num.length; i++){
 * let result = 0
 *  if(result < high){
 *  result = high
 * }
 *  
 *  
 * 
 * 
 * 
 * 
 * 
 * --------------------------------------------------
 * 조건
 * for문 사용
 * str.split 금지
 * 빈 문자열 "0"리턴
 * (4~5번 문제와 같다 굳이 ㄴㄴ)
 */