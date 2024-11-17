function countNumberOfKeys(obj){
    let result = Object.keys(obj);
    return result.length;
    //개수를 알려면 1부터 시작하는 길이를 구해야한다.
}


const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  let output = countNumberOfKeys(obj);
  console.log(output); // --> 3