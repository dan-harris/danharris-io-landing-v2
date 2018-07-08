import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
// app imports
import LandingApp from "./containers/LandingApp";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// render app
ReactDOM.render(<LandingApp />, document.getElementById("root"));

// register service worker
registerServiceWorker();

// initialise google analytics
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname);
