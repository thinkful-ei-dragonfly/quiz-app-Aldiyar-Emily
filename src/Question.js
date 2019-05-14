class Question {
  constructor(apiText, apiAnswers, apiCorrect) {
    this.text = apiText;
    this.answer = apiAnswers;
    this.correctAnswer = apiCorrect;
    this.userAnswer = null;
  }

  submitAnswer(userInput) {
    this.userAnswer = userInput;
  }

  answerStatus() {
    if (this.userAnswer === null) {
      return -1;
    }
    if (this.userAnswer === this.correctAnswer) {
      return 1;
    }
    if (this.userAnswer !== this.correctAnswer) {
      return 0;
    } 

  }


}

// const question1 = new Question();

export default Question;
