import React, { Component } from "react";
import styled from "styled-components";
// app imports

// styled directives
const Wrapper = styled.div`
  margin: ${props => props.theme.padding}rem 0;
`;

class IconTray extends Component {
  render() {
    return <Wrapper>IconTray</Wrapper>;
  }
}

export default IconTray;
