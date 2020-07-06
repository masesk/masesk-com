import React from 'react';
import './App.css';
import { Card, CardDeck, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullPage, Slide } from 'react-full-page';
import { FaTwitter, FaGithub, FaAndroid, FaApple, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import Typed from 'react-typed';

const App = () => {

  const svgStyle = {
    display: "block",
    margin: "0 auto"
  }
  

  const cards = (imgUrl, title, description, githubLink) => {
    return (
      <figure id="img-wrapper">
        <Image src="http://masesk.com/img/5.jpg" alt="Preview Image" />
        <figcaption>
          <h2 class="title">Kalkulator</h2>
          <div id="bottom-detail">
            <p>All in one calculator for the Android devices which includes scientific calculator,
                                graphing calculator, unit convertor and more features. </p>
            <ul id="social-icons">
              <a href="https://github.com/masesk" target="_blank" rel="noopener noreferrer"><div className="sided icon small"><FaGithub style={svgStyle} size={15} /></div></a>
              <a href="https://github.com/masesk" target="_blank" rel="noopener noreferrer"><div className="sided icon small"><FaDownload style={svgStyle} size={15} /></div></a>
            </ul>
          </div>
        </figcaption>
      </figure>
    )
  }

  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  const renderInformation = () => {
    const now = new Date()
    const exp = new Date("2020-03-01")
    const edu = new Date("2019-05-01")
    const proj = new Date("2020-07-01")

    return (
      <>
        <h1>ABOUT</h1>
        <CardDeck>
          <Card bg={"light"}>
            <Card.Header> <Card.Title>Recent Experience</Card.Title></Card.Header>
            <Card.Body>

              <Card.Text>
                <h1> Software Engineer</h1>
                <h1>Northrop Grumman</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Started this position {monthDiff(exp, now)} months ago</small>
            </Card.Footer>
          </Card>
          <Card bg={"light"}>
            <Card.Header> <Card.Title>Recent Experience</Card.Title></Card.Header>
            <Card.Body>

              <Card.Text>
                <h1> Cal Poly Pomona</h1>
                <h1>Computer Science, B.S.</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Earned the degree {monthDiff(edu, now)} months ago</small>
            </Card.Footer>
          </Card>
          <Card bg={"light"}>
            <Card.Header> <Card.Title>Recent Project</Card.Title></Card.Header>
            <Card.Body>

              <Card.Text>
                <h1>sync-rec-api/ui</h1>
                <h1>Python & Javascript</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Finished the project {monthDiff(proj, now)} months ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </>)
  }
  return (
    <FullPage scrollMode="normal">
      <Slide>
        <div className="section">
          <div className="App">
            <div className="content intro">
              <div className="sided-container">
                <div className="sided center">
                  <img alt="" className="avatar" src="http://masesk.com/mases.jpg" />
                </div>
                <div className="sided center">
                  <h1>Mases Krikorian</h1>
                  <h1>Software Engineer</h1>
                  <Typed
                    strings={[
                      "Java",
                      "C++",
                      "C#",
                      "Python",
                      "JavaScript"
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                  />
                  <div style={{ display: "flex" }}>
                    <a href="https://twitter.com/maseskrikorian" target="_blank" rel="noopener noreferrer"><div className="sided icon"><FaTwitter style={svgStyle} size={20} /></div></a>
                    <a href="https://www.linkedin.com/in/mases-krikorian-07369ab3/" target="_blank" rel="noopener noreferrer"><div className="sided icon"><FaLinkedinIn style={svgStyle} size={20} /></div></a>
                    <a href="https://github.com/masesk" target="_blank" rel="noopener noreferrer"><div className="sided icon"><FaGithub style={svgStyle} size={20} /></div></a>
                    <a href="https://play.google.com/store/apps/developer?id=Mases+Krikorian&hl=en" target="_blank" rel="noopener noreferrer"><div className="sided icon"><FaAndroid style={svgStyle} size={20} /></div></a>
                    <div className="sided icon"><FaApple style={svgStyle} size={20} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="section">
          <div className="content background">
            <div style={{ padding: 20 }}>
              {renderInformation()}
            </div>
          </div>
        </div>
      </Slide>
      <Slide>

        <div className="content projects">
          <div style={{ height: 981, textAlign: "center" }}>
            <h1>PROJECTS</h1>
            {cards()}
            {cards()}
            {cards()}
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="section">
          <div className="content contact">
            <h1>Mases Krikorian</h1>
            <h2>Softwaer Engineer</h2>
          </div>
        </div>
      </Slide>
    </FullPage>

  );
}

export default App;
