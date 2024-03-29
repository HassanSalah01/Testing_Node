// variable declaration

let name1: string = "hello";
let num: number = 5;
let isTrue: boolean = true;
let isNull: null = null;
let isUndefined: undefined;
let isObject: object = {
    name: "marco",
    age: 45,
};
console.log(name1);
console.log(num);
console.log(isTrue);
console.log(isNull);
console.log(isUndefined);
console.log(isObject);

//Functions VOID
const printName = (x: string): void => {
    console.log(x);
};
printName("Mark");

// Function Return

const printName2 = (x: string): string => {
    return x;
};
console.log(printName2("Sara"));

// Function default parameters

const printName3 = (
    name: string,
    age: number,
    phoneNumber?: number
): string => {
    return `${name} ${age}${phoneNumber}`;
};

const printName4 = (...num: number[]): number => {
    let x = 0;
    for (let i = 0; i < num.length; i++) {
        x += num[i];
    }
    return x;
};

//object

const user: { name: string; age: number } = {
    name: "Mark",
    age: 20,
};
console.log(user);

//interfaces

interface User {
    name: string;
    age: number;
}

const user2: User = {
    name: "mark",
    age: 30,
};
const user3: User = {
    name: "sara",
    age: 50,
};

console.log(user2);
console.log(user3);

// interfaces 2

interface Users {
    name: string;
    age?: number; // here age is not mandatory
}

const user4: Users = {
    name: "john",
    age: 50,
};

const user5: Users = {
    name: "sara",
    //age can be number or undifiened
};

// function inside interface
interface users {
    name: string;
    age: number;
    getName(): string;
}
const user6: users = {
    name: "sara",
    age: 30,
    getName() {
        return this.name;
    },
};
console.log(user6.getName() + " inside The function");
// it is better to name your interfaces as
// A) IUser
// B) UserInterface
// we do this to not mistaken them with classes name

// union Types

let pageNumber: string | number;
pageNumber = 5;
pageNumber = "10";

// type Allias

type str = string;
let naming: str = "Marty";
//here string and str are the same
//we can also Do let naming :string = "Marty"

// here we are combining Both Allies and types
type id = string | number;
let userId: id = "5";
userId = 10;

type user = {
    name: string;
    age: number;
};
// Extend Type user to add new properties

type userss = user & {
    address: string; // all the user prop +=adress
};

// Arrays

const arr: number[] = [1, 2, 3, 4, 5];
const arr1: Array<string> = ["a", "b", "c"];

// different type Array

const arr2: (number | string)[] = [1, 2, 3, "sara"];

// multy dimenssion array

const arr3: (number | string | string[])[] = [1, 2, 3, "sara", ["mark", "poe"]];
