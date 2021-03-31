import React from 'react';
import './Main.css';
import { Navbar, Nav, NavDropdown, ButtonGroup, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaGithub, FaAndroid, FaApple, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import Typed from 'react-typed';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'react-vertical-timeline-component/style.min.css';
import Contact from './Contact'
import Experience from './Experience'
import Projects from './Projects'


const Main = () => {
  const homeIconSize = 23


  const Nothing = () => {
    return <><h3 className="subtitle">Nothing to show yet :)</h3></>
  }

  const Home = () => {
    return (
      <>
        <img alt="" className="avatar" src="http://masesk.com/mases.jpg" />
        <div className="title">Mases Krikorian</div>
        <div className="subtitle">Software Engineer</div>
        <Typed
          strings={[
            "Java",
            "C++",
            "C#",
            "Python",
            "Swift",
            "JavaScript",
            "ReactJS",
            "React Native"
          ]}
          className="subtitle"
          typeSpeed={100}
          backSpeed={50}
          loop
        />
        <div className="buttons">
          <ButtonGroup toggle className="mb-2">
            <Button
              variant="dark"
              href="https://facebook.com/maseskrikorian"
              target="_blank"
            >
              <FaFacebook size={homeIconSize} />
            </Button >
            <Button
              variant="dark"
              href="https://twitter.com/mases5k"
              target="_blank"
            >
              <FaTwitter size={homeIconSize} />
            </Button>
            <Button
              variant="dark"
              href="https://github.com/masesk"
              target="_blank"
            >

              <FaGithub size={homeIconSize} />
            </Button>
            <Button
              variant="dark"
              href="https://www.linkedin.com/in/maseskrikorian"
              target="_blank"
            >

              <FaLinkedinIn size={homeIconSize} />
            </Button>
            <Button
              variant="dark"
              href="https://play.google.com/store/apps/developer?id=Mases+Krikorian"
              target="_blank"
            >

              <FaAndroid size={homeIconSize} />
            </Button>
            <Button
              variant="dark"
            >

              <FaApple size={homeIconSize} />
            </Button>
          </ButtonGroup>

        </div>
      </>
    )

  }
  return (

    <>

      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">MK</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <NavDropdown title="Research" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/ai">AI/ML</NavDropdown.Item>
                <NavDropdown.Item href="/slam">SLAM</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>

          <Route path="/experience">
            <div className="App centered"><Experience /></div>
          </Route>

          <Route path="/contact">
            <div className="App centered"><Contact /></div>
          </Route>
          <Route path="/ai">
            <div className="App centered"><Nothing /></div>
          </Route>
          <Route path="/slam">
            <div className="App centered"><Nothing /></div>
          </Route>
          <Route path="/projects">
            <div className="App p-5"><Projects /></div>
          </Route>
          <Route path="/">
            <div className="App centered"><Home /></div>
          </Route>
        </Switch>
      </Router>

    </>
  )
}

export default Main;
