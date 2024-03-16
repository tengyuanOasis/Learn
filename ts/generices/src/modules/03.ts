/**
 *
 *  Generices在类中的使用
 *
 * **/

// class CollectionNumber {
// 	data: number[] = [];

// 	public push(...items: number[]) {
// 		this.data.push(...items);
// 	}
// 	getData() {
// 		return this.data;
// 	}
// }

// const collectionNumber = new CollectionNumber();

// collectionNumber.push(1, 2, 3, 4, 5);

// console.log(collectionNumber.getData());

class CollectionAny<T> {
	data: T[] = [];

	public push(...items: T[]) {
		this.data.push(...items);
	}

	getData() {
		return this.data;
	}
}

const collectionNumber = new CollectionAny<number>();
const collectionString = new CollectionAny<string>();
collectionNumber.push(1, 2, 3, 4, 5);
collectionString.push('1', '2', '3', '4', '5');
console.log(collectionNumber.getData());
console.log(collectionString.getData());

type User = {
	name: string;
	age: number;
};

const userCollection = new CollectionAny<User>();
userCollection.push({ name: 'John', age: 30 });
console.log(userCollection.getData());
