function addProperty(obj, property){
    obj[property] = true;
    //객체와 배열은 상태를 공유한다
    //그래서 리턴 없어도 상태가 바뀜
}

let steve = {};
addProperty(steve, 'isMale');
// steve = {isMale: true};
console.log(steve.isMale); // --> true

addProperty(steve, 'isProgrammer');
console.log(steve.isProgrammer); // --> true

let jessica = {};
addProperty(jessica, 'isSmart');
console.log(jessica.isSmart); // --> true