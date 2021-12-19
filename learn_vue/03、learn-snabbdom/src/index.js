// ctrl 点击init，看具体备注
import { init, classModule, propsModule, styleModule, eventListenersModule, h } from "./snabbdom";

// 用于将虚拟节点放进容器
const patch = init([
	// Init patch function with chosen modules
	classModule, // makes it easy to toggle classes
	propsModule, // for setting properties on DOM elements
	styleModule, // handles styling on elements with support for animations
	eventListenersModule // attaches event listeners
]);

// 容器
const container = document.getElementById("app");

/**
 *
 * h(options)
 * 	options:{
 * 		tag:'',
 * 	 {
 * 		 	class:'',
 * 			id:'',
 * 			click:()=>{},
 * 	   ...
 * 	},
 * 	text:'',
 *  [children]
 * }
 *
 *
 */
let vnode = h("div", {}, [h("ul#list", {}, [h("li.item", {}, "第一项"), h("li.item", {}, "第二项")]), h("button#btn", {}, "改变list")]);

// Patch into empty DOM element – this modifies the DOM as a side effect
// patch接收两个参数 oldVnode 和 vnode
patch(container, vnode);

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	const newVnode = h("div", {}, [h("ul#list", {}, [h("li.item", {}, "第一项"), h("li.item", {}, "第二项111"), h("li.item", {}, "第三项")]), h("button#btn", {}, "改变list")]);

	const oldVnode = vnode;

	patch(oldVnode, newVnode);

	vnode = newVnode;
});
