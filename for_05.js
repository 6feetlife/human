let result = 0;
function countCharacter(character,letter){
    for(let i = 0; i < character.length; i++){
        if(character[i] === letter){
            result = result + 1;
        }
    }
    return result;
}
let output = countCharacter('I am a hacker', 'a');
console.log(output);









/**
 * '문자열' 과 '문자' 를 입력받아 '문자열'에서 '문자' 등장 횟수 리턴
 * ___1._문자열과 문자 입력
 * ___function countCharacter(character,letter)
 * ___2._문자열 나열
 * ___for(let i = 0; i < character.length; i++)
 * ___3._나열한 문자열에서 문자 등장 횟수 찾기
 * ___if(str[i] === letter){
 * ___let result = 0
 * ___result = result + i
 * ___}
 * 
 * 
 * 
 * 
 * ------------------------------------------
 * 조건
 * string 타입의 문자
 * letter.length는 1
 * number타입 리턴
 * for문 사용
 * 빈 문자열은 0을 리턴
 * (4번 문제와 마찬가지로 굳이긴함)
 */