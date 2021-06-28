import React, {useState, useEffect} from 'react';
import RestaurantTeaser from "../RestaurantTeaser/RestaurantTeaser";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";
import MenuType from "../MenuType/MenuType";
import Cookies from 'js-cookie';
import { Link , withRouter , Redirect} from "react-router-dom";
import { UserContext } from './../AppContext';
import Header from "./../Header/Header";
import {Footer} from "./../Footer/Footer";





class RestaurantPage extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = {
          restaurant:  [],
          foodsandcath : [],
          cathidkey : "all"
        };
        this.searchFood = this.searchFood.bind(this)
        this.searchCategory = this.searchCategory.bind(this)
    }

    async componentDidMount(props){

        try {

            let urlfood = 'http://34.152.47.90/api/item/returnCategoryWeb/' + this.props.location.state.uuid +'/'+Cookies.get('token')
            let foodRespnonse = await fetch(urlfood)
            let response = await foodRespnonse.json()
            console.log(response)
            this.setState({ foodsandcath : response, })

            let array = []
         
            
            for(let i =0; i < response.length; i++ )
            {
                 let t = {
                   CategoryName : response[i].subCath,
                    id : response[i].id
                }
                array.push(t)
            }
            this.setState({ restaurant : array, })
           
        } catch (err) {
          console.log(err)
        }
        
    }

    searchFood(item){
  
      
      let urlcath = 'http://34.152.47.90/api/item/searchByName/' + this.props.location.state.uuid + '/' + item + '/' + Cookies.get('token')
      let cathResponse = fetch(urlcath)
      .then((response) => response.json())
      .then((responseJSON) => {
      
        this.setState({ foodsandcath : responseJSON, })
        this.setState({ cathidkey : item})
      });

    }

     async searchCategory(category)
    {

      if(category == "All")
      {
          let urlfood = 'http://34.152.47.90/api/item/returnCategoryWeb/' + this.props.location.state.uuid +'/' + Cookies.get('token')
          let foodRespnonse = await fetch(urlfood)
          let response = await foodRespnonse.json()
          
          this.setState({ foodsandcath : response, })
          this.setState({ cathidkey : "all"})

      }
      else
      {
        let urlcath = 'http://34.152.47.90/api/item/seachCategory/' + this.props.location.state.uuid + '/' + category + '/' + Cookies.get('token')
        let cathResponse = fetch(urlcath)
        .then((response) => response.json())
        .then((responseJSON) => {
        
           
           this.setState({ foodsandcath : responseJSON, })
           this.setState({ cathidkey : category})
        });
      }

      
     
    }

    static contextType = UserContext;
    render(){

    function isNotEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    
 

    return (

      <div>
     { Cookies.get('id') != 'notlogged' &&  Cookies.get('id') != null ? 
      (
      <>
      <Header showStore = {true} showCart = {true}/> 
        <main>
           {isNotEmpty(this.state.restaurant) ? (
                <RestaurantTeaser
                    searchFood={this.searchFood}
                    restaurant={this.state.restaurant}/>
            ) : (
                ""
            )}
           
            {isNotEmpty(this.state.restaurant) ? (
                <RestaurantMenu
                    searchCategory={this.searchCategory}
                    restaurant={this.state.restaurant}/>
            ) : (
               ""
            )}
           

   {isNotEmpty(this.state.foodsandcath) ? (
                <MenuType 
                  key={this.state.cathidkey}
                  foodsandcath={this.state.foodsandcath}
                />
            ) : (
                <div>
                  <p>Not Found</p>
                  
                </div>
            )}   


        </main>
        <Footer/> 
        </>   ): ( <Redirect to={{pathname: '/login'}} />)
      }
      </div>
    );

}
}


export default RestaurantPage;









