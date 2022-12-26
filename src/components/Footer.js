import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { GitHub } from "@material-ui/icons";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://twitter.com/daniel_anagu?t=lZ0yEX-CgqPR8DJrKxuBuw&s=09" target='_blank'><TwitterIcon /></a>
      <a href="https://github.com/ANAGU-D" target='_blank'><GitHub /></a>
      <a href="https://www.linkedin.com/in/daniel-anagu-476313252" target='_blank'><LinkedInIcon /></a> 
      </div>
    </div>
  );
}
export default Footer;
