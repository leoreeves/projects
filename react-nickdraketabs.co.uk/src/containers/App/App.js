import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './App.css';

export class App extends Component {
  render() {
    return(
      <div class="App">
        <Navbar/>
        <HomePage/>
        <Footer/>
      </div>
    )
  }
}

export default App;