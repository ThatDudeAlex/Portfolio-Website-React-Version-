import React, { Component } from 'react';
import { Link } from "react-scroll";
import { NavLink, withRouter } from "react-router-dom";
import '../css/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.navRef = React.createRef();
        this.groupRef = React.createRef();
        this.returnRef = React.createRef();
    }

    componentDidMount = () => {
        const nav = this.navRef.current;
        const group = this.groupRef.current;
        const returnLink = this.returnRef.current;

        nav.className = "nav-items";
        group.className = "group-1";

        if (this.props.location.pathname === "/bio") {
            group.style.display = "none";
            returnLink.style.display = "inline-block";
        }

        window.addEventListener("resize", this.handleResize);
    }


    componentDidUpdate() {
        const group = this.groupRef.current;
        const returnLink = this.returnRef.current;

        if (this.props.location.pathname === "/bio") {
            group.style.display = "none";
            returnLink.style.display = "inline-block";
        }
        else {
            group.style.display = "flex";
            returnLink.style.display = "none";
        }
    }

    handleClick = () => {
        const nav = this.navRef.current;

        if (nav.className === "nav-items") {
            nav.className += " responsive";
        } else {
            nav.className = "nav-items";
        }
    }

    handleResize = () => {
        const nav = this.navRef.current;

        if (window.innerWidth >= 768) {
            nav.className = "nav-items";
        }
    }

    render() {
        return (
            <nav id="navbar" className="collapsible-menu" >
                <div className="nav-content" >
                    <i className="fa fa-bars toggle" onClick={this.handleClick}></i>
                    <ul className="nav-items" ref={this.navRef}>

                        <li onClick={this.handleClick} ref={this.returnRef} style={{ display: "none" }}>
                            <NavLink
                                exact to="/"
                                className="nav-menu-link ml-5"
                            >
                                <span id="return-link">Previous Page</span>
                            </NavLink>
                        </li>

                        <span className="group-1" ref={this.groupRef}>
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
                                    offset={-100}
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
                                    offset={-100}
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
                                    offset={-100}
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

                        <span className="group-2" onClick={this.handleClick}>
                            <li>
                                <NavLink
                                    to="/bio"
                                    className="nav-menu-link"
                                >
                                    <span className="bio-link" >Bio</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to=""
                                    className="nav-menu-link"
                                >
                                    <span onClick={this.handleClick}>Blog (Soon)</span>
                                </NavLink>
                            </li>

                            <li>
                                <a href="https://drive.google.com/open?id=152HOTp8CKLcM5k-by6bFTNAudheUIW-Q" target="_blank" rel="noopener noreferrer" className="nav-menu-link">
                                    <span>Resume</span>
                                </a>
                            </li>
                        </span>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);