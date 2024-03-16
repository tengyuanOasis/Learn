/** @format */

export class Animal {
	public name: string;
	private age: number;
	protected weight: number;

	constructor(name: string, age: number, weight: number) {
		this.name = name;
		this.age = age;
		this.weight = weight;
	}

	getAge() {
		return `age is ${this.age}`;
	}

	public display() {
		console.log(`Name: ${this.name}, Age: ${this.age}, Weight: ${this.weight}`);
	}
}

export class Dog extends Animal {
	constructor(name: string, age: number, weight: number) {
		super(name, age, weight);
	}

	public displayDog() {
		// 1.可以访问父类的 public 和 protected 成员,但是this.age会报错
		// console.log(`Name: ${this.name}, Age: ${this.age}, Weight: ${this.weight}`);
		//2.以通过 super 关键字调用父类的方法
		console.log(`Name: ${this.name}, Age: ${super.getAge()}, Weight: ${this.weight}`);
	}
}
