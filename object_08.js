function removeOddValues(obj){
    for(let key in obj){
        //보통 consst를 사용함
        // console.log(`${key}: ${obj[key]}`);
        let value = obj[key];
        if(value % 2 !== 0){
            delete obj[key];
        }
    }
}



const obj = {
    a: 2,
    b: 3,
    c: 4,
  };
  
  removeOddValues(obj);
  console.log(obj); // --> { a: 2, c: 4 }