 // find out total current bill............
function severalCurrentBill(unit) {
    var currentBill =0;
    if(unit<=400){
        currentBill =unit*5;
    }
    else if(unit<=1500){
        var firstPart = 5*400;
        var remaining =unit -400;
        var secondPart =remaining*10;
        var currentBill =secondPart+firstPart;
    }
    else if(unit<=5000){
        var firstPart = 5*400;
       var  secondPart =1100*10;
        var remaining =unit -1500;
        var thirdPart =remaining*15;
        var currentBill =secondPart+firstPart+thirdPart;
    }

    else{
        var firstPart = 5*400;
        var secondPart  =1100*10;
        var thirdPart =3500*15;
        var remaining =unit -5000;
        var fourthPart =remaining*25;
        var currentBill =firstPart +secondPart+thirdPart+fourthPart;
    }
    return currentBill;
}
var current =severalCurrentBill(290);
console.log("current bill = "+current);

var gas =severalCurrentBill(360);
console.log("gas bill = "+gas);

var water =severalCurrentBill(140);
console.log("water bill = "+water);

var telephone =severalCurrentBill(700);
console.log("Telephone Bill: = "+telephone);

var internet =severalCurrentBill(100);
console.log("Internet Bill:: = "+internet);

var tv =severalCurrentBill(50);
console.log("Tv Bill:: = "+tv);

var tripolBill = (gas)/100 + (water)/100 +(telephone)/100-20;


var total = gas + water +  telephone +current + internet + tv + tripolBill;
console.log(" total bill = ", total);



//convert inch to feet...............
// function convertFeet(inch) {
//     var feet =inch/12;
//     return  feet;

// }
// var result =convertFeet(444.33);
// console.log(result)

// calculate leap year.........
// function convertInches(feet){
//     let inches = feet * 0.0833333;
//     return inches;
// }
// const result = convertInches(100);
// console.log(result);

//convert fahrenheit to celsius........
// function convertCel(fahrenheit){
//     let cel = (5/9) * (fahrenheit - 32);
//     return cel;
// }
//   console.log(convertCel(98.4));
//  console.log(result2);

//1 kilometer = 0.621371 miles
//  var kilo =3;
//  var mile =kilo* 0.621371;
//  console.log("miles" +mile);

// pattern system.....1 + 2 + 3 + 4 + 5 +........
// let sum = "";
// for(let i = 2; i <=10; i++ ){
//     sum = sum + i ;
//     console.log(sum);

// }

// use of for in .........
// var object={
//   name:"sumon mia",
//   age :22
// };
// for(x in object){

//   console.log(`${x} =${object[x]}`)
//   console.log(x+"="+object[x]);

// }

// use of for in loop ...........
// let greet = "Hello World!";

// for(let character of greet) {
//     console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
// }

// use of for each .................
// let item =[1,2,3,4,5,10,19];
// let newArray =[];
// item.forEach(function(item){
//     // console.log(item);
//     newArray.push(item*item);
// })
// console.log(newArray);


// use of for each...........
// function fact() {
//   let item = [1, 2, 3, 4, 5, 10, 19];
//   let newArray = [];
//   item.forEach(function (x) {
//     // console.log(item);

//     newArray.push(x * x);
//   });
//    console.log(newArray);
// }

// fact()



// find out factorial Number using for loop.......
// var factorial =1;
// for (let num = 1; num <=5; num++) {
//     factorial =factorial*num;
//     console.log(factorial);

// }

// find out factorial Number using while loop.......
// var num =1;
// var fact=1;
// while (num<=5) {
//   fact =fact *num;
//     num++
//     console.log(fact);
// }

//factorial recursive way..........

// function factorial(n) {
//     if(n ==1){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(5));

// fibonacci serries......

// var num =[0,1];

// for (let x =2; x<=5; x++) {

//     num[x] = num[x-1] + num[x-2];
//     console.log(num[x],num);
// }

// fibonacci serries using in function.....
// var fibo =[0,1];
// function fibonacchi(n) {
//  for(x =2; x<=n; x++){
//     fibo[x] =fibo[x-1] + fibo[x-2];
//     console.log(fibo[x]);
//  }
// }
// console.log(fibonacci(6));

// fibonacci problem solve using recursive Way ...........

// function fibonacci(n) {
//     if(n ==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     else{
//         return fibonacci(n-1) + fibonacci(n -2);
//     }

// }
// var result =fibonacci(10);
// console.log(result);

//swap problem solve i am solving this.......
// var a =30;
// var b =20;
// var c;
// c=a; //a is empty

// a =b;//b is empty 
// b=c; //c is empty 
// console.log(" b=" +b);
// console.log(" a ="+a);

// var a =5;
// var b =7;
// a =a+b;
// b =a -b;
// a =a -b;
// console.log("a"+a);
// console.log("b"+b);

// var a =5;
// var b =7;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// var array =[33,44,88,46,40,];
// var max=array[0];
// function maximum(array) {
//     for (let index = 1; index < array.length; index++) {
//         const element = array[index];
//         if (element >max) {
//          max =element;

//         }

//     }
//     return max
// }
// console.log(maximum(array));

// find out  array sum program............

// var array =[33,44,88,46,40,];
// var sum =0;
// function maximum(array) {
//     for (let index = 0; index < array.length; index++) {

//         const element = array[index];
//        sum =sum +element;

//     }
//     return sum
// }
// var result =maximum(array);
// console.log(result);
// var result2 =maximum([2,3,4,5,6]);
// console.log(result2);

// remove duplicate element from array........
// var array =[ 3,4,5 ,2,4,3,6,8];
// var duplicateArray =[];
// for(var x =0; x<array.length; x++){
//     var element = array[x];
//     var singleElement =duplicateArray.indexOf(element);
//     if(singleElement = -1){
//         duplicateArray.push(element);
//     }

// }

// console.log(duplicateArray);

//calculate  the number  of string ....
// var count =0;
// var speech ="amar sonar bangla ami tomay valobasi";
// for(var x =0; x<speech.length; x++){
//     var world =speech[x];
//     if(world == " "){
//         count++;
//     }

// }
// console.log(count+1);

//reverse string.........

// function reverseString(str) {
//     var reverse ="";

//     for(var x =0; x<str.length; x++){
//         var world =srt[x];

//         reverse =world +reverse;

//     }
//     return reverse;
// }
// var speech ="amar sonar bangla ami tomay valobasi";
// var result =reverseString(speech);
// console.log(result);

//wood calculator solve problem..........
// chair 1 qbik cut
// table 3 qbik cut
// khat 5 qbik cut
// var chair=parseFloat(prompt("ejf"))
// var table =parseFloat(prompt("ejf"))
// var khat =parseFloat(prompt("ejf"))
// function woodCalculator(chair,table,khat) {
//     x =chair*1;
//     y =table*3;
//     z  =khat*5;
//     var allNeedCut =x + y + z;
//     console.log(allNeedCut);
// }
// var result =woodCalculator(chair,table,khat);
// console.log(result);

//brick calculator....

// var num =19;//
// if(num <= 10){
//     var x =45000*num ;

//     console.log(x);

// }
// else if(num <=20){
//     var result1 =45000*10;
//     var y =result1+   30000 * (num -10);
//     console.log(y);
// }
// else{
//     var result1 =45000*10;

//     var remaining3 =30000*10;
//     var result2 =result1 + remaining3;
//     var z =result2+  2000*(num-20);
//     console.log(z);

// }

//tiny Friends find out in array......
// function tinyFriends(friendName) {
//     tinyFriends =friendName[0]
//         for (let x = 1; x < friendName.length; x++) {
//             let  element = friendName[x];

//             if( element.length < tinyFriends.length){
//                 tinyFriends =element

//             }
//     }
//     return tinyFriends;
// }
// let friendName =["sumon","mor","sojib","raju","fjfjfff","sakib"];
// console.log(tinyFriends(friendName));

// function use inside for loop...
// function ageCalculate(age){
//     for (let x = 0; x < age.length; x++) {
//         let num = age[x];
//         if(num%2 ==0){
//             console.log(num*2);
//         }
//         else{
//             console.log(num);
//         }
//     }

// }
// let age =[22,33,44,55,5,6,9,10];
// // let result =ageCalculate(age);
// // console.log(result);
// let oddNumber=[1,2,3,4,5,6,7,8,9,10]
// let result2 =ageCalculate(oddNumber);
// console.log(result2);

//return function........
// function ageCalculate(num){
//     let result;

//         if(num%2 ==0){
//             result =num*2;
//             return result;

//         }
//         else{
//             result ="this is odd number " + num;
//             return result;
//         }

//     }

// let result1 =ageCalculate(23);
// console.log(result1);

// return function ...........
// function ageCalculate(num){
//     let result;

//         if(num%2 ==0){
//             result =num*2;

//         }
//         else{
//             result ="this is odd number " + num;

//         }
//         return result;
//     }

// let result =ageCalculate(24);
// console.log(result);

//return function......
// function evenly(num) {
//     let newEvenly =[];
//     let result;
//     for (let x = 0; x < num.length; x++) {
//         let element = num[x];
//         result = element*2;
//         newEvenly.push(result);

//     }
//     return newEvenly;
// }
// let num =[2,3,4,5,6,7,8,9];
// let result1 =evenly(num);
// console.log(result1);

//call back function........
// function main(name,age ,task) {
//     console.log("my name is summon mia",name);
//     console.log("my name is ",age);
//     task();
//     parent1();

// }
// function parent1() {
//     console.log("i am parent 1");
// }
// function parent2() {
//     console.log("i am parent 2");
// }
// main("sumon",22,parent1);
// main("sakib",22,parent2);

//argument example......
// function exampleOfArgument(num1,num2) {

//     for (let x = 0; x < arguments.length; x++) {
//         const num = arguments[x];
//         console.log(num);

//     }
//     // return num1+num2;

// }

// let result =exampleOfArgument(2,3,4,5);
// console.log(result);



