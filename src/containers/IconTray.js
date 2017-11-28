import React, { Component } from "react";
import styled from "styled-components";
import {
  Twitter,
  LinkedinOption,
  Medium,
  MailOption,
  Github
} from "grommet-icons";
// app imports
import { media } from "../containers/LandingApp.theme";

// styled directives
const Wrapper = styled.div`
  margin: ${props => props.theme.padding}rem 0;
  display: flex;
  justify-content: space-between;

  ${media.xs`
    padding: 0 0;    
  `};

  ${media.md`
    padding: 0 ${props => props.theme.padding}rem;
  `};
`;

class IconTray extends Component {
  render() {
    return (
      <Wrapper>
        <Twitter size="large" />
        <LinkedinOption size="large" />
        <Medium size="large" />
        <Github size="large" />
        <MailOption size="large" />
      </Wrapper>
    );
  }
}

export default IconTray;
