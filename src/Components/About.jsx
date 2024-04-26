import React from 'react'
import './About.css'
import theme_pattern from '../assests/theme_pattern.svg'
import profile_img from '../assests/my.jpg'
export default function About() {
  return (
    <div className='about' id='about'>
<div className="about-title">
    <h1>About Me</h1>
    <img src={theme_pattern} alt="" />
</div>

<div className="about-section">
    <div className="about-left">
        <img src={profile_img} alt="" />
    </div>
    <div className="about-right">
        <div className="about-para">
            <p>I am expreciend frontend developer</p>
            <p>My passion for frontend development</p>
        </div>
        <div className="about-skills">
            <div className="about-skill">
                <p>Html & Css</p><hr  style={{width:'50%'}}/>
            </div>
            <div className="about-skill">
                <p>React Js</p><hr  style={{width:'70%'}}/>
            </div>
            <div className="about-skill">
                <p>JavaScript</p><hr  style={{width:'60%'}}/>
            </div>
            <div className="about-skill">
                <p>C++</p><hr  style={{width:'50%'}}/>
            </div>
        </div>
    </div>
    <div className="about-achievments">
        <div className="about-achievment">
            <h1>1+</h1>
            <p>YEAR OF EXPEREINCE</p>
        </div> 
        <hr />
        <div className="about-achievment">
            <h1>10+</h1>
            <p>Projects on Reactjs</p>
        </div> 
        <hr />
        <div className="about-achievment">
            <h1>100+</h1>
            <p>DSA problem Solved</p>
        </div> 
    </div>
</div>
    </div>
  )
}
