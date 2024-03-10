/** @format */

(() => {
	enum Gender {
		MALE = 0,
		FEMALE = 1
	}
	class Person {
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

	const person = new Person('Mark', 18, Gender.FEMALE);
	// person.age = 20; //报错，age只能在类内部被访问
	console.log(person);
	console.log(person.getAge());
	person.setAge(20);
	console.log(person);
	console.log(person.gender);
})();
