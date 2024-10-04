// let student = {
//     name: 'Fred',
//     class: 'jss1',
//     age: 30
// }
// // console.log(`My name is ${student.name}, I am ${student.age} years old and I am in ${student.class}`)
// console.log(" My name is "+ student.name +" , I am " + student.age + " years old and i am in "+ student.class)

// const fruits = ['orange','mango','pawpaw']
// console.log(typeof(fruits))
// Assignment operator =
// Arithmetic operators + - / * %
// console.log(1 + 'fred' === 'fred' + 1)
// let x = 3
// let y = 5
// console.log(x > 2 || y > 7)
// console.log((2).toString())
// console.log(Boolean())

// let age = 1;

// if (age >= 0 && age <= 17) {
//   console.log("This is a child");
// } else if (age >= 18 && age < 60) {
//   console.log("This is an adult");
// } else if (age >= 60) {
//   console.log("This is ancient of days");
// } else {
//   console.log("invalid age");
// }

// let grade = "A";
// switch (grade) {
//   case "A":
//     console.log("Excellent");
//     break;
//   case "B":
//     console.log("Good");
//     break;
//   case "C":
//     console.log("Credit");
//     break;
//   case "D":
//     console.log("Pass");
//     break;
//   case "F":
//     console.log("Failed");
//     break;
//   default:
//     console.log('Invalid grade')
//     break;
// }

// function greet(name){
//     return 'Good Morning ' + name
// }
// const result = greet('Fred')
// console.log(result)

// const greetPerson = (name) => 'Good Morning ' + name
// const results = greet('Tony')
// console.log(results)

// const ageCalc = (age) => {
//     if (age >= 0 && age <= 17) {
//     return "This is a child"
//     } else if (age >= 18 && age < 60) {
//     return "This is an adult"
//     } else if (age >= 60) {
//     return "This is ancient of days"
//     } else {
//     return "invalid age"
//     }
// }
// console.log(ageCalc(33))

// Array methods
// const student = ['joy','mac','fred','tony','convenant','sopulu','jacob','kingsley','Emma']

// const selectedStudent = 'james'
// if (student.includes(selectedStudent)) {
//     console.log(selectedStudent + ' is part of the students')
// } else {
//     console.log(selectedStudent + ' is not part of the students')
// }
// console.log(student.reverse())

// STRING METHODS
// let str = 'javascript php python c++'
// let result = str.split(" ")
// console.log(result[1])

// MATH METHODS
// console.log(Math.floor(Math.random() * 10000000000))

// LOOP
// for loop, while loop, do...while loop

// const ages = [2,23,22,10,60,35,46,80]
// for(let i = 10; i >= 100; i++){
//     console.log(i)
// }

// for(let i = 0; i <= ages.length; i++){
//     console.log(ages[i])
// }
// for(let i = 2; i <=10; i+=2){
//     console.log(i)
// }
// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// for(let i = 0; i <= ages.length; i++){
//     if(ages[i] % 2 === 0){
//         console.log(ages[i])
//     }
// }

// While loop 

// let i = 10
// while (i >= 1){
//     console.log(i)
//     i++
// }
// let i = 0
// while(i < ages.length){
//     if(ages[i] % 2 === 0){
//         console.log(ages[i])
//     }
//     i++
// }

// do...while loop
// let i = 12
// do{
//     console.log(i)
//     i++
// }while(i <= 10)

const ages = [2,23,22,10,60,35,46,80]

// for(let i = 0; i < ages.length; i++){
//     console.log(ages[i])
// }

// const outPut = function studentAge(age){
//     console.log(age)
// }
// ages.forEach(outPut)
// or 
// ages.forEach(function(age){
//     console.log(age)
// })

// Map array method Make a new list by 
// changing every item in the original list.
// const outPut = ages.map(age => age * 2)
// console.log(outPut)

// const outPut = ages.filter(age => age % 2 === 0)
// console.log(outPut)

// const outPut = ages.reduce(function(total, current){
//     return total + current
// }, 10)
// console.log(outPut)
// const students = ['fred','mac','jacob','anthony']
// const outPut = students.sort()
// console.log(outPut)

// const result = ages.sort(function(a,b){
//     return b-a
// })
// console.log(result)

// const result = ages.every(function(age){
//     return age > 1
// })
// console.log(result)
// const outPut = students.findIndex(function(student){
//     return student.includes('hony')
// })
// console.log(outPut)

const companies = [
    {
        name: 'MTN',
        yearFounded: 1995,
        location: 'South Africa',
        owner: 'Fred',
        annualRevenue: 100000000
    },
    {
        name: 'Glo',
        yearFounded: 2000,
        location: 'Nigeria',
        owner: 'Covenant',
        annualRevenue: 10000000
    },
    {
        name: 'Dangote Sugar',
        yearFounded: 1992,
        location: 'Nigeria',
        owner: 'Dangote',
        annualRevenue: 500000000
    },
    {
        name: 'Dangote Cement',
        yearFounded: 1990,
        location: 'Nigeria',
        owner: 'Dangote',
        annualRevenue: 700000000
    },
    {
        name: 'Tesla',
        yearFounded: 2005,
        location: 'USA',
        owner: 'Elon Musk',
        annualRevenue: 1000000000
    }
]
// let outPut = companies.map(company => `${company.name} - ${company.owner}`)
// console.log(outPut)

// const totalRevenue = companies.reduce(function(total,company){
//     return total + company.annualRevenue
// }, 0)
// console.log(totalRevenue)

// const dangoteCompany = companies.filter(function(company){
//     return company.owner === 'Dangote'
// })
// console.log(dangoteCompany)

for(let i = 0; i < companies.length; i++){
    if(companies[i].location === 'Nigeria'){
        console.log(companies[i])
    }
}
