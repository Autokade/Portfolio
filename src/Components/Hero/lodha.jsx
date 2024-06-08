import React from 'react'
import './Lehsun.css'
import profile_img from '../../assets/profile-image.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Lodha = () => {
  return (
    <div id='home' className='Hero'> 
    <img src={profile_img} />
    <h1><span>I'm Chinmay Shandilya</span>, frontend developer based in India.</h1>
    <p>I am a frontend developer from Faridabad, Haryana currently studying in Thapar university, Punjab</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Lodha