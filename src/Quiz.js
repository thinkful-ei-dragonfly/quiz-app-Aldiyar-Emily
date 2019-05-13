import Question from './Question';
import TriviaApi from './TriviaApi';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    this.api = new TriviaApi();
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;

    // TASK: Add more props here per the exercise

  }

  // Example method:
  startGame() {
    this.active = true;
    this.api.callFetch()
      .then(response => {
        // console.log(response.results[0].question);
        response.results.forEach(questionData => {
          questionData.incorrect_answers.push(questionData.correct_answer);

          // console.log(questionData);
          const question = new Question(questionData.question,questionData.incorrect_answers,questionData.correct_answer);
          // console.log(question);
          this.unasked.push(question);
        });
        console.log(this.unasked);
      });
  }
}

    
  

export default Quiz;
