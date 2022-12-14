import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}

export default App;
