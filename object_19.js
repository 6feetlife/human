function extend(obj1, obj2){
    let arr1 = Object.keys(obj1);//obj1의 키값 배열
    let arr2 = Object.keys(obj2);//obj2의 키값 배열
    for(let i = 0; i < arr1.length; i++){
        for(let n = 0; n < arr2.length; n++){
            if(arr1[i] === arr2[n]){
                if(obj1[arr[i]] === undefined){
                    obj1[arr2[i]] = obj2[arr2[i]];
                }
                
            }
        }
    }
}

function extend(obj1, obj2){
    let arr1 = object.keys(obj1);//obj1의 키값 배열
    let arr2 = object.keys(obj2);//obj2의 키값 배열
// obj2의 키만 순회, obj1을 수정하기에 비교하는 obj2의 키만 순회해도 충분
    for(let i = 0; i < arr2.length; i++){
        let key = arr2[i];
        if(!(arr1.includes(key)) || obj1[key] === undefined){
            obj1[key] = obj2[key];
        }
    }
}

function extend(obj1, ob2){
    let keys2 = object.keys(obj2);
    for(let i = 0; i < keys.length; i++){
        let key = keys2[i];
        if(!(key in obj1) || obj1[key] === undefined){
            obj1[key] = obj2[key];
        }
    }
}

//두번째 객체는 수정 ㄴㄴ
//추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존값 변경 ㄴㄴ





const obj1 = {
    a: 1,
    b: 2,
    c: undefined
  };
  
  const obj2 = {
    b: 4,
    c: 3,
  };
  
  extend(obj1, obj2);
  console.log(obj1); // --> {a: 1, b: 2, c: 3}
  console.log(obj2); // --> {b: 4, c: 3}
