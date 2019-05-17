'use strict';

import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
    template() {
        let currentProgress = `${this.model.asked.length} out of ${this.model.asked.length+this.model.unasked.length}`;
        let maxNum = Math.max(...this.model.scoreHistory);

        if (this.model.unasked.length === 0) {
          currentProgress='Inactive';
        }


        return `
      <div>
        <span>Score :${this.model.score}</span>
        <span>High Score: ${maxNum}</span>
        <span>Progress: ${currentProgress}</span> 
      </div>
    `;
    }
}

export default QuizStatus;

