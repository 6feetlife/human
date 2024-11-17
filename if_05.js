function checkAge(name, age){
    if(name.length <= 10 && age < 21){
        return `Go home, ${name}`;
    } else if (name.length <= 10 && age >= 21){
        return `Welcome, ${name}`;
    }
}
let output = checkAge('Adrian',20);
console.log(output);
// 문제에는 정해진 '문장'을 '출력'하는 문제로
// 해당 문제 이외에 경우는 상정하지않아야한다.