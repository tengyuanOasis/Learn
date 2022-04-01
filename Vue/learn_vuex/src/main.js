import Vue from "vue";
import App from "./App.vue";
import Vuex, { Store } from "vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state, n) {
			state.count += n;
		},
		decrement(state, n) {
			state.count -= n;
		}
	}
});
Vue.prototype.$store = store;

new Vue({
	render: h => h(App)
	// store: store
}).$mount("#app");
