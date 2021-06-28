import React from "react";

import "./Profile.css";
import "./bootstrap.css";



import Cookies from 'js-cookie';


  class Profile extends React.Component {

   constructor(props){
       super(props);
       this.state = {
            message  : ""
       }
       this.handleSignIn = this.handleSignIn.bind(this)
   }
    
   
    handleSignIn(e) {
      e.preventDefault()
      let registration = {}


        if(this.refs.email.value.trim() == "" &&  this.refs.city.value.trim() == "" && this.refs.phone.value.trim() == "" && this.refs.repeatpassword.value.trim() == "" && this.refs.newpassword.value.trim() == "") 
        {
            this.setState({ message : "Fill all Information"})
            return
        }

        if(this.refs.newpassword.value !=  this.refs.repeatpassword.value)
        {
            this.setState({ message : "Password Doesnt Match"})
            return
        }


        

  if(this.refs.email.value.trim() == "" )  registration.email = this.refs.email.value
  if(this.refs.city.value.trim() == "" )  registration.city = this.refs.city.value
  if( this.refs.phone.value.trim() == "" ) registration.mobile  = this.refs.phone.value
  if(this.refs.repeatpassword.value.trim())  registration.passwordhash = this.refs.newpassword.value   
  registration.token = Cookies.get('token')
     

    console.log(registration)

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registration)
    };
  


    let urlcath = 'http://34.152.47.90/api/user/updateprofile'  
    let cathResponse = fetch(urlcath , requestOptions)
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON)
    });
     
     
    }
    
    render() {


      return (
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-md-8">
              <div id="__next">
                <div className="login-box">
                  <div className="login-container">
                    <h3>Register</h3>
                    <p style={{color : 'red'}}>{this.state.message}</p>
                    <form onSubmit={this.handleSignIn.bind(this)}>

               
    
                    <div className="input-field">
                      <div className="label">
                        <label for="pno">Phone Number</label>
                      </div>
                      <input ref="phone"  type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="input-field">
                      <div className="label">
                        <label for="email">City</label>
                      </div>
                      <input ref="city" type="text" placeholder="Enter your address" />
                    </div>
                    <div className="input-field">
                      <div className="label">
                        <label for="email">Email </label>
                      </div>
                      <input
                      ref="email"
                        type="text"
                        placeholder="Enter your email "
                      />
                    </div>
              

                    <div className="input-field">
                      <div className="label">
                        <label for="pass"> New Password</label>
                      </div>
                      <input
                        ref="newpassword"
                        type="password"
                        id="pass"
                        placeholder="Enter your password"
                      />
                    </div>

                    <div className="input-field">
                      <div className="label">
                        <label for="pass"> Repeat Password</label>
                      </div>
                      <input
                        ref="repeatpassword"
                        type="password"
                        id="pass"
                        placeholder="Enter your password"
                      />
                    </div>
                    <input className="btn login" type="submit" value="Update" />
                   
                    </form>
                    
                    <small class="terms">
                      by continue you agree to our
                      <strong>Condition of use</strong> and
                      <strong>Privacy Notice</strong>.
                    </small>
                  </div>
                  <div className="divider"></div>
                  <div className="actions">
                    <a href="#">Terms of conditions</a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Help</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
     
    }
  
  }

  export default Profile



