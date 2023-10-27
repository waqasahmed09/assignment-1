
// let name = prompt("What's your name");

// alert(`hi, ${name}`);

// //Multiplication of Table 

// alert(` 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70 `)


// let cityName = prompt("Enter your City name")

// if (cityName === "Karachi") {
//    console.log("WElcome in my City") 
// } else {
//     console.log("bye bye")
// }


//Question No. 4

// let userGender = prompt(" Enter your Gender ");

// if (userGender === "male" || "Male" || "MALE") {
//     console.log(" Good Morning Sir ")

// } else {
//     console.log(" Good Morning Ma’am.");        
// }

//Question No. 5

// let signalColor = prompt("Enter Signal Color");

// if (signalColor === "red") {
//     console.log("vehicles must stop");
// } else if( signalColor === "yellow") {

//     console.log("vehicles should get ready to move");
// } else if( signalColor === "green"){
//     console.log("vehicles can go now");
// }


// let maxAge = +prompt("Enter your max age");
// let currentAge = +prompt("Enter your current age");

// if (currentAge <= maxAge ) {
//     console.log("You are welcome");

// } else {

//     console.log("Putr tuu chutti kr ");
// }

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }


// let nameProductOne = prompt(" Name of item1") 
// let nameProductTwo = prompt(" Name of item2") 
// let priceProductOne = +prompt(" price of item1") 
// let priceProductTwo = +prompt(" price of item2") 
// let ordQuantity1 = +prompt(" Order Quantity1 ") 
// let ordQuantity2 = +prompt(" Order Quantity2 ") 
// let shippingCharges = +prompt(" enter shipping charges") 

// let sumofCharges = priceProductOne + priceProductTwo + ( ordQuantity1 * priceProductOne) + ( ordQuantity2 * priceProductTwo) + shippingCharges;

// if (sumofCharges >= 2000) {
//     sumofCharges - 200;
//     console.log(` price of ${nameProductOne} & ${nameProductTwo} is ${nameProductOne} & ${priceProductTwo} with quantity of ${ordQuantity1} & ${ordQuantity2} including shipping charges ${shippingCharges} including 10% discount total bill is ${sumofCharges}  `)
// } else {

//     console.log(` price of ${nameProductOne} & ${nameProductTwo} is ${nameProductOne} & ${priceProductTwo} with quantity of ${ordQuantity1} & ${ordQuantity2} including shipping charges ${shippingCharges}  total bill is ${sumofCharges}  `)

// }

// let userNumber = +prompt("Guess any number")
// let randomNumber = Math.floor(Math.random() * 10);

// if(randomNumber === userNumber){
//     console.log("Bingo! Correct answer")
// } else {
//     console.log("Better Luck!, Try next time")
// }



// let nameTeamA = prompt(" Name of Team A")
// let nameTeamB = prompt(" Name of Team B")
// let scoreTeamA = +prompt(" Score of Team A")
// let scoreTeamB = +prompt(" Score of Team B")

// if (scoreTeamA > scoreTeamB) {
//     console.log(` The Tournament winner is  ${ nameTeamA} with achiving score of ${scoreTeamA}`);

// } else if ( scoreTeamB > scoreTeamA ) {

//     console.log(` The Tournament winner is  ${ nameTeamB} with achiving score of ${scoreTeamB}`);
// } else if (scoreTeamB === scoreTeamA ){
//     console.log(` The Tournament tied`);
// } else {

//     console.log(` The Tournament tied`);
// }


//     let inputString = +prompt("Enter any thing");

// if (inputString === typeof(String)) {
//     console.log("input is string ");
// } else if (inputString === typeof(Number)) {
//     console.log("input is number");

// }else if ( inputString === typeof(Boolean)){
//     console.log("input is bolean");
// }else {
//     console.log("input is something else");
// }



// let currentTemp = +prompt("enter percentage");

// if (currentTemp >= 40) {
//     console.log("It is too hot outside");
// } else if (currentTemp >= 30) {
//     console.log("The Weather today is Normal.");
// } else if (currentTemp >= 20) {
//     console.log("Today’s Weather is cool.");
// } else if (  currentTemp >= 10){
//     console.log("OMG! Today’s weather is so Cool.");
// } else if ( currentTemp >= 0 || -10){
//     console.log("Dear the weather is dangerous outside, stay in the Home");
// }


let number = +prompt("enter number 1");
let number2 = +prompt("enter number 2");

if (number > number2) {
    console.log(`the ${number} is greater than ${number2}`);
    
} else if(number2 > number) {
    console.log(`the ${number2} is greater than ${number}`)
} else {
    console.log("both are equals to each other");
}