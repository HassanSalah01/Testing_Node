let add = ""
const liList = document.querySelectorAll("li")
const newNumb = document.getElementById("new")
for (let i of liList) {
  console.log(typeof parseInt(i.innerHTML))
  if (parseInt(i.innerHTML != NaN)) {
    console.log(i.innerHTML)
    i.addEventListener("click", () => {
      add += i.innerText
      newNumb.innerHTML = add
    })
  }
}
