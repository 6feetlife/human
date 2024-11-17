function addPropertyAndValue(obj, property, value){
    return obj[property] = value;
}



let steve = {
    isMale:'true',
    age:'30',
    
};
addPropertyAndValue(steve, 'isMale', true);
console.log(steve.isMale); // --> true

addPropertyAndValue(steve, 'age', 30);
console.log(steve.age); // --> 30
// steve = {age: 30};

let jessica = {
    job:'Programmer'
};
addPropertyAndValue(jessica, 'job', 'Programmer');
console.log(jessica.job); // --> 'Programmer'