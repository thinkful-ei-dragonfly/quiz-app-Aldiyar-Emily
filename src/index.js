import $ from 'jquery';
import Quiz from './Quiz';


function main() {
  const q = new Quiz();
  // const quizDisplay = new QuizDisplay(q, )
  window.q = q;  // adding `q` to `window`, so you can examine it in console
}

$(main);

