import React from 'react';
import './sidebar.css';
import HomeImage from '../../assets/home.png';
import AboutImage from '../../assets/info.png';
import ContactImage from '../../assets/contact.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <button className={"sidebar-button"}> <img src={HomeImage} alt="Home" /> </button>
            <button className={"sidebar-button"}> <img src={AboutImage} alt="About" /> </button>
            <button className={"sidebar-button"}> <img src={ContactImage} alt="Contact" /> </button>
        </div>
    );
}

export default Sidebar;
