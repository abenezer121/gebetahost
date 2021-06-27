import React from "react";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import "./components/MainPage/MainPage.css";

import {MainPage} from "./components/MainPage/MainPage";
import "./components/MenuType/MenuType.css";

import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import {ProviderBasket} from "./components/ContextBasket/ContextBasket";
import Cookies from 'js-cookie';
import LoginForm from './components/Login/login'
import Contact from './components/contact/contact'
import About from './components/about/about'
import History from './components/History/History'
import Profile from './components/Profile/Profile'
import SignUp from './components/signup/signup'
import  ForgetPass from './components/forget/forget'
import IndexPage from "./pages";
import { AnimatePresence } from "framer-motion";

class App extends React.Component{

    

      
    constructor(props) {
        super(props);
        this.state = {
            uuid:[],
            user: null,
              
        };
       
    }

   
 
   
      
     

    basket = [];

    renderRestaurantPage = props => {
        
        return (
            <RestaurantPage
                    match = {this.props}    
            />
        );
    };


  

   

  render()  {
     
    //   if(!Cookies.get('id') || Cookies.get('id') == 'null')
    //   {
    //       console.log("not allowed")
    //      const allowed = ['/login' , '/register'  , '/forgetpass']
    //     if(!allowed.includes(window.location.pathname)  ){
    //         window.location.href = "http://localhost:3000/login";
    //     }
    //   }
    return (
           <div>
        
            <ProviderBasket value={this.basket}>
            <AnimatePresence exitBeforeEnter>
                <Router>
                <Switch>
                          
                        <Route exact path="/" component={IndexPage} />
                            <Route
                                path="/login"
                                render={props => (<LoginForm  location={props.location} {...props}/>)}/>
                            <Route path="/rest" exact component={MainPage}/>
                            <Route path='/restaurant'  render={props => <RestaurantPage {...props} className="App" /> }/>
                            <Route path="/register" exact  component={SignUp}/>
                            <Route path ="/contact" exact component={Contact}/>
                            <Route path ="/about" exact component={About}/>
                            <Route path="/forgetpass" exact  component={ForgetPass}/>
                            <Route path="/orderhistory" exact component={History}/>
                            <Route path="/openprofile" exact component={Profile}/>
                            
                            
                      
                        
                            </Switch>
                </Router>
                </AnimatePresence>
            </ProviderBasket>
        
         
        
        </div>        
    );}
}

export default App;
