// class Person {
//   name: string = "";
// }

// const anu = new Person();
// anu.name = "Anu Gowda";
// console.log(anu);

class Student {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
const Student1 = new Student("Suman");
console.log(Student1);
