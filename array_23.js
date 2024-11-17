function getAllElementsButNth(arr, n){
    arr.splice(n, 1);
    /*
     * let arr = [1, 2, 3, 4, 5];
     * arr.splice(2, 2); // 인덱스 2부터 2개 요소를 제거
     *                      제거할 요소의 개수는 지정한 인덱스를 포함하여 수를 센다.
     * console.log(arr); // [1, 2, 5]  
     */
    return arr;
}









let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']