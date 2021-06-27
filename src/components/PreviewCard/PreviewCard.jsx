import React from "react";
import "./PreviewCard.css";
import { data } from "../data/data";



class PreviewCard extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {

    }
  }

  render()
  {
    return (
      <>
        <p className="preview-card__restaurant-name">{this.props.restaurant.title}</p>
        <div className="preview-card__delivery">
          <p className="preview-card__delivery__currency">
            {"this.props.restaurant.priceBucket"} •{" "}
          </p>
          <div className="preview-card__delivery__time">
            <p>
              {10} - {5} Min
            </p>
          </div>
        </div>
      </>
    );
  }
}

//  {this.props.restaurant.etaRange.min} - {this.props.restaurant.etaRange.max} Min

//{this.props.restaurant.categories.map(({name}) => name)}
export default PreviewCard;
