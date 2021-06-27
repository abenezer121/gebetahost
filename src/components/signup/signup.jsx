
import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './Register.css';
import './bootstrap.css';
import Cookies from 'js-cookie';


  class SignUp extends React.Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let registration = {}
      registration.username = this.refs.username.value
      registration.password = this.refs.password.value
      registration.firstname = this.refs.firstname.value
      registration.phone  = this.refs.phone.value
      registration.lastname = this.refs.lastname.value
      registration.city = this.refs.city.value
      registration.email = this.refs.email.value

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registration)
    };
  
    console.log("hi there")

    let urlcath = 'http://localhost:5000/api/user/signup'  
    let cathResponse = fetch(urlcath , requestOptions)
    .then((response) => response.json())
    .then((responseJSON) => {
        console.log(responseJSON)
  
      if(responseJSON.token != null && responseJSON.Username != null && responseJSON.userid != null)
      {
        Cookies.set('id' , responseJSON.userid)
        Cookies.set('token' , responseJSON.token)
        Cookies.set('Username' , responseJSON.Username)
        this.props.setLogin()
      }
      else if(responseJSON.error != null && responseJSON.error == 'User Exist with the same Username'){
        //show error message
        
      }
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
                    <form onSubmit={this.handleSignIn.bind(this)}>

                    <div className="input-field">
                      <div className="label">
                        <label for="uname">username</label>
                      </div>
                      <input ref="username" type="text" placeholder="Enter your username" />
                    </div>

                    <div className="input-field">
                      <div className="label">
                        <label for="fname">First Name</label>
                      </div>
                      <input ref="firstname" type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="input-field">
                      <div className="label">
                        <label for="lname">Last Name</label>
                      </div>
                      <input ref="lastname" type="text" placeholder="Enter your last name" />
                    </div>
    
                    <div className="input-field">
                      <div className="label">
                        <label for="pno">Phone Number</label>
                      </div>
                      <input ref="phone" type="tel" placeholder="Enter your phone number" />
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
                        <label for="pass">Password</label>
                      </div>
                      <input
                        ref="password"
                        type="password"
                        id="pass"
                        placeholder="Enter your password"
                      />
                    </div>
                    <input className="btn login" type="submit" value="SignUp" />
                   
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

  export default SignUp


