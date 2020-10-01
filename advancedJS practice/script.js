// Advanced Array

// // Complete the below questions using this array:
// const array = [
//   {
//     username: "john",
//     team: "red",
//     score: 5,
//     items: ["ball", "book", "pen"]
//   },
//   {
//     username: "becky",
//     team: "blue",
//     score: 10,
//     items: ["tape", "backpack", "pen"]
//   },
//   {
//     username: "susy",
//     team: "red",
//     score: 55,
//     items: ["ball", "eraser", "pen"]
//   },
//   {
//     username: "tyson",
//     team: "green",
//     score: 1,
//     items: ["book", "pen"]
//   },

// ];

// //Create an arr/y using forEach that has all the usernames with a "!" to each of the usernames
// const forEachArray = []
// array.forEach(user => forEachArray.push(user.username+'!'));
// console.log(forEachArray);

// //Create an array using map that has all the usernames with a "? to each of the usernames

// const mapArray = array.map(user => user.username + '?');
// console.log(mapArray);

// //Filter the array to only include users who are on team: red
// const filterArray = array.filter(user => user.team === "red");
// console.log(filterArray);

// //Find out the total score of all users using reduce
// const reduceArray = array.reduce((accumulator, user) => {return accumulator + user.score}, 0);
// console.log(reduceArray);

// //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// const userList = array.map(user => {
//     user.items = user.items.map(item => item+'!');
//     return user
// });

// class

// class Animal {
//   constructor(name,color) {
//     this.name = name;
//     this.color = color;
//   }
// }

// class Cow extends Animal {
//   constructor(name,color){
//     super(name, color)
//   }
//   moo() {
//     console.log(`Moooo. I'm ${this.name} and I'm ${this.color}`)
//   }
// }

// const shelly = new Cow('Shelly', 'black');

// ES7

// // #1) Check if this array includes the name "John".
// const dragons = ['Tim'/, 'Johnathan', 'Sandy', 'Sarah'];
// dragons.includes('John')

// // #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// // name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// const newArray = dragons.filter(name => name.includes('John'));

// // #3) Create a function that calulates the power of 100 of a number entered as a parameter

// const hunderedPowered = x => x**100;
// hundredPowered(2)

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
// infinity, above the limit of floating point numbers

// ES8
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// console.log(startLine);
// console.log(turtle.padStart(8, '.'));
// console.log(rabbit.padStart(8, '.'));


// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
  
// // to this:
// 'my name is Rudolf the raindeer'

// const introduction = Object.entries(obj).map(entry => entry.join(' ')).join(' ')
// console.log(introduction)


// ES10
// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// console.log(array.flat(2))

// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// const newGreeting = greeting.map(array => array.join(' '));
// console.log(newGreeting);
// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// const greetString = newGreeting.join(' ');
// console.log(greetString);

// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// // const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// // console.log(userEmail3.trim());

// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// console.log(Object.entries(users));

// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const idTimes2 = Object.entries(users).map(user => [user[0], user[1]*2]);
// console.log(idTimes2)
// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// console.log(Object.fromEntries(idTimes2))