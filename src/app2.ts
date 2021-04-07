
enum Role { ADMIN, READ_ONLY, AUTHOR};

const person: {
  name: string;
  age: number;
  hobbies: string[]; //array string
  role: [number, string] //tuple: fixed number of element in an array
  // object
  address: { 
    houseNumber: number;
    road: string;
    district: string;
    subDistrict: string;
  };
  favFood: string[];
} = {
  name: "Isa",
  age: 26,
  hobbies: ["swimming", "cooking"],
  role: [2, 'programmer'],
  address: {
    houseNumber: 111,
    road: "jojo",
    district: "mojo",
    subDistrict: "hellomojo",
  },
  favFood: ["padthai", "fried rice"],
};

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person);
