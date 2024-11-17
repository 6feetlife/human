function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        return'FizzBuzz'
    } else if (num % 5 === 0){
        //esle if (num % 5 === 0 && num % 3 !==0)
        //이렇게도 표현할수있다.
        //단, 효울을 따진다면 원래 짰던 코드가 맞다.
        return'Buzz'
    } else if (num % 3 === 0){
        return'Fizz'
    } else {return 'No FizzBuzz'}
}
let output = fizzBuzz(15);
console.log(output);

