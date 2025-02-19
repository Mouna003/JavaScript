//Problem 1: Why did the code produce that output?
// If applicable, how would you get the index value that did not output?

const cars =['Telsa', 'Mercedes', 'Honda'];
const [ randomCar ] = cars;
const [ ,otherRandomCar ] = cars;

// 1. Prediction of the example output:
// Tesla
// Mercedes

// 2. The actual output:
// Tesla
// Mercedes

// 3. Explanation:
// - The destructuring assignment `const [ randomCar ] = cars;` extracts the first element ('Tesla').
// - The destructuring assignment `const [ ,otherRandomCar ] = cars;` skips the first element and extracts the second one ('Mercedes').
// - The third value ('Honda') was never referenced in the destructuring process, so it does not output.

// Fix or modification:
// If we also want to get 'Honda', we need to explicitly extract it:

const [ , , thirdCar ] = cars;
console.log(thirdCar);


//Problem 2: Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { emplyeeName: otgerName } = employee;

// 1. Prediction of the example output:
// Elon
// ReferenceError: employeeName is not defined

// 2. The actual output:
// Elon
// ReferenceError: employeeName is not defined

// 3. Explanation:
// - The destructuring assignment `const { employeeName: otherName } = employee;` 
//   renames `employeeName` to `otherName`.
// - `console.log(otherName);` outputs `'Elon'` successfully.
// - `console.log(employeeName);` fails because `employeeName` does not exist 
//   as a standalone variable.

// Fix or modification:
// If we also want to use `employeeName`, we should explicitly extract it:
const { employeeName, employeeName: otherName } = employee;
console.log(employeeName);
console.log(otherName);


//Problem 3: Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;

console.log(password);
console.log(hashedPassword);

// 1. Prediction of the example output:
// 12345
// undefined

// 2. The actual output:
// 12345
// undefined

// 3. Explanation:
// - `password = '12345'` is a separate variable, so it prints correctly.
// - The destructuring assignment `const { password: hashedPassword } = person;` 
//   tries to extract `password` from `person`, but `person` does not contain a 
//   `password` property. As a result, `hashedPassword` is `undefined`.

// Fix or modification:
// Add `password` inside the `person` object:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: 'secure123'
};


//Problem 4: Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first === second);
console.log(first === third);

// 1. Prediction of the example output:
// false
// true

// 2. The actual output:
// false
// true

// 3. Explanation:
// - The destructuring `const [,first] = numbers;` extracts the second element (`2`).
// - The destructuring `const [,,,second] = numbers;` extracts the fourth element (`5`).
// - The destructuring `const [,,,,,,,,third] = numbers;` extracts the last element (`2`).
// - `console.log(first === second);` → `2 !== 5` → false.
// - `console.log(first === third);` → `2 === 2` → true.

// Fix or modification:
// If we also want to get the 4th index (`6`), we need to explicitly extract it:
const [,,,,fourth] = numbers;
console.log(fourth);


//Problem 5:Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// 1. Prediction of the example output:
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5

// 2. The actual output:
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5

// 3. Explanation:
// - `key` is directly assigned and outputs `'value'`.
// - `secondKey` holds `[1, 5, 1, 8, 3, 3]`.
// - `secondKey[0]` extracts `1`.
// - `const [ ,willThisWork] = secondKey;` skips the first value and assigns `5` to `willThisWork`.

// Fix or modification:
// If we also want to get the last value (`3`), we should use:
console.log(secondKey[secondKey.length - 1]);

//Problem 6:First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + ' was found at index ' + index);
        }
    console.log('name and index after loop is ' + name + ':' + index);
    }
actuallyPrintingNames();
}
printNames(beatles);

// 1. What I think will happen:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:3

// 2. What actually happens:
// Yep, exactly as predicted!

// 3. Why?
// - There are three scopes here:
//   1. **Global scope**: `beatles` is available everywhere.
//   2. **Function scope (`printNames`)**: `names` is only available inside `printNames`.
//   3. **Inner function scope (`actuallyPrintingNames`)**: Everything inside this function 
//      stays within it, unless it’s using `var`.

// - The reason `name` and `index` are still available **after the loop** is because `var` 
//   doesn’t have block scope, it’s **function-scoped**. So, when the loop is done, the 
//   last value is still hanging around.

// Fix:
// Using `let` instead of `var` would prevent `name` and `index` from being accessible 
// after the loop.


//Problem 7:Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}

// - We forgot to **pass `names` as a parameter** to the function. 
//   The function has no clue what `names` is supposed to be.
// - Also, `let name` and `let index` are **block-scoped**, meaning once 
//   the loop finishes, they vanish. That’s why the last `console.log` 
//   doesn't work either.

// Fix:
// Add `names` as a parameter to the function:
function actuallyPrintingNames(names) {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
}


//Problem 8: Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        console.log(name + ' was found at index ' + index);
        }
    }
actuallyPrintingNames();
}
printNames(beatles);

// 1. Expected output:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

// 2. Actual output:
// Yep, exactly as expected!
//3. Why does it work?
//The `beatles` array is global, so it's accessible anywhere.
//The `printNames` function takes `names` (which is `beatles`) and passes it 
//to `actuallyPrintingNames`.
//The `for` loop runs through `names`, printing each name with its index.
//`let index` makes sure the loop variable is scoped correctly.
//`const name = names[index]` creates a new `name` variable on each loop iteration, 
//so it doesn't accidentally persist between loops.

//4. What could break it?
//If we tried to `console.log(name)` outside the loop, it would fail because `const name` 
//only exists inside the loop.
//If we used `var` instead of `let`, the loop variable `index` would leak outside the loop, 
//which we don’t want.

//5. Can we simplify it?
//Here's a cleaner version:

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    for (let index = 0; index < names.length; index++) {
    console.log(names[index] + ' was found at index ' + index);
    }
}
printNames(beatles);


//Problem 9: Why did the code produce that output?
//Explain why each console.log looks the way it does.

const planet = {
	name: "Jupiter",
	milesFromSun: 49849,
	mass: 393983,
	composition: ["gas", "liquid", "oxygen"]
}

const planetCopy = { ...planet };

console.log(planet.composition[0] === planetCopy.composition[0]);
console.log(planet === planetCopy);

//1. Expected output:
// true
// false

//2. Actual output:
// true
// false

//3. Why does this happen?
//`const planetCopy = { ...planet }` creates a **shallow copy** of the `planet` object.
//A shallow copy means that the **top-level properties** are copied, 
//but any **nested objects or arrays** inside it are still **referenced** from the original.
//`composition` is an array, and since objects and arrays in JavaScript are stored by reference,
//`planetCopy.composition` is pointing to the same array as `planet.composition`.

//Why is `console.log(planet.composition[0] === planetCopy.composition[0])` true?
//Since both `planet` and `planetCopy` **share the same `composition` array in memory**,
//`planet.composition[0]` and `planetCopy.composition[0]` refer to the exact same `"gas"` string.
//When we compare them using `===`, JavaScript checks if they point to the same memory location,
//which they do, so it returns **true**.

//Why is `console.log(planet === planetCopy)` false?
//Even though `planetCopy` contains the same values as `planet`, it's a **different object** in memory.
//`{ ...planet }` creates a new object with the same properties, but **it’s not the same object**.
//Since `planet` and `planetCopy` are two different objects, `planet === planetCopy` returns **false**.

//4. How can we make a deep copy instead?
//If we want a true **deep copy** (where nested objects/arrays don’t share memory), we can use:

const deepPlanetCopy = JSON.parse(JSON.stringify(planet));

// - This converts the object into a JSON string and then back into a new object.
// - Now, `deepPlanetCopy.composition` is **completely separate** from `planet.composition`.
// - This way, changing `deepPlanetCopy.composition` won't affect `planet.composition`.

console.log(planet.composition[0] === deepPlanetCopy.composition[0]);
console.log(planet === deepPlanetCopy); 

