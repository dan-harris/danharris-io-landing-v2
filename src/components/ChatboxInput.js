import React, { Component } from "react";
import styled from "styled-components";
import { Play } from "grommet-icons";
// app imports

// styled directives
const Wrapper = styled.div`
  margin-top: ${props => props.theme.padding}rem;
  display: flex;
`;
const Input = styled.input`
  font-size: 2rem;
  font-family: inherit;
  font-weight: 100;
  color: ${props => props.theme.color.accent2};
  width: 100%;
  border: 3px solid ${props => props.theme.color.primary};
  border-right-width: 0;
  padding: ${props => props.theme.padding * 0.125}rem;
  &::placeholder {
    opacity: 0.4;
  }
`;
const InputButton = styled.button`
  border: 3px solid ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.primary};
  width: 45px;
  height: 52px;
  cursor: pointer;
  transition: 0.2s filter linear, 0.2s -webkit-filter linear;
  &:hover {
    filter: brightness(85%);
  }
`;

class ChatBoxInput extends Component {
  constructor() {
    super();
    this.state = { disabled: true };
  }

  render() {
    return (
      <Wrapper>
        <Input
          type="text"
          placeholder="Interactivity coming soon..."
          disabled={this.state.disabled}
        />
        <InputButton disabled={this.state.disabled}>
          <Play color="inverse" />
        </InputButton>
      </Wrapper>
    );
  }
}

export default ChatBoxInput;
