import engine from '..';
import random from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const prepareData = () => {
  const a = random(1, 10);
  const b = random(1, 10);

  let cd = 0;
  let gcd = 0;

  if (a < b) {
    while (cd <= a) {
      cd += 1;
      if ((a % cd === 0) && (b % cd === 0)) {
        gcd = cd;
      }
    }
  } else if (b <= a) {
    while (cd <= b) {
      cd += 1;
      if ((a % cd === 0) && (b % cd === 0)) {
        gcd = cd;
      }
    }
  }

  const data = {
    question: `${a} ${b}`,
    answer: gcd,
  };

  return data;
};

export default () => engine(rules, prepareData);
