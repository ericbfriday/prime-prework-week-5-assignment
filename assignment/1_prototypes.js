var Animal = function(first, last, type) {
    this.firstName = first;
    this.lastName = last;
    this.type = type;
};

// here's an example Animal:
var giantCactus = new Animal( "Giant", "Cactus", "Dog" );

// PART 1
// create a new animal named "somethingFun" with a first name of "Something"
// a last name of "Fun" and a type of "Cat"

var somethingFun = new Animal("Something", "Fun" , "Cat", true);


// PART 2
// Complete this function so that it will log on seperate lines the first and
// last name of an Animal object that is passed to it.
var animalFirstandLastName = function(animalObject) {
  // console log out animalObject's first name here:
  console.log(animalObject.firstName);
  // console log out animalObject's last name here:
  console.log(animalObject.lastName);
};

// Testing animalFirstandLastName
animalFirstandLastName(giantCactus);
animalFirstandLastName(somethingFun);

// PART 3 (Hard Mode)
// add a method to somethingFun named "meow()" that console logs
// "meow" when called. ex: somethingFun.meow()
somethingFun.meow = function() {
    console.log("meow");
};

// Testing somethingFun.meow();
somethingFun.meow();

// add another method to somethingFun named "isHappy" that receives a boolean
// argument called "happy".
// within this method, check if "happy" is true
// if so, console log "purr"
// if not, console log "crabby face"

somethingFun.isHappy = function(happy) {
    if (happy === true) {
      console.log("purr");
    }
    else {
      console.log("crabby face");
    }
};

// Testing isHappy true
somethingFun.isHappy(true);
// Testing isHappy false
somethingFun.isHappy(false);

console.log("***********************************************");
console.log("********* End Exercise 1_prototypes.js ********");
console.log("***********************************************");
