import React, { Component } from 'react';
import ContentListCellView from './ContentListCellView.jsx'

export default class ContentListView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const maxNumberOfItems = 9;
    const list = this.props.data.map((element, index) => {
        if (index > maxNumberOfItems) {
          return; 
        } else {
          return <ContentListCellView data={element} key={index} handleClick={this.props.handleClick} />
        }
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
