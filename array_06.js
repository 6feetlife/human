function getAllWords(str){
    return str.split(' ');
}
//공백이 뒤에 붙었을때 대응하는 완벽한 식은 아니다
// 풀이 들어가서 한번 보셈





let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

/**
 *___1_ 문자열을 입력받고
 * getAllWords('Radagast the Brown');
 * ___2_문자열을 구성하는 각 단어를 요소로 갖는 '배열'
 * 문자열 공백(띄어쓰기)부분을 잘라서 배열의 요소로 만들어야함
 * 그래서 어떻게 자름?
 * split 사용
 * '배열'값을 리턴
 * ----------------------------
 * 조건
 * for, while 사용금지
 * 단어는 공백 한칸으로 구분
 * 연속된 공백은 없다고 가정
 */