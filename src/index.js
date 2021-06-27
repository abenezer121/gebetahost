import React from "react";
import ReactDOM from "react-dom";

import { UserProvider } from './components/AppContext'
// import './components/MainPage/MainPage.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/style.css";
import "./assets/css/customize.css";

ReactDOM.render(
    <UserProvider><BrowserRouter><App /></BrowserRouter></UserProvider>
, document.querySelector("body"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
