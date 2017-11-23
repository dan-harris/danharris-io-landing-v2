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

class ChatBox extends Component {
  render() {
    return (
      <Wrapper>
        <ChatBoxLine>What do you call a belt made of watches?</ChatBoxLine>
        <ChatBoxLine>…</ChatBoxLine>
        <ChatBoxLine>A waist of time.</ChatBoxLine>
        <ChatBoxInput />
      </Wrapper>
    );
  }
}

export default ChatBox;
