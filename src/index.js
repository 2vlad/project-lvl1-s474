import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (rules, prepareData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  const name = readlineSync.question('May I have your name? :) ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const data = prepareData();
    console.log(`Question: ${data.question}!`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (data.answer === parseInt(usersAnswer, 10)) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${data.answer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
