import React from "react";
import "./Login.css";
import "./bootstrap.css";
import Cookies from "js-cookie";

import { Link , withRouter, Redirect} from "react-router-dom";




class LoginForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs

  constructor(props) {
    super(props);
    this.state = {
      showError: "",
    };
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleSignIn(e) {
    e.preventDefault();

    let username = this.refs.username.value;
    let password = this.refs.password.value;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };

    let urlcath = "http://34.152.47.90/api/user/login";
    let cathResponse = fetch(urlcath, requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => {
        if (
          responseJSON.token != null &&
          responseJSON.Username != null &&
          responseJSON.userid != null
        ) {
          Cookies.set("id", responseJSON.userid);
          Cookies.set("token", responseJSON.token);
          Cookies.set("Username", responseJSON.Username);
          this.props.history.push('/rest');

          //<Redirect to={{pathname: '/rest', }} />
          // window.location.href = "http://34.152.47.90/rest";

        } else if (
          responseJSON.error != null &&
          responseJSON.error == "Incorrect username or password"
        ) {
          //show error message
          console.log("incorrect username or password");
          this.setState({ showError: "incorrect username or password" });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-8">
        <div id="__next">
          <div className="login-box">
            <div className="login-container">
              <h3>Sign in</h3>
              <p >{this.state.showError}</p>
              <form onSubmit={this.handleSignIn.bind(this)}>
              <div className="input-field">
                <div className="label">
                  <label for="email">Email or Username</label>
                  <Link to='/forgetpass'><small>Forget Password?</small></Link>
                </div>
                <input
                  ref = "username"
                  type="text"
                  placeholder="Enter your email address or username"
                />
              </div>
              <div className="input-field">
                <div className="label">
                  <label for="pass">Password</label>
                </div>
                <input
                ref = "password"
                  type="password"
                  id="pass"
                  placeholder="Enter your password"
                />
              </div>

             

              <input type="submit" className="btn login" value="Login" />
              </form>
              
             
         
          <Link to='/register'>
            <div>Register</div>
          </Link>
    
                 
         
            

              
              {/* <button onClick=  {(e) => this.props.register({name : "asdf" , id : "A"})} >Register</button> */}
              <small class="terms">
                by logging in you agree to our
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
//   <button onClick=  {(e) => this.props.register({name : "asdf" , id : "A"})} >Register</button>
           
export default LoginForm;


/*return (
      <div>
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
     
      <button onClick=  {(e) => this.props.register({name : "asdf" , id : "A"})} >Register</button>
      </div>
    )
    */