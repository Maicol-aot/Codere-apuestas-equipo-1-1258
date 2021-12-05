import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Switch,Route, Routes, Link} from "react-router-dom"; //pendiente por utilizar la libreria en reactdDOM.
import RegistroNavBar from './components/RegistroNavBar';
import Registro from './Registro';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/index" element={<Registro />} />
            </Routes>   
        </Router>
        
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
