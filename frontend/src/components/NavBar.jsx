import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div id="navs-container">
            {/* Top-button-navbar */}
            <div id="top-nav" className="navs">
                <div id="left-button">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <button className="top-nav-btns">
                            <i className="ri-facebook-fill menu-social"></i>
                        </button>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <button className="top-nav-btns">
                            <i className="ri-twitter-x-fill menu-social"></i>
                        </button>
                    </a>
                </div>
                <div id="right-button">
                    <Link to="/register" aria-label="Register">
                        <button className="top-nav-btns">Register</button>
                    </Link>
                    <Link to="/login" aria-label="Login">
                        <button className="top-nav-btns">Login</button>
                    </Link>
                </div>
            </div>

            {/* Mid-nav-bar-logo */}
            <div id="mid-nav" className="navs">
                <div id="logo-left">
                    <img src="./assets/logo.o.png" alt="Logo of Nepal" />
                </div>
                <div id="mid-logo">
                    <h1>निर्वाचन आयोग नेपाल</h1>
                    <p style={{ color: 'black' }}>कान्तिपथ, काठमाण्डौ</p>
                </div>
                <div id="last-logo">
                    <img src="./assets/logo-ele.png" alt="Election Commission Nepal Logo" />
                </div>
            </div>

            {/* Bottom-menu-nav-bar */}
            <div id="bottom-nav" className="navs">
                <div id="menus">
                    <Link to="/" aria-label="Home"><i className="ri-home-3-line"></i></Link>
                    <Link to="/about" aria-label="About Us"><h4>हाम्रो बारे</h4></Link>
                    <Link to="/election-law" aria-label="Election Law"><h4>निर्वाचन कानून</h4></Link>
                    <Link to="/how-to-vote" aria-label="How to Vote"><h4>मतदान गर्ने तरिका</h4></Link>
                    <Link to="/candidates" aria-label="New Candidates"><h4>नयाँ उम्मेदवारको बारे</h4></Link>
                    <Link to="/faq" aria-label="FAQ"><h4>सोधिने प्रश्नहरू (FAQ)</h4></Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
