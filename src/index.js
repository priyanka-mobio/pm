import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
// import {store} from "./store"
// import { Provider } from 'react-redux'

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <Router>
			<App />
			</Router>
    // </Provider>
  
)
