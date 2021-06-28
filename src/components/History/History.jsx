import React from "react";
import "./bootstrap.css";
import Cookies from "js-cookie";
import Header from "./../Header/Header";
import { Footer } from "./../Footer/Footer";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderdata: [],

    };
  }

  componentDidMount() {
    let x = fetch(
      "http://34.152.47.90/api/order/returnUserOrder/" +
        Cookies.get("id") +
        "/" +
        Cookies.get("token")
    )
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({ orderdata: responseJSON });
      });
  }

  render() {
    let price = 0;
    return (
      <div>
        <Header showStore={true} showCart={true} />
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Establishment</th>
                  <th scope="col">Items</th>
                  <th scope="col">Price</th>
                  <th scope="col">Verification Code</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orderdata.map((section , i) => {
                  
                  price = 0;
                  return (
                    <>
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{section.reastaurant.Name}</td>
                        <td>{
                          section.ordereditems.map((section , i)=> {
                            price += section.items.price 
                            return(<p>{section.items.name}</p>)
                          })
                          }
                        </td> 
                        <td>{price}</td>
                        <td>{section.validationCode}</td>
                      
                        <td>{ (section.orderConfirmation == false) ? section.rejected == true ? <p>Done</p>:<p>In-progess</p> : <p>Done</p>}</td>
                      </tr>
                   
                   </>
                  );
                })}
              </tbody>
            </table>
            {}
            <br /> <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default History;
