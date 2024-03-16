/** @format */

/**
 * 定义函数或者class时，遇到类型不明确的时候就可以使用泛型
 * @param arg
 * @returns
 * @template P
 */
function fn<P>(arg: P): P {
	return arg;
}

const t1 = fn('123'); // 不指定泛型的话，会默认any
console.log('%c [ t1 ]-14', 'font-size:13px; background:#0094fb; color:#fff;', t1);
const t2 = fn<number>(1); // 指定泛型，只能是number
console.log('%c [ t2 ]-16', 'font-size:13px; background:#0094fb; color:#fff;', t2);
/*****************************************************/
function fn2<N, A>(n: N, a: A): N {
	console.log('%c [ a ]-19', 'font-size:13px; background:#0094fb; color:#fff;', a);
	return n;
}

const t3 = fn2('123', 456);

console.log('%c [ t3 ]-24', 'font-size:13px; background:#0094fb; color:#fff;', t3);

/*****************************************************/

interface Inter {
	name: string;
}

function fn3<N extends Inter>(n: N): N {
	return n;
}
