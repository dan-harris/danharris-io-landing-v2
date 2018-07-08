import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "react-flexa";
// app imports
import { media } from "../containers/LandingApp.theme";
// theme for landing app
import theme from "./LandingApp.theme";
// components
import Header from "../components/Header";
import IconTray from "../components/IconTray";

// styled directives
// layout wrappers
const Wrapper = styled(Row)`
  height: 100%;
  max-width: 100%;
  color: ${props => props.theme.color.white};

  ${media.xs`
    margin-left: 10px;
    margin-right: 10px;    
  `};
`;
const InnerWrapper = styled(Col)`
  margin: auto auto;

  ${media.md`
    width: 700px;
  `};
`;

// main app component
class LandingApp extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper
          justifyContent={{ xs: "center" }}
          alignContent={{ xs: "center" }}
          alignItems={{ xs: "center" }}
          flexDirection={{ xs: "column" }}
          display={{ xs: "flex" }}
        >
          <InnerWrapper>
            <Col>
              <Header />
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
