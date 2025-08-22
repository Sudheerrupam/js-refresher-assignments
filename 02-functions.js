/*
===========================================
ASSIGNMENT 2: FUNCTIONS
===========================================

📚 LEARNING OBJECTIVES:
- Create functions using different syntaxes
- Understand function parameters and return values
- Use arrow functions effectively
- Work with default parameters and rest parameters
- Practice function composition and higher-order functions
*/


// TODO 1: Create a function declaration that calculates rectangle area
function calculateRectangleArea(length, width) {
    return length * width;  // area = length * width
}

// TODO 2: Create an arrow function that calculates circle area
const calculateCircleArea = (radius) => {
    return Math.PI * radius * radius;  
};

// TODO 3: Create a function with default parameters for creating a user profile
function createUserProfile(name, age = 18, country = "India") {
    return {
        name: name,              // assigning name
        age: age,                // default age = 18 if not given
        country: country,        // default country = India
        id: Math.floor(Math.random() * 1000)  // random ID
    };
}

// TODO 4: Create a function that uses rest parameters to sum multiple numbers
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0); // sum all numbers
}

// TODO 5: Create a higher-order function that applies an operation to two numbers
function mathOperation(a, b, operation) {
    return operation(a, b); // applying the function passed
}

// TODO 6: Create arrow functions for basic math operations
const multiply = (x, y) => x * y;     // multiplication
const divide = (x, y) => x / y;       // division
const subtract = (x, y) => x - y;     // subtraction

// TODO 7: Create a function that returns another function (closure example)
function createMultiplier(factor) {
    return function(number) {
        return factor * number;  // factor value
    };
}



console.log('=== ASSIGNMENT 2 RESULTS ===');

// Test basic functions
console.log('Rectangle area (5x10):', calculateRectangleArea(5, 10));
console.log('Circle area (radius 3):', calculateCircleArea(3));

// Test default parameters
console.log('User profile 1:', createUserProfile('Alice'));
console.log('User profile 2:', createUserProfile('Bob', 30));
console.log('User profile 3:', createUserProfile('Charlie', 25, 'Canada'));

// Test rest parameters
console.log('Sum of 1,2,3,4,5:', sumNumbers(1, 2, 3, 4, 5));
console.log('Sum of 10,20,30:', sumNumbers(10, 20, 30));

// Test higher-order functions
console.log('Math operations:');
console.log('  5 * 3 =', mathOperation(5, 3, multiply));
console.log('  15 / 3 =', mathOperation(15, 3, divide));
console.log('  10 - 4 =', mathOperation(10, 4, subtract));

// Test closure
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log('Double 5:', double(5));
console.log('Triple 4:', triple(4));

/*
EXPECTED OUTPUT EXAMPLE:
=== ASSIGNMENT 2 RESULTS ===
Rectangle area (5x10): 50
Circle area (radius 3): 28.274333882308138
User profile 1: {name: 'Alice', age: 18, country: 'India', id: someRandomNumber}
User profile 2: {name: 'Bob', age: 30, country: 'India', id: someRandomNumber}
User profile 3: {name: 'Charlie', age: 25, country: 'Canada', id: someRandomNumber}
Sum of 1,2,3,4,5: 15
Sum of 10,20,30: 60
Math operations:
  5 * 3 = 15
  15 / 3 = 5
  10 - 4 = 6
Double 5: 10
Triple 4: 12
*/
