import React, { Component } from 'react';
import { Link } from "react-scroll";
import { Link as RouteLink } from 'react-router-dom';
import '../css/test.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    handleClick = () => {
        const nav = this.myRef.current

        if (nav.className === "nav-items") {
            nav.className += " responsive";
        } else {
            nav.className = "nav-items";
        }
    }

    handleResize = () => {
        const nav = this.myRef.current;

        if (window.innerWidth >= 768) {
            nav.className = "nav-items";
        }
    }

    componentDidMount = () => {
        this.myRef.current.className = "nav-items";
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <nav id="navbar" className="collapsible-menu" >
                <div className="nav-content" >

                    <div className="toggle">
                        <i className="fa fa-bars" onClick={this.handleClick}></i>
                    </div>


                    <ul className="nav-items" ref={this.myRef}>
                            <li onClick={this.handleClick}>
                                <Link
                                activeClass="active"
                                to="aboutComponent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-menu-link"
                                >
                                    About
                                </Link>
                            </li>

                            <li onClick={this.handleClick}>
                                <Link
                                activeClass="active"
                                to="expComponent"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={1000}
                                className="nav-menu-link"
                                >
                                    Experience
                                </Link>
                            </li>


                            <li onClick={this.handleClick}>
                                <Link
                                activeClass="active"
                                to="projectComponent"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={1000}
                                className="nav-menu-link"
                                >
                                    Projects
                                </Link>
                            </li>
                            
                            <li onClick={this.handleClick}>
                                <Link
                                activeClass="active"
                                to="skillsComponent"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={1000}
                                className="nav-menu-link"
                                >
                                    Skills
                                </Link>
                            </li>
                            
                            <li onClick={this.handleClick}>
                                <Link
                                activeClass="active"
                                to="contactComponent"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className="nav-menu-link"
                                >
                                    Contact
                                </Link>
                            </li>
                            
                            <li onClick={this.handleClick} className="link-6">
                                <Link
                                activeClass="active"
                                to=""
                                spy={true}
                                className="nav-menu-link"
                                >
                                    Bio
                                </Link>
                            </li>
                            
                            <li onClick={this.handleClick}>
                                <Link
                                activeClass="active"
                                to=""
                                spy={true}
                                className="nav-menu-link"
                                >
                                    Blog (Soon)
                                </Link>
                            </li>
                            
                            <li onClick={this.handleClick}>
                                <Link
                                activeClass="active"
                                to=""
                                spy={true}
                                className="nav-menu-link"
                                >
                                    Resume
                                </Link>
                            </li>
                    </ul>
                </div>
            </nav>
                );
            }
        }
        
export default Navbar;