const car: { make: String; model: String; year?: number } = {
  make: "Toyota",
  model: "Innova",
  year: 1998,
};

console.log(car);

const house = {
  type: "duplex",
};

interface ICar {
  make: string;
  model: string;
  year: number;
  colour: string;
}

const newcar: ICar = {
  make: "Honda",
  model: "City",
  year: 2020,
  colour: "green",
};
console.log(newcar);

interface Isafecar extends ICar {
  airbags: number;
}
const mysafecar: Isafecar = {
  make: "honda",
  model: "city",
  year: 2022,
  colour: "red",
  airbags: 4,
};

console.log(mysafecar);
