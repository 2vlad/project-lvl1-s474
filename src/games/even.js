import readlineSync from 'readline-sync';
import {
  greeting,
  takeNumber,
  wheatherAnswerIsCorrect,
  isEven,
} from '..';

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = greeting();

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = takeNumber('brainEven');
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question);
    const hasWon = (wheatherAnswerIsCorrect(correctAnswer, usersAnswer));

    if (!hasWon) {
      break;
    } else if (hasWon && i === (numberOfRounds - 1)) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default even;
