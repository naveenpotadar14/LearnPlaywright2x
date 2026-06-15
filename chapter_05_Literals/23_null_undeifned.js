// 23_null_undeifned.js
// Simple explanation and examples: null vs undefined

// 1) undefined: a variable that has been declared but not assigned
let a;
console.log('a:', a); // undefined
console.log('typeof a:', typeof a); // "undefined"

// Common causes of undefined:
// - declared but not assigned
// - accessing a property that doesn't exist
// - a function returns without a value

let obj = {};
console.log('obj.missingProp:', obj.missingProp); // undefined

function noReturn() {}
console.log('noReturn():', noReturn()); // undefined

// 2) null: explicitly assigned to mean "no value" or "empty"
let b = null;
console.log('b:', b); // null
console.log('typeof b:', typeof b); // "object" (historical JS quirk)

// 3) Equality differences
console.log('null == undefined ->', null == undefined); // true (loose equality)
console.log('null === undefined ->', null === undefined); // false (strict equality)

// 4) Practical use
// Use null when you want to explicitly clear a value:
let user = { name: 'Alice' };
user.name = null; // explicitly no name

// Use undefined to represent "not set" (often left by JS itself)
let config = {};
console.log('config.timeout:', config.timeout); // undefined -> not provided

// 5) Defaulting: use nullish coalescing to treat null and undefined similarly
let value1 = null;
let value2 = undefined;
console.log('value1 ?? 10 ->', value1 ?? 10); // 10
console.log('value2 ?? 10 ->', value2 ?? 10); // 10

// 6) Short summary (simple):
// - undefined: means the value is missing (JS often provides this automatically)
// - null: means you (the programmer) set the value to "no value"

// Run with: node "chapter_05_Literals/23_null_undeifned.js"
