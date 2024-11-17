let result = 0;
function getSumOfFactors(num){
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            result = result + i;
        }
    }
    return result;
}
let output = getSumOfFactors(12);
console.log(output);
// 약수--두 수를 곱하여 같은 값이 나오는 수의 모음
// num 을 i로 나눴을때 나머지가 없어야한다___num % i === 0
// i 최댓값은 num으로 설정한다____i <= num
// i는 1씩 증가한다____i++