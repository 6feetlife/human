function addOneSecond(hour, minute, second) {
    if(second <= 57){
        result `${hour}시 ${minute}분 ${second + 1}초 입니다.`
    } else if (second === 59 && minute  ){
        result `${hour}시 ${minute + 1}분 ${second = 0}초 입니다.`
    }
let output = addOneSecond(14, 17, 59);
console.log(output);
//second +1 이것도 있지만 second++도 가능하다.
//조건문 안에 조건문은 되도록 피하자
function addOneSecond(hour, minute, second){
    second++
} if(second === 60){
    minute++
    second = 0
}