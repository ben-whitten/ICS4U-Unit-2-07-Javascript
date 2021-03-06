/*
 * The Bike program is an extension from the Vehicle program.
 *
 * @author  Ben Whitten
 * @version 1.0
 * @since   2020-12-18
 */

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global require module*/
// Defining prompt for getting user input.

// Importing the vehicle class from another file
const Vehicle = require("./Vehicle.js");

class Bike extends Vehicle {

  constructor() {
    super();
    this.cadence = 1;
  }

  ringBell() {
    return this.cadence;
  }
}
// Exporting the subclass
module.exports = Bike;

///////////////////////////////////////////////////////////////////////////////
