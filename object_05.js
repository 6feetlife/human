function removeProperty(obj, property){
    delete obj[property];
}

const obj = {
    name: 'Sam',
    age: 20,
  };
  
  removeProperty(obj, 'name');
  console.log(obj.name); // --> undefined

  // 키와 밸류를 묶어서 엔트리 라고 부른다.