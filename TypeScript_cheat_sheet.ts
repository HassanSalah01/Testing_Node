// variable declaration
let name1: string = "hello";
let num: number = 5;
let isTrue: boolean = true;
console.log(name1);
console.log(num);
console.log(isTrue);

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
