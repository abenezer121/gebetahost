import React, {useState} from "react";
import "./RestaurantMenu.css";
import {data} from "../data/data";
import TypeFood from "../TypeFood/TypeFood";



class RestaurantMenu extends React.Component{
    
    constructor(props){
        super(props);
        this.itemclicked = this.itemclicked.bind(this);
    }

    itemclicked(item){
        this.props.searchCategory(item)
    }
    render()
    {

        let rest = []
        let all = {CategoryName: "All", id: ""}
        rest.push(all)
        this.props.restaurant.map((section, i) => {
            rest.push(section)
        })

        return (
            <nav className="restaurant-menu">
                <div className="restaurant-menu__wrapper">
                    <ul className="restaurant-menu__type">
                        {rest.map((section, i) => {
                            
                            let all = {CategoryName: "All", id: ""}
                            
                            return (
                                <TypeFood
                                    spy={true}
                                    to={section.CategoryName}
                                    itemclicked = {this.itemclicked}
                                    key={i}
                                    id={section.id}
                                    anchor={`#${section.CategoryName}`}
                                    type={section.CategoryName}
                                />
                            );
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
    
}

export default RestaurantMenu;







