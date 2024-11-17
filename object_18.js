function getAllButLastElementOfProperty(obj, key){
    let result = [];
    let arr = obj.key;
    if(arr !== undefined){
        if(Array.isArray(arr) === true){
            result = arr.slice(0, arr.length - 1);
        }
    }
    return result;
}








const obj = {
    key: [1, 2, 3],
};

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]