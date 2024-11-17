function createPhoneNumber(arr){
    let result;
    //8자리 번호
    if(arr.length === 8){
        //배열을 문자열로 만들면서 숫자 다 붙이기
        // -->87654321
        result = arr.join('');
        //87654321을 (010)8765-4321로 만들기
        result = `(010)${result.slice(0,4)}-${result.slice(4,8)}`
        
    //11자리 번호 
    } else {
        result = arr.join('');
        //arr[0]부터 arr[2]까지 따로 묶어야함
        result = `(${result.slice(0,3)})-${result.slice(3,7)}-${result.slice(7,11)}`
        
    }
    return result;
}







let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
console.log(output); // --> '(010)1234-5678'

// let output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);
// console.log(output); // --> '(010)8765-4321'

// output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);
// console.log(output); // --> '(011)4321-8765'