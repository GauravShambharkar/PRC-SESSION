// const a  = [2,3,1]
// var sum = 0
// for(let i = 0; i<a.length; i++)
// {
//           sum += a[i]

const { default: axios, Axios } = require("axios");

// }
// console.log(sum);

// ***********************************

// var factorial = 1 ;
// const facts = (number)=>{
//     if(number >0){
//         for(let i =0; i<number; i++){
//             factorial += factorial * i

//         }
//         return factorial;
//     }

// }

// console.log(facts(5));

// ***************************************

// var isLeapYear = (year) => {
//     year%4 === 0 ? console.log("leap year")
//     : console.log("not leap year")
// }
//     isLeapYear(2028)

// ***************************************'

// function sumOfDigits(number){

//     var digitString = number.toString()
//     var sum = 0;
//     for(let i =0 ; i<digitString.length; i++){
//             sum += parseInt(digitString[i])
//         }

//        console.log(sum);

// }
// sumOfDigits(22)

// **************************************

// function mult(value,n){
//     if(n>10)
//     {
//         throw new Error(" can not be more than 10")

//     }
//     else{
//     for(let i = 1 ; i<=n; i++){

//         console.log(i*value);

//     }}

// }
// mult(5, 10)

// **************************************

// function gessString(arr){
//     var larg = arr[0]
//     for(let i=0; i<=arr.length; i++){
//             if(arr[i] >= larg){
//                 larg = arr[i]
//             }
//         }
//         console.log(larg);

// }

// gessString([11,24,80,40])

// **************************************

// function reverse(value)
// {
//         var rev = ""
//         for(let i= value.length - 1 ; i>=0 ; i--){

//             rev += value[i]
//         }
//         console.log(rev);
// }

// reverse('gv')

// **************************************

// function exp(base, exponenet){

//     var result = base ** exponenet
//     console.log(result);

// }

// exp(5,4)

// **************************************

// function factor(num){

//     for(let i=1; i<num; i++){
//         if(num % i === 0){
//             console.log(i, "is a factor of", num);
//  }

//     }

// }
// factor(14)

// **************************************

// function average(num){
//     var sum = 0
//     for(let i=0; i<num.length; i++){
//         sum += num[i]
//         var avg = sum / num.length
//     }

//     console.log(avg);

// }

// average([1,2,7,14])

// **************************************

// function Interest(Ammount, Interest ,year)
// {
//     let monthlyInterestAmmount =  (Ammount * Interest * year) / 100
//     // console.log(monthlyInterestAmmount);
//     return monthlyInterestAmmount

// }

// console.log(Interest(1000, 5 ,1))

// **************************************

// function prime(num){
//     for(let i = 2; i<num; i++){
//         if(num % i === 0){
//             return "not a prime number"
//             break
//         }
//         else{
//             return "prime number"
//         }

//     }
// }

// console.log(prime(4));

// **************************************

// function countWords(phrase){
//     const splitsWords = phrase.split(' ')
//     // console.log(words);
//     const GapWords = splitsWords.length -1;
//     const showWords = splitsWords.length;
//     console.log("number of gaps are",GapWords, "And Number of words are", showWords);

// }

// countWords("this is a phrase which has this much gap");

// **************************************

// function temperature(temp, fara){

//     fara = (temp * 9/5) + 32

//     return fara

// }

// console.log(temperature(27));

// **************************************

// for(let row= 1; row<=5; row++){

//     // console.log("* \n");

//     for(let col = 5; col>=row; col--){

//         process.stdout.write("* ");

//     }
//     console.log(" ");

// }

// for (let row = 1; row <= 5; row++) {
//     // Inner loop to print asterisks for the current row
//     for (let col = 1; col <= row; col++) {
//         process.stdout.write("* "); // Print asterisk followed by a space without a newline
//     }
//     console.log(""); // Move to the next line after each row
// }

// **************************************

// function anagrams(first,second){

//     var firstSplit = first.split('')
//     var secondSplit = second.split('')

//     var add = '';

//     console.log(firstSplit, secondSplit );
//     // if(firstSplit.length === secondSplit.length){
//         //     console.log("length is equal");

//         // }

//         for(let i=0 ; i<firstSplit.length ; i++){

//             for(let j = 0; j<secondSplit.length; j++){
//                 if(firstSplit[i] === secondSplit[j]){
//                     add += secondSplit[j]
//                     break
//                 }
//                 // console.log(secondSplit[i]);
//             }

//         }
//         if(firstSplit != secondSplit){
//             console.log("Strings are not Anagram");

//         }
//         console.log(second," :",add);

// }

// anagrams("pools","spool");

// var add = 0
// function perfectNumber(num){

//     for(let i = 1; i<num; i++ ){

//         if(num % i === 0 ){
//             add += i
//         }

//     }

//     if(add === num){
//         console.log(add, "perfect number");

//     }
//     else{
//         console.log(`Addition of individual number is ${add} so ${num} is not a perfect number`);
//     }

// }

// perfectNumber(30)

// function password(key){

//         console.log(key);
//         const splitsKey = key.split('')
//         for(let i=0 ; i<key.length; i++){

//             if(key[i] != "@"){

//                 // console.log(key[i]);
//                 console.log(`password is not strong make sure to add "$" "@" "%"`);
//                 break;

//             }
//             // else{

//             // }

//         }
// }

// password("123458")

// const user ={
//     name: "John",
//     password: "123456",
// }

// function isUser(userName,password){
//     if(user.password == password && user.name == userName){
//         console.log("AUthorized user");

//     }
// }

// isUser("John", 123456)

// const userData = [
//     { name: "John", password: "123456"},
//     { name: "Joe", password: "12345"},
//     { name: "Gv", password: "abcd"},
// ]

// var userFound = false

// function login(id, password){
//     // console.log(userData[0].name);

//     for(let i= 0; i<userData.length; i++){
//         // console.log(userData[i]);
//         if(userData[i].name == id && userData[i].password == password){

//             console.log("Authorized user");
//             userFound = true
//             break

//         }
//         // else if(userData[i].name !== id){
//         //     console.log("User not found");
//         //     break;
//         // }
//         // else{
//         //     console.log("enter again");
//         //     break;
//         // }

//     }
//     if(!userFound){
//         console.log("User not found");
//     }

// }
// login("Gv", "abcd" )

// function string(input){

//     console.log(input);
//     const split = input.split(' ')

//     for (let i = 0; i < split.length; i++) {
//         if(split[i] == 'big' ){

//             console.log(i);

//         }
//     }

// }

// string("this is big so big as beyond big mountain")

// function string(input){

//     // const split = input.split(' ')
//     // console.log(input[8]);
//     const find = 'big'
//     const findSplit = find.split('')
//     // console.log(findSplit);

//     for(let i = 0 ; i<input.length; i++){

//         for(let j =0 ;j<findSplit.length; j++){
//             if (input[i] == findSplit[j]) {

//                 console.log(input[i]," ", i);
//             }
//             break
//         }
//     }

// }

// string("this is big so big as big mountain")

// function calculator(num1,num2){

//     const prompt = Require('prompt-sync')();
//     const userChoice = prompt(`select any operator
//         + for addition
//         - for subtraction
//         * for multiplication
//         / for division
//         `)
//     console.log(userChoice);

//     const n = '-';
//     var store

//     switch (n) {
//         case '+': {

//             store = num1 + num2;
//             console.log('addition '+store);

//         }
//         break;

//         case '-': {
//             store = num1 - num2;
//             console.log('Substraction '+store);
//         }
//         break;

//         case '*': {
//             store = num1 * num2;
//             console.log('multiplication '+store);
//         }
//         break;

//         case '/': {
//             store = num1 / num2;
//             console.log('division ' +store);
//         }
//         break

//         default: console.log(n, '= your input is not valid');
//             break;
//     }

// }

// calculator(100,50)

// function call(num1, num2) {

//     return { num1, num2 };

// }
// const show = call(5, 6);

// console.log(show.num1, show.num2);

// const array = [1,21,33,44,5]
// var add  = []
// for( var i = array.length -1; i >= 0; i--){

//     add += array[i]  + ', '
// }

// console.log(add);

// const object = [
//     { name: 'John', age: 25,
//         location:{
//             area: 'seint paulo'
//         }
//     },
//     { name: 'Jane', age: 30,
//         location:{
//             area: 'zeus paulo'
//         }
//     },
//     { name: 'Bob', age: 35 ,
//         location:{
//             area: 'sez paulo'
//         }
//      }

// ]

// object.forEach((item)=>{
//         console.log(item.location);

// })

// var coun = 0
// const stop = setInterval(()=>{
//     coun++
//     console.log(coun);
//     if(coun == 10){
//         setTimeout(()=>{
//             console.log('the timeout is done');

//             clearInterval(stop)
//         },1000)
//     }

// },1000)

// fetch(`https://dummyjson.com/todos`)
// .then(raw => raw.json())
// .then(result => {
//     // console.log(result.todos);

//     result.todos.forEach((item, i)  => {
//         if(item.completed == true){

//             console.log(item )
//         }

//     });
// })

// var a = 100;

// {
//     var a = 50
//     console.log(a);

// }

// function add(n){
// var store = 0
//     for(let i = 1 ; i<=n ; i++){

//         store += i

//     }
//     console.log(store);
// }

// add(10)

// function show(name, age){

//     this.name = name
//     this.age = age

//     console.log(this.name, this.age)

// }

// show('gv', 24);
// show('pr', 21);

// const str = 'gaurav'

// function show (n){

//         if(n < str.length){
//                 const strIndex = str[n]
//                 console.log(strIndex, str.length )}
//         else{
//                 console.log('no more index value on ' +n);

//         }

// }
// show(2)

// function show (resolve){
//     setTimeout(()=>{

//         resolve()
//     },3000)
// }

// const p = new Promise(show)
// function callback(){
//     console.log('aagya bhai')
// }

// p.then(callback)

// const array = [2,1,3,'gv',34]

// array.forEach((item,index)=>{

//     return item === String ? console.log(item) : null

// })

// const num = 22

// const stringNumber = num.toString().split('')
// const num_Index = stringNumber[0]
// // console.log(num_Index);

// for(let i = 0; i<stringNumber.length; i++){

//         // console.log(i);
//         if(stringNumber[i] == num_Index){
//             console.log('same '+ stringNumber);
//             return 0

//         }
//         else{
//             console.log('not same');
//             return 0

//         }
//     }

// const obj = [
//   { name: "Rahul", age: 22, gender: "male", add: false },
//   { name: "Vishal", age: 29, gender: "male", add: true },
//   { name: "Amit", age: 20, gender: "male", add: true },
// ];

// const show = obj.map((item) => {
//   if (item.age > 20) {
//     return item;
//   }
//   else{
//     return null
//   }
// });
// console.log(show);

// **********************************************

// let digit = 1234;

// let string = digit.toString();
// // console.log(string);

// let store = 0;

// for (let i = 0; i < string.length; i++) {
//   store += parseInt(string[i]);
// }

// console.log(`sum of all the digit ${digit} is ${store}`);

// **********************************************

// const abc = [
//   { name: "Rahul", age: 22, gender: "male", add: false },
//   { name: "Vishal", age: 29, gender: "male", add: false },
//   { name: "Anita", age: 20, gender: "female", add: true },
//   { name: "Sunita", age: 20, gender: "female", add: true },
//   { name: "Asmita", age: 20, gender: "female", add: true },
// ];

// function show(filterInput) {
//   abc.forEach((item) => {
//     if(item.gender == filterInput || item.name == filterInput || item.age == filterInput )
//     {
//       console.log(item);
//     }
//   });
// }
// show('male');

// **********************************************

// const array = [
//   {
//     name: "Rahul",
//     age: 22,
//     gender: "male",
//     add: false,
//     address: [
//       {
//         street: "street ross1",
//         city: "pune",
//         state: "maharashtra",
//       },
//     ],
//   },

//   {
//     name: "Vishal",
//     age: 29,
//     gender: "male",
//     add: false,
//     address: [
//       {
//         street: "lane 1",
//         city: "bengluru",
//         state: "bengluru",
//       },
//     ],
//   },
//   {
//     name: "Anita",
//     age: 20,
//     gender: "female",
//     add: true,
//     address: [
//       {
//         street: "street cross2",
//         city: "pune",
//         state: "maharashtra",
//       },
//     ],
//   },
//   {
//     name: "Sunita",
//     age: 20,
//     gender: "female",
//     add: true,
//     address: [
//       {
//         street: "somalwada",
//         city: "Nagpur",
//         state: "maharashtra",
//       },
//     ],
//   },
//   {
//     name: "Asmita",
//     age: 20,
//     gender: "female",
//     add: true,
//     address: [
//       {
//         street: "street ross3",
//         city: "Amravati",
//         state: "maharashtra",
//       },
//     ],
//   },
// ];

// // obj.forEach((item) => {
// //   if (item.address[0].city == "Amravati") {
// //     console.log(item);
// //   }
// // });

// for (let i = 0; i < array.length; i++) {
//   // const element = array[i];
//   // console.log(element);
//   if (array[i].address[0].city == array[i].address[0].state) {
//     console.log(array[i]);
//   }
// }

// let input = 1;

// // console.log(typeof(parseInt(input)));

// console.log(typeof toString(input));

// function guessAge(dob, currentYear) {
//   let age = [];

//   for (dob; dob <= currentYear; dob++) {
//     age.push(dob);
//   }

//   console.log(age.length);
// }
// guessAge(1970, 2025);

// const cart = {
//   apple: 30,
//   banana: 10,
//   orange: 20,
//   mango: 50
// };
// let total = 0

// for( let value in cart){
//   total += cart[value]
//   console.log(cart[value]);

// }
// console.log("total is " +total);

// Object.values(cart).forEach( item => {
//   total += item
// })
// // cart.forEach( item => {
// //   total += item

// // });
// console.log(total);

// const user = {
//   name: "Gaurav",
//   age: 22,
//   skill: "JavaScript"
// };

// const arr = []
// for( let key in user){
//   arr.push(key)
//   console.log(user[key]);
// }
// console.log(arr);

// const data = { a: 1, b: 2, c: 3, d: 4 };

// let total = []
// for(let key in data){
//   total += key
// }
// console.log(total.length);

// const numbers = { x: 5, y: 10, z: 15 };

// let store = []
// for(let key in numbers){
//   store.push(numbers[key] * 2)
// }

// console.log(store);

