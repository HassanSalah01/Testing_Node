const s=document.getElementById("ones");
s.addEventListener("mouseup", (event)=> {
    myFunction(event);
  });

s.addEventListener("mousedown", (event)=> {
    myFunction2(event);
  });
const myFunction = (e)=>{
    s.style.backgroundColor = "red";
}

const myFunction2 = (e)=>{
    s.style.backgroundColor = "green";
}