const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// // returns the json string representation
// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)
// {"title":"Ego is the Enemy","author":"Ryan Holiday"}

// console.log(bookJSON.title)
// undefined

// // takes in the json string and returns the object
// const parsedData = JSON.parse(bookJSON)

// console.log(parsedData)
// { title: 'Ego is the Enemy', author: 'Ryan Holiday' }

// console.log(parsedData.title)
// Ego is the Enemy

// // To create a new file
// fs.writeFileSync('1-json.json', bookJSON)

// // To read file
// const dataBuffer = fs.readFileSync('1-json.json')

// console.log(dataBuffer)
// <Buffer 7b 22 74 69 74 6c 65 22 3a 22 45 67 6f 20 69 73 20 74 68 65 20 45 6e 65 6d 79 22 2c 22 61 75 74 68 6f 72 22 3a 22 52 79 61 6e 20 48 6f 6c 69 64 61 79 ... 2 more bytes>

// console.log(dataBuffer.toString())
// {"title":"Ego is the Enemy","author":"Ryan Holiday"}

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)

// console.log(data.title)
// Ego is the Enemy



// // CHALLENGE: Work with JSON and the file system

// 1. Load and parse the JSON data

const dataBuffer = fs.readFileSync('1-json.json');
const dataString = dataBuffer.toString();
const user = JSON.parse(dataString);

// 2. Change the name and age property using your info

user.name = "Maria del Carmen";
user.age = 548;

// 3. Stringify the change object and overwrite the original data

const userJSON = JSON.stringify(user);

fs.writeFileSync('1-json.json', userJSON);

// 4. Test your work by viewing data in the JSON file