function removeNumbersLargerThan(num, obj){
    for(const key in obj){
        if(typeof obj[key] === 'number'){
            if(obj[key] > num){
                delete obj[key];
            }
        }
    }
}



const obj = {
    a: 8,
    b: 2,
    c: 'montana',
  };
  
  removeNumbersLargerThan(5, obj);
  console.log(obj); // --> { b: 2, c: 'montana' }