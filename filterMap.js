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
