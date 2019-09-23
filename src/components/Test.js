import React, { Component } from 'react';
import '../css/test.css';
import { Link } from "react-scroll";


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
                    <i className="fa fa-bars toggle" onClick={this.handleClick}></i>
                    <ul className="nav-items" ref={this.myRef}>

                        <span className="group-1">
                            <li>
                                <Link
                                    activeClass="active"
                                    to="aboutComponent"
                                    spy={true}
                                    smooth={true}
                                    offset={-300}
                                    duration={1000}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>About</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="expComponent"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={1000}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Experience</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="projectComponent"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1000}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Projects</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="skillsComponent"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Skills</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="contactComponent"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Contact</span>
                                </Link>
                            </li>
                        </span>

                        <span className="group-2">
                            <li>
                                <Link
                                    activeClass="active"
                                    to=""
                                    spy={true}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Bio</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to=""
                                    spy={true}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Blog (Soon)</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to=""
                                    spy={true}
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Resume</span>
                                </Link>
                            </li>
                        </span>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;