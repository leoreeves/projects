import React from 'react';
import Introduction from './Introduction';
import Revisions from './Revisions';
import Tabs from './Tabs'

import './HomePage.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Introduction/>
        <Revisions/>
        <Tabs/>
      </div>
    );
  }
}