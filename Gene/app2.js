const print=(word)=>{
    console.log(word)
}

const randLetter=()=>{
    return Math.floor(Math.random() * (127 - 33 + 1) + 33);
}

const randPass=(pLength)=>{
    let passArr = [];
    for ( let i = 0 ; i < pLength ; i++){
        passArr.push(String.fromCharCode(randLetter()));
    }
    return passArr;
}

const fromasciTodecimal = (asciArr)=>{
    return asciArr.map((info)=>{
        return info.charCodeAt(0);
    })
}
const fullPass = (passArr)=>{
    strpass = "";
    for(let i of passArr){
        strpass+=i;
    }
    return strpass;
}

let x = ["a","h","m","e","d"];

const testing=(arr,s)=>{
    for (let i = 0; i < arr.length;i++){
        arr[i]=String.fromCharCode(arr[i].charCodeAt(0)+s);
    }
    return arr;
}

const encry=(word,rev)=>{
    let count = 0 ;
    for(let i = 0 ; i < rev ; i++){
        for (let j of word){
            count+=j.charCodeAt(0);
        }
    }
    return Math.floor((count/1000)/2);
}