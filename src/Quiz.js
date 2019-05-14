import Question from './Question';
import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    super();
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
        this.asked.push(this.unasked[0]);
        this.unasked.shift();
        this.update();
        console.log(window.quiz);
      });
  }

  askQuestion() {
    if (this.unasked.length > 0) {
      this.asked.push(this.unasked[0]);
      this.unasked.shift();
      this.update();
    } else {
      this.scoreHistory.push(this.score);
      this.active = false;
      this.update();
    }
    console.log(this.unasked);
    console.log(this.asked);
    console.log(this.scoreHistory);
  }

  submitAnswer(userInput) {
    let question = this.asked[this.asked.length-1];
    question.userAnswer = userInput;
    if (question.answerStatus() === 1) {
      this.score += 1;
      this.update();
    }
    console.log(question);
  }


}
    
  

export default Quiz;
