import engine from '..';
import random from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => {
  let cd = 0;
  let divisor = 0;

  if (first < second) {
    while (cd <= first) {
      cd += 1;
      if ((first % cd === 0) && (second % cd === 0)) {
        divisor = cd;
      }
    }
  } else if (second <= first) {
    while (cd <= second) {
      cd += 1;
      if ((first % cd === 0) && (second % cd === 0)) {
        divisor = cd;
      }
    }
  }

  return divisor;
};

const prepareData = () => {
  const first = random(1, 10);
  const second = random(1, 10);

  const divisor = getGCD(first, second).toString();
  const quest = `${first} ${second}`;

  const data = {
    question: quest,
    answer: divisor,
  };

  return data;
};

export default () => engine(description, prepareData);
