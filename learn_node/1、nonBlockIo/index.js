/***
 * 非阻塞IO
 * I/O ： input 、output
 * 阻塞/非阻塞： 代码执行等待时能不能做别的事
 */

const glob = require("glob");
let result = null;

// globDemo（阻塞版）: 输出当前文件夹下所有文件
// console.time();
// result = glob.sync(__dirname + "/**/*");
// console.timeEnd();
// console.log("result: ", result);
// 非阻塞版本（异步版本）

console.time();
glob(__dirname + "**/*", (err, res) => {
	result = res;
	console.log("got result");
});
console.timeEnd();
console.log(1 + 1);
