// const multiply = (a: number, b: number, c: number) => {
//     if(b > 0) {
//         return a * b;
//     }
// }

const multiply = (a: number, b: number) => {
    return a * b;
}

const divide = (a: number, b: number) => {
    return a / b;
}

// let osef;

// Example of code that won't pass CI
// Reason: parseFloat needs a string as argument
// module.exports.pi = parseFloat(3.490)

export {multiply, divide}