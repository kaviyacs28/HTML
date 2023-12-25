import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import Section1 from './Section1/Section1';
import Logos from './Section2/Section2';
import Section4 from './Section4/Section4';
import Section3 from './Section3/Section3';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';
import Section8 from './Section8/Section8';
import Section9 from './Section9/Section9';
import Section10 from './Section10/Section10';
class App extends Component {
  render() {
    return (
      <div className="hole">
    <Header />
    <Section1 />
    <Logos />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
    <Section10 />
      </div>
    );
  }
}

export default App;
