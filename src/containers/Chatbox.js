import React, { Component } from "react";
import styled from "styled-components";
// app imports
import ChatBoxInput from "../components/ChatboxInput";
import { getDadJokes } from "../api/Reddit";

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

// max length constants
const MAX_QUESTION_CHAR_LENGTH = 43;
const MAX_ANSWER_CHAR_LENGTH = 43;
// default joke for display
const DEFAULT_JOKE = {
  question: "What do you call a belt made of watches?",
  answer: "A waist of time."
};

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
    // fetch data & set state on component mount
    this.setDadJokes();
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

  setDadJokes() {
    // get dad jokes from API
    getDadJokes()
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
        let joke = DEFAULT_JOKE;

        // use the random one if we have it
        if (randomJoke && randomJoke.data && randomJoke.data.title)
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
