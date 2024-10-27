import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-pic2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile"/>
      <h1><span>I'm Caren Jelimo,</span> software engineer based in Kenya.</h1>
      <p>I am a software engineer Nairobi, Kenya with 4 years experience in multiple companies.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a href="https://docs.google.com/document/d/1valp6dlUvm01LgoVaQolCq7I7Tt1u6itQ77RKs6tnBw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero


