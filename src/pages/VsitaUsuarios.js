import React from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import GestionarUsuarios from "../components/Usuarios/GestionarUsuarios";
import Footer from "../components/General/Footer";


const VistaUsuario = () =>{
    return(
        <div>
            <link href="/assets/css/Footer.css" rel="stylesheet"/>
            <AdminNavbar />
            <Sidebar />
            <GestionarUsuarios />
            <Footer />
        </div>
    )
}

export default VistaUsuario;