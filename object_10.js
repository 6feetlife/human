function addFullNameProperty(obj){
    // obj['fullName'] = 'Jade Smith';
    // obj.fullName = `${fullName} ${lastName}`
    //다시 푼 답안
    Object.keys(obj);
    let objKeys = Object.keys(obj);
    obj['fullName'] = `'${obj[objKeys[0]]} ${obj[objKeys[1]]}'`;
}




//변수를 써서 합쳐야지 뭐가 들어올줄 알고 그냥 이름을 냅다 박아버린거임?
//전부 ?에서 시작해서 다시 짜
const person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  
  addFullNameProperty(person);
  console.log(person.fullName); // --> 'Jade Smith'
  /*
  person = {
    firstName: 'Jade',
    lastName: 'Smith',
      fullName: 'Jade Smith'
  };
  */