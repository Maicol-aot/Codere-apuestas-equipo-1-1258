import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PerfilAdmin from "../components/Perfil/PerfilAdmin";



const VistaPerfil = () =>{
    return(
        <div>
            <link href="/assets/css/Footer.css" rel="stylesheet"/>
            <AdminNavbar />
            <Sidebar />
            <PerfilAdmin />
            <Footer />
        </div>
    )
}

export default VistaPerfil;