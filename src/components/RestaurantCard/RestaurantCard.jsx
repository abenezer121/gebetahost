import Cookies from "js-cookie";
import React  from "react";
import { Link } from "react-router-dom";
import "./RestaurantCard.css";



class RestaurantCard extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      restImage : null
    }
  }

  async componentDidMount() {

    

  try {

    
    let t = await fetch("http://34.152.47.90/api/reastaurant/getRestImage", {
        method: 'POST', 
        headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            imagepath: this.props.url, 
            token : Cookies.get('token')
        }),
      })

    let p = await t.json()
    this.setState({ restImage : p[0].image})

   
  } catch (err) {
      console.log(err)
    }
}

 




  render()
  {
  
  
    return (
      
      <div className="restaurant-card" >
        <Link 
          to= {{ 
          pathname : '/restaurant' , 
          state: 
              { 
                uuid : this.props.uuid
              }
          }} 
          className="restaurant-card__link">
          <img src={ `data:image/jpeg;base64,${this.state.restImage}`} className="restaurant-card__photo" alt={this.props.name} />
          <div className="restaurant-card__preview">
            <p className="restaurant-card__name">{this.props.name}</p>
            <p className="restaurant-card__price">
              {this.props.price}
              {this.props.categories}
            </p>
            <p className="restaurant-card__delivery-time">{this.props.deliveryTime}</p>
          </div>
        </Link>
        
      </div>
    );

  }

}


export default RestaurantCard;