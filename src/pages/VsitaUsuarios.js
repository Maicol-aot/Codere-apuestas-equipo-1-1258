import React from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import GestionarUsuarios from "../components/Usuarios/GestionarUsuarios";
import Footer from "../components/General/Footer";
import { Navigate } from 'react-router-dom';

const VistaUsuario = () =>{


    const usuarioSesion = null;
    const adminSesion = localStorage.getItem('admin');



    if(adminSesion != null){
        return(
            <div>
                <link href="/assets/css/Footer.css" rel="stylesheet"/>
                <AdminNavbar />
                <Sidebar />
                <GestionarUsuarios />
                <Footer />
            </div>
        )
    }else if(adminSesion == null || usuarioSesion != null || usuarioSesion == null){
        return <Navigate to="/feed" /> 
    }


    
        
    
}

export default VistaUsuario;