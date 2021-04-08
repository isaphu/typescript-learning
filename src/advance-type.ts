interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

//interaction types
type Combinables = string | number;
type Numeric = number | boolean;
type Universal = Combinables & Numeric;

//function overload:
function addTwoCombinable(a: number, b: number): number;
function addTwoCombinable(a: string, b: string): string;
function addTwoCombinable(a: number, b: string): number;
function addTwoCombinable(a: string, b: number): string;
function addTwoCombinable(a: Combinables, b: Combinables) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const results = addTwoCombinable(1, " car");
// console.log(results.split(' '))
console.log(results);

const fetchUserData = {
  id: "u1",
  name: "Isa",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchUserData.job.title, fetchUserData.job.description)

type UnknownEmployee = Employee | Admin;

function printEmplyeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmplyeeInformation({ name: "Isa", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();
const v3 = new Car();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird"; //very useful pattern when working with union type
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

if ( userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there';
}

interface ErrorContainer {
    //email and username
    //must be flexible container
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
}
