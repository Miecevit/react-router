import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Router from './sayfalar/Router';
import {Outlet, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import Header from './Header';
import arkaplan from './img/arkaplan.jpg';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div style={{backgroundImage: `url(${arkaplan})`, height: "100vh", backgroundSize: "cover" }}>
     
     
     
     <div>
     <Router />
     </div>
     
     
      </div>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
