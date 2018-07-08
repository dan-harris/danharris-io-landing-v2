import React, { Component } from "react";
import styled from "styled-components";
// app imports
import { media } from "../containers/LandingApp.theme";
// assets
import profileImage from "../assets/profile-image.png";

// styled directives
const Wrapper = styled.div`
  max-width: 345px;
`;
const TitleWrapper = styled.div`
  display: inline-block;
  padding-left: ${props => props.theme.padding * 0.25}rem;
`;
const ProfileImage = styled.img`
  height: 100%;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.color.primary};

  ${media.xs`
    max-height: 30px;
    margin-bottom: .4rem;
  `};

  ${media.md`
    max-height: 70px;
    margin-bottom: inherit;
  `};
`;
const Title = styled.h1`
  font-weight: 500;
  color: ${props => props.theme.color.accent2};
  float: right;
  margin: 0;

  ${media.xs`
    font-size: 2.5rem;
  `};

  ${media.md`
    font-size: 3rem;
  `};
`;
const TitlePrimaryColor = styled.span`
  color: ${props => props.theme.color.primary};
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <ProfileImage src={profileImage} alt="logo" />
        <TitleWrapper>
          <Title>
            <TitlePrimaryColor>danharris</TitlePrimaryColor>.io
          </Title>
        </TitleWrapper>
      </Wrapper>
    );
  }
}

export default Header;
