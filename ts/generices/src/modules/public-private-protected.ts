class Person {
	public name: string;
	private age: number;
	protected gender: string;
	constructor(name: string, age: number, gender: string) {
		this.gender = 'male';
		this.name = name;
		this.age = age;
	}
}

class Employee extends Person {
	private department: string;
	constructor(name: string, age: number, gender: string, department: string) {
		super(name, age, gender);
		this.department = department;
	}
}
