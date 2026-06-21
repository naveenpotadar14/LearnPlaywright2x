# Chapter 10: Loops

This chapter covers JavaScript loop constructs including for loops, while loops, do-while loops, and array iteration methods.

## Files Overview

| File | Description |
|------|-------------|
| `71_for_loop.js` | Basic for loop syntax and structure |
| `72_for_loop2.js` | For loop variations and examples |
| `73_for_loop3.js` | Advanced for loop patterns |
| `74_IQ.js` | For loop interview questions |
| `75_For_In_OF_Each.js` | for-in, for-of, and forEach loop methods |
| `76_While.js` | While loop fundamentals |
| `77_Do_While.js` | Do-while loop basics |
| `78_do_while.js` | Do-while loop examples and use cases |
| `79_IQ.js` | While/do-while interview questions |
| `80_IQ.js` | Additional loop interview questions |
| `81_IQ.js` | Loop edge cases and tricky scenarios |
| `82_IQ.js` | Complex loop interview questions |

## Key Concepts

### Loop Types

1. **for Loop** - Traditional counting loop with init, condition, and increment
2. **for-in Loop** - Iterates over object properties
3. **for-of Loop** - Iterates over iterable values (arrays, strings)
4. **forEach() Method** - Array iteration with callback function
5. **while Loop** - Loops while condition is true
6. **do-while Loop** - Executes at least once, then loops while condition is true

### Loop Control

- **break** - Exit the loop immediately
- **continue** - Skip to next iteration
- **return** - Exit function (can be in loop)

## Running Examples

```bash
# Basic for loops
node 71_for_loop.js
node 72_for_loop2.js
node 73_for_loop3.js

# Array iteration methods
node 75_For_In_OF_Each.js

# While loops
node 76_While.js
node 77_Do_While.js

# Interview questions
node 74_IQ.js
node 80_IQ.js
```

## Loop Comparison Table

| Loop | Use Case | When to Use |
|------|----------|------------|
| **for** | Count-based iteration | Known iterations, array index |
| **for-in** | Object properties | Iterating object keys |
| **for-of** | Array/string values | Iterating values directly |
| **forEach** | Array processing | Functional approach, no index needed |
| **while** | Condition-based | Unknown iteration count |
| **do-while** | At-least-once execution | Loop must run at least once |

## Loop Syntax Examples

### For Loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

### For-In Loop (Objects)
```javascript
const obj = { a: 1, b: 2 };
for (let key in obj) {
    console.log(key, obj[key]);  // a 1, b 2
}
```

### For-Of Loop (Arrays/Strings)
```javascript
const arr = [10, 20, 30];
for (let val of arr) {
    console.log(val);  // 10, 20, 30
}
```

### forEach() Method
```javascript
[1, 2, 3].forEach((val, index) => {
    console.log(index, val);
});
```

### While Loop
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### Do-While Loop
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);  // Executes at least once
```

## Learning Path

1. Start with `71_for_loop.js` for basic for loop syntax
2. Practice with `72_for_loop2.js` and `73_for_loop3.js`
3. Learn array iteration in `75_For_In_OF_Each.js`
4. Study `76_While.js` and `77_Do_While.js` for conditional loops
5. Challenge yourself with `74_IQ.js` and interview questions
6. Master edge cases with `80_IQ.js`, `81_IQ.js`, `82_IQ.js`

## Common Loop Patterns

### Sum of Numbers
```javascript
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;  // Sum: 55
}
```

### Finding an Element
```javascript
const arr = [2, 4, 6, 8];
let found = false;
for (let val of arr) {
    if (val === 6) {
        found = true;
        break;
    }
}
```

### Nested Loops (2D Array)
```javascript
const matrix = [[1, 2], [3, 4]];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

## Important Notes

- **for-in vs for-of**: for-in gives keys/indices, for-of gives values
- **forEach has no break**: Use regular for/for-of if you need to break early
- **Infinite loops**: Always ensure loop condition will eventually be false
- **Performance**: for loops are generally faster than forEach for simple iterations
- **Scope**: Variables declared with `let` in loop are block-scoped
- **Break vs Continue**: break exits loop, continue skips to next iteration

## Common Mistakes

1. Forgetting loop increment/condition → infinite loop
2. Using for-in on arrays → gets string indices and inherited properties
3. Modifying array while iterating → unpredictable behavior
4. Off-by-one errors → loop runs wrong number of times
5. Scope confusion with `var` vs `let` in loops

## Interview Tips

- Understand performance implications of each loop type
- Know when to use break vs continue
- Understand scope and closure in loops
- Be able to convert between loop types
- Practice nested loops and complex iterations
