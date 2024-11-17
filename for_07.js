
//너 이거 틀렸음 주석 보고 다시 ㄱ
function replaceAll(str, from, to){
    let result = from;
    for(let i = 0; i < str.length; i++){
        if(str[i] === result){
            result = to;
            //문자열은 불변
            //str[i] = 'hello'
            //str[1] = 'e'
            //str[1] = 'h' 불가능
            //str = 'hello' 얘는 가능
            //전체는 가능하지만 요소 하나하나는 불가능하다.
        }
    }
    return result;
}
let output = replaceAll('loop', 'o', 'e');
console.log(output);
/**
 * str의 알파벳중 from 과 같은 문자가 있는지 알아야한다 str[i] === from
 * ___1_str의 알파벳을 앞에서부터 훑어야한다
 *  for(let i = 0; i < str.length; i++)
 * 같은 문자를 찾았으면 str[i]를 to로 치환해준다.
 *  let str[i] = to
 * 
 * 
 * 
 * 
 * ---------------------------------------------
 * 코드의 흐름을 보여준다
 * 브레이크 포인트를 잡고 좌측 디버그 클릭 node.js선택
 */





