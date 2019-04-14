import engine from '..';
import random from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => {
  let cd = 0;
  let gcd = 0;

  if (first < second) {
    while (cd <= first) {
      cd += 1;
      if ((first % cd === 0) && (second % cd === 0)) {
        gcd = cd;
      }
    }
  } else if (second <= first) {
    while (cd <= second) {
      cd += 1;
      if ((first % cd === 0) && (second % cd === 0)) {
        gcd = cd;
      }
    }
  }

  return gcd;
};

const prepareData = () => {
  const first = random(1, 10);
  const second = random(1, 10);

  const gcd = getGCD(first, second).toString();
  const quest = `${first} ${second}`;

  const data = {
    question: quest,
    answer: gcd,
  };

  return data;
};

export default () => engine(description, prepareData);
