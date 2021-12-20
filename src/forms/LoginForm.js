import React from 'react';
import { useEffect, useState } from 'react';
import LandingPage from '../pages/LandingPage';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

    //useState para mostrar los errores en los campos del formulario
    const [errorUsr, setErrorUsr] = useState('');
    
    const navigate = useNavigate();

    const showPassword = () =>{
        let pass = document.getElementById('password');
        if (pass.type === 'text'){
            pass.type="password";  
        }else{
            pass.type = 'text';
        }   
    };


    const validarForm = (event)=>{
        localStorage.clear();
       
        event.preventDefault();

        
        let usr = document.getElementById('usrname').value;
        let passw = document.getElementById('password').value;   


        try {


            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({usrname:usr, password:passw})
            };


            fetch('http://localhost:9000/login', requestOptions)
            .then( (response) => {

                if(response.ok){
                    let codigo = response.status;
                

                    const usuarioSesion = localStorage.getItem('usuarioEx');
                    console.log(usuarioSesion);


                    if (codigo == 200){

                        console.log("Ingresando a la pagina como un: USUARIO");

                        
                        localStorage.setItem("usuarioEx", usr);


                        //const usuarioSesion = localStorage.getItem('usuarioEx');
                        //console.log(usuarioSesion);


                        return navigate('/feed'); 
                        
                         
                    }else if (codigo == 201){

                        console.log("Ingreso a la pagina como un: Administrador");

                        localStorage.setItem("admin", usr);

                        //const adminSesion = localStorage.getItem('usuarioEx');
                        //console.log(adminSesion);



                        return navigate('/dashboard');
                    }
                    console.log("este es el usuario: " + response.rol);
                    
                }else{
                    return setErrorUsr('error');
                }

            });
            
        } catch (error) {
            console.log("Algo salio mal :/");
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
                        { Boolean (errorUsr) && <p>Nombre de usuario o contraseña incorrectos</p> }
                        <p>Contraseña</p>
                        <div className="loginForm-password">
                            <input type="password" className="form-inputs" id="password" placeholder="Contraseña" />
                            <i class="bi bi-eye-fill" onClick={showPassword}></i>
                        </div>
                        { Boolean (errorUsr) && <p>Nombre de usuario o contraseña incorrectos</p> }
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