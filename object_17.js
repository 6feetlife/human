let result = [];
function getValueOfNthElement(arr, num){
  for(let i = 0; i <arr.length; i++){
    if(arr[i]){
      result.push(arr[i]);
    }
  }
  console.log(result);
}







let output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 1);
// console.log(output); // --> 'Anna'

// output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 2);
// console.log(output); // --> 'Anna'

// output = getValueOfNthElement(
//   [{ name: 'Jim' }, { name: 'Tim' }, { name: 'Pooh' }],
//   1
// );
// console.log(output); // --> 'Tim'

// output = getValueOfNthElement([], 0);
// console.log(output); // --> 'no name'