import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Experience from './Experience';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Fragment>
      {/* <Navbar /> */}
      <About />
      <Experience />
    </Fragment>
  );
}

export default App;
