const val = document.getElementById("txt");
const btn = document.getElementById("btn");
console.log(val)

const fetching= async (url,x) =>{
    try {
        console.log("welcome")
        const one = await fetch(url);
        const two = await one.json();
        console.log(getData(two,x));
    } catch (error) {
        console.log("Wee")
    }
}
const getData = (arr,id)=>{
    return arr.filter((item)=>{
        return item.userId ==id;
    })
}
btn.addEventListener("click",()=>{
    fetching("https://jsonplaceholder.typicode.com/posts",val.value)
})