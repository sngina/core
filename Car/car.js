"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(engine, wheels) {
        this.engine = engine;
        this.wheels = wheels;
    }
    Car.prototype.startEngine = function () {
        this.engine.start();
    };
    Car.prototype.scratchWheels = function () {
        this.wheels.scratch();
    };
    return Car;
}());
exports.Car = Car;
// import { Engine } from './engine';
// import { Wheels } from './wheels';
// export class Car{
//   constructor( private engine:Engine, private wheels:Wheels){ 
//   }
//   startEngine(){
//     this.engine.start();
//   }
// }
