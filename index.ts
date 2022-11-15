// type Person = {
//   name: string;
//   age: number;
//   hungry: boolean;
//   friends: string[];
//   car: {
//     model: number;
//     make: string;
//   };
//   greet: () => void;
//   makeAFriend: (friendName: string) => void;
// };
// let person: Person = {
//   name: "Elona",
//   age: 26,
//   hungry: true,
//   friends: ["Nicolas"],
//   car: {
//     model: 3,
//     make: "Tesla",
//   },
//   greet: function () {
//     console.log(`Hello I'm ${this.name} and I am ${this.age}!`);
//   },
//   makeAFriend: function (friendName: string) {
//     this.friends.push(friendName);
//   },
// };
// person.greet();
// person.makeAFriend("Ed")
// console.log(person)

//This is a class
//A class is a definition for a THING
class Person {
    greet () {
        console.log("Hello there")
    }
}
let person = new Person()
person.greet()