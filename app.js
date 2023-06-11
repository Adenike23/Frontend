// const ul = document.querySelector('ul');
// const newList = document.createElement('li');

// newList.innerText = 'Four';
// newList.setAttribute('class', 'Four');

// ul.appendChild(newList);
// var image = ["https://unsplash.com/photos/6c43FgRt0Dw"]

// const box = document.querySelector('.box')

// function changeImage() {
//     box.style.backgroundImage = "url('https://unsplash.com/photos/vjDbHCjHlEY')"
// }

// box.addEventListener('click', changeImage)
// const todos = [
//     {
//         id: 1,
//     text: "Take out trash",
//     isCompleted: true
//     },
//     {
//         id: 2,
//     text: "Attend a meeting",
//     isCompleted: true
//     },
//     {
//         id: 3,
//     text: "Do laundary",
//     isCompleted: false
//     }
// ]

// for (let i=0; i < todos.length; i++) {
//     console.log(todos[i].text);
//  }
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function () {
//     console.log('Sonic');
// })


// let isLightOff = true;
// let isLightOn = true;
// try {
//     if (isLightOn==isLightOff) {
//         throw ("Wrong data: cannot be same")
//     }
//     console.log("Correct details");
// }catch(error) {
//     console.log("Error: " + error);
// }
"Agege", "Badagry", "Kosofe", "Apapa", "Yaba", "Ojo", "Epe"
// let items = [
//     {name: "book", price: 200},
//     {name: "bread", price: 1200},
//     {name: "sandal", price: 20},
//     {name: "biscuit", price: 80}
// ]
// let filtered = items.filter(item => item.price >= 80;);
// console.log(filtered);

// let a = 10;
// let b = 15;
// console.log(a > b);

// console.log(a == "10");
// console.log(a === "10");

// x = "5"; 
// y = 6;
// console.log(x !== y);

// let colors = ["Blue", "Green", "Pink", "lime", "black"];

// for(let i = 0; i < colors.length; i++) {
//    console.log(`${colors[i]} is my fav color`);
// }


// let i = 0;
// while(i <= 100) {
//     console.log(`The speed of the car is ${i}MPH`)
//     i+=10;
// }


// const text = document.querySelector(".text")
// const changeColor = document.querySelector(".change-color");
// changeColor.addEventListener("click", function() {
//     text.classList.add("change");
// })

// console.log("%c My friends", "color: orange");

// const girl = {name: "Anu", age: 30}
// const boy = {name: "Seun", age: 20}
// const them = {name: "Ade", age: 35}

// console.table([girl, boy, them]);


function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    if (text.length > 10) {
        return text.substring(0, 10) + "..."
    }
    return text;
}


let word =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/g;
let numArray = (word.match(/\d+/g));
let annualIncome = numArray.map(n => n * 12);
let totalIncome = annualIncome.reduce((acc, currentVal) => acc + currentVal);
// console.log(totalIncome);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern = /@|%|;|&|#|!|\$|,/g;
// console.log(sentence.replace(pattern, ""))

// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];

  // let userFullName = users.map((name) => {
  //   return `${name.firstName} ${name.lastName}`
  // })
  // // console.log(userFullName);

  // let userEmail = users.map((name) => {
  //   return `${name.firstName}${name.lastName}@smaallcompany.com`
  // });
  // console.log(userEmail);

// Challenge

// Use the map method to generate a new array of biographies 
// for our users from the previous tutorial. Each of the 
// biographies should look like this:

// ["1. Susan Steward is from Sidney. She has a dog named Charlie. 
//  Her favorite color is green and her favorite food is pizza. Her 
//  siblings are John, Jerry, and Samantha.", "2. Daniel Longbottom is..." etc.]

//  It should use the following format, which you can use as a template: 

// "[index number + 1]. [person's full name] is from [hometown]. 
//  [Appropriate pronoun] has a [pet species] named [pet name]. 
//  [Appropriate pronoun] favorite color is [favorite color] and 
//  [appropriate pronoun] favorite food is [favorite food]. 
//  [Appropriate pronoun] siblings are [siblings].""

// Hint: for the arrays inside of the objects, it may be helpful to use the map method additional times, and it may be helpful to use the index and array arguments. The "this" argument is unnecessary. */
  
let completeUserData = [
  
    //start of object 1
    {
      firstName: "Susan",
      lastName: "Steward",
      pronouns: {
        main: { capitalized: "She", lowerCase: "she" },
        possessive: { capitalized: "Her", lowerCase: "her" }
      },
      additionalInfo: {
        hometown: "Sidney",
        favoriteColor: "green",
        favoriteSeason: "summer",
        favoriteFood: "pizza",
        pet: { name: "Charlie", species: "dog" },
        siblings: ["John", "Jerry", "Samantha"]
      }
    },
  
    //start of object 2
    {
      firstName: "Daniel",
      lastName: "Longbottom",
      pronouns: {
        main: { capitalized: "He", lowerCase: "he" },
        possessive: { capitalized: "His", lowerCase: "his" }
      },
      additionalInfo: {
        hometown: "London",
        favoriteColor: "blue",
        favoriteSeason: "spring",
        favoriteFood: "tacos",
        pet: { name: "Luna", species: "dog" },
        siblings: ["Sarah", "Jenny", "Samantha"]
      }
    },
  
    //start of object 3
    {
      firstName: "Jacob",
      lastName: "Black",
      pronouns: {
        main: { capitalized: "He", lowerCase: "he" },
        possessive: { capitalized: "His", lowerCase: "his" }
      },
      additionalInfo: {
        hometown: "New York",
        favoriteColor: "yellow",
        favoriteSeason: "fall",
        favoriteFood: "sushi",
        pet: { name: "Milo", species: "cat" },
        siblings: ["Ralph", "Ronald", "Reggie", "Regina", "Rachel"]
      }
    }
  ];

  let biography = completeUserData.map((name, index) => {
    return `${index + 1}. ${name.firstName} ${name.lastName} is from`
  });
  // console.log(biography);

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();

  let today = `${year}-0${month}-0${day}-0${hour}:${minute}`
  // console.log(today);
  
  // let birth = prompt("Enter birth year", "");
  // let now = new Date();
  // let age = now.getFullYear() - birth;
  // let isAge = age > 18 ? `You are ${age}. You are old enough to drive`: `You are ${age}. You are not allowed to drive`
  // console.log(isAge);

    

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// const reg = /,|\./g;
// let words = (text.replace(reg, ""))
// let newArray = (words.split(" "))
// console.log(newArray);
// console.log(newArray.length)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// console.log(ages.sort());
// if (ages.length % 2 == 0) {
//   console.log(ages[4] / 2 + ages[5] / 2);
// } else {
//   console.log(ages[5]);
// }
// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
// countries.splice(9, 0, ("Iceland"))
// const newArr = [];
// for (let i = 0; i<countries.length; i++) {
//   newArr.push(countries[i])
//   newArr.push(countries[i].substring(0, 3).toUpperCase())
//   newArr.push(countries[i].length)
// }
  // console.log(newArr);

// for (let i=0; i<countries.length; i++) {
//   if (countries[i].length === 5) {
//     console.log(countries[i]);
//   } 
// } 

let fruits = ['banana', 'orange', 'mango', 'lemon'];
let newArray = []
for (let i =(fruits.length-1); i>=0; i--) {
  newArray.push(fruits[i]);
}
// console.log(newArray);



function convertCelsiusToFahrenheit (C){
  return convert = C * 9/5 + 32 + " F";
  // return convert;
}
// console.log(convertCelsiusToFahrenheit(22));

//D7 L2 Q2
// function solveQuadratic (a, b, c) {
//   let equation = b * b - 4 * a * c;
//   let valOfX1 = (-(b) + equation ** 0.5)/ 2 * a;
//   let  valOfX2 = (-(b) - equation ** 0.5)/ 2 * a;
//   let result = `${valOfX1}, ${valOfX2}`;
//   return result;
// }
// console.log(solveQuadratic(1, 4, 4));// -2
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}




// D7, L1, Q13
// function calBodyMassIndex (weight, height) {
//   let BMI = weight/ (height * height);
//   if (BMI >= 30) {
//     console.log("Obese");
//   } else if (BMI >= 25) {
//     console.log("Overweight");
//   } else if (BMI >= 18.5) {
//     console.log("Normal weight");
//   } else if (BMI < 18.5) {
//     console.log("Under weight");
//   }
//     return BMI
// }
// console.log(calBodyMassIndex(73, 1.5))


// function calBodyMassIndex (weight, height) {
//   let BMI = weight/ (height * height);
//   switch (true) {
//     case BMI >= 30:
//       console.log("Obese");
//       break;
//     case BMI >= 25:
//       console.log("Overweight");
//       break;
//     case BMI >= 18.5:
//       console.log("Normal weight");
//       break;
//     case BMI <= 18.5:
//       console.log("Under weight");
//       break;
//     default:
//       console.log("No size");
//   }
//   return BMI;
// }
// console.log(calBodyMassIndex(73,2.8));
//==========================================
// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

function showDateTime (tday) {
  let dates = new Date();
  let months = date.getMonth();
  let years = date.getFullYear();
  let minutes = date.getMinutes();
  let secs = date.getSeconds();
  // let result = `${dates}-${months}-${years} ${minutes}:${secs}`
 
  return dates;
}
// console.log(showDateTime())

// let dates = new Date();
//   console.log(dates);


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// function printArray (arr) {
//   const newArr = [];
//   for (let i = 0; i<arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// const items = ["book", "bag", "car", "hut", "house"]
// console.log(printArray(items));

//D7L2Q5
// function swapValues (x, y) {
//   return `x = ${y}, y = ${x}`
// }
// console.log(swapValues(3, 4)) // x => 4, y=>3
// console.log(swapValues(4, 5)) // x = 5, y = 4

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// function reverseArray (arr) {
//   const newArr = [];
//   for (let i=arr.length-1; i>=0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// const numbers = [1, 2, 3, 4, 5];
// const alphabet = ["A", "B", "C", "D", "E"];
// console.log(reverseArray(numbers));
// console.log(reverseArray(alphabet));

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// function addItem (item) {
//   const item1 = items.push("socks")
//   return items;
// }
// const items = ["book", "bag", "car", "hut", "house"];
// console.log(addItem());


//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// function sumOfNumbers (num) {
//   let sum = 0;
//   for (let i =0; i < num.length; i++) {
//     sum += num2[i]
//   }
//   return sum;
// }
// const num2 = [5, 5, 6, 4, 20]
// console.log(sumOfNumbers(num2))

//Declare a function name sumOfOdds. It takes a number parameter and it adds all 
//the odd numbers in that - range.

// function sumOfOdds (num) {
//   let odd = 0;
//   for (let i=0; i<= num; i++) {
//     if (i % 2 !== 0) {
//       odd = odd + i;
//     }
//   }
//   return odd;
// }
// console.log(sumOfOdds(100))


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// const results = [0, 0];
// for (let i = 0; i <= 100; i++) {
//   results [i%2] += i
// }
// console.log(results);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let even = 0;
// let odd = 0;
// for (let i = 0; i<=100; i++) {
//   if (i % 2 == 0) {
//     even += i;// even = even + i
//   } else (
//     odd += i
//   )
// }
// console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}`)

//Declare a function name evensAndOdds . It takes a positive integer as parameter 
//and it counts number of evens and odds in the number

// let even_count = 0;
// let odd_count = 0;
// function evensAndOdds (num) {
//   for (let i=0; i <= num; i++) {
//     if (i % 2 !== 0) {
//       odd_count++
//     } else {
//       even_count++
//     }
//   }
//   return `The number of odds are ${odd_count}. The number of evens are ${even_count}`
// }
// console.log(evensAndOdds(100));

// function addNum (...args) {
//   let sum = 0; 
//   for (let i=0; i<args.length; i++) {
//     sum = sum + args[i]
//   }
//   return sum
// }
// console.log(addNum(1, 2, 3));
// console.log(addNum(1, 2, 3, 4));


  let skills = ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'];
  let lastSkill = skills.pop();
  let result = skills.join(", ");
  let statement = `He teaches ${result} and ${lastSkill}`
//  console.log(statement);


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
users.Nike = {email: "adenike@gmail.com", skills: "[HTML, CSS, MongoDB, React]", age: 25, points: 60}
//Count logged in users, count users having greater than equal to 50 points from 
//the following object.
// const loggedInUsers = Object.keys(users)
// console.log(loggedInUsers.length);
const abc = Object.values(users).filter(user => user.points >= 50).length;

// console.log(abc);

// const usersData = Object.values(users);
// let above50 = 0;
// for (const data of usersData) {
//   if (data.points >= 50) {
//     above50++
//   };
// }
// console.log(above50);

//Find people who are MERN stack developer from the users object
// const MERN_stack = Object.values(users);
// for (const MERN of MERN_stack) {
//   if (MERN.skills.includes("MongoDB") && MERN.skills.includes("Express") && MERN.skills.includes("React") && MERN.skills.includes("Node")) {
//     console.log(MERN);
//   }
// }


//Create an object literal called personAccount. It has firstName, lastName, incomes,
//expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense
//and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// const personAccount = {
//   firstName: "Ade",
//   lastName: "Nike",
//   incomes: {
//     monthly: 1_500_000,
//     yearly: 18_000_000,
//     bonus: 600_000,
//   },
//   expenses: 200_000,

//   totalIncome: function () {
//     return `I make $${this.incomes.monthly + this.incomes.yearly + this.incomes.bonus} in a year`
//   }
// }
// console.log(personAccount.totalIncome());

const user = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ]
  // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
  //b. Create a function called signIn which allows user to sign in to the application
// function signUp (id, user) {
//   const copyUser = Object.assign({}, user);
//     var len = copyUser.length;
//     for (let i = 0; i < len; i++) {
//       if (id === copyUser) {
//         return copyUser;
//       } 
//     }
//     return -1;
// }
// console.log(signUp());

const persons = {
  age: 23,
  point:25,
  name: "Ade",
  school: "Unilag"
}
for (const element in persons) {
  // console.log(`${element}: ${persons[element]}`);
}

const person = {
  Ade: {age: 23, school: "Uniben", email: "ade@gmail.com"},
  Tolu: {age: 33, school: "Unilag", email: "tolu@gmail.com"},
  Bola: {age: 30, school: "EKSU", email: "bola@gmail.com"},
}
const personData = Object.values(person);
let count30 = 0;
for (const data of personData) {
  if (data.age >= 30) {
      count30++;
  }
}
// console.log(count30);

const above30 = Object.values(person).filter(n => n.age >= 30).length
// console.log(above30);

// let countries = {
//   name: "Nigeria",
//   capital: "Abuja",
//   population: 200_000_000,
//   languages: {
//     north: "Hausa",
//     east: "Igbo",
//     west: "Yoruba"
//   },
//   sayCountry: function() {
    // console.log(`Name of country is ${this.name}, capital is ${this.capital}`);
//   }
// }
// countries.sayCountry()
// console.log(`${countries.name}\n${countries.capital}\n${countries.population}\n${countries.languages.north}`);

//Write a function which checks if all the items of the array are the same data type.
// let arr = [1, "Nike", "Ade", true, 23]
// function checkDataType (arr1, type) {
//   for (const data of arr) {
//     if (typeof data!== typeof 1) {
//       console.log("TRUE");
//     } else {
//       console.log("False");
//     }
//   }
// }
// checkDataType()

//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// function modifyArray (arr) {
//   for (let i = 0; i<arr.length; i++) {
//     if (i === 4) {
//       arr[i] = arr[i].toUpperCase()
//     } 
//   }
//   return arr
// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

//Write a function called isOdd, which checks if a number is an odd number.

// function isOdd (nums) {
//   for (let i=0; i<=nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//        console.log(nums[i]);
//     }
//   }
// }
// isOdd([100, 45, 66, 7, 9, 41])

// function callArea (length, breadth) {
//   let area =length * breadth
//   console.log(area);
//   return area;
// }
// callArea (10,  4);

//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// let newArr = [];
// function sevenRandomNumbers () {
//   for (let i=0; i<=6; i++) {
//     newArr.push(Math.floor(Math.random() * 10))
//   }
//   return newArr;
// }
// console.log(sevenRandomNumbers());

//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
// let country = ["USA", "Nigeria", "Cameroon", "Ghana"]
// let newArr = [];
// function reverseCountries (arr) {
//   for (let i = (arr.length -1); i>=0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
  
// }
// console.log(reverseCountries(["USA", "Nigeria", "Cameroon", "Ghana"]))

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// function findMax () {
//   let max = arguments[0]
//   console.log(max);
//   for (let i =0; i<arguments.length-1; i++) {
//     if (max > arguments[i]) {
//       max = arguments[i];
//     }
//   }
  
//   return max;
// }
// console.log(findMax(0, 10, 5))//10
// console.log(findMax(0, -10, -2))//0

// function timer (firstName) {
//   console.log(`My name is ${firstName}`);
// }

// // setTimeout(timer, 4000, "Adenike")
// setInterval(timer, 1000, "Adenike");
// clearInterval(timer);

//Write a function which checks if all the items of the array are the same data type.
const items = [1, 2, 3, 55, 7, 0];
let areAllStrings = items.every((item) => typeof item === "number")
  // console.log(areAllStrings);

  // const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
//   const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]

//  let values = products.filter(n => typeof n.price === "number");
//  console.log(values);

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// function getStringLists (arr) {
//   let stringItems = arr.filter(item => typeof item === "string") 
//   console.log(stringItems);
// }

// getStringLists([2, "ade", true, "bantu", 100])

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// let all = countries.reduce((acc, curr) => acc + ", " + curr);
// console.log(`${all} are north European countries`);// ********* CHECK TODAY *****

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// let totalPrice = products.filter(n => n.price > 0)
// let prices = totalPrice.map(n => n.price)
// let sum = prices.reduce((acc, curr) => acc + curr, 0) 
// console.log(sum);

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// function categorizeCountries () {
//   let selected = countries.filter(country => {
//     return country.includes('e')
//   })
//   console.log(selected);
// }
// categorizeCountries()

const countriess = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
function tenLastCountries (array, newArray = []) {
  for (let i=0; i<9; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// console.log(tenLastCountries(countriess));


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway'];


//Create a set containing 0 to 10 using loop
let numsMap = new Set();
function nums () {
  for (let i=0; i<=10; i++) {
  numsMap.add(i);
 }
 return numsMap
}
// console.log(nums())

let countries = [
  {
    "name": "Afghanistan",
    "capital": "Kabul",
    "languages": ["Pashto", "Uzbek", "Turkmen"],
    "population": 40218234,
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    "region": "Asia",
    "area": 652230
},
{
    "name": "Åland Islands",
    "capital": "Mariehamn",
    "languages": ["Swedish"],
    "population": 28875,
    "flag": "https://flagcdn.com/ax.svg",
    "region": "Europe",
    "area": 1580
},
{
    "name": "Albania",
    "capital": "Tirana",
    "languages": ["Albanian"],
    "population": 2837743,
    "flag": "https://flagcdn.com/al.svg",
    "region": "Europe",
    "area": 28748
},
{
  "name": "Algeria",
  "capital": "Algiers",
  "languages": ["Arabic"],
  "population": 43851043,
  "flag": "https://flagcdn.com/dz.svg",
  "region": "Africa",
  "area": 2381741
},
{
  "name": "American Samoa",
  "capital": "Pago Pago",
  "languages": ["English","Samoan"],
  "population": 55197,
  "flag": "https://flagcdn.com/as.svg",
  "region": "Oceania",
  "area": 199
},
{
  "name": "Andorra",
  "capital": "Andorra la Vella",
  "languages": ["Catalan"],
  "population": 77265,
  "flag": "https://flagcdn.com/ad.svg",
  "region": "Europe",
  "area": 468
},
{
  "name": "Angola",
  "capital": "Luanda",
  "languages": ["Portuguese"],
  "population": 32866268,
  "flag": "https://flagcdn.com/ao.svg",
  "region": "Africa",
  "area": 1246700
},
{
  "name": "Anguilla",
  "capital": "The Valley",
  "languages": ["English"],
  "population": 13452,
  "flag": "https://flagcdn.com/ai.svg",
  "region": "Americas",
  "area": 91
},
]
//find the 10 most spoken languages
// function mostSpokenLanguages (countries, num) {
//   let allLanguages = [];
//   countries.forEach(country => country.languages.forEach(language => {
//     allLanguages.push(language);
//   }))
//   const map = allLanguages.reduce((prev, curr) => 
//   prev.set(curr, (prev.get(curr) || 0) + 1), new Map())
//   let output = [];
//   [...map.entries()].forEach(entry => {
//   let obj = {};
//   obj.country = entry[0];
//   obj.count =+ entry[1];
//   output.push(obj)
//   })
//   output = output.sort((a, b) => b.count - a.count)
//   return output.splice(0, num)
// }
// console.log(mostSpokenLanguages(countries, 3));

let language = ["Javascript", "css", "c+", "python", "c"];
delete language[2];
console.log(language.length);