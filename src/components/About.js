import React from 'react';
import '../styling/About.css';
import me from '../assets/me1.jpg'

const About = () => {
  return (
    
    <div className="about-section">
      <h2 className="about-header">About Me</h2>
      

      <div className="about-container">
        <div className="about-image-container">
          <img src={me} alt="Eddy Wu" className="about-image" />
        </div>
        <div className="about-content-container">
        <p>
          Hi, I'm Eddy. I'm graduating from the Bachelor of Science in Applied Computer Science (Network Security Option) 
          program at BCIT in December 2026. I am taking this program as a continuation of my diploma in Computer Systems Technology (Client/Server Option).
          I'm currently going into my second term.
        </p>
        <p>
          I've worked on several projects including web applications and APIs, and I'm confident with Python, C, SQL, Django, and React.js. 
          I'm looking for a full-time co-op placement for January 2025 so if you'd like to connect, send me an email.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;