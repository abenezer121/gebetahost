import React from "react";
import "./Container.css";



 class  Container extends React.Component
 {
   constructor(props)
   {
     super(props);
     this.state = {

     }
   }
   render()
   {
    return <div className="container">{this.props.children}</div>;
   }
 }

 export default Container;
