import engine from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0 ? true : false;

const prepareData = () => {
  const randomNumber = random(0, 10);
  console.log('1');

  const correctAnswer = isEven(randomNumber);

  const data = {
    question: randomNumber,
    answer: correctAnswer,
  };

  return data;
};

export default () => engine(rules, prepareData);
