import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const NavBar = () => {
    return (
        <div id="navs-container">
            {/* Top-button-navbar */}
            <div id="top-nav" className="navs">
                <div id="left-button">
                    <a href="https://facebook.com">
                        <button className="top-nav-btns">
                            <i className="ri-facebook-fill menu-social"></i>
                        </button>
                    </a>
                    <a href="https://twitter.com">
                        <button className="top-nav-btns">
                            <i className="ri-twitter-x-fill menu-social"></i>
                        </button>
                    </a>
                </div>
                <div id="right-button">
                    <Link to="/register">
                        <button className="top-nav-btns">Register</button>
                    </Link>
                    <Link to="/login">
                        <button className="top-nav-btns">Login</button>
                    </Link>
                </div>
            </div>

            {/* Mid-nav-bar-logo */}
            <div id="mid-nav" className="navs">
                <div id="logo-left">
                    <img src="./assets/logo.o.png" alt="logo-nepal" />
                </div>
                <div id="mid-logo">
                    <h1>निर्वाचन आयोग नेपाल</h1>
                    <p style={{ color: 'black' }}>कान्तिपथ, काठमाण्डौ</p>
                </div>
                <div id="last-logo">
                    <img src="./assets/logo-ele.png" alt="logo-election-nepal" />
                </div>
            </div>

            {/* Bottom-menu-nav-bar */}
            <div id="bottom-nav" className="navs">
                <div id="menus">
                    <Link to="/"><i className="ri-home-3-line"></i></Link>
                    <Link to="/about"><h4>हाम्रो बारे</h4></Link>
                    <Link to="/election-law"><h4>निर्वाचन कानून</h4></Link>
                    <Link to="/how-to-vote"><h4>मतदान गर्ने तरिका</h4></Link>
                    <Link to="/candidates"><h4>नयाँ उम्मेदवारको बारे</h4></Link>
                    <Link to="/faq"><h4>सोधिने प्रश्नहरू (FAQ)</h4></Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
