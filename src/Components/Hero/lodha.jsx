import React from 'react'
import './Lehsun.css'
import profile_img from '../../assets/profile-image.jpeg'

const Lodha = () => {
  return (
    <div className='Hero'> 
    <img src={profile_img} />
    <h1><span>I'm Chinmay Shandilya</span>, frontend developer based in India.</h1>
    <p>I am a frontend developer from Faridabad, Haryana currently studying in Thapar university, Punjab</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Lodha