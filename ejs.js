/* eslint-disable no-unused-vars */
//A Vector Type

class Vec {
	x;
	y;

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(otherVec) {
		const newX = this.x + otherVec.x;
		const newY = this.y + otherVec.y;
		return new Vec(newX, newY);
	}

	minus(otherVec) {
		const newX = this.x - otherVec.x;
		const newY = this.y - otherVec.y;
		return new Vec(newX, newY);
	}
}

let a = new Vec(1, 2);
let b = new Vec(3, 4);
let c = a.minus(b);
console.log(c);

class Person {
	name;
	birthday;
	friends;

	constructor(name, birthday, friends) {
		this.name = name ?? 'unknown';
		this.birthday = birthday ?? undefined;
		this.friends = friends ?? [];
	}

	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}

	makeFriend(friend) {
		this.friends.push(friend);
	}
}

new Date();

let joe = new Person('Joe', new Date('1993-12-23'));
let john = new Person('John', new Date('1989-09-02'));

joe.sayHello();
john.sayHello();

joe.makeFriend(john);

console.log(joe);

//Groups
class Group {
	members;

	constructor() {
		this.members = [];
	}

	add(value) {
		//add value to members (if it doesn't already exist)
	}

	delete(value) {
		//remove value from members (if it exists)
	}

	has(value) {
		//return true if value is already a member of members, other was false
	}
}
//Iterable Groups
