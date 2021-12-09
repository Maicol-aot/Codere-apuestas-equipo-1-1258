import React from 'react';
import LandingPage from './LandingPage';
import {BrowserRouter as Router,Switch,Route, Routes, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

const Login = () =>{

    const showPassword = () =>{
        let pass = document.getElementById('password');
        if (pass.type == 'text'){
            pass.type="password";  
        }else{
            pass.type = 'text';
        }
        
    };

    let navigate = useNavigate();
    const submitHandler = ()=>{
        navigate("/feed", {replace: true});
        let usr = document.getElementById('usrname').value;
        let passw = document.getElementById('password').value;

        if (usr === "antonio12" && passw === "12345678" ){
            navigate("/feed");
        } else{
            alert("usuario y/o contraseña invalidos");
        }
    };
    return (
        <> 
            <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>
            <link href="/assets/css/Login.css" rel="stylesheet"/>
            
            <LandingPage />
            <input id="closeModal" type="checkbox"/>
            <div className="modalLogin">
                <div className="container">
                    
                    <label for="closeModal"><i class="bi bi-x-lg"></i></label>
                    <div className="container-title">
                        <h5>Ingresar</h5>
                    </div>
                    <form className="loginForm">
                        <p>Usuario</p>
                        <input type="text" className="form-inputs" id="usrname" placeholder="Usuario"/>
                        <p>Contraseña</p>
                        <div className="loginForm-password">
                            <input type="password" className="form-inputs" id="password" placeholder="Contraseña" />
                            <i class="bi bi-eye-fill" onClick={showPassword}></i>
                        </div>
                        <div className="row">
                            <a href="" className="recoveryPass">Recuperar contraseña</a>  
                        </div>
                        <div className="form-row-continuar">
                            <input type="submit" onSubmit={submitHandler} className="form-continuar" value="Acceder"/>                            
                        </div>
                    </form>
                    <div className="row">
                        <p>Aun no esta registrado? <Link to="/registro">Registrate</Link></p>
                    </div>
                    
                </div>
            </div>
        </>

    );
};

export default Login;