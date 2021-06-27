import React from "react";
import "./TypeFood.css";


class TypeFood extends React.Component{

  constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this)
  }

  clicked(item){ 
    this.props.itemclicked(this.props.type )
  }

  render(){
    return (
      <li>
        <a onClick={this.clicked}  className="type-food">
          {this.props.type}
        </a>
      </li>
    );
  }
}


export default TypeFood;

