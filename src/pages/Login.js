import React from 'react';
import LoginForm from "../forms/LoginForm";
import { Navigate } from 'react-router-dom';

const Login = () =>{

    const usuarioSesion = localStorage.getItem('usuarioEx');
    if(usuarioSesion != null){
        return <Navigate to="/feed" /> 
    }else{
   
        return (
            <> 
                <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>
                <link href="/assets/css/Login.css" rel="stylesheet"/>
                <LoginForm />
            </>

        );
    }
};

export default Login;