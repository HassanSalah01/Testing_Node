let inc =
    "lfmhscccaikokbangqggcwkbivvugz telroufyrtzrefekxylmshhkslpqzw wdrrbgqsvxxwikbbfrlyguxwcdwqfe ";
let user = "salmasararania@gmail.com";
let ne = [];
let userAr = [];
let incAr = [];
let randAR = [];
let userIncAr = incAr;

function rand() {
    let randomNumber = Math.floor(Math.random() * inc.length);
    return randomNumber;
}

function allArray() {
    for (let x = 0; x < user.length; x++) {
        userAr.push(user[x]);
        ne.push(rand());
    }
    for (let x = 0; x < inc.length; x++) {
        incAr.push(inc[x]);
        userIncAr[ne[x]] = user[x];
    }
    for (let x = 0; x < user.length; x++) {
        userAr[x] = incAr[ne[x]];
    }
}
allArray();
console.log(userAr);
console.log(incAr);
console.log(ne);
console.log(userIncAr);

for (let x = 0; x < user.length; x++) {
    userAr.push(user[x]);
}
for (let x = 0; x < inc.length; x++) {
    incAr.push(inc[x]);
}

// console.log(userAr);
// console.log(randAR);
