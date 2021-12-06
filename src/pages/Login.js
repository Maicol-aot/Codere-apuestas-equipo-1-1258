import React from 'react';
import App from '../App';

const Login = () =>{
    return (
        <> 
            <link href="/assets/css/Login.css" rel="stylesheet"/>
            
            <App />
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
                            <i class="bi bi-eye-fill"></i>
                        </div>
                        <div className="row">
                            <a href="" className="recoveryPass">Recuperar contraseña</a>  
                        </div>
                        <div className="form-row-continuar">
                            <input type="submit" className="form-continuar" value="Acceder"/>                            
                        </div>
                    </form>
                    <div className="row">
                        <p>Aun no esta registrado? <a href="">Registrate</a></p>
                    </div>
                    
                </div>
            </div>
        </>

    );
};

export default Login;