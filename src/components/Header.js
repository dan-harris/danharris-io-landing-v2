import React, { Component } from "react";
import styled from "styled-components";
// app imports
// assets
import profileImage from "../assets/profile-image.png";

// styled directives
const ProfileImage = styled.img`
  height: 100%;
  max-height: 70px;
  border-radius: 50%;
  border: 2px solid;
`;

class Header extends Component {
  render() {
    return (
      <div>
        <ProfileImage src={profileImage} alt="logo" />
        <h1>danharris.io</h1>
      </div>
    );
  }
}

export default Header;
