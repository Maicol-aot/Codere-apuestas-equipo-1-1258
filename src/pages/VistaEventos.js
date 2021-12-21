import react from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import GestionarEventos from "../components/Eventos/GestionarEventos";
import Footer from "../components/General/Footer";
import { Navigate } from 'react-router-dom';


const VistaEventos = () =>{

    
    const adminSesion = localStorage.getItem('admin');
    const usuarioSesion = localStorage.getItem('usuarioEx');


    if(adminSesion != null){
        return(
            <div>
                <link href="/assets/css/Footer.css" rel="stylesheet"/>
                <AdminNavbar />
                <Sidebar />
                <GestionarEventos />
                <Footer />
            </div>
        )
    }else if(usuarioSesion !== null){
        return <Navigate to="/feed" /> 
    }else if(usuarioSesion == null && adminSesion == null){
        return  <Navigate to="/404" />
    }
}

export default VistaEventos;