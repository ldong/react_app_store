import React, { Component } from 'react';
import data from '../data/data.json';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this, this.props.data);

  }

  onClick(data, e) {
    e.preventDefault();
    this.props.handleClick(data, e);
  }

  render() {
    const {isHeaderText} = this.props;

    return (
      <div className="row">
          <div className="one-third column">
            <h1></h1>
          </div>
        <div className="one-third column">
          {isHeaderText ? <h1>Top Charts</h1> : <h1 onClick={this.onClick}>{'<'}</h1>}
        </div>
      </div>
    )
  }
}

