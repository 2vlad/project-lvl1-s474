#!/usr/bin/env node
import readlineSync from 'readline-sync';

// ask name game
const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// guess the number game
const takeNumber = () => {
  const variatyOfNumbers = 10;
  const num = Math.floor(Math.random() * variatyOfNumbers);
  return num;
};

const wheatherAnswerIsCorrect = (number, answer) => {
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  }
};

const brainEven = () => {
  // grteeting
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  // asking name
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i += 1) {
    // taking number
    const numberToGuess = takeNumber();
    console.log(`Question: ${numberToGuess}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (!wheatherAnswerIsCorrect(numberToGuess, usersAnswer)) {
      break;
    }

    if (wheatherAnswerIsCorrect(numberToGuess, usersAnswer) && i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { askName, brainEven };
