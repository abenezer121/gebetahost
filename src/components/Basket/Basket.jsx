import React from 'react';
import './Basket.css';
import basket from "../../img/basket.svg";
import {forInStatement} from "@babel/types";
import Cookies from 'js-cookie';
import {DishInBasket} from "../DishInBasket/DishInBasket";
var geolocation = require('geolocation')


 class Basket extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            totalPrice: 0,
            totalAmount: 0,
            lat : null,
            long : null,
            itemremoved : false
        }
        this.clicked = this.clicked.bind(this)
        this.getPosition = this.getPosition.bind(this)
        this.itemremoved = this.itemremoved.bind(this)
        
    }

    getPosition() {
        return new Promise((res , rej) => {
          geolocation.getCurrentPosition(function (err, position) {
            if (err) rej(err)
            res (position)
          })
        })
    }
    
     
  
     async clicked(){

        try{
            let t =  JSON.parse(localStorage.getItem('basket'))
            let p = JSON.parse(localStorage.getItem('basket'))[0].reastaurantId


            try
            {
                
               let string = Math.random().toString(36).substr(2, 8) 
               const data = await this.getPosition()
               let order = {}
               order.token = Cookies.get('token')
               order.deliveryLatitude = data.coords.latitude
               //position.coords.longitude;
               order.deliveryLongitude = data.coords.longitude
               //position.coords.latitude
               order.orderedItems = JSON.parse(localStorage.getItem('basket'))
               order.restid = JSON.parse(localStorage.getItem('basket'))[0].reastaurantId
               order.deliveryAddress = 'n/a'
               order.userid = Cookies.get('id')
               //make post request
               order.validationCode = string;
               const requestOptions = {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify(order)
               };
   
   
               let urlcath = 'http://34.152.47.90/api/order/bookOrder'  
               let cathResponse = await fetch(urlcath , requestOptions)
               
               if(cathResponse.status == 400){
                       let response = await cathResponse.json()
                       if(response.message == "Unfinished Order")
                       {
                           alert(response.message)
                       }
                       else if(response.message == "Error in Order") {
                           alert(response.message)
                       }
                       
                       else if(response.message.includes("is Unavailable for the moment")) {
                           alert(response.message)
                       }
                       else{
                           alert("Service unavailable please try later")
                       }
                       
               }
               else if(cathResponse.status == 200){
                   alert("Success")
                   localStorage.removeItem("basket")
                   this.setState({ itemremoved : !this.state.itemremoved})
               }
       
            }
            catch(err){
                console.log(err)
            }
        }
        catch(err){
            alert("Select an item first")
        }
        
    }

    itemremoved(items) {
        this.setState({ itemremoved : !this.state.itemremoved})
    }

    render(){
        let newarray = []
        try {
             newarray = JSON.parse(localStorage.getItem('basket'))
            
        } catch (error) {
        
           console.log("error") 
        }
        
       
        document.querySelector('.ReactModalPortal').style.zIndex = 20;

      
      return (
        <div className="basket">
        <div className="basket__top">
            <img src={basket} alt="basket"/>
            <h3 className="basket__total-amount">Cart</h3>
            <div className="basket__close" onClick={this.props.closeModal}>Close</div>
        </div>
        {
                    (newarray != undefined && newarray != null) &&
                        
                             <div className="basket__order-list">{newarray.map((item)=>{
                                    return (
                                        <DishInBasket 
                                            key={item.id}
                                            id={item.id}
                                            itemremoved = {this.itemremoved}
                                            context={"localContext"}
                                            name={item.name}
                                            amount={item.amount}
                                            price={item.price}
                                            ttlPr={0}
                                            ttlAm={0}
                                        />
                
                                    )
                                })}</div>
                        
                    }
        

        <div className="basket__payment">
            <div className="basket__order-amount">{this.state.totalAmount} Amount.</div>
            <p className="basket__next-step">Total</p>
            <p className="basket__order-summary-price">{this.state.totalPrice} ETH</p>
            <button onClick = {this.clicked}> button </button>
        </div>
    </div>
    )
    }
}


export default Basket;
