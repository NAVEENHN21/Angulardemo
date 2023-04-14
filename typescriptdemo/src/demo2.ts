const names: String[] = [];
names.push("Anu");
names.push("Supriya");
names.push("sumukh");
names.push("sunil");

console.log(names);

const countrynames: readonly string[] = ["India", "USA", "Australia", "Canada"];
console.log(countrynames);

const numbers = [1, 2, 3, 4, 5];

numbers.push(10);
console.log(numbers);

let ourtuple: [number, boolean, string];
ourtuple = [5, false, "hello"];

const graph: [number, number] = [34.55, 25.66];
console.log(graph);
const [val1, val2] = graph;
console.log(val1);
console.log(val2);
