import React from "react";
import { hydrate, render } from "react-dom";
import ReactGA from "react-ga";
// app imports
import LandingApp from "./containers/LandingApp";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// render app
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  // give a nice 'fade in' effect to page content
  rootElement.style.opacity = "1";
  // hydrate the react app (mostly useless at the moment TODO: dynamic api calls for fun)
  hydrate(<LandingApp />, rootElement);
  // register service worker
  registerServiceWorker();
} else {
  render(<LandingApp />, rootElement);
}

// initialise google analytics
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname);
