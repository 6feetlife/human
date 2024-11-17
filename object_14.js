function getElementOfArrayProperty(obj, key, index){
    let arr = obj[key];
    if(Array.isArray(arr) === true && index <= arr.length -1){
        return `'${arr[index]}'`;
    }
}
let obj = {
    key: ['Jamil', 'Albrey'],
  };

  let output = getElementOfArrayProperty(obj, 'key', 0);
  console.log(output); // --> 'Jamil'