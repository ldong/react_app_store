import React, { Component } from 'react';

export default class ContentDetailView extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="row">
        <div className="three columns offset-by-two">
          <h1>Contents</h1>
        </div>
      </div>
    )
  }
}
