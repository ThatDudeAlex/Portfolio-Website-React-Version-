import React, { Component } from 'react';
import '../css/Navbar.css';
import { Link } from "react-scroll";

class Navbar extends Component {

    render() {
        return (
            <nav className="main-nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <a href="" className="nav-a"><Link
                                activeClass="active"
                                to="aboutComponent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                                About
                            </Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-a"><Link
                                activeClass="active"
                                to="expComponent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                                Experience
                            </Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-a"><Link
                                activeClass="active"
                                to="projectComponent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                                Projects
                            </Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-a"><Link
                                activeClass="active"
                                to="skillsComponent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                                Skills
                            </Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-a">
                            <Link
                                activeClass="active"
                                to="contactComponent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                                Contact
                            </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;