import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Switch,Route,Routes,Link} from "react-router-dom"; //pendiente por utilizar la libreria en reactdDOM.

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route Exact path = "/" element ={<App/>} />
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// ); opcion video tutoria


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
