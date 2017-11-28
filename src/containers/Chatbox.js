import React, { Component } from "react";
import styled from "styled-components";
// app imports
import ChatBoxInput from "../components/ChatboxInput";

// styled directives
const Wrapper = styled.div`
  margin: ${props => props.theme.padding}rem 0
    ${props => props.theme.padding * 1.5}rem;
`;
const ChatBoxLine = styled.p`
  font-size: 2rem;
  font-weight: 100;
  margin: ${props => props.theme.padding * 0.125}rem 0;
`;

// url to retrive data from
const DAD_JOKES_URL = "https://www.reddit.com/r/dadjokes/hot.json?limit=20";

// max length constants
const MAX_QUESTION_CHAR_LENGTH = 43;
const MAX_ANSWER_CHAR_LENGTH = 43;

class ChatBox extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      joke: {
        question: null,
        answer: null
      }
    };
  }

  componentDidMount() {
    // fetch data on component mount
    this.fetchDadJokes();
  }

  render() {
    return (
      <Wrapper>
        <ChatBoxLine>{this.state.joke.question || "…"}</ChatBoxLine>
        <ChatBoxLine>…</ChatBoxLine>
        <ChatBoxLine>{this.state.joke.answer || "…"}</ChatBoxLine>
        <ChatBoxInput />
      </Wrapper>
    );
  }

  fetchDadJokes() {
    // fetch data from r/dadjokes
    fetch(DAD_JOKES_URL)
      // convert result to json
      .then(results => results.json())
      // get the array of posts data
      .then(resultsJson => resultsJson.data.children)
      // filter array so only those with correct length question/answers are available
      .then(resultsArray =>
        resultsArray.filter(
          joke =>
            joke.data.title.length < MAX_QUESTION_CHAR_LENGTH &&
            joke.data.selftext.length < MAX_ANSWER_CHAR_LENGTH
        )
      )
      // return a random joke
      .then(
        filteredResultsArray =>
          filteredResultsArray[
            Math.floor(Math.random() * filteredResultsArray.length)
          ]
      )
      // set state
      .then(randomJoke => {
        // default joke
        let joke = {
          question: "What do you call a belt made of watches?",
          answer: "A waist of time."
        };

        // use the random one if we have it
        if (randomJoke)
          joke = {
            question: randomJoke.data.title,
            answer: randomJoke.data.selftext
          };

        // set the joke in state
        this.setState({
          joke
        });
      });
  }
}

export default ChatBox;
