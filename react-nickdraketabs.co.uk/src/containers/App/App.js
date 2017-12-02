import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import TuningsPage from '../TuningsPage/TuningsPage';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './App.css';

export class App extends Component {
  render() {
    return(
      <Router>
        <div class="App">
            <Navbar/>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/tunings" component={TuningsPage}/>
              </Switch>
            <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;