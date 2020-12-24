// create a parent class

class Media{
    constructor (title) {
        this._title = title;
        this._isCheckedOut = false;
        this._rating = [];
    }

    // create a getter & setter for properties 

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get rating(){
        return this._rating;
    }

    // create a method toggleCheckOutStatus that changws the values saved to the isCheckedOut property
    toggleCheckOutStatus(){
        this._isCheckedOut =! this._isCheckedOut;
    } 

    //create a method getAverageRating that returns an average value of rating array
    getAverageRating() {
        let ratingSum = this._rating.reduce((currentSum, rating)=> currentSum + rating, 0 )
        return ratingSum / this._rating.length;
    }

    // create a method addRating
    addRating(ratings) {
        this._rating.push(ratings)
    }
}

//create a Book class that extends Media Parent Class

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    //create getter for authot and pages

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

//Create a Movie class that extends Media Parent Class

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    //create getters for directors and runTime 

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

//Create a book instance with the following properties 
const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);

// call .toggleCheckOutStatus() on the historyOfEverything instance 
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

//Create a Movie instance 
const speed = new Movie('Jan de Bont', 'Speed', 116);

// call .toggleCheckOutStatus() on the speed instance
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

//call .addRating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();

console.log(speed.getAverageRating());

console.log(historyOfEverything);
console.log(speed);