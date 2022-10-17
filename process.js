const s = process.argv;

const add = (arr) => {
    if (arr[2] == "add") {
        return parseInt(arr[3]) + parseInt(arr[4]);
    } else if (arr[2] == "multiply") {
        return parseInt(arr[3]) * parseInt(arr[4]);
    } else if (arr[2] == "sub") {
        return parseInt(arr[3]) - parseInt(arr[4]);
    } else if (arr[2] == "div") {
        return parseInt(arr[3]) / parseInt(arr[4]);
    }
};

console.log(add(s));
