function getEvenNumbers(arr){
    let result = [];
    //짝수찾기
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
           result.push(arr[i]);
        }
    }
    return result;
}











let output = getEvenNumbers([1, 2, 3, 4]);
console.log(output); // --> [2, 4]