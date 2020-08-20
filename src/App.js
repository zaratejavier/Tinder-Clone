import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <h1>I am home</h1>
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