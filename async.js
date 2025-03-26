// axios.get(`https://fakestoreapiserver.reactbd.com/todos`)
// .then(Response => console.log(Response))

const axios = require("axios");

// const { default: axios } = require("axios");

// axios.get('https://fakestoreapiserver.reactbd.com/todos')
//     .then(response => console.log(response.data))
//     .catch(error => {
//         console.error('Error fetching todo:', error);
//     });

// axios.get(`https://jsonplaceholder.typicode.com/users`)
// .then(result => {
//     for(let i = 0; i<result.data.length; i++){
//         console.log(result.data[i].email)
//     }
// })

// *********************************

// const getData = new Promise((resolve, reject) => {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((raw) => raw.json())
//     .then((result) => {
//       if (result[0].address.city == "Gwenborough") resolve();
//       else reject();
//     });
// });

// getData
//   .then(function () {
//     console.log("resolved");
//   })

//   .catch(function () {
//     console.log("reject");
//   });

// *********************************

// console.log("downloading Start");
// setTimeout(() => {
//   var count = 0;
//   const interval = setInterval(() => {
//     console.log(count++);

//     if (count > 10) {
//       setTimeout(() => {
//         if (count == 11) {
//           console.log("download Complete");
//         }
//       }, 1000);

//       clearInterval(interval);
//     }
//   }, 1000);
// }, 1500);

// const getData = fetch(`https://jsonplaceholder.typicode.com/users`).then(raw => raw.json()).then(result => {
//     for(let i =0; i<result.length; i++){

//         console.log(`UserName : ${result[i].username}
// Email : ${result[i].email}`);

//     }
// })

// const timer = document.querySelector('.timer')
// const downloading = document.querySelector('h1')
// const pageEnter = document.querySelector('.pageEnter')

// const start = (event) => {
//     // for(let i = 0; i<= 50; i++ ){
//     // }
//     var num = 0
//     const stop = setInterval(()=>{
//         // console.log(num++);
//         num++;
//         setTimeout(()=>{
//         timer.style.width = num+"%"
//         timer.style.backgroundColor = 'red'

//         downloading.textContent = num+"%"
//         if(num >= 40){
//             timer.style.backgroundColor = 'lightgreen'
//             if(num >= 100){
//                 downloading.textContent = 'Wellcome '+num+"%"
//                 setInterval(()=>{
//                     pageEnter.style.display = 'none'
//                 },1000)
//                 clearInterval(stop)
//             }
//         }
//         },2000)

//     },100)

// }
// start()

// axios.get("https://dummyjson.com/todos")
// .then(result => {

//         const {todo, completed} = result.data.todos[25]

//         console.log(todo,"",completed );

// })

// const data = [
//     { name: 'John', age: 25},
//     { name: 'Jane', age: 30},
//     { name: 'Bob', age: 35},
//     { name: 'Alice', age: 40},
// ]

// data.map(item => {
// if else also work

//         console.log(item.age>35? item : false);

// })

// const object  = [
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 30},
// ]

// const copy = [...object]

// copy[0].name = 'gv'

// object = copy --> since the main objects variable type is const the updated shallow copy wont be assinge to the main object variable
// either the object variable should be let or var to let the shallow copy variable get assigned to the object variable

// console.log(object);

// console.log(`

//     `);

// console.log('hii');

// function timeout(){
//     console.log('timeout function');

// }

// setTimeout(timeout, 3000);

// console.log('hellow');

// const delay = 100
// setTimeout(()=>{
//         console.log('delayed by ' +delay);

// },delay)

// console.log('hellow');

// for (let i = 0; i < 100000; i++) {

//         console.log(i);

// }

// function timeout(){
//         console.log('delayed function');
// }

// setTimeout(timeout, 0)

// let count = 0
// const interval = ()=>{
//         count++
//         console.log(count);
//         if(count>10){

//                 clearInterval(interval)
//         }
// }

// setInterval(interval, 1000)

// const show = new Promise((resolve, reject)=>{

//         axios.get(``).then(res => {

//             if(res == ''){
//                 resolve()
//             }
//             else reject()
//         })
//     })

// show.then(()=>{

//     console.log('ho gya');

// })

// .catch(()=>{

//     console.log('nhi');
// })

// function reo(resol) {
//   setTimeout(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((raw) => raw.json())
//       .then((result) => console.log(result[0].name));
//     resol();
//   }, 3000);
// }

// const show = new Promise(reo);

// show.then(() => {
//   console.log("aa gya bhai ");
// });

// show.catch(() => {
//   console.log("nhi hua bhai");
// });

// function PromisifiedFunction(delay){

//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         }, delay)
//     })
// }

// PromisifiedFunction(3000).then(() => {
//   console.log("aa ik8,gya bhai ");
// });

// console.log("running");

// const btn = document.querySelectorAll(".buttons");

// btn.forEach((individualBtn) => {
//   individualBtn.addEventListener("click", (e) => {
//     console.log(e.target.id);
//   });
// });

// btn.addEventListener("click", (e) => {
//   // console.log(e);

//   if (e.target.id == "Add") {
//     console.log(e.target.id);
//   } else if (e.target.id == "Remove") {
//     console.log(e.target.id);
//   } else {
//     console.log(e.target.id);
//   }
// });

// const notification = 100
// if(notification >= notification){
//     console.log(notification - 1+"...");

// }

// let number = 1

// function increase(){
//     for( number ; number<=10; number++ ){
//         console.log(number);

//     }
// }

// increase();

// tcs NQT 2025
// function sumOfAll(i, j) {
//   // console.log(i,j);
//   let sum = 0;

//   for (i; i <= j; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }
// sumOfAll(0, 3);

// function equal(a, b, c) {
//   this.a = a;
//   this.b = b;
//   let sumOne = a + b;

//   this.c = c;

//   let sumTwo = c - 1;

//   console.log(sumOne + " and", sumTwo);

//   if (sumOne == sumTwo) {
//     console.log("values are equeal");
//   } else {
//     alert("values are not equal");
//   }
// }

// equal(5, 1, 7);

// axios.get(`https://fakestoreapiserver.reactbd.com/todos`).then((res) => {
//   console.log(res.data);
// });

// const name = ["gaurav", "sidharth"];

// name.forEach((element) => {
//   console.log(element.length);
// });

// async function delay() {
//   const s = await fetch("https://fakestoreapiserver.reactbd.com/todos").then(
//     (raw) => raw.json()
//   );
//   console.log(s);
// }

// delay();

