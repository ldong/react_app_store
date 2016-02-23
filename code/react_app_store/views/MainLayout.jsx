import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import data from '../data/data.json';
import Header from './Header.jsx'
import ContentListView from './ContentListView.jsx'
import ContentDetailView from './ContentDetailView.jsx'


class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [... data],
      isDetailView: false,
      isHeaderText: true
    }

    this.changeToDetailView = this.changeToDetailView.bind(this);
    this.changeToListView = this.changeToListView.bind(this);
  }

  changeToDetailView(data, e) {
    this.setState({
      isHeaderText: false,
      detailData: data,
      isDetailView: true
    });
  }
 
  changeToListView(e) {
    this.setState({
      isHeaderText: true,
      isDetailView: false,
      detailData: null
    });
  }

  render() {
    const {isDetailView, isHeaderText} = this.state;
    const contentListView = <ContentListView data={this.state.data} handleClick={this.changeToDetailView} />
    const contentDetailView = <ContentDetailView data={this.state.data} detailData={this.state.detailData} />

    return (
      <div>
        <Header isHeaderText={isHeaderText} handleClick={this.changeToListView} />
        {isDetailView ? contentDetailView : contentListView}
  	 </div>
    )
  }
}

ReactDOM.render(<MainLayout/>, document.getElementById('main'));