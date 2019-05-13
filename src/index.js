import $ from 'jquery';
import Quiz from './Quiz';
import TriviaApi from './TriviaApi';
import Question from './Question';

function main() {
  const q = new Quiz();
  const t = new TriviaApi();
  const a = new Question();

  // t.callFetch()
  //   .then(results => results.json())
  //   .then(resultsJson => return(resultsJson.question)); 
  window.q = q;  // adding `q` to `window`, so you can examine it in console
}

$(main);

