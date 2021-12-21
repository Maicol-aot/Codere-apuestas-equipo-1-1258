import React from "react";
import NavBar from "../components/General/NavBar";
import Sidebar from "../components/General/Sidebar";
import Footer from "../components/General/Footer";
import Perfil from "../components/Perfil/Perfil";
import { Navigate } from 'react-router-dom';


const VistaPerfilUsuario = () =>{

    
    const adminSesion = null;
    const usuarioSesion = localStorage.getItem('usuarioEx');


    if(usuarioSesion != null){
        return(
            <div>
                <link href="/assets/css/styleMaicol.css" rel="stylesheet"/>
                <link href="/assets/css/Footer.css" rel="stylesheet"/>
                <NavBar />
                <Perfil />
                <Footer />
            </div>
        )
    }else if(usuarioSesion == null ||  adminSesion!= null || adminSesion == null){
        return <Navigate to="/login" /> 
    }
}


export default VistaPerfilUsuario;