class TriviaApi {
  base_URL = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';
  callFetch() {
    let error;
    return fetch(this.base_URL)
      .then(results => {
        if (results.response_code = 0) {
          return results.json()
        }
  })
  }


}



export default TriviaApi;
