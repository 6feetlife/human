
function printObject(obj){
    let result = Object.keys(obj);
    for(let i = 0; i < result.length; i++){
        //reslt = [ 'name', 'age', 'gender' ]
       console.log(`${result[i]} : ${obj[result[i]]}`);
    }
}

function printObject(obj){
    let result = "";
    for(let key in obj){
        result += `${key} : ${obj[key]}\n`
    }
    console.log(result);
}

//이것도 특정짓지말고 뭘 박아놔도 동작되게 다시 만들어라
//그리고 지역변수 남발하지마셈







const obj = { name: 'Steve', age: 13, gender: 'Male' };
let output = printObject(obj);

/*
name: Steve
age: 13
gender: Male
*/