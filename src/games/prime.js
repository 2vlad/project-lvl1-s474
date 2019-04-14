import engine from '..';
import random from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prepareData = () => {
  const number = random(0, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: number,
    answer: correctAnswer,
  };
};

export default () => engine(description, prepareData);
