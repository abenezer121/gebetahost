import React from "react";
import Cookies from "js-cookie";

import { Link , Router, Route} from "react-router-dom";

import './ForgotPassword.css';
import './bootstrap.css';



class ForgetPass extends React.Component {

  

  render() {
    return(  
    <div className="container"><br /><br />
        <div id="__next">
            <div className="login-box">
            <div className="login-container">
            <h3>Enter email to send a reset link</h3>
            <div className="input-field">
                <div className="label"><label for="email">Email </label></div><input
                    type="text" placeholder="Enter your email address to send a reset link" />
            </div>
            <div className="input-field">
            </div><button className="btn login">Submit</button>
        </div>
        <div className="divider"></div>
        <div className="actions"><a href="#">Terms of conditions</a><a href="#">Privacy Notice</a><a href="#">Help</a>
        </div>
    </div>
    </div>
    </div>  
    );
  }
}
         
export default ForgetPass;

