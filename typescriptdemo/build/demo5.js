"use strict";
class Person {
    constructor() {
        this.name = "";
    }
}
const anu = new Person();
anu.name = "Anu Gowda";
console.log(anu);
class Student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const Student1 = new Student("Suman");
console.log(Student1);
