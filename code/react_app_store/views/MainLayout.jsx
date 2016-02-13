import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx'
import ContentView from './ContentView.jsx'
import data from '../data/data.json';

class MainLayout extends Component {

  render() {
    console.log(data);
	const dataString = JSON.stringify(data);

    return <div>
		<Header />
		<ContentView />
	</div>
  }
}


ReactDOM.render(<MainLayout/>, document.getElementById('main'));
