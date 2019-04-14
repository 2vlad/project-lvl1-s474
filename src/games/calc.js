import engine from '..';
import random from '../utils';

const description = 'What is the result of the expression?';

const prepareData = () => {
  const a = random(0, 10);
  const b = random(0, 10);

  const minMarkValue = 1;
  const maxMarkValue = 3;

  const markValue = Math.floor(Math.random() * (maxMarkValue - minMarkValue)) + minMarkValue;
  let mark = '';
  let correctAnswer = 0;

  switch (markValue) {
    case 1:
      mark = '+';
      correctAnswer = a + b;
      break;
    case 2:
      mark = '-';
      correctAnswer = a - b;
      break;
    default:
      mark = '*';
      correctAnswer = a * b;
      break;
  }
  correctAnswer = correctAnswer.toString();
  const quest = `${a} ${mark} ${b}`;

  const data = {
    question: quest,
    answer: correctAnswer,
  };

  return data;
};

export default () => engine(description, prepareData);
