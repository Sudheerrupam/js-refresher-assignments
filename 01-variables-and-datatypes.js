/*
===========================================
ASSIGNMENT 1: VARIABLES AND DATA TYPES
===========================================

📚 LEARNING OBJECTIVES:
- Understand the difference between var, let, and const
- Work with different JavaScript data types
- Use template literals for string interpolation
- Practice type checking with typeof
*/


//  Declare a variable using 'let' with your name
let myName = "Sudheer Kumar";

// Declare a constant for the value of PI
const PI = 3.14159;

// TODO 3: Create variables for different data types
let age = 24;                         //  Age (number)
let isStudent = true;                 // true or false (boolean)
let favoriteColors = ["blue", "white", "black"]; // Array with 3 colors
let person = {
    name: "Sudheer Kumar",            // name
    age: 24,                          // age
    city: "Visakhapatnam"             // Your city
};

// Use template literals to create a message
let introduction = `My name is ${myName} and I am ${age} years old`;

// Checking  data types using typeof
console.log('Type of myName:', typeof myName);
console.log('Type of age:', typeof age);
console.log('Type of isStudent:', typeof isStudent);
console.log('Type of favoriteColors:', typeof favoriteColors);
console.log('Type of person:', typeof person);



console.log('=== ASSIGNMENT 1 RESULTS ===');
console.log('Name:', myName);
console.log('Age:', age);
console.log('Is Student:', isStudent);
console.log('Favorite Colors:', favoriteColors);
console.log('Person Object:', person);
console.log('Introduction:', introduction);

/*
 EXPECTED OUTPUT EXAMPLE:
=== ASSIGNMENT 1 RESULTS ===
Name: Sudheer Kumar
Age: 24
Is Student: true
Favorite Colors: ['blue', 'white', 'black']
Person Object: {name: 'Sudheer Kumar', age: 24, city: 'Visakhapatnam'}
Introduction: My name is Sudheer Kumar and I am 24 years old
Type of myName: string
Type of age: number
Type of isStudent: boolean
Type of favoriteColors: object
Type of person: object
*/
