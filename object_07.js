function removeArrayValues(obj){
    for(let key in obj){
        // console.log(`${key}: ${obj[key]}`);
        let value = obj[key];
        if(Array.isArray(value)){
            delete obj[key];
        }
    }
}



const obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there'],
  };
  
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }
