

// function dump(arg:string): string {
//   return arg
// }

// let hd = dump('hello world');


function dump<T>(arg:T): T {
  return arg
}

let hd = dump< string >('hello world');
console.log('%c [ hd ]-15', 'font-size:13px; background:#0094fb; color:#fff;', hd);
let hd2 = dump< boolean>(true);
console.log('%c [ hd2 ]-17', 'font-size:13px; background:#0094fb; color:#fff;', hd2);