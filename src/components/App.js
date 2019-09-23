import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Portfolio from '../pages/Portfolio';
import Bio from '../pages/Bio';
import '../css/index.css';
import Navbar from './Navbar';


// Main landing page for my portfolio site 
const App = () => (

  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Portfolio} />
      <Route path="/bio" component={Bio} />
    </div>
  </BrowserRouter>

);

export default App;
