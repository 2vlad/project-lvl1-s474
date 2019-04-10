#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askName = () => {
  greeting();
};

const isEven = (number) => {
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const takeNumber = (typeOfGame) => {
  const min = Math.ceil(1);
  const max = Math.floor(10);

  let question = '';
  let correctAnswer = '';
  if (typeOfGame === 'brainEven') {
    question = Math.floor(Math.random() * (max - min)) + min;
    correctAnswer = isEven(question);
  } else if (typeOfGame === 'brainCalc') {
    const firstNumber = Math.floor(Math.random() * (max - min)) + min;
    const secondNumber = Math.floor(Math.random() * (max - min)) + min;

    const minMarkValue = 1;
    const maxMarkValue = 3;
    correctAnswer = 0;
    const markValue = Math.floor(Math.random() * (maxMarkValue - minMarkValue)) + minMarkValue;
    let mark = '';

    if (markValue === 1) {
      mark = '+';
      correctAnswer = firstNumber + secondNumber;
    } else if (markValue === 2) {
      mark = '-';
      correctAnswer = firstNumber - secondNumber;
    } else if (markValue === 3) {
      mark = '*';
      correctAnswer = firstNumber * secondNumber;
    }

    question = [`${firstNumber} ${mark} ${secondNumber}`, correctAnswer];
  }

  return question;
};

const wheatherAnswerIsCorrect = (correctAnswer, answer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  }
};

const playThreeRounds = (typeOfGame, name) => {
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    let [question] = [];

    if (typeOfGame === 'brainCalc') {
      question = takeNumber('brainCalc');
    } else if (typeOfGame === 'brainEven') {
      question = takeNumber('brainEven');
    }

    console.log(`Question: ${question[0]}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    wheatherAnswerIsCorrect(question[1], usersAnswer);

    if (!wheatherAnswerIsCorrect(question[1], usersAnswer)) {
      break;
    } else if (wheatherAnswerIsCorrect(question[1], usersAnswer) && i === numberOfRounds) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const brainCalc = () => {
  console.log('What is the result of the expression?');
  const name = greeting();

  playThreeRounds('brainCalc', name);
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = greeting();

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = takeNumber('brainEven');
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question);

    if (!wheatherAnswerIsCorrect(correctAnswer, usersAnswer)) {
      break;
    } else if (wheatherAnswerIsCorrect(correctAnswer, usersAnswer) && i === numberOfRounds) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { askName, brainEven, brainCalc };
