class TriviaApi {
  base_URL = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';
  callFetch(base_URL) {
    return fetch(this.base_URL)
      .then(results => {
        return results.json();
      });
  }


}



export default TriviaApi;
