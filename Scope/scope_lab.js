// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
console.log(blockVar); // You will see output for blockVar, because it can be accessed outside the curly brackets {}
console.log(blockLet); // you will see ReferenceError for blockLet because it cannot be accessed outside the curly brackets due to which it is known as block scoped variables
console.log(globalConst); // you will see ReferenceError
/**
 * A ReferenceError occurs when code attempts to
 * use a variable that has not been declared or is 
 * outside of its scope, preventing proper access or execution.
 */


function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError