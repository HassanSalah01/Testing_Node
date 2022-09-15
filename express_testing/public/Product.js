class Product {
    constructor(prod) {
        this.title = prod.title;
        this.price = prod.price;
        this.tax = prod.tax;
        this.discount = prod.discount;
        this.count = prod.count;
        this.category = prod.category;
    }
    setTitle(val) {
        this.title = val;
    }
    getTit() {
        return this.title;
    }

    setPrice(val) {
        this.price = val;
    }

    getPrice() {
        return this.price;
    }

    setTax(val) {
        this.tax = val;
    }

    getTax() {
        return this.tax;
    }

    setDiscount(val) {
        this.discount = val;
    }

    getDiscount() {
        return this.discount;
    }

    setCount(val) {
        this.count = val;
    }

    getCount() {
        return this.count;
    }

    setCategory(val) {
        this.category = val;
    }

    getCategory() {
        return this.category;
    }
    printData() {
        console.log(this.title);
        console.log(this.count);
    }
}
