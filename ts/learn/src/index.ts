/** @format */

import { Animal, Dog } from './animal';
import { Person, Gender } from './Person';
(() => {
	const animal = new Animal('Tom', 5, 10);
	console.log('%c [ animal ]', animal);
	// console.log(animal.name); // 可以访问 public 成员
	// console.log(animal.age);  // 不能访问 private 成员，会报错
	// console.log(animal.weight);  // 不能访问 protected 成员，会报错

	const dog = new Dog('Buddy', 3, 8);
	console.log(dog.name); // 可以访问 public 成员
	console.log(dog.displayDog());
	// console.log(dog.age);  // 不能访问 private 成员，会报错
	// console.log(dog.weight);  // 不能访问 protected 成员，会报错
	console.log('-----------------分界线---------------------');
	const person = new Person('Mark', 18, Gender.FEMALE);
	// person.age = 20; //报错，age只能在类内部被访问
	console.log(person);
	console.log(person.getAge());
	person.setAge(20);
	console.log(person);
	console.log(person.gender);
})();
