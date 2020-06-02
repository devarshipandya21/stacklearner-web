import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from './components/NavigationBar.jsx'
import stacklearner from './images/stacklearner.png'
import Signup from './components/Signup.jsx'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <img src={stacklearner} width="500px" style={{position: "absolute", top: 60, left: 0}}></img>
      <Signup xpos="1000" ypos="200"></Signup>
    </div>
  );
}

export default App;
