import React from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import Footer from "../components/General/Footer";
import Perfil from "../components/Perfil/Perfil";
import { Navigate } from 'react-router-dom';


const VistaPerfilAdmin = () =>{

    const usuarioSesion = localStorage.getItem('usuarioEx');
    const adminSesion = localStorage.getItem('admin');


    if(adminSesion != null){
        return(
            <div>
                <link href="/assets/css/Footer.css" rel="stylesheet"/>
                <AdminNavbar />
                <Sidebar />
                <Perfil />
                <Footer />
            </div>
        )
    }else if(usuarioSesion != null){
        return <Navigate to="/perfilUsuario" /> 
    }else if(usuarioSesion == null && adminSesion == null){
        return  <Navigate to="/404" />}
}

export default VistaPerfilAdmin;