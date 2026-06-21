# Chapter 09: User Input

This chapter covers different methods for accepting user input in JavaScript, including browser APIs and Node.js approaches.

## Files Overview

| File | Description |
|------|-------------|
| `68_user_input.js` | Browser-based user input using `prompt()` method |
| `69_Node_readline.js` | Node.js synchronous input using the `readline` module |
| `70_prompt_sync.js` | Synchronous prompt using third-party npm package |

## Key Concepts

- **Browser Input**: `prompt()`, `confirm()`, `alert()`
- **Node.js Input**: `readline` module, `stdin`, CLI arguments
- **Synchronous vs Asynchronous**: Blocking vs non-blocking input
- **Input Validation**: Checking and converting user input
- **Error Handling**: Managing invalid input gracefully

## Methods for Getting User Input

### 1. Browser `prompt()` (68_user_input.js)
```javascript
let input = prompt("Enter a value:");
```
- **Pros**: Simple, built-in
- **Cons**: Only works in browsers, not in Node.js
- **Use Case**: Web applications

### 2. Node.js `readline` Module (69_Node_readline.js) ✓ Recommended
```javascript
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Enter a value: ', answer => { /* ... */ rl.close(); });
```
- **Pros**: Works in Node.js, built-in module
- **Cons**: Callback-based, more verbose
- **Use Case**: Server-side scripts, CLI applications

### 3. Synchronous Prompt (70_prompt_sync.js)
```javascript
// Requires npm package like prompt-sync
const prompt = require('prompt-sync')();
let input = prompt('Enter a value: ');
```
- **Pros**: Synchronous/simple syntax
- **Cons**: Requires external package
- **Use Case**: Quick scripts, learning

## Running Examples

### Browser Version
Include the script in an HTML file:
```html
<script src="68_user_input.js"></script>
```

### Node.js Versions
```bash
# With readline (non-blocking callback)
echo 7 | node 69_Node_readline.js

# With prompt-sync (if installed)
npm install prompt-sync
node 70_prompt_sync.js
```

## Important Differences

| Feature | Browser | Node.js readline | CLI Arguments |
|---------|---------|------------------|---------------|
| **Method** | `prompt()` | `readline` | `process.argv` |
| **Blocking** | Yes | No (callback) | N/A |
| **Environment** | Browser | Server | CLI |
| **Setup** | None | Built-in | None |

## Learning Path

1. Start with `68_user_input.js` to understand `prompt()` concept
2. Study `69_Node_readline.js` to learn Node.js event-based input
3. Experiment with `70_prompt_sync.js` for simpler syntax
4. Practice combining input with validation and conditional logic

## Common Issues

### Issue: "ReferenceError: prompt is not defined"
**Cause**: Running browser script in Node.js
**Solution**: Use `readline` or `prompt-sync` in Node.js

### Issue: Input doesn't wait for user
**Cause**: Asynchronous callback not handled
**Solution**: Place logic inside the callback function

### Issue: Can't pass input via pipe to readline
**Cause**: `readline` expects interactive terminal
**Solution**: Use `echo "value" |` to simulate user input

## Notes

- Always validate and convert user input types
- Handle `null` or empty input appropriately
- Close `readline` interface after use to prevent hanging
- For browser apps, consider using form inputs instead of `prompt()`
