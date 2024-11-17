function addToFront(arr, el){
    //el값을 arr에 넣어야함
    arr.unshift(el); 
    //변경된 배열 arr을 반환
    return arr;
}












let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]