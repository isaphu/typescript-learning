var person = {
    name: 'Isa',
    age: 26,
    hobbies: ['swimming', 'cooking'],
    address: {
        houseNumber: 111,
        road: "jojo",
        district: "mojo",
        subDistrict: "hellomojo"
    },
    favFood: ['padthai', 'fried rice']
};
for (var hobby in person.hobbies) {
    console.log(hobby.toUpperCase());
}
;
console.log(person);
