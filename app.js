const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
  get courses() {
    return {
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name:this.dishName,
      price:this.dishPrice
    };
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const ind = Math.floor(Math.random() * dishes.length);
    return dishes[ind];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  
  },
  get appetizers(){

  },
  set appetizers(appetizerIn){

  },
  get mains(){

  },
  set mains(mainIn){

  },
  get desserts(){

  },
  set desserts(desertIn){

  }
  
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
let meal = menu.generateRandomMeal();
console.log(meal);
