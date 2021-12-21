import React from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import Dashboard from "../components/General/Dashboard";
import Footer from "../components/General/Footer";
import { Navigate } from 'react-router-dom';

const VistaDashboard = () =>{

    
    const adminSesion = localStorage.getItem('admin');
    const usuarioSesion = localStorage.getItem('usuarioEx');
    console.log(adminSesion)
    console.log(usuarioSesion)

    if(adminSesion != null){
        return(
            <div>
                <link href="/assets/css/Footer.css" rel="stylesheet"/>
                <AdminNavbar />
                <Sidebar />
                <Dashboard />
                <Footer />
            </div>
        )
    }else if(usuarioSesion !== null){
        return <Navigate to="/feed" /> 
    }else if(usuarioSesion == null && adminSesion == null){
        return  <Navigate to="/404" />
    }

}

export default VistaDashboard;