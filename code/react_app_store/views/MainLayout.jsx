import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx'
import ContentView from './ContentView.jsx'
import data from '../data/data.json';

class MainLayout extends Component {

  render() {
    console.log(data);
	const dataString = JSON.stringify(data);

    return (
      <div>
        <div className="row">
          <div className="one-third column offset-by-one-third">
            <Header />
          </div>
        </div>
  		
        <div className="row">
          <div className="three columns offset-by-two">
            <ContentView />
          </div>
        </div>
  	 </div>
    )
  }
}


ReactDOM.render(<MainLayout/>, document.getElementById('main'));
