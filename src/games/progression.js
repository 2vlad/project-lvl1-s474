import engine from '..';
import random from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const prepareData = () => {
  const diff = random(0, 10);
  const begin = random(0, 20);
  const progression = [];
  let questionToShow = '';
  const missingElementPos = random(0, progressionLength);
  let missingElement = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingElementPos) {
      progression[i] = '..';
      missingElement = begin + diff * i;
    } else {
      progression[i] = begin + diff * i;
    }
    questionToShow += ` ${progression[i]}`;
  }

  missingElement = missingElement.toString();

  return {
    question: questionToShow,
    answer: missingElement,
  };
};

export default () => engine(description, prepareData);
