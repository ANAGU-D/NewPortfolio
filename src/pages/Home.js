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
          <a href="https://www.linkedin.com/in/daniel-anagu-476313252" target='_blank'><LinkedInIcon /></a> 
           <a href = "mailto:anagudaniel2001@gmil.com ?subject = Feedback&body = Message"> <EmailIcon /></a>
          <a href="https://github.com/ANAGU-D" target='_blank'><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> SKILLS</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript, HTML & CSS, Git, Knowledgable in User Interface/ User Experience, CSS and JS Frameworks, CSS Preprocessors, React JS, Redux, Figma.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MongoDB.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
