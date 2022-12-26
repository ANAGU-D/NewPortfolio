import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Daniel Anagu </h2>
        <div className="prompt">
          <p>A frontend developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> SKILLS</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript, HTML & CSS, Git, Knowledgable in User Interface/ User Experience, CSS and JS Frameworks, CSS Preprocessors, React JS, Redux, Figma, Node JS.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
