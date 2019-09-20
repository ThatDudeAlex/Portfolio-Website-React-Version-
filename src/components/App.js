import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navigation from './Navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Fragment>
      <div className="page_background_image pt-5">
        {/* <Navbar /> */}
        <Navigation />
        <About id="aboutComponent"/>
        <Experience id="expComponent"/>
        <Projects id="projectComponent"/>
        <Skills id="skillsComponent"/>
        <Contact id="contactComponent" />
      </div>
    </Fragment>
  );
}

export default App;
