import React from 'react'
import "../styles/Footer.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
function Footer() {
  return (
    <div className='footer'>
        <h1>TechyStar</h1>
        <p>&copy;  No copyright Claims</p>
        <div className="follow">
          <h3>Follow Us</h3>
          <div className="links">
            <a href='https:youtube.com' target={"blank"}><YouTubeIcon/></a>
            <a href='https:instagram.com' target={"blank"}><InstagramIcon/></a>
            <a href='https:github.com' target={"blank"}><GitHubIcon/></a>
          </div>
        </div>
    </div>
  )
}

export default Footer