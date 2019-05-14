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

  askQuestion() {
    if (this.unasked.length > 0) {
      this.asked.push(this.unasked[0]);
      this.unasked.shift();
    } else {
      this.scoreHistory = this.score;
      this.active = !this.active;
    }
  }

  submitAnswer() {
    question.submitAnswer(userInput);
    question.answerStatus();
    this.score = question.answerStatus();
  }


}
    
  

export default Quiz;
