import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path={["/home", "/"]}>
          <Navbar
            brandLink={"a"}
          />
          <Home />
        </Route>
        <Route exact path="/projects">
          <Navbar
            brandLink={"link"}
          />
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Navbar
            brandLink={"link"}
          />
          <Contact />
        </Route>
        <Route path="*">
          <Navbar
            brandLink={"link"}
          />
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
