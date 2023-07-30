import React from "react";
import "../styles/Home.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { AiFillGoogleCircle } from "react-icons/ai";
import Footer from './Footer';
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>isham gupta</h1>
          <p>Solution to all your  problems</p>
        </main>
      </div>
      <div className="home2">
        <img
          src="https://www.thesun.co.uk/wp-content/uploads/2022/06/NINTCHDBPICT000705836168.jpg?w=620"
          alt="graphics"
        />
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo
            molestias tenetur esse! Earum quo porro distinctio culpa ex maxime?
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div className="content2">
          <h1>who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dignissimos praesentium enim consequuntur culpa nihil nostrum cumque
            dolorum, nisi omnis perspiciatis iste necessitatibus atque sequi
            facilis, porro velit dolor ex quibusdam aliquid quas doloremque
            temporibus! Recusandae ipsum minima, quisquam soluta architecto
            perspiciatis laboriosam dolorum impedit odit atque porro quam
            excepturi.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div className="icons">
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <YouTubeIcon />
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <FacebookIcon />
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <InstagramIcon />
            </div>
            <div style={{animationDelay:"1s"}}>
              <AiFillGoogleCircle />
            </div>
          </article>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Home;
