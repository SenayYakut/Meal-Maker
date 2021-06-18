const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: this.dishName,
            price: this.dishPrice
        };
        this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const ind = Math.floor(Math.random() * dishes.length);
        return dishes[ind];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = this.appetizer.price + this.main.price + this.dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;

    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._courses.mains = mains;

    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    }

};

menu.addDishToCourse('appetizers', 'Caesar Salad', 9.25);
menu.addDishToCourse('mains', 'Salmon', 15.25);
menu.addDishToCourse('desserts', 'Baklava', 8.25);

let meal = menu.generateRandomMeal();
console.log(meal);