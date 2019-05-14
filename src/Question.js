class Question {
  constructor(apiText, apiAnswers, apiCorrect) {
    this.text = apiText;
    this.answer = apiAnswers;
    this.correctAnswer = apiCorrect;
    this.userAnswer = null;
    this.answerStatus = -1;
  }

  submitAnswer(userInput) {
    this.userAnswer = userInput;
  }

  answerStatus() {
    if (this.userAnswer === this.correctAnswer) {
      this.answerStatus = 1;
    } else if (this.userAnswer !== this.correctAnswer) {
      this.answerStatus = 0;
    }
    return this.answerStatus;
  }


}

const question1 = new Question();

export default Question;
