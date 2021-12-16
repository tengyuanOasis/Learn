import { observe } from "./observer";

// 05、初始化状态 注意这里的顺序 比如面试经常会问到 是否能在data里面直接使用prop的值 为什么？
// 这里初始化的顺序依次是 prop > methods > data > computed > watch
export function initState(vm) {
	// 获取传入的数据对象
	const opts = vm.$options;

	if (opts.props) {
		initProps(vm);
	}
	if (opts.methods) {
		initMethod(vm);
	}
	// ! 这里对data数据进行初始化
	if (opts.data) {
		initData(vm);
	} else {
		// ! 开启观察者模式
		observe((vm._data = {}), true /* asRootData */);
	}
	if (opts.computed) {
		initComputed(vm);
	}
	if (opts.watch) {
		initWatch(vm);
	}
}

// 初始化data数据
function initData(vm) {
	let data = vm.$options.data;

	// 实例的_data属性就是传入的data
	// vue组件data推荐使用函数 防止数据在组件之间共享
	data = vm._data = typeof data === "function" ? data.call(vm) : data || {};

	// proxy data on instance 
	// 可以使用this.a来访问this._data.a
	const keys = Object.keys(data);
	let i = keys.length;

	while (i--) {
		const key = keys[i];
		proxy(vm, `_data`, key);
	}

	// 对数据进行观测 --响应式数据核心
	observe(data);
}

// 数据代理
function proxy(object, sourceKey, key) {
	Object.defineProperty(object, key, {
		get() {
			return object[sourceKey][key];
		},
		set(newValue) {
			object[sourceKey][key] = newValue;
		}
	});
}
