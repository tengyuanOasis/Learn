/** @format */

export default class Snake {
	head: HTMLElement;
	bodies: HTMLCollection;
	snake: HTMLElement;

	constructor() {
		this.snake = document.querySelector('.snake') as HTMLElement;
		this.head = document.querySelector('.snake>div') as HTMLElement;
		this.bodies = this.snake.getElementsByTagName('div');
	}

	init() {
		this.head.style.left = '0px';
		this.head.style.top = '0px';
	}

	move(x: number, y: number) {
		if (x < 0 || x > 290 || y < 0 || y > 290) {
			throw new Error('蛇撞墙了');
		}

		this.moveBody();

		// 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === x) {
			// console.log('水平方向发生了掉头');
			// 如果发生了掉头，让蛇向反方向继续移动
			if (x > this.x) {
				// 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
				x = this.x - 10;
			} else {
				// 向左走
				x = this.x + 10;
			}
		}

		// 移动身体
		this.moveBody();

		this.head.style.left = x + 'px';
		this.head.style.top = y + 'px';
	}

	addBody() {
		this.snake.insertAdjacentElement('beforeend', document.createElement('div'));
	}

	moveBody() {
		for (let i = this.bodies.length - 1; i > 0; i--) {
			let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
			let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
			(this.bodies[i] as HTMLElement).style.left = x + 'px';
			(this.bodies[i] as HTMLElement).style.top = y + 'px';
		}
	}
	checkHeadBody() {
		// 获取所有的身体，检查其是否和蛇头的坐标发生重叠
		for (let i = 1; i < this.bodies.length; i++) {
			let bd = this.bodies[i] as HTMLElement;
			if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
				// 进入判断说明蛇头撞到了身体，游戏结束
				throw new Error('撞到自己了！');
			}
		}
	}
	get x() {
		return this.head.offsetLeft;
	}

	get y() {
		return this.head.offsetTop;
	}
	set X(value: number) {
		// 如果新值和旧值相同，则直接返回不再修改
		if (this.X === value) {
			return;
		}

		// X的值的合法范围0-290之间
		if (value < 0 || value > 290) {
			// 进入判断说明蛇撞墙了
			throw new Error('蛇撞墙了！');
		}

		// 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
			// console.log('水平方向发生了掉头');
			// 如果发生了掉头，让蛇向反方向继续移动
			if (value > this.X) {
				// 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
				value = this.X - 10;
			} else {
				// 向左走
				value = this.X + 10;
			}
		}

		// 移动身体
		this.moveBody();

		this.head.style.left = value + 'px';
		// 检查有没有撞到自己
		this.checkHeadBody();
	}

	set Y(value: number) {
		// 如果新值和旧值相同，则直接返回不再修改
		if (this.Y === value) {
			return;
		}

		// Y的值的合法范围0-290之间
		if (value < 0 || value > 290) {
			// 进入判断说明蛇撞墙了，抛出一个异常
			throw new Error('蛇撞墙了！');
		}

		// 修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
			if (value > this.Y) {
				value = this.Y - 10;
			} else {
				value = this.Y + 10;
			}
		}

		// 移动身体
		this.moveBody();
		this.head.style.top = value + 'px';
		// 检查有没有撞到自己
		this.checkHeadBody();
	}
}
