let result = 1;
/**
 * let result = "";
 * 이걸 문자열로 두면 밑의 값들을 문자열로
 * 일일이 다 변환 할 필요가 없다.
 * string type 과 number type을 더할때는
 * number type 이 자동으로 string type으로 변환되어 진행된다
 * result + string(i);
 * 그냥 알아서 변화되게 두어도 가능하지만
 * 수식을 저렇게 적어주는게 훨씬 안전하다.
 */
function makeDigits(num){
    for(let i = 2; i <= num; i++){
        result = `${result}${i}`;
    }
    return `"${result}"`;
}
let output = makeDigits(5);
console.log(output);




/**
 * 1 부터 num까지 정수로 구성된 문자열 리턴
 * ___1._1부터 num까지 나열
 * ___for(let i = 2; i <= num; i++);
 * ___2._문자열로 만들기
 * ___let result = 0;
 * ___result = `${result}${i}`;
 * ___3._리턴하기
 * ___return `"${result}"`;
 * 
 * 
 * 
 * --------------------------------------
 * 조건
 * string타입 리턴
 * for문 사용
 */