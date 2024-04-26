import React from 'react'
import './Hero.css'
import my_img from '../assests/my.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Hero() {
  return (
    <div className='hero' id='home'>
        <img src={my_img} alt="" />
<h1><span>I'm Anubhav</span>,Frontend Developer based in India.</h1>
<p>
    I am frontend developer 
</p>
<div className="hero-action">
    <div className="hero-connect">
    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
    </div>
    <div className="hero-resume">
    <a href="https://drive.google.com/file/d/1JKFMHgz6HFoQI196tGw61f6x8QgSwuX7/view?usp=drivesdk" target="_blank">Resume</a>
    </div>
</div>
    </div>
  )
}
