const {writeFileSync} = require('fs');
class FData{
    constructor(){
        this.name = this.names();
        this.age = this.ages();
        this.majour = this.majours();
        this.gpa = this.gpas();
        this.writeData();
    }
    names(){
        let arr = ["ahmed","sara","kareem","mariam","Liam","Olivia","Noah","Emma","Oliver","Charlotte","Elijah","Amelia","James","Ava","Harper"];
        return arr[Math.floor(Math.random()*arr.length)]
    }
    ages(){
        return Math.floor(Math.random()*16)+20;
    }
    majours(){
        let arr = ["CS","BA","MA","HM","IT","AR","AP","ME","EN"]
        return arr[Math.floor(Math.random()*arr.length)];
    }
    gpas(){
        return ((Math.random()* 3 - 0+1)).toFixed(2);
    }
    writeData(){
        writeFileSync("./testing.txt",`${this.name} ${this.age} ${this.majour} ${this.gpa} \n`,{flag:"a"});
    }


}
// let s = new FData();
module.exports = FData;