function removeFromFront(arr){
    let result = 0;
    result = arr.slice(1);
    return result;
}
//slice는 자른걸 새로 만들기에 ㄴㄴ
//shift 사용해서 다시








let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]