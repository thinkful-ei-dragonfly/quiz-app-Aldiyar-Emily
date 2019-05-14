import $ from 'jquery';
import Quiz from './Quiz';



function main() {
  const quiz = new Quiz();
  const quizDisplay = new QuizDisplay(quiz, '.display');
  const quizStatus = new QuizStatus(quiz, '.status');
  // const quizDisplay = new QuizDisplay(q, )
  window.quiz = quiz;  // adding `q` to `window`, so you can examine it in console
}

$(main);

