// function getLastElement(arr){
//     let result = 0;
//     if(Array.isArray(arr)){
//         result = arr[()];
//     }else if(result === ""){
//         result = undefined;
//     }
// }
// let output = getLastElement([1,2,3,4]);
// console.log(output);


function getLastElement(arr){
    return arr[arr.length - 1];
    //let arrLastIndex = arr.length -1;
    //return arr[arrLastIndex];
    //이렇게도 가능함
}


let output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4




/**
 * 배열을 입력받고
 * 배열의 마지막 요소 리턴
 * -----------------------------
 * arr가 배열이라면
 * if(Array.isArray(arr))
 * arr의 마지막 요소 위치 특정하기
 * for(let n = 0; n === arr.length - 1; n++){
 * arr[arr.length -1]
 * }
 * 
 * 
 * 
 * 
 * 
 * 조건
 * 빈 배열은 undefined 리턴
 */