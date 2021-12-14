import React from "react";
import AdminNavbar from "../components/General/AdminNavbar";
import Sidebar from "../components/General/Sidebar";
import Footer from "../components/General/Footer";
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