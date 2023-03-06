const multiply = (a: number, b: number) => {
    return a * b;
}
// Example of code that won't pass CI
//
// Reason: parseFloat needs a string as argument
// module.exports.pi = parseFloat(3.4955)

export {multiply}