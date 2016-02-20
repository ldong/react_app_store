import React, { Component } from 'react';
import ContentListCellView from './ContentListCellView.jsx'

export default class ContentListView extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data, e) {
    console.log('clicked from contentList view');
    // data passed in
  }

  render() {
    const list = this.props.data.map((element, index) => {
        if(index > 10)
          return; 
        return <ContentListCellView data={element} key={index} handleClick={this.handleClick} />
    });

    return (
      <div className="row">
        <div className="one-third column offset-by-one-third">
            {list}
        </div>
      </div>
    )
  }
}
