import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "react-flexa";
// app imports
// theme for landing app
import theme from "./LandingApp.theme";
// components
import Header from "../components/Header";
// containers
import ChatBox from "./Chatbox";
import IconTray from "./IconTray";

// styled directives - layout wrappers
const Wrapper = styled(Row)`
  height: 100%;
  max-width: 100%;
  color: ${props => props.theme.color.accent1};
`;
const InnerWrapper = styled.div`
  width: 700px;
`;

// main app component
class LandingApp extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <InnerWrapper>
            <Col>
              <Header />
            </Col>
            <Col>
              <ChatBox />
            </Col>
            <Col>
              <IconTray />
            </Col>
          </InnerWrapper>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default LandingApp;
