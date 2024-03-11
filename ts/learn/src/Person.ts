/** @format */

export enum Gender {
	MALE = 0,
	FEMALE = 1
}
export class Person {
	/**
	 * @description
	 * public 公开属性, 可以在任何地方被访问访问
	 * private 私有属性, 只能在类内部被访问修改
	 * protected 受保护的, 只能在类内部和子类中被访问
	 */
	public name: string;
	private age: number;
	protected sex: Gender;

	constructor(name: string, age: number, sex: Gender) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	getAge() {
		return `age is ${this.age}`;
	}

	setAge(age: number) {
		this.age = age;
	}

	get gender() {
		return `gender is ${this.sex}`;
	}
}
