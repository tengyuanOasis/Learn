/** @format */

export default class ScorePanel {
	score: number = 0;
	level: number = 1;
	maxLevel: number = 100;
	scoreEle: HTMLElement;
	levelEle: HTMLElement;
	constructor() {
		this.scoreEle = document.querySelector('.score-number') as HTMLElement;
		this.levelEle = document.querySelector('.level-number') as HTMLElement;
	}
	reset() {
		this.score = 0;
		this.level = 1;
		this.scoreEle.innerHTML = this.score + '';
		this.levelEle.innerHTML = this.level + '';
	}

	addScore() {
		this.scoreEle.innerHTML = ++this.score + '';
		if (this.score % 10 === 0 && this.level < this.maxLevel) {
			this.levelEle.innerHTML = ++this.level + '';
		}
	}

	levelUp() {
		this.levelEle.innerHTML = ++this.level + '';
	}
}
