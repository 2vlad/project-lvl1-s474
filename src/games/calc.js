import engine from '..';
import random from '../utils';

const description = 'What is the result of the expression?';

const prepareData = () => {
  const a = random(0, 10);
  const b = random(0, 10);

  const elements = [
    (x, y) => ({ answer: String(x + y), question: `${x} + ${y}` }),
    (x, y) => ({ answer: String(x - y), question: `${x} - ${y}` }),
    (x, y) => ({ answer: String(x * y), question: `${x} * ${y}` }),
  ];

  const questionAndAnswer = elements[random(0, elements.length - 1)](a, b);
  const { question, answer } = questionAndAnswer;

  return {
    question,
    answer,
  };
};

export default () => engine(description, prepareData);
