import React, { Component } from "react";
import styled from "styled-components";
// app imports
import { media } from "../containers/LandingApp.theme";
// assets
import profileImage from "../assets/profile-image.png";

// styled directives

// layout wrapper
const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
`;

// title outer wrapper
const TitleWrapper = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: flex-end;
`;

// mugshot picture
const ProfileImage = styled.img`
  height: 100%;
  border-radius: 50%;

  ${media.xs`
    max-height: 4rem;
    margin-bottom: .4rem;
  `};

  ${media.md`
    max-height: 10rem;
    margin-bottom: inherit;
  `};
`;

// title
const Title = styled.h1`
  font-weight: 500;
  color: ${props => props.theme.color.white};
  float: right;
  margin: 0;
  margin-bottom: 1rem;

  ${media.xs`
    font-size: 2rem;
  `};

  ${media.md`
    font-size: 5rem;
  `};
`;
const TitleSubColor = styled.span`
  opacity: 0.2;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <ProfileImage src={profileImage} alt="logo" />
        <TitleWrapper>
          <Title>
            danharris<TitleSubColor>.io</TitleSubColor>
          </Title>
        </TitleWrapper>
      </Wrapper>
    );
  }
}

export default Header;
