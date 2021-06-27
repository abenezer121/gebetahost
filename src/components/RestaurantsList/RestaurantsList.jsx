import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./RestaurantsList.css";
import { Loader } from "../Loader/Loader";
import { render } from "react-dom";

class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.searchFound ? (
          <div className="restaurants-list">
            {this.props.RestaurantsData.length > 0 ? (
              this.props.RestaurantsData.map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant.id}
                    uuid={restaurant.id}
                    url={restaurant.photoloc}
                    name={restaurant.Name}
                    //onRestaurantClick={onRestaurantClick}
                    price={12}
                    categories={[]}
                    //restaurant.categories.map(category => { return ` •  ${category.name}`; })
                    deliveryTime={0}
                    //`${restaurant.etaRange.min}-${restaurant.etaRange.max} Min`}
                  />
                );
              })
            ) : (
              <Loader />
            )}
          </div>
        ) : (
          <p>Not Found</p>
        )}
      </div>
    );
  }
}

export default RestaurantsList;
