const arr = ["ahmed", "Sara", "karim"];

let s = arr.map((x) => {
    return x;
});

let s2 = arr.map((x) => {
    if (x == "ahmed") {
        return 1;
    } else {
        return 0;
    }
});

console.log(s2);

const arr2 = [
    { name: "ahmed", age: 15 },
    { name: "sara", age: 18 },
    { name: "karim", age: 25 },
];


const arr3 = arr2.filter((x)=>{
    if(x.age>=18){
        return x
    }
})

console.log(arr3);