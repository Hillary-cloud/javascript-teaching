// log a statement using console.log
// console.log("helow world the third time");

// variables
// var
// let
// const

// var firstName = 'Fred'
// console.log(firstName)

// let lastName
// lastName = 'Sopulu'
// console.log(lastName)

// last_name
// lastName
// LastName pascal

// const surName = null
// console.log(surName)

// Data Types
// primitive data Types
// string type "fred1112@"
// number type 8696758
// boolean true or false
// undefined
// null
// BigInt
// symbol

// non-primitive data type
// object
// const middleName = "Jacob";

// const student = {
//   firstName: "Fred",
//   class: "JSS1",
//   age: "20",
// };
// console.log(
//   `My name is ${middleName}, I'm in ${student.class} and i am ${student.age} years old.`
// );

// const oddNumber = [1, 3, 5, 7, 9];
// console.log(`${oddNumber[2]}${oddNumber[1]}`);
// operators
// Assigment operators 
// let x = 2 
// console.log(x)
// Arithmetic operators +, -, /, *, %
// console.log(10 % 3)
// Comparison operators == , === , < , > , !== , <= , >=
// let x = 2
// let y = 3
// console.log(++x)
// console.log(x !== y) // strict equal
// logical operators 
// console.log(x > 1 && y < 1) ||
// string operators +
// console.log( `it's me ${x} 
// and my second name is ${y} `)
// Ternary operator
// let z
// z = 5
// console.log(z % 2 === 0 ? 'Number is even' : 'Number is odd')

// Type conversions
// Implicit and Explicit
// let x = 2.6
// let y = 6
// console.log(( x * y).toString())
// console.log(parseInt(x))
// console.log(Boolean()) // except 0, "", null, undefined, NaN

// console.log('fred'+y)

// Conditional Statement 
// if statement 
// else statement 
// else if statement 

// let name = 'Obi'

// if(name === 'Obi'){
//     console.log(name + ' is a boy')
// } else if(name === 'Ada'){
//     console.log(name + ' is a Girl')
// } else if (name ===  'KC'){
//     console.log(name + ' can either be a boy or a girl')
// } else(
//     console.log(name + ' Invalid Name')
// )

// 0 to 12 = child 
// 13 to 17 = teen 
// 18 - 59 = adult 
// 60 and above = old 

// let age = 99

// if(age >= 0 && age <= 12){
//     console.log('This is a child')
// } else if(age >= 13 && age <= 17){
//     console.log('This is a teen')
// } else if(age >= 18 && age <= 59){
//     console.log('This is an adult')
// } else if(age >= 60){
//     console.log('This is an old person')
// } else{
//     console.log('Invalid age')
// }

// score 
// less than 35 = fail 
// 35 to 40 = weak pass 
// 41 to 50 = credit 
// 51 t0 69 = good 
// 70 and above = excellent

// let score = 'emeka'

// if(score <=34 ){
//     console.log('fail')
// } else if(score >=35 && score <=40){
//     console.log('weak pass')
// } else if(score >=41 && score <=50){
//     console.log('Credit')
// } else if(score >=51 && score <=69){
//     console.log('good')
// } else if(score >=70){
//     console.log('Excellent')
// }else{
//     console.log('invalid score')
// }

// switch statement 
// const grade = 'N'

// switch(grade){
//     case 'A': console.log('Exellent')
//     break
//     case 'B': console.log('Good')
//     break
//     case 'C': console.log('Credit')
//     break
//     case 'D': console.log('Weak Pass')
//     break
//     case 'F': console.log('Fail')
//     break
//     default: console.log('Invalid Grade')
// } 

// const age = 20

// switch(true){
//     case (age >= 0 && age <= 12): console.log('Child')
//     break
//     case (age >= 13 && age <= 17): console.log('Teen')
//     break
//     case (age >= 18 && age <= 59): console.log('Adult')
//     break
//     case (age >= 60): console.log('Old Person')
//     break
//     default: console.log('Invalid Age')

// } 
// Function 
// function greet(person,age){
//     console.log('Goodmorning ' + person + ' I am '+ age +' years old')
// } 
// greet('Fred', 96)
// greet('Sopulu', 100)
// greet('Joy',40)

// // a function to calculate the product of 3 numbers 
// function productOfNum(num1, num2, num3){
//     return num1 * num2 * num3 
// }
// let result = productOfNum(100,3,5)
// console.log(result) // or console.log(productOfNum(1,5,3))

// function sayHello(name){
//     console.log(`Hello ${name}`)
// }
// sayHello('Emmanuel')

// function sum(num1, num2, num3){
//     return num1 + num2 + num3
// }
// const result = sum(3,5,1)
// console.log(result)

// // arrow function
// const sayHelloAgain = (name) => {
//     console.log('Hello Again ! ' + name)
// } 
// sayHelloAgain('Convenant')

// const sumOfNum = (num1, num2) => num1 + num2

// const results = sumOfNum(2,4)
// console.log(results)

// write a function to print out " my name is YOUR NAME, 
// I am YOUR AGE and my state is YOUR STATE"

// function myPersonalDetails(name,age,state){
//     // return `My name is ${name}, I am ${age} and my state is ${state}`
//     return 'My name is '+ name + ', I am '+ age + ' years old and my state is '+ state
// }
// const result = myPersonalDetails('Ceejay',12,'Anambra')
// console.log(result)

// Data Structure
// Array
// const student = new Array('fred','jacob','sopulu','emmanul','joy','mac','convenant')
// array literal method []
// const students = ['fred','jacob','sopulu','emmanuel','joy','precious','mac','convenant']
// // students[5] = 'Kingsley'
// // students.push('Emeka')
// const result = students.at(-1)
// console.log(result)