class Person {
	#name;
	#age;

	constructor(name, age) {
		this.#name = name;
		this.age = age; // goes through the setter
	}

	get name() {
		return this.#name;
	}

	get age() {
		return this.#age;
	}

	set age(value) {
		this.#age = value;
	}
}

class Student extends Person {
	constructor(name) {
		super(name);
	}

	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name) {
		super(name);
	}

	teach() {
		console.log(`${this.name} is teaching`);
	}
}

const person = new Person("John", 25);
console.log(person.name); // John
person.age = 30;
console.log(person.age);  // 30

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;