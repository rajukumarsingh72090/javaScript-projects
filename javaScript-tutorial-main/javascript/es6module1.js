import { firstName } from "./imp1.js";
import { lastName } from "./imp2.js";
// don't need to put curly braces if we have used default export
import  Person, {Person2}  from "./import.js";

console.log(firstName, lastName)
const person1 = new Person("deepak", "kumar", "17")
console.log(person1)
person1.info()