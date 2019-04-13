import readlineSync from 'readline-sync';
import engine from '..';

const rules = 'Find the greatest common divisor of given numbers.';
const numberOfRounds = 3;

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  for (let i = 0; i <= numberOfRounds; i += 1) {
    const randomNumbers = getTwoRandomNumbers();

    const a = randomNumbers[0];
    const b = randomNumbers[1];

    let correctAnswer = a > b ? b : a;

    const question = [];

    const condition = (a % correctAnswer === 0) && (b % correctAnswer === 0);

    while (!condition) {
      correctAnswer += 1;
    }

    question[0] = `${a} ${b}`;
    question[1] = correctAnswer;

    console.log(`Question: ${a} ${b}`);
    const usersAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    const hasWon = (isAnswerCorrect(correctAnswer, usersAnswer));

    if (!hasWon) {
      break;
    } else if (hasWon && i === (numberOfRounds - 1)) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default () => engine(rules, gcd);
