// fetch 'jokes' data from r/dadjokes
export const getDadJokes = () =>
  fetch(process.env.REACT_APP_REDDIT_DAD_JOKES_URL)
    // convert result to json
    .then(results => results.json())
    // get the array of posts data
    .then(resultsJson => resultsJson.data.children);
