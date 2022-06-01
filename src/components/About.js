import React, { useState, useEffect } from "react";

function About() {
  return (
    <div id="about" className="about">

      <h2 className="header">Welcome to the Feelings Forum</h2>
      <p>
        Why wait for Friday to share how you feel? Enjoy some feelings from friends by visiting the Feelings tab. Feel free to add your own feelings by clicking the form tab. 

      <h2 className="about__header">Welcome to the Feelings Forum</h2>
      <p className="about__paragraph"/>
      How are you feeling today? We would love to hear about it. Share your feelings, thoughts, or words of wisdom on the "Share" page. Or, gain some inspiration by visiting the "Feelings" page. Whatever you are feeling, it is valid and important. 
      </p>
     
      <img src="https://64.media.tumblr.com/c4e6e582a6bf09c6e10514e46723712d/tumblr_n9xkynrLHf1shpedgo1_640.gifv" alt="Hello Sunshine!"  className="about__sun" />
     
    </div>
  );

  

}
export default About;