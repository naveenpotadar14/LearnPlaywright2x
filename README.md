# LearnPlaywright2x

This repository contains Playwright learning examples for rapid automation practice.

## Structure

- `chapter_01_basics/` - Basic Playwright scripts and setup verification.
- `chapter_02_Javascript_Concepts/` - JavaScript-focused Playwright examples.
- `chapter_03_Identifier_Literals/` - JavaScript identifier rules, naming conventions, and literals.
- `chapter_04_JavaScript_Concepts/` - Advanced JavaScript concepts including var/let/const scope, hoisting, and functional scope.
- `chapter_05_Literals/` - Deep dive into JavaScript literals including null, string literals, template literals, and number literals.
- `chapter_06_Operator/` - JavaScript operators including arithmetic, comparison, logical, ternary, typeof, and increment/decrement operators.
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
