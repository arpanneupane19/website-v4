import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path={["/home", "/"]}>
            <Navbar brandLink={"a"} />
            <Home />
          </Route>
          <Route exact path="/projects">
            <Navbar brandLink={"link"} />
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Navbar brandLink={"link"} />
            <Contact />
          </Route>
          <Route path="*">
            <Navbar brandLink={"link"} />
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </HttpsRedirect>
  );
}

export default App;
