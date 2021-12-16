import { init, classModule, propsModule, styleModule, eventListenersModule, h } from "snabbdom";

const patch = init([
	// Init patch function with chosen modules
	classModule, // makes it easy to toggle classes
	propsModule, // for setting properties on DOM elements
	styleModule, // handles styling on elements with support for animations
	eventListenersModule // attaches event listeners
]);

const container = document.getElementById("root");
/***
 * @h 用于生成真实DOM
 */
const vnode = h(
	"a",
	{
		props: {
			href: "www.baidu.com",
			_target: "blank"
		}
	},
	"百度"
);

/***
 * @patch diff算法核心
 */
patch(container, vnode);
