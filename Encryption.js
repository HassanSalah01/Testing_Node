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

for (let x = 0; x < user.length; x++) {
    userAr.push(user[x]);
}
for (let x = 0; x < inc.length; x++) {
    incAr.push(inc[x]);
}

// console.log(userAr);
// console.log(randAR);
