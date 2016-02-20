import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx'
import ContentListView from './ContentListView.jsx'
import data from '../data/data.json';

class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [... data]
    }
  }

  render() {
    console.log(data);
  	const dataString = JSON.stringify(data);

    return (
      <div>
        <Header />
        <ContentListView data={this.state.data}/>
  	 </div>
    )
  }
}

ReactDOM.render(<MainLayout/>, document.getElementById('main'));