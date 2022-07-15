class Person{
    static PNumber = 0 ;
    constructor(name,age,majour,gpa){
        this.name = name ;
        this.age = age;
        this.majour = majour ;
        this.gpa = gpa;
        Person.PNumber+=1;
        this.Pnumber = Person.PNumber;
    }
    printing(){
        console.log()
        console.log(`Name : ${this.name}`)
        console.log(`Age : ${this.age}`)
        console.log(`Majour : ${this.majour}`)
        console.log(`Gpa : ${this.gpa}`)

    }
    getGpa(){
        console.log(this.Pnumber);
        console.log(`Name : ${this.name}`)
        console.log(`Majour : ${this.gpa}`)
    }
}
module.exports = Person;