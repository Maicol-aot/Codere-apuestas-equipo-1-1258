import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feed from './Feed';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Switch,Route, Routes, Link} from "react-router-dom"; //pendiente por utilizar la libreria en reactdDOM.
import Registro from './pages/Registro';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>   
        </Router>
        
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
