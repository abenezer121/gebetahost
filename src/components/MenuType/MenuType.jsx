import React, {useState} from "react";
import "./MenuType.css";
import  Dish  from "../Dish/Dish";
import ConsumerBasket from "../ContextBasket/ContextBasket";


class MenuType extends React.Component {



//add
  constructor(props) {
      super(props);

      this.state = {
        items : []
      }
  }

  componentDidMount()
  {
 
      let item = []
      for(let i =0; i < this.props.foodsandcath.length; i++)
      {
        for(let j = 0; j < this.props.foodsandcath[i].items.length; j++)
        {
          item.push(this.props.foodsandcath[i].items[j])
          
        }
       
      }
      this.setState({ items : item})
  }

  render(){


 
          return (
            <div className="menu-type">
            <div className="menu-type__wrapper">
            <div className="menu-type__section-menu">
              
              <div className="menu-type__dish">
                {this.state.items.map((section, key) => {
                            return (
                                <Dish 
                                key={section.id} 
                                context={section}
                                name = {section.name}
                                dish={section}
                                itemIn ={section}
                                uuid = {section.id}
                                photoloc = {section.photoloc}
                                reastaurantId = {section.reastaurantId}
                                categoryId = {section.cathid}
                                subCathId = { section.subCategoryId}
                                price = { section.price}
                                description = {section.description}
              
                              /> 
                              )   
                })}
              </div>
            </div> 
            </div>
            </div>
          );
          

    
  
  

  }

}

export default MenuType





