import React from "react";
import basket from "../../img/basket.svg";
import './Cabinet.css';
import Modal from 'react-modal';
import {ConsumerBasket} from "../ContextBasket/ContextBasket";
import Basket from '../Basket/Basket';
import './bootstrap.css'
import Cookies from 'js-cookie';
import { Dropdown } from 'react-bootstrap';
import { Link , withRouter, Redirect} from "react-router-dom";
const customStyles = {
    content: {
        top: '0',
        right: '0',
        width: '30%',
        height: '100vh',
        left: 'auto',
        bottom: 'auto',
        padding: '10px',
        paddingTop: '0',


    }
};

 class Cabinet extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            totalAmount: 0,
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal= this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logout = this.logout.bind(this)
        this.openorder = this.openorder.bind(this)
        this.openprofile = this.openprofile.bind(this)
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    componentDidMount() {
        Modal.setAppElement('body');

    }

    afterOpenModal() {
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

  
    logout(){
        Cookies.set('id' , 'notlogged');
        window.location.href = window.location.href = window.location.origin+'/login'
    }

    openorder(){
        window.location.href = window.location.href = window.location.origin+'/orderhistory'
    }
    
    openprofile(){
        window.location.href = window.location.href = window.location.origin+'/openprofile'
    }
    render(){


                        let dropDownLinkStyle = {
                            border: 'var(--border)',
                            borderRadius: '2px',
                            margin : '10px',
                            height: '40px',
                            background: 'none',
                            fontFamily: 'var(--main-font)',
                            color: 'var(--main-font-color)',
                            fontWeight: '500',
                            fontSize: '13px',
                            lineHeight: '24px',
                            cursor: 'pointer',
                            outline: 'none',
                          };
  return (
    <div className="cabinet">

         <Link to='/about'>
         <button className="cabinet__signIn">About us</button>
    </Link>
      
      <Link to='/contact'>
      <button className="cabinet__signIn">Contact</button> 
    </Link>
      
      { this.props.showStore ? 
      <Link to='/rest'>
      <button className="cabinet__signIn">Stores</button> 
      </Link>

      
      : (' ')}
           <Dropdown >
                <Dropdown.Toggle style={dropDownLinkStyle} id="dropdown-basic">
                    {Cookies.get('Username')}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.openprofile}>Update Profile</Dropdown.Item>
                    <Dropdown.Item onClick={this.openorder} href="#">Orders</Dropdown.Item> 
                 
                    <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
      {/* <button className="cabinet__register">Register</button> */}
 
      {/* showStore = {false} showCart = {false}  */}
      { this.props.showCart ? 
      <button className="cabinet__basket" onClick={this.openModal}>
        <img src={basket} alt="" className="cabinet__basket-image" />
      </button> : ( '' )
      }
        <ConsumerBasket>
            {context => {
                return (
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='example'
        >
            <Basket closeModal={this.closeModal}
                 context = {context}
            />
        </Modal>)}}
        </ConsumerBasket>
    </div>
  );
}}


export default Cabinet;


