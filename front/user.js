class User{
    constructor(x){
        this.userId = x.userId;
        this.id = x.id;
        this.title = x.title;
    }
    createUser(){
        console.log("weclome");
        const div = document.createElement("div");
        document.body.appendChild(div)
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3")
        
        h1.innerHTML = this.userId;
        h2.innerHTML= this.id;
        h3.innerHTML = this.title;
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        
    }

}