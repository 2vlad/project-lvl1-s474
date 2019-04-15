import engine from '..';
import random from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const prepareData = () => {
  const question = random(0, 10);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => engine(description, prepareData);
