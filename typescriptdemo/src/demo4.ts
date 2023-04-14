function getTime(): Number {
  return new Date().getTime();
}
console.log(getTime());

function greet(): void {
  console.log("Hello there..");
}

greet();

function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(5, 5));

function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}
console.log(add(5, 4));
console.log(add(5, 4, 7));

function expo(value: number, exponenet: number = 2): number {
  return value ** exponenet;
}
console.log(expo(2, 2));
console.log(expo(2, 3));
console.log(expo(2, 4));
console.log(expo(3));
