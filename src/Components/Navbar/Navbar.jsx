import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo}  />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>

        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}


export default Navbar