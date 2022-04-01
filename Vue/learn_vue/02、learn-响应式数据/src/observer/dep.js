/**
 * 用于依赖（watcher）收集和提醒更新
 * ! sub 即为 watcher
 */

let uid = 0;


export default class Dep {
	constructor() {
		//每个Dep唯一ID
		this.id = uid++;
		//用于存放依赖
		this.subs = [];
	}

	addSub(sub) {
		this.subs.push(sub);
	}

	//设置某个Watcher的依赖
	//这里添加了Dep.target是否存在的判断，目的是判断是不是Watcher的构造函数调用
	//也就是说判断他是Watcher的this.get调用的，而不是普通调用
	depend() {
		if (Dep.target) {
			Dep.target.addDep(this);
		}
	}

	notify() {
		this.subs.forEach(function (sub) {
			sub.update();
		});
	}
}

Dep.target = null;
