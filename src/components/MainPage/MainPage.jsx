import React ,  { useContext } from "react";
import "./MainPage.css";
import  RestaurantsList  from "../RestaurantsList/RestaurantsList";
import  SearchPanel from "../SearchPanel/SearchPanel";
import Container  from "../Container/Container";
import { UserContext } from './../AppContext';
import Header from "./../Header/Header";
import Cookies from 'js-cookie';
import { Link , withRouter , Redirect} from "react-router-dom";
import {Footer} from "./../Footer/Footer";
var geolocation = require('geolocation')



export class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StoreRestData : [],
      searchFound : true,
      RestaurantsData: [],
      pagination : 1,
    
     
    };

    
  }


  getPosition() {
    return new Promise((res , rej) => {
      geolocation.getCurrentPosition(function (err, position) {
        if (err) rej(err)
        res (position)
      })
    })
}

  async  componentDidMount() {

      try {
        const data = await this.getPosition()
        

          let x = fetch('http://localhost:5000/api/reastaurant/nearbyrest/' + data.coords.latitude + '/' + data.coords.longitude +'/1' + '/' + Cookies.get('token'))
          .then((response) => response.json())
          .then((responseJSON) => {
          
            this.setState({ StoreRestData : responseJSON, RestaurantsData : responseJSON})
          });
        } catch (error) {
          console.log("error occured")
          console.log(error)
        }
       
        
        
    
 
}

 

  onStateChange = (value) => {

   
    
      if(!value.replace(/\s/g,"") == ""){
        const result = this.state.StoreRestData.filter(word => word.Name == value);
        if(result.length == 0)
        {
          this.setState({ searchFound : false})
        }
        else{
          this.setState({ searchFound : true})
          this.setState({ RestaurantsData: result });
        } 
        
      }
  
  }
  static contextType = UserContext;

  render() {

   
    if(this.state.RestaurantsData.length > 0)
    {
      this.context.setName("abebe")
    }

   
 
    return (

     <div>
     { Cookies.get('id') != 'notlogged' &&  Cookies.get('id') != null ? 
      (
        <>
      <Header showStore = {false} showCart = {false} /> 
        <div className="main-page">
          <Container>
            <SearchPanel onStateChange = {this.onStateChange} />
            <h1 className="main-page__title">Available Restaurants</h1>
            <RestaurantsList ref="child" searchFound = {this.state.searchFound} RestaurantsData = {this.state.RestaurantsData} />
          </Container>
        </div>
        <Footer/>
        </>
         ): ( <Redirect to={{pathname: '/login'}} />)
      }
      </div>
     
    );
  }
}
