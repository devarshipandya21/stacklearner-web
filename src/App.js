import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingPage />
      {/* <SignupPage /> */}
    </div>
  );
}

export default App;
