'use strict';

import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
    getEvents() {
        return {
          'click .start-quiz': 'handleStart',
          'click .submit-answer': 'handleSubmitAnswer',
          'click .next-question': 'handleNextQuestion',
          // 'click .start-new': 'handleStart,'
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
        return `<input type='radio' name='answer' id='${ans}' value='${ans}' /><label for='${ans}'>${ans}</label>`;
      }).join('');
      const text = this.model.asked[this.model.asked.length-1].text;
  
      return `
        <div>
        <h2>${text}</h2>
        <form>
          ${answer}
        </form>  
        <button class='submit-answer'>Submit Answer</button>
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
  
  // _generateResultPage() {
  //   return `
  //   <h2>Good Job</h2>
  //   <h3>your score was ${this.model.score} out of 5</h3>
  //   <button class='start-new'>Start Again</button>
  //   `;
  // }

    template() {
      let html = '';
      console.log(this.model);

        if (this.model.asked.length === 0) {
            // Quiz has not started
            html = this._generateIntro();
        }
        if (this.model.asked.length > 0) {
          html = this._generateQuestionPage();
        }
        if (this.model.asked.question)
      // if (this.model.unasked.length === 0) {
      //   html = this._generateResutPage();
      //   }

        return html;
    }

    handleStart() {
      this.model.startGame();
    }
  
    handleNextQuestion() {
      this.model.askQuestion();
    }
  
    handleQuestionSubmit() {
      this.model.submitAnswer();
    }
}





export default QuizDisplay;
