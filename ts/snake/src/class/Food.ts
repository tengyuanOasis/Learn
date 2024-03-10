/** @format */

export default class Food {
	element: HTMLElement;
	constructor() {
		this.element = document.querySelector('.food') as HTMLElement;
	}
	randomPosition() {
		const x = Math.floor(Math.random() * 29) * 10;
		const y = Math.floor(Math.random() * 29) * 10;
		this.element.style.left = `${x}px`;
		this.element.style.top = `${y}px`;
	}
	getPosition() {
		const x = this.element.offsetLeft;
		const y = this.element.offsetTop;
		return { x, y };
	}
}
