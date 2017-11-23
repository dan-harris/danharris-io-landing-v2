import React, { Component } from "react";
import styled from "styled-components";
// app imports
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
  max-height: 70px;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.color.primary};
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  color: ${props => props.theme.color.accent2};
  float: right;
  margin: 0;
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
