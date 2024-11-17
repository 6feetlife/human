function select(arr, obj){

    let objWord = Object.keys(obj);
    let result = {};
    // console.log(objWord);
    for(let i = 0; i < arr.length; i++){
        for(let n = 0; n < objWord.length; n++){
            if(arr[i] !== objWord[n]){
                result = objWord.splice(n,1);
                console.log(result);
            }
        }
    }
}


// //결과를 담을 새로운 객체 생성
// let result = {};
// //배열을 순회
// for(const el of arr){
//     //현재 요소가 obj에 키로 존재한다면
//     if(boj[el] !== undefined){
//         //새로운 배열에 키와 값을 추가
//         result[el] = obj[el];
//     }
//     //순회가 끝나면 새로운 객체를 반환
//     return result;
// }







result[i]는 현재 키를 나타내고,
 obj[result[i]]는 해당 키에 대응하는 값을 가져옵니다.





//굳이 배열로 전환 ㄴㄴ arr[i]로 obj 키값 찾아서 키값으로 밸류값찾는 공식으로 접근
const arr = ['a', 'c', 'e'];
const obj = { a: 1, b: 2, c: 3, d: 4 };

let output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }