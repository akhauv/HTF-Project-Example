[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/RxReF0lT)

# HW4: Using React

## Objective

To practice using production-ready JavaScript frameworks, in this assignment, you will be recreating HW2 using either React, or any other component-based JavaScript framework outside of the one we have developed.

This repository has already been set up for React. However, if you choose another framework, feel free to delete the files in this repository (except for `answers.txt` and `.gitignore`) and follow its developer setup guide.

Note: You do not need to choose the same game you made for HW2 or HW3. Feel free to choose any game from the list provided in HW2. Just make sure all required functionality is present.

## Running the React App

After you have installed [Node.js](https://nodejs.org/en), run the following commands in the terminal:

- npm install
- npm run dev

## Requirements

### Components (4 points)

- Usage: Create at least 2 components. (1 point)
- Nesting: Render one of your components within another. If your game has tiles, I recommend making a component to render the entire board and a component to render each tile. (1 point)
- Props: Pass down data from a parent component to a child component. I recommend storing all game states in the root component (App.jsx), and passing them down to child components as needed. (1 point)
- Custom Hook: Create at least 1 custom hook. If you do not know what to use it for, it is perfectly acceptable to make one that simply creates a state, creates an effect that logs the state's value when it changes, then returns the state's value and set function. (1 point)

### Reactivity (4 points)

- States: Use at least 2 states to hold all non-constant data in your application. This might include the player's turn, the board state, the score, etc. Each state's set function should be called at least once when appropriate. (2 points)
- Effects:
  - Create an effect with at least one dependency. It can do anything you wish, like logging states or derived values when they update. (1 point)
  - Create an effect that runs when the component mounts. You might consider performing your onMount logic from HW3 here. (1 point)

### Code Readability (2 points)

- Proper indentation of JS (1 point)
- Meaningful variable names (1 points)

### Code Correctness (4 points)

- Game does not crash while playing, and functions as expected. (4 points)

### Written Responses (6 points)

- After completing your code, answer the questions listed in `answers.txt`.

### Extra Features (5 bonus points)

Implement any additional features specified in HW2.

## Submission Guidelines

Your repository should include:

1. All files necessary to run your application.
2. An `answers.txt` file containing your answers to the specified questions.

Please do NOT push `node_modules` to your repository. To avoid this, do NOT delete, or remove `node_modules` from, `.gitignore`.
