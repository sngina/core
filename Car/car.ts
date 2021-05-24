import { Engine } from './engine';
import { Wheels } from './wheels';

export class Car{
  

  constructor(private engine:Engine,private wheels:Wheels){
    
  }

  startEngine(){
    this.engine.start();
  }
  scratchWheels(){
      this.wheels.scratch();
  }
}
// import { Engine } from './engine';
// import { Wheels } from './wheels';

// export class Car{
  
//   constructor( private engine:Engine, private wheels:Wheels){ 
    
    
//   }

//   startEngine(){
//     this.engine.start();
//   }
// }