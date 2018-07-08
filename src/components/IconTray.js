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

// links for icons
const TWITTER_LINK = "https://twitter.com/danharris_io";
const GITHUB_LINK = "https://github.com/dan-harris";
const MEDIUM_LINK = "https://medium.com/@danharris_io";
const LINKEDIN_LINK = "https://www.linkedin.com/in/dan-harris";

// styled directives
// layout wrapper
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.xs`
    padding: 0 0;    
    margin: ${props => props.theme.padding * 0.8}rem 0;
  `};

  ${media.md`
    padding: 0 ${props => props.theme.padding}rem;
    margin: ${props => props.theme.padding}rem 0;
  `};
`;

// grommet icon wrapper with link
const IconLink = styled.a`
  opacity: 0.1;

  &:hover {
    opacity: 0.9;
  }

  ${media.xs`
    height: 1.75rem;
    width: 1.75rem;    
  `};

  ${media.md`
    height: 3rem;
    width: 3rem;   
  `};
`;

class IconTray extends Component {
  render() {
    return (
      <Wrapper>
        <IconLink href={TWITTER_LINK} target="_blank">
          <Twitter size="large" />
        </IconLink>
        <IconLink href={LINKEDIN_LINK} target="_blank">
          <LinkedinOption size="large" />
        </IconLink>
        <IconLink href={MEDIUM_LINK} target="_blank">
          <Medium size="large" />
        </IconLink>
        <IconLink href={GITHUB_LINK} target="_blank">
          <Github size="large" />
        </IconLink>
        <IconLink href={LINKEDIN_LINK} target="_blank">
          <MailOption size="large" />
        </IconLink>
      </Wrapper>
    );
  }
}

export default IconTray;
