import React, { Component } from 'react';
import data from '../data/data.json';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  goBack() {
    if (window.history.length) {
      window.history.back();
    }
  }

  render() {

    return (
      <div className="row">
        <div className="one-third column">
          <h1 onClick={this.goBack.bind(this)}>{'<'}</h1>
        </div>

        <div className="one-third column">
          <h1>Top Charts</h1>
        </div>
      </div>
    )
  }
}

