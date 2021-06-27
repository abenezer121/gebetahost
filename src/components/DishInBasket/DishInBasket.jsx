import React from 'react';
import './DishInBasket.css'

import {UserContext} from './../AppContext'
export class DishInBasket extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            amount: this.props.amount,
            price: this.props.price,
            
        }
        this.changeNumber = this.changeNumber.bind(this)

    }

    static contextType = UserContext;
   

    changeNumber(num){

        let newamount = this.state.amount + num
        this.context.setName("abebe")
        if(newamount <= 0 ){
            //alert the user
          
            const confirmBox = window.confirm(
                "Do you really want to delete this Item?"
              )
              if (confirmBox === true) {
                  
                  let item = []
                  let newarray = JSON.parse(localStorage.getItem('basket'))
                for(let i=0; i < newarray.length; i++)
                {
                    if(newarray[i].id == this.props.id)
                    {
                    }
                    else
                    {
                        item.push(newarray[i])
                    }
                }
                localStorage.setItem('basket', JSON.stringify(item))
                this.props.itemremoved("h")
                
                
                //rerender this by calling parent

              }
        }
        else
        {   //change 
            this.setState({ amount : newamount })
            let newarray = JSON.parse(localStorage.getItem('basket'))
            for(let i=0; i < newarray.length; i++)
            {
                if(newarray[i].id == this.props.id)
                {
                   newarray[i].amount = newamount
                  
                   localStorage.setItem('basket', JSON.stringify(newarray))
                   break
                }
            }
        }
        
    }


    render() {
   

        return (
           <div className="cartSeparator">
                <div className='dish-in-basket__order-item' key={this.props.key} id={this.props.id}>
                <h2 className='dish-in-basket__name'>{this.props.name}</h2>
                    <button onClick={()=>{this.changeNumber(-1)}}>-</button>
                    <p>{this.state.amount}</p>
                    <button onClick={()=>{this.changeNumber(1)}}>+</button>       
                    <h3 className='dish-in-basket__amount'>{this.state.price*this.state.amount} $</h3>
                </div>
            </div>
                
         
        );
    }

}