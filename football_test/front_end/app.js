const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");


const newEle=(x,y,z)=> {
    const newElement = document.createElement("div");
    newElement.id = "xxx";
    const newElement2 = document.createElement("h1");
    const newElement3 = document.createElement("h2");
        const newElement4 = document.createElement("h1");
    newElement2.innerHTML =x;
    newElement3.innerHTML =y;
    newElement4.innerHTML =z;
    console.log(newElement.id)
    document.getElementById("main").appendChild(newElement)
    document.getElementById("xxx").appendChild(newElement2);
    document.getElementById("xxx").appendChild(newElement3);
    document.getElementById("xxx").appendChild(newElement4);
    newElement.removeAttribute('id');
    newElement.className="sub";
}
// const newElement=(tagName,clName)=>{
//     let newElement = document.createElement(tagName);
//     newElement.className =clName; 
//     document.getElementById(clName).appendChild(newElement);
// }
const main=async()=>{
    const data = await fetch("http://localhost:3000/");
    const data2 = await data.json();
    console.log("this issssssssssssssss",data2.length);
    for (let i of data2){
        const {team1,team2,time} = i;
        newEle(team1,time,team2);
    }

}

main();