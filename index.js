/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an 
    argument.
    - All airplanes built with Airplane should initialize with an 
    `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name,age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }


Person.prototype.eat = function(someFood){
if(this.stomach.length <10){
  return this.stomach.push(someFood);
}
}

Person.prototype.poop = function(){
  return this.stomach = [];
}

Person.prototype.toString = function(){
    console.log(`${this.name}, ${this.age}`);
  }
  

console.log("Task 1");

const jb_obj = new Person("JB",36);
jb_obj.eat('eggplant');
jb_obj.eat('cheese');
jb_obj.eat('eggs');
console.log(jb_obj.stomach.length);
jb_obj.toString;
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model,milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  
Car.prototype.fill = function(gallons){
  return this.tank +=gallons;
}

Car.prototype.drive = function(distance){
  let distance_left = this.tank/this.milesPerGallon;
  if (distance_left> distance){
    this.odometer +=distance;
    this.tank -= distance/this.milesPerGallon;
    return this.odometer, this.tank 
  } else{
    this.odometer +=(distance-distance_left);
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer.toFixed(2)} miles!`;
  }
};

console.log("Task 2");
const car1 = new Car("Audi",50);
car1.fill(110);
console.log(car1);

console.log("Task 2 - stretch");
console.log(car1.drive(200));
console.log(car1);


  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */


 function Baby(babyAttributes) {
   Person.call(this,babyAttributes);
   this.favoriteToy = babyAttributes.favoriteToy
  }
 
  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function (){
    return `Playing with ${this.favoriteToy}`;
  }

  console.log("Task 3");

const newBaby = new Baby({
    name:'Lindsay',
    age: 1,
    favoriteToy: 'horse',
    });

console.log(newBaby.play())

  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. It is a keyword that references the object it belongs
    2. In strict mode, when used alone, this also refers to the window object 
    3. The woner of the function is what defines the binding for this, 
    4. JavaScript strict mode does not allow default binding. Therefore, this is undefined
    when used in a function in strict mode, 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}