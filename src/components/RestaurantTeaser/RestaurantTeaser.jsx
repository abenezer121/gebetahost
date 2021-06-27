import React, { useState } from "react";
import "./RestaurantTeaser.css";
import { data } from "../data/data";
import PreviewCard from "../PreviewCard/PreviewCard";
import "../PreviewCard/PreviewCard.css";
import img from "./../../img/imageofloc.jpg";


class RestaurantTeaser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchValue: "",
    };
  }
  change(event) {
    if (event.target.value.trim() !== "") {
      this.setState({ searchValue: event.target.value.trim() });
    }
  }
  buttonClicked(){
    
    
    if (this.state.searchValue.trim() !== "") {
      this.props.searchFood(this.state.searchValue)
    }
    
  }

  render() {
    return (
      <div className="restaurant-teaser">
        <div className="restaurant-teaser__background">
          <img
            src={img}
            className="restaurant-teaser__background-image"
            //alt={this.props.restaurant.title}
          />
        </div>
        <div className="restaurant-teaser__wrapper">
          {/* <div className="restaurant-teaser__preview-card">
        </div> */}

          <div class="col-xs-6 col-md-6">
            <div class="input-group">
              <input
                type="search"
                class="searchbox form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={this.change.bind(this)}
              />
              <button type="button" onClick={this.buttonClicked.bind(this)} class="btn btn-outline-primary">
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantTeaser;
