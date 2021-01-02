// creating an empty menu object
const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    
    /*
    // creating getters and setters
    get appetizers(){
        return this.appetizers;
    },
    get mains(){
        return this.mains;
    },
    get desserts() {
        return this.desserts;
    },

    set appetizers(newAppetizers) {
        this.appetizers = newAppetizers;
    },
    set mains(newMains) {
        this.mains = newMains;
    },
    set desserts(newDesserts) {
        this.desserts = newDesserts;
    },

    get courses(){
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    */


    // adding a new dish to the specified course 
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },

    //function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random()* dishes.length);
        return dishes[randomIndex];
    },

    //function which will automatically generate a three-course meal for us
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is ${totalPrice} `
    }

};

// adding dishes to appetizers, mains and desserts 

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Chicken Salad', 3.90);
menu.addDishToCourse('appetizers', 'Bruschetta', 1.99);

menu.addDishToCourse('mains', 'Burger', 7.00);
menu.addDishToCourse('mains', 'Steak', 10.12)
menu.addDishToCourse('mains', 'Fish', 18.20);

menu.addDishToCourse('desserts', 'Cake', 2.00);
menu.addDishToCourse('desserts', 'Ice cream', 1.85);
menu.addDishToCourse('desserts', 'Cake 2 ', 2.20);

// generating a meal
let meal = menu.generateRandomMeal();

console.log(meal);