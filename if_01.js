function siOldEnoughToDrink(age){
    if (age >= 18){
        return true;
    } else {
        return false;
    }
};
let result = siOldEnoughToDrink(18);

result = siOldEnoughToDrink(5);
/**
 * boolean타입 참 거짓 활용해야함
 * 모든 함수는 return값이 나왔을때 거기서 끝
 * 이후의 코드들은 계산하지않는다
*/


