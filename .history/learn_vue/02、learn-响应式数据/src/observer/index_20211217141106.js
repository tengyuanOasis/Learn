import { arrayMethods } from "./array";
import Dep from "./dep";

class Observer {
	// 观测值
	constructor(value) {
		Object.defineProperty(value, "__ob__", {
			//  值指代的就是Observer的实例
			value: this,
			//  不可枚举
			enumerable: false,
			writable: true,
			configurable: true
		});

		if (Array.isArray(value)) {
			// 这里对数组做了额外判断
			// 通过重写数组原型方法来对数组的七种方法进行拦截
			value.__proto__ = arrayMethods;
			// 如果数组里面还包含数组 需要递归判断
			this.observeArray(value);
		} else {
			this.walk(value);
		}
	}

	observeArray(items) {
		for (let i = 0; i < items.length; i++) {
			observe(items[i]);
		}
	}

	walk(data) {
		// 对象上的所有属性依次进行观测
		let keys = Object.keys(data);
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			let value = data[key];
			defineReactive(data, key, value);
		}
	}
}
// Object.defineProperty数据劫持核心 兼容性在ie9以及以上
function defineReactive(data, key, value) {
	var dep = new Dep();
	// 递归
	observe(value);
	// --如果value还是一个对象会继续走一遍odefineReactive 层层遍历一直到value不是对象才停止
	//   思考？如果Vue数据嵌套层级过深 >>性能会受影响
	Object.defineProperty(data, key, {
		get() {
			console.log("数据劫持获取值：", value);
			// Dep.target 全局变量指向的就是当前正在解析指令的Compile生成的 Watcher
			// 会执行到 dep.addSub(Dep.target), 将 Watcher 添加到 Dep 对象的 Watcher 列表中
			console.log("Dep.target: ", Dep.target);
			if (Dep.target) {
				dep.depend();
			}

			return value;
		},
		set(newValue) {
			if (newValue === value) return;
			console.log("数据劫持设置值", newValue);
			value = newValue;
			dep.notify();
		}
	});
}

export function observe(value) {
	// 如果传过来的是对象或者数组 进行属性劫持
	if (Object.prototype.toString.call(value) === "[object Object]" || Array.isArray(value)) {
		return new Observer(value);
	}
}
