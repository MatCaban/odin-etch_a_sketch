#odin-etch_a_sketch

# Grid Creator

This project is a simple grid creator that allows you to create a grid of squares. You can specify the number of squares per side, and each square will be assigned a random background color when you mouse over it.

## How to Use

1. Open the project in your browser.
2. Click the button to start creating squares. You will be prompted to enter the number of squares per side.
3. Enter a number less than or equal to 100.
4. Move your mouse over the squares to assign them random background colors.

## Code Overview

The main JavaScript file is `script.js`. Here's what each part of the code does:

- `createGrid(message * message)`: This function creates a grid of squares. The number of squares is determined by the `message` variable, which is the number of squares per side that you entered.
- `const boxes = document.querySelectorAll(".box")`: This line selects all the squares.
- `boxes.forEach(box => {...})`: This code adds a mouseover event listener to each square. When you mouse over a square, if it doesn't already have a background color, it's assigned a random RGB color.
- `const button = document.querySelector("button")`: This line selects the button.
- `button.addEventListener("click", createSquares)`: This code adds a click event listener to the button. When you click the button, the `createSquares` function is called, which prompts you to enter the number of squares per side and then creates the grid.

## Future Improvements

- Add the ability to specify the range of random colors.
- Add the ability to reset the grid without refreshing the page.