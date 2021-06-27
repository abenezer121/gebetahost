import React from "react";
import logo from "../../img/gebeta-logo.png";
import "./Header.css";

import Cabinet from "../Cabinet/Cabinet";
import {Location} from "../Location/Location";
import Container from "../Container/Container";
import ConsumerBasket from '../ContextBasket/ContextBasket';



class   Header extends React.Component {

    render(){
        //showStore={this.props.showStore} showCart={this.props.showCart}
       
    return (
        <ConsumerBasket>
            {context => {
                return (
            <header className="header">
                <Container>
                    <div className="header__fixed">
                        <a href="/">
                            <img src={logo} alt="img-fluid" width="100%"/>
                        </a>
                        
                        <Cabinet  showCart= {this.props.showCart} showStore= {this.props.showStore} context={context}/>
                    </div>
                </Container>
            </header>
                )}}
        </ConsumerBasket>
    );
}
}

export default Header;
