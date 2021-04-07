var user1;
user1 = {
    name: "Max",
    age: 30,
    greet: function (phrase) {
        console.log(phrase + " " + this.name + " I am " + this.age);
    }
};
// user1.greet("Hi there I am Max");
user1.greet('hi');
