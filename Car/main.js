"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var engine_1 = require("./engine");
var wheels_1 = require("./wheels");
function main() {
    var engine = new engine_1.Engine();
    var wheels = new wheels_1.Wheels();
    var car = new car_1.Car(engine, wheels);
    car.startEngine();
    car.scratchWheels();
}
main();
// import { Car } from './car';
// import { Engine } from './engine';
// import { Wheels } from './wheels';
// function main(){
//   let engine = new Engine();
//   let wheels = new Wheels();
//   let car = new Car(engine ,wheels);
//   car.startEngine();
// }
// main();
