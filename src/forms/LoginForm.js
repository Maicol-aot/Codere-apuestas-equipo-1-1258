import React from 'react';
import { useEffect, useState } from 'react';
import LandingPage from '../pages/LandingPage';
import {Link} from "react-router-dom";
//import { useNavigate } from "react-router-dom";



const LoginForm = () => {
    //Error usrname
    const [errorUsr, setErrorUsr] = useState('');
    //const [errorPass, setErrorPass] = useState('');
    

    const showPassword = () =>{
        let pass = document.getElementById('password');
        if (pass.type === 'text'){
            pass.type="password";  
        }else{
            pass.type = 'text';
        }   
    };

    const validarForm = (event)=>{

        //Previene que el formulario no se envie
        event.preventDefault();

        
       //Creacion de variables para almacenar los datos en un obj
        let usr = document.getElementById('usrname').value;
        let passw = document.getElementById('password').value;   

        //const datos = {usrname:usr, password:passw}; 
        //console.log(datos);

        try {
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({usrname:usr, password:passw})
            };
            fetch('http://localhost:9000/login', requestOptions)
                .then(response => response.json());
                //.then(data => element.innerHTML = data.id );
        } catch (error) {
            setErrorUsr('Nombre o usuario no valido');
        }

    };

    return(
        <>
            <LandingPage />
            <input id="closeModal" type="checkbox"/>
            <div className="modalLogin">
                <div className="container">
                    
                    <label for="closeModal"><i class="bi bi-x-lg"></i></label>
                    <div className="container-title">
                        <h5>Ingresar</h5>
                    </div>
                    <form className="loginForm" onSubmit={validarForm}>
                        <p>Usuario</p>
                        <input type="text" className="form-inputs" id="usrname" placeholder="Usuario"/>
                        { Boolean (errorUsr) && <p>Nombre de usuario o contraseña incorrectos</p>}
                        <p>Contraseña</p>
                        <div className="loginForm-password">
                            <input type="password" className="form-inputs" id="password" placeholder="Contraseña" />
                            <i class="bi bi-eye-fill" onClick={showPassword}></i>
                        </div>
                        { Boolean (errorUsr) && <p>Error contraseña</p> }
                        <div className="row">
                            <a href="none" className="recoveryPass">Recuperar contraseña</a>  
                        </div>
                        <div className="form-row-continuar">
                            <input type="submit" className="form-continuar" value="Acceder"/>                            
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

export default LoginForm;