# LearnPlaywright2x

This repository contains Playwright learning examples for rapid automation practice.

## Structure

- `chapter_01_basics/` - Basic Playwright scripts and setup verification.
- `chapter_02_Javascript_Concepts/` - JavaScript-focused Playwright examples.
- `chapter_03_Identifier_Literals/` - JavaScript identifier rules, naming conventions, and literals.
- `chapter_04_JavaScript_Concepts/` - Advanced JavaScript concepts including var/let/const scope, hoisting, and functional scope.
- `chapter_05_Literals/` - Deep dive into JavaScript literals including null, string literals, template literals, and number literals.
- `chapter_06_Operator/` - JavaScript operators including arithmetic, comparison, logical, ternary, typeof, and increment/decrement operators.
- `chapter_07_if_else/` - Conditional logic with if-else statements, nested conditions, and practical examples like grade calculation and leap year detection.
- `chapter_08_switch/` - Switch statements for multi-way conditional branching with case matching and fall-through behavior.
- `chapter_09-UserInput/` - User input handling using readline, prompt-sync, and Node.js input methods.
- `chapter_10_Loops/` - Loop constructs including for, for-in, for-of, forEach, while, do-while loops and common interview questions.
- `chapter_11_Arrays/` - Array operations including creation, access, adding/removing elements, searching, iteration, transformation, sorting, slicing, concatenation, and type checking.
- `chapter_12_Functions/` - Functions in depth including function types, expressions, arrow functions, IIFE, default/rest parameters, scope, closure, higher-order functions, and pure functions.
- `chapter_19_PlaywrightBasics/` - Playwright end-to-end testing with TypeScript configuration and test examples.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run a script manually with Node.js:
   ```bash
   node chapter_01_basics/04_HotCode.js
   ```

3. Run JavaScript concept examples:
   ```bash
   node chapter_02_Javascript_Concepts/05_JS.js
   node chapter_03_Identifier_Literals/06_Identifier_Rules.js
   node chapter_04_JavaScript_Concepts/09_var_let_const.js
   node chapter_04_JavaScript_Concepts/21_jr_qa_example.js
   node chapter_05_Literals/22_literal.js
   node chapter_05_Literals/27_string.js
   node chapter_05_Literals/28_Template_Literal.js
   node chapter_06_Operator/31_arithmetic.js
   node chapter_06_Operator/35_comparison.js
   node chapter_06_Operator/39_logical_op.js
   node chapter_06_Operator/41_ternary_op.js
   node chapter_07_if_else/48_If_Else.js
   node chapter_07_if_else/57_grade_cal.js
   node chapter_07_if_else/58_leap_year.js
    node chapter_08_switch/59_switch.js
    node chapter_08_switch/62_real_example.js
    node chapter_09-UserInput/68_user_input.js
    node chapter_09-UserInput/70_prompt_sync.js
    node chapter_10_Loops/71_for_loop.js
    node chapter_10_Loops/82_IQ.js
    node chapter_11_Arrays/83_Arrays.js
    node chapter_11_Arrays/93_Array_Slicing.js
    node chapter_12_Functions/97_Functions.js
    node chapter_12_Functions/103_Arrow_Fn.js
    node chapter_12_Functions/105_IIFE.js
    node chapter_12_Functions/113_Closure.js
    ```

4. Run Playwright tests from the chapter 19 folder:
   ```bash
   cd chapter_19_PlaywrightBasics
   npx playwright test
   npx playwright show-report
   ```

## Notes

- The repository is intended for Playwright practice and learning.
- Add your own Playwright scripts in the appropriate chapter folders.
