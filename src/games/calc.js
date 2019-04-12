import readlineSync from 'readline-sync';
import { greeting, wheatherAnswerIsCorrect, takeNumber } from '..';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const name = greeting();

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    let [question] = [];

    question = takeNumber('brainCalc');

    console.log(`Question: ${question[0]}`);
    const usersAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    const hasWon = (wheatherAnswerIsCorrect(question[1], usersAnswer));

    if (!hasWon) {
      break;
    } if (hasWon && i === (numberOfRounds - 1)) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default calc;
