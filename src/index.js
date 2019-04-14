import readlineSync from 'readline-sync';

const roundsNumber = 3;

export default (description, prepareData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const name = readlineSync.question('May I have your name? :) ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < roundsNumber; i += 1) {
    const data = prepareData();
    console.log(`Question: ${data.question}!`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (data.answer === usersAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${data.answer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
