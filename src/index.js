import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? :) ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const isEven = (number) => {
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

export const takeNumber = (typeOfGame) => {
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

export const wheatherAnswerIsCorrect = (correctAnswer, answer) => {
  let res = true;
  if (answer === correctAnswer) {
    res = true;
    console.log('Correct!');
  } else {
    res = false;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return res;
};
