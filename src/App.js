import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename='/'>
     <div>
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
     </div>
    </BrowserRouter>
   );
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
