/****
 * 因为在 Vue 初始化可能会处理很多事情 比如数据处理 事件处理 生命周期处理等等 所以划分不同文件引入利于代码分割
 */
import { initState } from "./state";

import Compile from "./compile/compile";

export function initMixin(Vue) {
	Vue.prototype = {
		_init: function (options) {
			const vm = this;
			// this指向_init实例对象
			// this.$options即用户new Vue传入的属性
			vm.$options = options;
			// 04、初始化状态，将Vue的options传入initState函数
			initState(vm);

			if (vm.$options.el) {
				vm.$mount = new Compile(options.el || document.body, this);
			}
		},
	};
}

