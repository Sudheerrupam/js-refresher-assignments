/*
===========================================
ASSIGNMENT 5: ES6+ FEATURES
===========================================
*/



// TODO 1: Use const and let appropriately
const PI = 3.14159;      // This should never change
let counter = 0;         // This will be reassigned

// TODO 2: Template literals with complex expressions
const user = { name: 'Sarah', age: 28, role: 'developer' };
const currentYear = new Date().getFullYear();

const userInfo = `
User Profile:
Name: ${user.name}
Age: ${user.age} (born in ${currentYear - user.age})
Role: ${user.role.toUpperCase()}
Status: ${user.age >= 18 ? 'Adult' : 'Minor'}
`;

// TODO 3: Array destructuring with default values and rest
const scores = [95, 87, 92, 78, 85];
const [highest, second, third = 90, ...remainingScores] = scores;

// TODO 4: Object destructuring with renaming and defaults
const product = {
    id: 'P001',
    title: 'Wireless Headphones',
    price: 199.99,
    category: 'Electronics'
};

const {
    id: productId,
    title: productName,
    price: productPrice,
    category: productCategory,
    rating = 4.5  // default value
} = product;

// TODO 5: Nested destructuring
const company = {
    name: 'TechCorp',
    location: {
        country: 'USA',
        city: 'San Francisco',
        address: {
            street: '123 Tech Street',
            zipCode: '94105'
        }
    },
    employees: 150
};

const {
    name: companyName,
    location: {
        city: companyCity,
        address: { street: companyStreet }
    },
    employees: employeeCount
} = company;

// TODO 6: Function with default parameters and rest parameters
function createReport(title, author = 'Anonymous', ...sections) {
    return {
        title: title,
        author: author,
        sections: sections,
        createdAt: new Date().toISOString(),
        pageCount: sections.length
    };
}

// TODO 7: Arrow functions with different syntaxes
const square = x => x * x;                    // Single parameter, implicit return
const add = (a, b) => a + b;                  // Multiple parameters, implicit return
const processData = data => {                 // Single parameter, explicit return
    const processed = data.map(item => item * 2);
    return processed;
};

// TODO 8: Spread operator with arrays
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];
const groceries = [...fruits, 'bread', ...vegetables, 'milk'];

// TODO 9: Spread operator with objects
const baseConfig = {
    theme: 'light',
    fontSize: 14,
    autoSave: true
};

const userConfig = {
    theme: 'dark',
    language: 'spanish'
};

const finalConfig = {
    ...baseConfig,
    ...userConfig,
    lastModified: Date.now()
};

// TODO 10: Enhanced object literals
const name = 'Calculator';
const version = '2.0';
const multiply = (a, b) => a * b;

const calculatorApp = {
    name,                           // Property shorthand
    version,                        // Property shorthand
    [`created_${Date.now()}`]: true, // Computed property name

    // Method shorthand
    add(a, b) {
        return a + b;
    },

    // Method shorthand with arrow function stored in variable
    multiply,

    // Method with computed name
    ['get' + 'Info']() {
        return `${this.name} v${this.version}`;
    }
};

// TODO 11: Function that uses multiple ES6+ features
function analyzeData(dataset, options = {}) {
    const {
        sortBy = 'value',
        filterMin = 0,
        limit = 10
    } = options;

    return dataset
        .filter(item => item.value >= filterMin)
        .sort((a, b) => {
            return sortBy === 'value'
                ? b.value - a.value
                : a.name.localeCompare(b.name);
        })
        .slice(0, limit)
        .map(({ name, value, ...other }) => ({
            name: name.toUpperCase(),
            value: value,
            hasMetadata: Object.keys(other).length > 0
        }));
}

// TODO 12: Template literal function (tagged template)
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}



console.log('=== ASSIGNMENT 5 RESULTS ===');

// Test variables
counter = 5;
console.log('PI:', PI, 'Counter:', counter);

// Test template literals
console.log('User Info:', userInfo);

// Test array destructuring
console.log('Scores Analysis:');
console.log(`Highest: ${highest}, Second: ${second}, Third: ${third}`);
console.log('Remaining scores:', remainingScores);

// Test object destructuring
console.log('Product Info:');
console.log(`ID: ${productId}, Name: ${productName}`);
console.log(`Price: $${productPrice}, Category: ${productCategory}, Rating: ${rating}`);

// Test nested destructuring
console.log(`Company: ${companyName} in ${companyCity}`);
console.log(`Address: ${companyStreet}, Employees: ${employeeCount}`);

// Test function with defaults and rest
console.log('Report:', createReport('Annual Report', undefined, 'Intro', 'Financials', 'Conclusion'));

// Test arrow functions
console.log('Square of 4:', square(4));
console.log('Add 3 + 7:', add(3, 7));
console.log('Process Data [1,2,3]:', processData([1, 2, 3]));

// Test spread operator
console.log('Groceries:', groceries);
console.log('Final Config:', finalConfig);

// Test enhanced object literals
console.log('Calculator add:', calculatorApp.add(2, 3));
console.log('Calculator multiply:', calculatorApp.multiply(4, 5));
console.log('Calculator info:', calculatorApp.getInfo());

// Test analyzeData
const dataset = [
    { name: 'alpha', value: 30, extra: true },
    { name: 'beta', value: 10 },
    { name: 'gamma', value: 50, notes: 'important' }
];
console.log('Analyzed Data:', analyzeData(dataset, { filterMin: 20, sortBy: 'value', limit: 2 }));

// Test tagged template
const lang = 'JavaScript';
const level = 'Advanced';
console.log(highlight`I am learning ${lang} at an ${level} level.`);
