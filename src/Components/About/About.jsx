import React from 'react'
import './About.css'
import profile_img from '../../assets/profile-image.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img}  />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>I am a fresher learning frontend developing side by side with my college. I am still yet learning to my fullest and learning more and more day by day,</p>
                    <p>My passion for web development grows day by day as I go on to learn more and more new technologies around me, The skills I have gained so far are :-</p>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"65%"}} /></div>
                        <div className="about-skill"><p>React.JS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>Figma</p><hr style={{width:"45%"}} /></div>
                        <div className="about-skill"><p>Node.JS</p><hr style={{width:"25%"}} /></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default About