import React, { Component } from "react";
class Card extends Component {
  render() {
    const { title, text, buttonLabel, imgSrc, alt, ...rest } = this.props;
    return (
      <div className="card" style="width: 18rem;">
        <img src={imgSrc} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-primary">{buttonLabel}</button>
        </div>
      </div>
    );
  }
}

export default Card;
