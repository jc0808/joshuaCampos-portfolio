import "./Navbar.css";

import logo from "../assets/logo.png";
import menuLogo from "../assets/menu.png";
import { Link } from "react-scroll";
import contactImg from "../assets/contact.png";
import { useState } from "react";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);



    const handleButton = () => {
        document.getElementById("contactMe").scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />

            <div className="menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="menuList">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="menuList">About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="menuList">Projects</Link>
                <Link activeClass="active" to="contactContainer" spy={true} smooth={true} offset={-100} duration={500} className="menuList">Clients</Link>

            </div>

            <button className="menuButton" onClick={handleButton}>
                <img className="menuButtonImg" src={contactImg} alt="" /> Contact Me
            </button>

            <img className="mobMenu" src={menuLogo} alt="logo" onClick={() => setShowMenu(showMenu => !showMenu)} />

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="contactContainer" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to="contactContainer" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>


            </div>
        </div>
    )
};

export default Navbar;