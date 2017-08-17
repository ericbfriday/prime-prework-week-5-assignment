// This code is just put together so I can read the code cleanly as
// per @Sharaseaman's suggestion. It's not for grading, and thus is not
// linked to the HTML file. All tests passing.


function Cube(length) {
  this.length = length;
  this.volume = function () {
    return (Math.pow(this.length,3));
};
}

function RollingChair(type, color) {
  this.type = type;
  this.color = color;
}

function Room(capacity) {
  this.capacity = capacity;
  this.rollingChairs = [];
  this.cubes = [];
}

function convertRooms(roomAsArray) {
  var room = new Room(roomAsArray[0]);
    for ( i = 0 ; i < roomAsArray[1]; i++) {
      room.rollingChairs[i] = new RollingChair('rolling', roomAsArray[3]);
    }
    for ( n = 0 ; n < roomAsArray[2]; n++) {
      room.cubes[n] = new Cube(24);
    }
    return room;
  }

var roomsArray = [[20, 14, 12, 'red'], [24, 10, 40, 'blue'], [23, 18, 30, 'black'], [18, 13, 13, 'blue']];

function convertRoomsList(arrayOfRooms){
  var convertedRoomsArray = [];
  for (p = 0; p < arrayOfRooms.length; p ++) {
    convertedRoomsArray[p] = convertRooms(arrayOfRooms[p]);
  }
  return convertedRoomsArray;
}

convertRoomsList(roomsArray);

// Original notes below. These correspond with the code written above. All tests
// passing.

/**
 * This entire file is a web application. Nearly everything in this file relies on
 * other functions in and variables also within this file.
 *
 * Before getting started, read through this code.
 *
 * The goal here is to convert an array of arrays to an array of Room objects.
 *
 * The steps required to achieve this goal are laid out below.
 *  - Steps 1-3 create three constructor functions that will allow us to create the objects
 * necessary for conversion to a Room object. The Room object also contains arrays of
 * Cube objects and Rolling Chair objects.
 * - Step 4 creates a function that does one thing well: convert an array of data into
 * a room object.
 * - Step 5 creates a function that loops over an array of arrays, the calls the
 * single-purpose function above for each containing array. So, an array of 4 arrays will
 * produce an array of 4 Room objects.
 */

// 1 - Create properties and methods for the Cube constructor
/**
 * Represents a Cube seat
 * @constructor
 * @param {Number} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/

  // 1a - create a length property that is equal to the provided argument, length

  // 1b - Create a volume method that returns the volume of the cube

  // PRO TIP: A "method" is a function that is assigned to an object's property
  // The volume of a cube is the length to the third power
  // PRO TIP: Consider using Math.pow, a built-in JavaScript method to calculate this

// 2 - Create properties and methods for the Rolling Chair constructor
/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/

  // 2a - Create a type property that is equal to the provided argument, type
  // 2b - Create a color property that is equal to the provided argument, color


// 3 - Create properties and methods for the Room constructor
/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Number} capacity - the room's capacity
 *  @property {Number} capacity - number of seats in this room
 *  @property {Array} rollingChairs - an array of rolling chair objects
 *  @property {Array} cubes - an array of cube objects
**/

  // 3a - Create a capacity property that is equal to the provided capacity argument
  // 3b - Create a rollingChairs property that is equal to an empty array
  // 3c - Create a cubes property that is equal to an empty array


// 4 - The following function should create a Room object from an array of room data
// and return the created room

  // 4a - Create a room object with the Room constructor you created above
  // and pass into the constructor the value for the capacity from room array.
  // 4b - Create a loop that adds new rolling chair objects with type "rolling"
  // and the color provided in the array to the created room's rollingChairs array
  // EF Note - Why do we need 'new RollingChairs to be capitalized - because it's a function?

  // 4c - Create yet another loop that adds new cube objects with a length of 24 to
  // the created room's cubes array
    // EF Note - I don't understand the above line and Instructions.
  // 4d - return the room object


// For each inner array we have [capacity, rollingChairs, cubes, color of seats]
// 5 - Convert each room array to a room object
// 5a - Loop through the roomsArray
// In the body of the loop, call the convertRooms function for each room array
// store all the converted rooms objects in convertedRoomsArray

  //return convertedRoomsArray to make it available outside this function:

//Call convertRoomsList
