import React from "react";
import "./Dish.css";
import ConsumerBasket from '../ContextBasket/ContextBasket';
import Cookies from "js-cookie";


 class Dish extends React.PureComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            amount: 0,
            dishName: "anbeta",
            item: {},
            price: "43" ,
            restImage : null
            //this.props.dish.price,
            //this.props.dish.title,
        }
    }




  

  async componentDidMount() {

    

  try {

    
    let t = await fetch("http://34.152.47.90/api/reastaurant/getRestImage", {
        method: 'POST', 
        headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            imagepath: this.props.photoloc, 
            token : Cookies.get('token') 
        }),
      })

    let p = await t.json()
    this.setState({ restImage : p[0].image})

   
  } catch (err) {
      console.log(err)
    }
}

 

    addToBasket(title, uuid) {
        
        const newAmount = this.state.amount + 1;
      
        this.setState({amount: this.state.amount + 1});

        

      
        this.setState({amount: this.state.amount + 1});

        if(typeof(localStorage.getItem('basket')) == "string"){
            if(localStorage.getItem('basket').trim() == "" )
            {
                let item = this.props.context
                item.amount = 1
               
                let array =  [item]
                localStorage.setItem('basket', JSON.stringify(array))
            }
            else
            {
               
                let newarray = JSON.parse(localStorage.getItem('basket'))
               
                let newitem = this.props.context
                for ( let i = 0; i < newarray.length; i++)
                {   
                    if(newarray[i].id == newitem.id)
                    {
                        newarray[i].amount = newarray[i].amount + 1
                        localStorage.setItem('basket', JSON.stringify(newarray))
                        return 
                    }
    
                }
    
                newitem.amount = 1 
                newarray.push(newitem)
                localStorage.setItem('basket', JSON.stringify(newarray))
             
            }
    
        }
        else{
            let item = this.props.context
            item.amount = 1   
            let array =  [item]
            localStorage.setItem('basket', JSON.stringify(array))
            
        }

     
    }



    render() {

        
        return (

            <div className={this.state.amount === 0 ? 'dish' : 'dish dish--in-basket'}
                 onClick={() => this.addToBasket(this.props.name, this.props.uuid, this.props.price)}>
                <div className="dish__basket">
                    <div className="dish__description">
                        <p className="dish__name">{this.props.name}</p> 
                        {"itemDescription" && (
                            <p className="dish__additive">{this.props.description}</p>
                        )}
                        <p className="dish__price">{this.props.price}$</p>
                        {this.state.amount !== 0 ? <div className="dish__amount">{this.state.amount}</div> :
                            <div className="dish__amount">No</div>}
                    </div>
                    {
                       <img src={ `data:image/jpeg;base64,${this.state.restImage}`} className="dish__photo-preview" alt={this.props.name} />
                    
                    }
                </div>
            </div>
        );
    }

}

export default Dish;
