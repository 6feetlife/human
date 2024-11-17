function removeNumberValues(obj){
    for(const key in obj){
        console.log(`${key}: ${obj[key]}`);
        let value = obj[key];
        if(typeof value === 'number'){
            delete obj[key];
            //Dot notation 과 Bracket notation 잘 확인하고 쓰자
            //ex) .을 잘못 찍는다던가 선언된 변수값에 ""이걸찍는다던가
        }    
    }
}
//for 0f 는 배열을 순회/ 객체를 순회할때는 for in

const obj = {
    a: 2,
    b: 'remaining',
    c: 4,
  };
  
  removeNumberValues(obj);
  console.log(obj); // --> { b: 'remaining' }
  /**
   * for-in
   * for-of 활용
   */