import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">      
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
    );
  }
  
  export default App;
  
  {/* Tinder Cards */}
  {/* Button below tinder card */}

  {/* Chat Screens */}
  {/* Individual chat screen */}