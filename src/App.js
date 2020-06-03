import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingPage />
    </div>
  );
}

export default App;
