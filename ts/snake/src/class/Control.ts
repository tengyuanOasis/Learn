/** @format */
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// const startBtn = document.querySelector('.start') as HTMLElement;
// startBtn.addEventListener('click', () => {
// 	if (startBtn.innerHTML === '开始') {
// 		startBtn.innerHTML = '暂停';
// 		scorePanel.reset();
// 		// snake.init();
// 	} else {
// 		startBtn.innerHTML = '开始';
// 		// snake.stop();
// 	}
// });

export default class GameControl {
	snake: Snake;
	food: Food;
	scorePanel: ScorePanel;
	direction: string = 'ArrowRight';
	speed: number = 300;
	isLive: boolean = false;
	startBtn: HTMLElement;
	timer?: number;
	constructor() {
		this.snake = new Snake();
		this.food = new Food();
		this.scorePanel = new ScorePanel();
		this.startBtn = document.querySelector('.start') as HTMLElement;
		this.startBtn.onclick = this.init.bind(this);
		this.food.randomPosition();
	}

	init() {
		document.addEventListener('keydown', this.keydownHandler.bind(this));
		this.isLive = true;
		this.speed = 300 - (this.scorePanel.level - 1) * 30;
		this.snake.move(0, 0);
		this.direction = 'ArrowRight';
		this.food.randomPosition();
		this.run();
	}

	keydownHandler(event: KeyboardEvent) {
		this.direction = event.key;
	}

	run() {
		let x = this.snake.x;
		let y = this.snake.y;
		if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(this.direction)) return;
		if (this.direction === 'ArrowUp') {
			y -= 10;
		} else if (this.direction === 'ArrowDown') {
			y += 10;
		} else if (this.direction === 'ArrowLeft') {
			x -= 10;
		} else if (this.direction === 'ArrowRight') {
			x += 10;
		}
		try {
			this.snake.X = x;
			this.snake.Y = y;
			this.eatCheck(x, y);
			if (this.isLive) {
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.run();
				}, this.speed);
			}
		} catch (error) {
			alert((error as Error).message);
			this.isLive = false;
		}
	}

	eatCheck(x: number, y: number) {
		const { x: fx, y: fy } = this.food.getPosition();
		if (fx === x && fy === y) {
			this.food.randomPosition();
			this.snake.addBody();
			this.scorePanel.addScore();
		}
	}
}
