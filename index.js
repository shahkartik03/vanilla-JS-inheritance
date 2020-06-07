function Vehicle(type, wheel) {
  this.type = type;
  this.wheel = wheel;
}

Vehicle.prototype.label = function() {
  console.log(`${this.type} has ${this.wheel} No of wheels`);
}
function Car(type, wheel, name) {
  Vehicle.call(this, type, wheel);
  this.name = name;
}

Car.prototype = new Vehicle();
// If you dont do this, constructor is set to Vehicle, we want it to be constructor of Vehicle
Car.prototype.constructor = Vehicle.constructor;

var myCar = new Car('car', 4, 'wrv');
console.log('name  ', myCar.label());
