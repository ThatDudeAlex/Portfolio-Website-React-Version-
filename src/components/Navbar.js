import React from "react";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-black fixed-top navbar-inverse">
            <div className="container">

                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                    <a className="navbar-brand nav-font" href="#">About</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {/* <!-- left nav items --> */}
                    <div className="navbar-nav" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a className="nav-item nav-link " href="#experience">Experience <span
                            className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link " href="#project">Projects</a>
                        <a className="nav-item nav-link " href="#skills">Skills</a>
                        <a className="nav-item nav-link " href="#contact">Contact</a>
                    </div>

                    {/* <!-- right nav items --> */}
                    <div className="navbar-nav ml-auto" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a className="nav-item nav-link " href="#">Bio <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link " href="#">Blog (Coming Soon)</a>
                        <a className="nav-item nav-link "
                            href="https://drive.google.com/file/d/152HOTp8CKLcM5k-by6bFTNAudheUIW-Q/view?usp=sharing"
                            target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;