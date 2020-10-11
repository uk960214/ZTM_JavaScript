// const promise1 = Promise.resolve(
//   setTimeout(() => {
//     console.log('success')
//     }, 5000)
// );

// Promise.reject('failed').catch(console.log('Oops, Something went wrong'))

// const urls = [
//   'https://swapi.dev/api/people/1/',
//   'https://swapi.dev/api/starships/9/',
//   'https://swapi.dev/api/vehicles/4/'
// ]

// Promise.all(urls.map(url => 
//   fetch(url).then(response => response.json())
//   ))
// .then(results => {
//   results.forEach(result => {
//   console.log(result)
//   })
// })
// .catch(() => console.log('Oops, Something went wrong'))

// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then(console.log);

// const fetchUrl = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//   const data = await response.json();
//   await console.log(data)
// }

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async function () {
//   try {
//   const [users, posts, albums] = await Promise.all(
//     urls.map(async (url) => {
//     const response = await fetch(url);
//     return response.json();
//     })
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
//   } catch (err) {
//     console.log('oops', err)
//   }
// };

