import React, { Component } from 'react';

export default class ContentDetailView extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
  }
  
  render() {
    const data = this.props.data;

    const {
      app_id, intro, score, thumbnail_url,
      title, url, top_5_app=[], developer
    } = this.props.detailData;

    const numberOfRating = Math.ceil(score / 2.0) || 3;

    const ratings = [];
    for (let rating of Array(numberOfRating).keys()) {
      ratings.push(<span key={rating}>☆</span>);
    };

    const maxNumberOfItems = 4; // max of 5
    const list = this.props.data.filter((element, index) => {
      return top_5_app.indexOf(element.app_id) > 0;
    });

    const similarItems = list.map((element, index) => {
      return (
        <div className="three columns" key={index}>
          <div className="row">
            <div className="row">
              <img className="icon" src={element.thumbnail_url} />
            </div>
            <div className="row">
              <div>{element.title}</div>
            </div>
          </div>
        </div>)
    });

    console.log(similarItems);

    return (
      <div className="row">
        <div className="four columns offset-by-four">
          <div className="row">
            <div className="one-third column">
              <img className="icon" src={thumbnail_url} />
            </div>
            
            <div className="two-thirds column">
              <div className="row">
                  <div>{title}</div>
              </div>

              <div className="row">
                  <div className="developerInfo">{developer}</div>
              </div>
              <div className="row">
                  <div className="rating u-pull-left">{ratings}</div>
              </div>
            </div>
          </div>

          <div className="row">
            <span className="customerLabel">Customers also like</span>
          </div>

          <div className="row">
            {similarItems}
          </div>

          <div className="row">
            <div className="row">
              <span className="descriptionLabel">Description</span>
            </div>

            <div className="row">
              <div className="descriptionText">
                {intro}
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
