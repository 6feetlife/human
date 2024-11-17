function getProperty(obj, property){
    return obj[property];
    //변수를 키값으로 사용한다면 무조건 []브라켓 사용해야한다.
    //코틀린?
}


const person = {
    name: 'Steve',
    age: 16,
      city: "Seoul",
      email: "steve@gmail.com"
  };
  
  let output = getProperty(person, 'name');
  console.log(output); // --> 'Steve'
  
  output = getProperty(person, 'age');
  console.log(output); // --> 16
  
  output = getProperty(person, 'city'); // -> "Seoul"
  output = getProperty(person, 'lastName'); // undefined