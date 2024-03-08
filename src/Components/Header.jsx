import React from 'react'
import youtubelogo from '../assets/YouTube.svg'
import './header.css'
const Header = () => {
  return (
    <>
    <div className="header-container">
    <div className="logo-design">
    <i className="bi bi-list"></i>
    <img src={youtubelogo} alt="YouTube" />
    <div className="name">
      <div className="name1">Gowtham</div>
      <div className="name2">YouTube</div>
    </div>
    </div>
    <div className="input-section">
    <input type="text" placeholder='Search'/>
    <button><i className="bi bi-search"></i></button>
    <i className="bi bi-mic-fill"></i>
    </div>
    <div className="group-left-icons">
    <i className="bi bi-camera-reels"></i>
    <i className="bi bi-bell"></i>
    <i className="bi bi-person-circle"></i>
    </div>
    </div>
    </>
  )
}

export default Header