function getLastElementOfProperty(obj, property){
    let arr = obj[property];
    let result = '';
    if(Array.isArray (arr) === true){
        if(arr[arr.length - 1] === ''){
            result = undefined;
        } else {
            result = arr[arr.length - 1];
        }
    }
    return result;      
}






const obj = {
    key: [1, 2, 5],
  }
  
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5