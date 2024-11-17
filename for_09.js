function isPrime(num){
    let result = 0;
    for(let i = 2; i < num; i++ ){
        if(num % num === 0 && num % i !== 0){
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
let output = isPrime(28);
console.log(output);


// 제곱근(루트)을 활용하면 쫌 편함
//let sqrt = parseInt(Math.sqrt(num));
/**
 * if(count===2) return true;
 * else return fasle;
 * 이것보다
 * return count ===2 이걸 쓰자
 */








/**
 * 1 이상의 자연수를 입력받아 소수인지 여부를 리턴
 * 
 * ------------------------------------------------
 * 조건
 * typeof(num) = number
 * 리턴값은 boolean
 */