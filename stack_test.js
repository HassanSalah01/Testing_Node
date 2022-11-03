let top = -1;
const arr = [];

const push = (x) => {
    top++;
    arr[top] = x;
};
const pop = () => {
    top--;
};

push(5);
push(6);
pop();
push(4);
console.log(arr);
