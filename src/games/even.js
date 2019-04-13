import engine from '..';
import random from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const prepareData = () => {
  const quest = random(0, 10);
  const correctAnswer = isEven(quest) ? 'yes' : 'no';

  const data = {
    question: quest,
    answer: correctAnswer,
  };

  return data;
};

export default () => engine(description, prepareData);
