//This is a CLASS
//A class is a definition for a THING
//It tells me, what a properties and methods (a function in an object) are available for this thing
class Person {
  name: string;
  age: number;
  hungry: boolean;
  tired: boolean
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.hungry = false
    this.tired = false
  }
  greet() {
    console.log(`Hello I am ${this.name}!`);
  }
  salute() {
    console.log("See you later!");
  }
  checkStatus (){
    if(this.hungry) console.log("I am hungry")
    else console.log("I am not hungry")
    if(this.tired) console.log("I am tired")
    else console.log("I am not tired")
  }
  workout(){
    console.log("1, 2, 3 runnnn")
    this.hungry = true
    this.tired = true
  }
  sleep () {
    console.log("ZzZzZzZzzZ")
    this.tired = false
    this.hungry = true
  }
  eat () {
    console.log("Eatinggg")
    this.hungry = false
  }
  growUp () {
    this.age++
  }
}

//These are INSTANCES
let person = new Person("Nicolas", 34);
let person2 = new Person("Elona", 26)

person.greet();
person.checkStatus()
person.workout()
person.checkStatus()
person.sleep()
person.checkStatus()
person.eat()
person.checkStatus()
