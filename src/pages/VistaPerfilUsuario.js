import React from "react";
import NavBar from "../components/General/NavBar";
import Sidebar from "../components/General/Sidebar";
import Footer from "../components/General/Footer";
import Perfil from "../components/Perfil/Perfil";
import { Navigate } from 'react-router-dom';


const VistaPerfilUsuario = () =>{

    
    const adminSesion = localStorage.getItem('admin');
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
    }else if(adminSesion !== null){
        return <Navigate to="/perfilAdmin" /> 
    }else if(usuarioSesion == null && adminSesion == null){
        return  <Navigate to="/404" />}
}


export default VistaPerfilUsuario;