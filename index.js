// const name = 'Dev Ed';
// const toUpper = (name) => {
//     const upperCased = name.toUpperCase();
//     console.log(upperCased); 
// }

// toUpper(name);

// let numbers = [22, 15, 9, 100, 45, 1200, 44, 12, 33, 6];
// numbers.sort(function(a, b){
//     return a - b
// });
// console.log(numbers);
// const result = Math.min(...numbers);
// console.log('Smallest number is: ' + result);
// const result1 = Math.max(...numbers);
// console.log('Largest number is: ' + result1);

// callback, if you dont want to call a function right away
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({user: 'Victoria', state: 'Ondo'})
//     }, 5000)
// });

// promise.then(result => {
//     console.log(result);
// });

function myFunction() {
    const j = 70;
    try {
        alert ("The value of j is :" + j);
    } catch (e) {
        alert ("Error: " + e.description);
    }
}
myFunction()