import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  )
}

export default App
