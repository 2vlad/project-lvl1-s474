import engine from '..';

const rules = 'What is the result of the expression?';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

  const data = {
    question: `${a} ${mark} ${b}`,
    answer: correctAnswer,
  };

  return data;
};

export default () => engine(rules, prepareData());
