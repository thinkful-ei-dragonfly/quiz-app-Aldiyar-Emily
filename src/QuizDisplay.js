'use strict';

import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
    getEvents() {
        return {
          'click .start-quiz': 'handleStart',
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
      return `<input type='radio' name='answer' id='js-answer' value='${ans}' /><label for='js-answer'>${ans}</label>`;
    }).join('');
    const text = this.model.asked[this.model.asked.length-1].text;
  
    return `
      <div>
      <p>${text}<p>
      <form>
        ${answer}
      </form>  
      <button class='next-question'>Submit Answer</button>
    `;
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
}





export default QuizDisplay;
