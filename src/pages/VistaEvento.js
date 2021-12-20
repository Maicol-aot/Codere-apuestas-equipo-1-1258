import React from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import Footer from "../components/General/Footer";
import DetalleEvento from "../components/Eventos/DetalleEvento";
import { Navigate } from 'react-router-dom';



const VistaEvento = () =>{

    const usuarioSesion = null;
    const adminSesion = localStorage.getItem('admin');

    if(adminSesion != null){
        return(
            <div>
                <link href="/assets/css/Footer.css" rel="stylesheet"/>
                <AdminNavbar />
                <Sidebar />
                <DetalleEvento />
                <Footer />
            </div>
        )
    }else if(adminSesion == null || usuarioSesion != null || usuarioSesion == null){
        return <Navigate to="/feed" /> 
    }
}

export default VistaEvento;