import engine from '..';
import random from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const prepareData = () => {
  const firstElement = random(0, 10);
  const step = random(0, 10);
  const positionOfMissingElement = random(0, progressionLength - 1);

  const getQuestion = () => {
    const iteration = (counter, progression) => {
      if (counter === progressionLength) {
        return progression;
      }
      const element = (counter === positionOfMissingElement) ? '..' : firstElement + counter * step;
      return iteration(counter + 1, `${progression} ${element}`);
    };
    return iteration(0, '');
  };

  const questionToShow = getQuestion();
  const missingElement = String(firstElement + positionOfMissingElement * step);

  return {
    question: questionToShow,
    answer: missingElement,
  };
};

export default () => engine(description, prepareData);
