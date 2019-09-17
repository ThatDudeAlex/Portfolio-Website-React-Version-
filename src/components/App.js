import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Fragment>
      <div className="page_background_image pt-5">
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Fragment>
  );
}

export default App;
