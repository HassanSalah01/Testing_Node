const getElement = (id) => {
    return document.getElementById(id);
};

const title = getElement("title");
const count = getElement("count");
const discount = getElement("discount");
const tax = getElement("tax");
const price = getElement("price");
const category = getElement("category");
const elements = [title, count, price, discount, tax, category];
const create = getElement("btn");
const total = getElement("total");
let num = 0 ;
btn.addEventListener("click",()=>{
    if(validateForm()){
        const arr = []
        const ob = {}
        for(let i of elements){
            const name = i.id;
            const value = i.value;
            ob[name] = value;
        }
        console.log(ob);
        num++;
        localStorage.setItem(`Product   ${num}`,ob);
    }else{
        console.log("Missing Fields")
    }
})

const main = ()=>{
    clearTab();
    totaling();
}
main();


// setInterval(() => {
//     if (validation("price") && validation("tax") && validation("discount")) {
//         const totales =
//             parseFloat(price.value) +
//             parseFloat(tax.value) +
//             parseFloat(discount.value);
//         console.log(totales);
//         total.value = totales;
//     }
// }, 1000);
// const main = () => {};
// const createProduct=()=>{

// }

// const x = {
//     title:"iphone",

//         price:1100,
//         tax:14,
//         discount:10,
//         count :3,
//         category:"Phone"
// }
