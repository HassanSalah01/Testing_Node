// fetch('http://localhost:3000/')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch("").then((data)=>{
//     console.log(JSON.stringify(data))
// })

const s = async () => {
  const txt1 = document.getElementById("text1")
  const txt2 = document.getElementById("text2")
  const img1 = document.getElementById("img")

  let data = await fetch("http://localhost:3000/")
  let ss = await data.json()
  console.log(ss.name)
  txt1.innerHTML = ss.name
  txt2.innerHTML = ss.age
  img1.src = ss.image
}
s()
