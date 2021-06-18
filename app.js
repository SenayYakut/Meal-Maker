const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndx = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndx];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

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
menu.addDishToCourse('appetizers', 'Fruit Salad', 10.25);
menu.addDishToCourse('appetizers', 'Spring Salad', 8.25);

menu.addDishToCourse('mains', 'Salmon', 15.25);
menu.addDishToCourse('mains', 'Steak', 25.25);
menu.addDishToCourse('mains', 'Tofu', 10.25);


menu.addDishToCourse('desserts', 'Baklava', 8.25);
menu.addDishToCourse('desserts', 'Rice Puding', 10.25);
menu.addDishToCourse('desserts', 'Ice Cream', 9.25);


const meal = menu.generateRandomMeal();
console.log(meal);