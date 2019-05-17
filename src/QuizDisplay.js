'use strict';

import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
    getEvents() {
        return {
          'click .start-quiz': 'handleStart',
          'submit form': 'handleSubmitAnswer',
          'click .next-question': 'handleNextQuestion',
          'click .start-new': 'handleRestart',
        };
    }

    _generateIntro() {
        return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
    }
  
    _generateQuestionPage() {
      const answer = this.model.asked[this.model.asked.length-1].answer.map(ans => {
        return `<input type='radio' name='answer' id='${ans}' value='${ans}' required/><label for='${ans}'>${ans}</label>`;
      }).join('');
      const text = this.model.asked[this.model.asked.length-1].text;
  
      return `
        <div>
        <h2>${text}</h2>
        <form>
          ${answer}
          <button type='submit' class='submit-answer'>Submit Answer</button>
        </form>  
        
      `;
    }
  _generateCorrectAnswerPage() {
    const text = this.model.asked[this.model.asked.length - 1].text;
    const correctAns = this.model.asked[this.model.asked.length - 1].correctAnswer;
    return `
      <div>
        <h2>${text}</h2>
        <h3>You got it!</h3>
        <h3>The correct answer was:</h3>
        <h4>${correctAns}</h4>
        <button class='next-question'>Next question</button>
      </div>`;
  }
  
  _generateIncorrectAnswerPage() {
    const text = this.model.asked[this.model.asked.length - 1].text;
    const correctAns = this.model.asked[this.model.asked.length - 1].correctAnswer;
    const userAns = this.model.asked[this.model.asked.length - 1].userAnswer;
    return `
      <div>
        <h2>${text}</h2>
        <h3>Sorry, that is incorrect</h3>
        <h3>Your answer is:</h3>
        <h4>${userAns}</h4>
        <h3>The correct answer was:</h3>
        <h4>${correctAns}</h4>
        <button class='next-question'>Next question</button>
      </div>`;
  }
  
  _generateFinish() {
    return `
    <h2>Good Job</h2>
    <h3>Your score was ${this.model.score} out of 5</h3>
    <button class='start-new'>Start Again</button>
    `;
  }

    template() {
      let html = '';
      console.log(this.model);
      const currentQ = this.model.asked[this.model.asked.length - 1];

        if (this.model.asked.length === 0) {
            // Quiz has not started
            html = this._generateIntro();
        } else if (this.model.asked.length === 5) {
          html = this._generateFinish();
        } else if (this.model.asked.length > 0 && currentQ.userAnswer === null) {
          html = this._generateQuestionPage();
        } else if (currentQ.userAnswer === currentQ.correctAnswer) {
          html = this._generateCorrectAnswerPage();
        } else if (currentQ.userAnswer !== currentQ.correctAnswer ) {
          html = this._generateIncorrectAnswerPage();
        }


        return html;
    }

    handleStart(event) {
      this.model.startGame();
    }
  
    handleNextQuestion() {
      this.model.askQuestion();
    }
  
    handleSubmitAnswer(event) {
      event.preventDefault();
      console.log(event.target.answer.value);
      this.model.submitAnswer(event.target.answer.value);
    }

    handleRestart() {
      this.model.reset();
    }
}





export default QuizDisplay;
