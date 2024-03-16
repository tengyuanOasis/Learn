// type T = {
//   length: number;
// } 

interface T {}
interface lengthInterface {
  length: number;
}
// T extends lengthInterface


function getLength< T extends lengthInterface>(arg:T):number{
  return arg.length;
}

console.log(getLength('hello'));
console.log(getLength(['hello', 'world']));
// console.log(getLength(123));