import React, { Component } from 'react';

export default class ContentListCellView extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this, this.props.data);
  }

  onClick(data, e) {
    e.preventDefault();
    this.props.handleClick(data, e);
  }

  render() {
    //{
    // "app_id": "C10063783",
    // "intro": "\u300a3D\u7ec8\u6781\u72c2\u98d93\u300b\u7b2c\u4e09\u4ee3\u534e\u4e3d\u6765\u88ad\uff0c\u5f3a\u52bf\u767b\u9646\uff01 \u2606\u5168\u74035000\u4e07\u72c2\u70ed\u73a9\u5bb6\u7fd8\u9996\u4ee5\u5f85\uff01\u582a\u79f0\u79fb\u52a8\u5e73\u53f0\u8d5b\u8f66\u6e38\u620f\u7684\u9738\u4e3b\uff01 \u2606\u5ef6\u7eed\u8d85\u5c0f\u7684\u4f53\u79ef\u548c\u70ab\u9177\u76843D\u5f15\u64ce\uff01\u52a0\u5165360\u5ea6\u76843D\u771f\u5b9e\u540d\u8f66\u4f53\u9a8c\u6781\u5ea6\u75af\u72c2\uff01 \u2606\u878d\u5408\u4e86\u6d41\u884c\u800c\u706b\u7206\u7684\u6539\u88c5\u8f66\u7ade\u901f\u6587\u5316\uff0c\u6ee1\u8db3\u73a9\u5bb6\u4e2a\u6027\u9700\u6c42\uff01 \u2606\u771f\u5b9e\u7684\u6f02\u79fb\u3001\u52a0\u901f\u7279\u6548\u548c\u52a8\u6001\u6a21\u7cca\uff0c\u903c\u771f\u7684\u753b\u8d28\uff0c\u8ba9\u60a8\u8eab\u4e34\u5176\u5883 \u2606\u6807\u51c6\u3001\u6311\u6218\u3001\u751f\u5b58\u7b49\u8d5b\u8f66\u6a21\u5f0f",
    // "score": "8",
    // "thumbnail_url": "http://appimg.hicloud.com/hwmarket/files/application/icon144/b03f7e1fa3b04fb089fdfb3c0da88010.png",
    // "title": "3D\u7ec8\u6781\u72c2\u98d93",
    // "top_5_app": [
    //     "C10179074",
    //     "C10136197",
    //     "C10203802",
    //     "C10221865",
    //     "C10281290"
    // "url": "http://appstore.huawei.com:80/app/C10063783"
    //}
    const {app_id, intro, score, thumbnail_url, title, url, top_5_app} = this.props.data;
    const numberOfRating = Math.ceil(score / 2.0) || 3;

    const ratings = [];
    for (let rating of Array(numberOfRating).keys()) {
      ratings.push(<span key={rating}>☆</span>);
    };

    return (
      <div className="row content-list-cell-view">
        <div className="two-thirds column">
          <div className="row">
            
            <div className="one-third column">
              <img className="icon" src={thumbnail_url} />
            </div>
            
            <div className="two-thirds column">
              <div className="row">
                  <div>{title}</div>
              </div>
              <div className="row">
                  <div className="rating">{ratings}</div>
              </div>
            </div>

          </div>
        </div>
        <div className="one-third column">
          <div className="get" onClick={this.onClick}>
            <span>+ Get</span>
          </div>
        </div>
      </div>
    )
  }
}
