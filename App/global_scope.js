//global scope
// var name = 'James'
// function changeName() {
//     var name = 'Hamas'
// }
// changeName() 
// console.log(name)

//function scope
// {
//     let name = 'James'
// }
// function changeName() {
//     var name = 'Hames'
// }
// changeName()
// console.log(name)

//const keyboard
//using strict 
// const person = Object.freeze ({})
// person.name ='Stella';
// console.log(person); 
//template string
// let multiline = 'Hi i am a Multiline  string and i use backticks to make sure I can go anywhere'
// console.log(multiline);

//variable substituion
// const name = 'James Muiruki';
// let introduction ='Hi ,my name is ${name}';
// console.log(introduction);

//fat arrow function
// function ping(){
//     setTimeout(function(){
//         console.log("ping")
//     },1000);
// ping()

//object desctructuring
// const person={"first":"James","last":"Muriuki"};
// const {first:firstname,last:lastname}=person;
// console.log(firstname);
// console.log(lastname); 

//Array desctructuring
// const num =[1,2]
// const[a,b]=num
// console.log(a);

//looping for-in loops 
// const person={"first":"James","last":"Muriuki"}

// for(let prop in person){
//   console.log(prop)
// }

// looping for-of loops
// const numbers=[1,2,3,4,5,6,7,8,9,10]
// for (let num of numbers){
//   console.log(num);
// }

//promises
// function  asycTask(){
// var promise = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Action complete");
//         resolve();
//     },1000);
// })
// }

// promise notification
// function asycTask(){
//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             try{
//              console.log("Action complete");
//              resolve(); 

             
//             }catch(err){
//               reject();
//             }
//         },1000);
//     });
//     return promise;
// }
// asycTask().then(()=>{console.log('Event was successful')},()=>{console.log('Event failed')},)

//basic types 
//   let age : number = 19;
//   age = '19'



