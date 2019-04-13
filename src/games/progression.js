import engine from '..';
import random from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const prepareData = () => {
  const diff = random(0, 10);
  const begin = random(0, 20);
  const sequence = [];
  let quest = '';
  const missingElementPos = random(0, progressionLength);
  let missingElement = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingElementPos) {
      sequence[i] = '..';
      missingElement = begin + diff * i;
    } else {
      sequence[i] = begin + diff * i;
    }
    quest += ` ${sequence[i]}`;
  }

  const data = {
    question: quest,
    answer: missingElement,
  };

  return data;
};

export default () => engine(description, prepareData);
