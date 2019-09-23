import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Portfolio from '../pages/Portfolio';
import Bio from '../pages/Bio';
import Navigation from '../components/Navigation';
import Test from "./Test";
import '../css/index.css';


// Main landing page for my portfolio site 
const App = () => (

  <BrowserRouter>
    <div>
      <Test />
      <Route exact path="/" component={Portfolio} />
      <Route path="/bio" component={Bio} />
    </div>
  </BrowserRouter>

);

export default App;
