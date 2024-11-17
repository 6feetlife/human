function getType(anything){
    //기본적으로 type of 사용
    let result = typeof(anything);
    //배열이나 객체는 모두 object이기 때문에.
    //Array.isArray()를 사용해서 배열이면
    //직접 'array'할당
    if(Array.isArray(anything)){
        result = 'array';
    }
    return result;
}













/**
 * 임의의 값을 입력받아 타입을 리턴
 * -------------
 * 조건
 * string 타입 리턴
 */