import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Content from './Contact';
import NotFound from './NotFound';

import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Router>
      
    <div className="w3-top">
    <div className="w3-bar w3-white w3-padding w3-card" >
      <h3 className="w3-bar-item w3-button">Senyo's Waakye Diary</h3>
    <div className="w3-right w3-hide-small">
    <NavLink exact className="w3-bar-item w3-button " activeClassName="active" to="/" >Home  </NavLink>
    
    <NavLink className="w3-bar-item w3-button"  activeClassName="active" to="/about">About </NavLink>
    
    <NavLink className="w3-bar-item w3-button"  activeClassName="active" to="/contact">Let's Talk </NavLink>
    </div>
    </div>
    </div>
    <header className="w3-display-container w3-content w3-wide"  id="home">
  <img className="w3-image" src="/waakye1.png" alt="Hamburger Catering" width="1600" height="800"/>
 
</header>
    
<div class="w3-row w3-padding-64">
  <div className="container">
<Switch>
    
          <Route exact path="/" component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/contact" component = {Content} />
          <Route  component={NotFound} />
          
    </Switch>
   </div>
   </div>  
  
    </Router>
    
  );
}

export default App;
