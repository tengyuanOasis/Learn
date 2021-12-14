import { initMixin } from "./init";

// 01、初始化Vue构造函数，通过new关键字进行实例化
function Vue(options) {
	// 03、这里开始对vue进行初始化工作
	this._init(options);
}

// 02、将 _init 挂在vue原型
initMixin(Vue);

window.Vue = new Vue({
	// el: "#app",
	// router,
	// store,
	// render: h => h(App)
	data() {
		return {
			name: "Mackle",
			age: 18,
			hobby: ["jump", "swimming", "travel"]
		};
	}
});

// export default Vue;
