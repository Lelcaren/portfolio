import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an experienced developer with years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for developing is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Python</p>
              <hr style={{width: "50%"}} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{width: "70%"}} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{width: "60%"}} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{width: "50%"}} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{width: "70%"}} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Achievements Section */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>50+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

