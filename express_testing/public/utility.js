const clearTab = () => {
    for (let i of elements) {
        i.addEventListener("click", () => {
            i.value = "";
        });
    }
};

const totaling = ()=>{
    setInterval(() => {
        if (validateNumberField()) {
            const totales =
                parseFloat(price.value) +
                parseFloat(tax.value) +
                parseFloat(discount.value);
            console.log(totales);
            total.value = totales;
        }
    }, 1000);
}